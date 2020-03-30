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
  t.equal(allAnswers.length, 46, 
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

// testing conditions
const allConditions = [
  "general_conditions.feel_great",
  "general_conditions.exhausted",
  "breathing.well",
  "breathing.hard",
  "perception.ok",
  "perception.no_smell",
  "temperature.high",
  "temperature.mid",
  "temperature.none",
  "cough.dry",
  "cough.wet",
  "cough.none",
  "throat.aches",
  "throat.itches",
  "throat.ok"
]

test("completely sick conditions",  (t) => { 
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

test("fever breathing exhausted conditions",  (t) => { 
  const answerIds = [
    "temperature.high",
    "breathing.hard",
    "general_conditions.exhausted"]

  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 65, 90);
  t.end()
});

test("throat dry cough mid fever conditions",  (t) => { 
  const answerIds = [
    "throat.aches", 
    "cough.dry", 
    "temperature.mid"]
  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 30, 40);
  t.end()
});

test("throat dry cough mid fever conditions",  (t) => { 
  const answerIds = [
    "throat.itches", 
    "breathing.well",
    "perception.ok",
    "temperature.mid",
    "cough.none"]
  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 20, 40);
  t.end()
});

// testing risk
const allRisk = [
  "conditions.have",
  "conditions.none",
  "hypertension.have",
  "hypertension.none",
  "cardiovascular.have",
  "cardiovascular.none",
  "cholesterol.have",
  "cholesterol.none",
  "age.40",
  "age.60",
  "age.80",
  "age.100",
  "gender.male",
  "gender.female",
]

test("completely high risk",  (t) => { 
  const answerIds = [
    "conditions.have",
    "hypertension.have",
    "cardiovascular.have",
    "cholesterol.have",
    "age.100",
    "gender.male"
  ]
  const points = getPoints(answerIds, 'common:q.category.gravity.name');
  checkRange(t, points, 89, 90);
  t.end()
});

test("old guy sick, high risk",  (t) => { 
  const answerIds = [
    "conditions.have",
    // "hypertension.have",
    // "cardiovascular.have",
    // "cholesterol.have",
    "age.100",
    "gender.male"
  ]
  const points = getPoints(answerIds, 'common:q.category.gravity.name');
  checkRange(t, points, 60, 90);
  t.end()
});


test("old guy, mid risk",  (t) => { 
  const answerIds = [
    // "conditions.have",
    // "hypertension.have",
    // "cardiovascular.have",
    // "cholesterol.have",
    "age.100",
    "gender.male"
  ]
  const points = getPoints(answerIds, 'common:q.category.gravity.name');
  checkRange(t, points, 40, 60);
  t.end()
});

test("mid age lady, low risk",  (t) => { 
  const answerIds = [
    // "conditions.none",
    // "hypertension.none",
    // "cardiovascular.none",
    // "cholesterol.none",
    "age.60",
    "gender.female"
  ]
  const points = getPoints(answerIds, 'common:q.category.gravity.name');
  checkRange(t, points, 20, 40);
  t.end()
});
