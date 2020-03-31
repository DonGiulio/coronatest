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
  const expected = 55; 
  t.equal(allAnswers.length, expected, 
    "allAnswers should be " + expected 
    + ", found " + allAnswers.length);
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
  t.ok(points > min, "points should be > " + min 
                     + " was " + points);
  t.ok(points <= max, "points should be <= " + max
                      + " was " + points);
}

// testing conditions
const allConditions = [
  "general_conditions.feel_great",
  "general_conditions.exhausted",
  "breathing.well",
  "breathing.hard",
  "pains.well",
  "pains.hard",
  "headache.well",
  "headache.hard",
  "chills.well",
  "chills.hard",
  "perception.ok",
  "perception.no_smell",
  "temperature.high",
  "temperature.mid",
  "temperature.none",
  "cough.dry",
  "cough.wet",
  "cough.none",
  "mucus.have",
  "mucus.none",
  "throat.aches",
  "throat.itches",
  "throat.ok",
]

test("me conditions",  (t) => { 
  const answerIds = [
    "general_conditions.feel_great",
    "breathing.well",
    "pains.well",
    "headache.well",
    "chills.well",
    "perception.ok",
    "temperature.none",
    "cough.none",
    "mucus.none",
    "throat.ok",
  ]

  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 0, 40);
  t.end()
});

test("completely sick conditions",  (t) => { 
  const answerIds = [
    "general_conditions.exhausted",
    "breathing.hard",
    "pains.hard",
    "headache.hard",
    "chills.hard",
    "perception.no_smell",
    "temperature.high",
    "cough.dry",
    "mucus.have",
    "throat.aches",
    ];

  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 80, 90);
  t.end()
});

test("fever breathing exhausted conditions",  (t) => { 
  const answerIds = [
    "general_conditions.exhausted",
    "temperature.high",
    "cough.dry",
  ]

  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 60, 90);
  t.end()
});

test("mid conditions",  (t) => { 
  const answerIds = [
    "headache.hard",
    "chills.hard",
    "perception.no_smell",
    "temperature.mid",
    "cough.wet",
    "throat.itches"
    ]
  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 40, 60);
  t.end()
});

test("throat mid fever conditions",  (t) => { 
  const answerIds = [
    "throat.itches", 
    "breathing.well",
    "perception.ok",
    "temperature.mid",
    "cough.none"]
  const points = getPoints(answerIds, 'common:q.category.conditions.name');
  checkRange(t, points, 0, 40);
  t.end()
});

// testing Gravity
const allGravity = [
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

test("me gravity",  (t) => { 
  const answerIds = [
    "conditions.none",
    "hypertension.none",
    "cardiovascular.none",
    "cholesterol.none",
    "age.60",
    "gender.male",
  ]
  const points = getPoints(answerIds, 'common:q.category.gravity.name');
  checkRange(t, points, 0, 40);
  t.end()
});

test("completely high gravity",  (t) => { 
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

test("old guy sick, high gravity",  (t) => { 
  const answerIds = [
    "conditions.have",
    "age.100",
    "gender.male"
  ]
  const points = getPoints(answerIds, 'common:q.category.gravity.name');
  checkRange(t, points, 60, 90);
  t.end()
});

test("old guy, mid gravity",  (t) => { 
  const answerIds = [
    "age.100",
    "gender.male"
  ]
  const points = getPoints(answerIds, 'common:q.category.gravity.name');
  checkRange(t, points, 40, 60);
  t.end()
});

test("mid guy, mid gravity",  (t) => { 
  const answerIds = [
    "hypertension.have",
    "cholesterol.have",
    "age.40",
    "gender.male"
  ]
  const points = getPoints(answerIds, 'common:q.category.gravity.name');
  checkRange(t, points, 40, 60);
  t.end()
});

test("mid age lady, low gravity",  (t) => { 
  const answerIds = [
    "age.60",
    "gender.female"
  ]
  const points = getPoints(answerIds, 'common:q.category.gravity.name');
  checkRange(t, points, 20, 40);
  t.end()
});

// testing exposure
const allExposure= [
  "location.great",
  "location.some",
  "location.no",
  "location.remote",
  "precautions.mask",
  "precautions.gloves",
  "precautions.distance",
  "precautions.wash_hands_quick",
  "precautions.wash_hands_thoroughly",
  "contacts.crowd",
  "contacts.infected_no_protection",
  "contacts.infected_with_protection",
  "contacts.distanza",
  "contacts.no_one",
  "immuno.depressed",
  "immuno.normal",
  "family.exposed",
  "family.safe"
]

test("me exposure",  (t) => { 
  const answerIds = [
    "location.some",
    "precautions.distance",
    "precautions.wash_hands_quick",
    "contacts.distanza",
    "immuno.normal",
    "family.safe"
  ]
  const points = getPoints(answerIds, 'common:q.category.exposure.name');
  checkRange(t, points, 0, 40);
  t.end()
});


test("completely high exposure",  (t) => { 
  const answerIds = [
    "location.great",
    "contacts.crowd",
    "immuno.depressed",
    "family.exposed",
  ]
  const points = getPoints(answerIds, 'common:q.category.exposure.name');
  checkRange(t, points, 89, 90);
  t.end()
});

test("average exposure",  (t) => { 
  const answerIds = [
    "location.some",
    "precautions.distance",
    "precautions.wash_hands_quick",
    "contacts.normal",
    "immuno.normal",
    "family.safe"
  ]
  const points = getPoints(answerIds, 'common:q.category.exposure.name');
  checkRange(t, points, 40, 60);
  t.end()
});

test("completely protected",  (t) => { 
  const answerIds = [
    "location.no",
    "precautions.mask",
    "precautions.gloves",
    "precautions.distance",
    "precautions.wash_hands_thoroughly",
    "contacts.no_one",
    "immuno.normal",
    "family.safe"
  ]
  const points = getPoints(answerIds, 'common:q.category.exposure.name');
  checkRange(t, points, 0, 30);
  t.end()
});

test("maniacal but living with infected",  (t) => { 
  const answerIds = [
    "location.no",
    "precautions.mask",
    "precautions.gloves",
    "precautions.distance",
    "precautions.wash_hands_thoroughly",
    "contacts.no_one",
    "immuno.normal",
    "family.exposed",
  ]
  const points = getPoints(answerIds, 'common:q.category.exposure.name');
  checkRange(t, points, 60, 90);
  t.end()
});
