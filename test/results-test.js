import test from 'tape';
// import rewire from "rewire";
import {calculatePoints} from "../src/calculations";

import categories from '../src/categories';
import questions from '../src/questions';

const reducer = (acc, question) => {
  question.answers.forEach((answer) => {
    answer.category = question.category;
    answer.type = question.type;
    answer.question = question.id;
  })
  return acc.concat(question.answers)
}

const allAnswers = questions.reduce(reducer, [])

const answersFor = (answerIds) => 
  allAnswers.filter( (answer)=> 
      answerIds.includes(answer.id) )

// self test
test("allAnswers",  (t) => { 
  t.equal(allAnswers.length, 37, 
    "allAnswers should be 37, found " + allAnswers.length);
  t.end()
});

// self test
test("answersFor",  (t) => { 
  const answerIds = [
    "general_conditions.exhausted", 
    "breathing.hard",
    "perception.no_smell",
    "temperature.high",
    "cough.dry", 
    "throat.aches"];
  const answers = answersFor(answerIds);

  t.equal(answers.length, 6, 
    "answers should be 6, found " + answers.length);
  answers.forEach((answer) => 
    t.ok(answerIds.includes(answer.id)))
  t.end()
});

const getPoints =(answerIds, category)  => {
  const answers = answersFor(answerIds);
  return calculatePoints(questions, answers, categories)[category];
}

const checkRange = (t, points, min, max) => {
  t.ok(points > min, "points should be > "+min+ " was " + points);
  t.ok(points <= max, "points should be <= "+max+" was " + points);
}

test("completely sick person",  (t) => { 
  const answerIds = [
    "general_conditions.exhausted", 
    "breathing.hard",
    "perception.no_smell",
    "temperature.high",
    "cough.dry", 
    "throat.aches"];

  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 80, 90);
  t.end()
});

test("fever breathing exhausted sick person",  (t) => { 
  const answerIds = [
    "temperature.high",
    "breathing.hard",
    "general_conditions.exhausted"]

  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 65, 90);
  t.end()
});

test("throat dry cough mid fever sick person",  (t) => { 
  const answerIds = [
    "throat.aches", 
    "cough.dry", 
    "temperature.mid"]
  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 30, 40);
  t.end()
});
