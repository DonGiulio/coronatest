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
  t.equal(allAnswers.length, 37);
  t.end()
});

// self test
test("answersFor",  (t) => { 
  const answerIds = [102, 202, 302, 401, 501, 601];
  const answers = answersFor(answerIds);

  t.equal(answers.length, 6);
  answers.forEach((answer) => 
    t.ok(answerIds.includes(answer.id)))
  t.end()
});

const getPoints =(answerIds, category)  => {
  const answers = answersFor(answerIds);
  return calculatePoints(questions, answers, categories)[category];
}

test("completely sick person",  (t) => { 
  const answerIds = [102, 202, 302, 401, 501, 601]
  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  t.ok(points > 90, "points should be > 90 was " + points);
  t.ok(points <= 100, "points should be <= 100 was " + points);
  t.end()
});

test("fever breathing exhausted sick person",  (t) => { 
  const answerIds = [102, 202, 401]
  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  t.ok(points > 65, "points should be > 65 was " + points);
  t.ok(points <= 100, "points should be <= 100 was " + points);
  t.end()
});

test("throat dry cough mid fever sick person",  (t) => { 
  const answerIds = [601, 501, 402]
  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  t.ok(points > 40, "points should be > 30 was " + points);
  t.ok(points <= 60, "points should be <= 40 was " + points);
  t.end()
});

test("throat dry cough mid fever sick person",  (t) => { 
  const answerIds = [601, 501, 402]
  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  t.ok(points > 40, "points should be > 30 was " + points);
  t.ok(points <= 60, "points should be <= 40 was " + points);
  t.end()
});