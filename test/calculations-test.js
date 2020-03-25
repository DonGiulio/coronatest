import test from 'tape';
import {calculatePoints, assignCategoriesToAnswers} from "../src/calculations";
import rewire from "rewire";


const  categories = [
  {"category": "cat1", "answers": []},
  {"category": "cat2", "answers": []}
]

const  questions = [
  {
    "id": 1,
    "question": "Condizioni generali",
    "category": "cat1",
    "points": 100,
    "answers": 
      [{ "answer": "mi sento stanco, spossato",
         "value": 30 },
       { "answer": "respiro a fatica",
         "value": 80 }]
  },
  {
    "id": 2,
    "question": "Temperatura",
    "category": "cat2",
    "points": 30,
    "answers": 
      [{ "answer": "febbre (sopra i 37,5 ˚c)",
         "value": 5 },
       { "answer": "febbre leggera ( tra 37,0˚c e 37,5˚c)",
         "value": 5 }]
  }];

const answers = [
  { "answer": "mi sento stanco, spossato",
    "category": "cat1",
    "value": 30 },
  { "answer": "febbre (sopra i 37,5 ˚c)",
    "category": "cat2",
    "value": 5 },
  { "answer": "febbre leggera ( tra 37,0˚c e 37,5˚c)",
    "category": "cat2",
    "value": 7 }
]

test("totalForCategory", (t) => {
  const md = rewire("../src/calculations.js")

  const totalForCategory = md.__get__("totalForCategory");
  t.ok(totalForCategory, "totalForCategory is an object");

  const category = categories[0];
  const total = totalForCategory(questions, category);
  t.ok(total, "total is an object");

  t.equals(total, 100, "total counted");
  t.end()
})

test("totalsByCategory", (t) => {
  const md = rewire("../src/calculations.js")

  const totalsByCategory = md.__get__("totalsByCategory");
  t.ok(totalsByCategory, "totalsByCategory is an object");

  const totals = totalsByCategory(questions, categories);

  t.ok(totals, "totals is an object")

  t.equals(totals["cat1"], 100, "cat1 total was " + totals["cat1"]);
  t.equals(totals["cat2"], 30, "cat2 total was " + totals["cat2"]);

  t.end();
  
})

test("countAnswersInCategory", (t) => {
  const md = rewire("../src/calculations.js")

  const countAnswersInCategory = md.__get__("countAnswersInCategory");
  t.ok(countAnswersInCategory, "countAnswersInCategory is an object");

  const category = categories[0];
  const total = countAnswersInCategory(answers, category);
  t.ok(total, "total is not ok")

  t.equals(total, 30, "cat1 total was " + total);

  t.end();
  
})

test("answersByCategory", (t) => {
  const md = rewire("../src/calculations.js")

  const answersByCategory = md.__get__("answersByCategory");
  t.ok(answersByCategory, "answersByCategory is an object");

  const totals = answersByCategory(answers, categories);

  t.ok(totals, "totals is an object")

  t.equals(totals["cat1"], 30, "cat1 total was " + totals["cat1"]);
  t.equals(totals["cat2"], 12, "cat2 total was " + totals["cat2"]);

  t.end();
})


test("calculatePoints",  (t) => { 
  const points = calculatePoints(questions, answers, categories);

  t.ok(points, "points is ok");
  
  t.equal(Object.keys(points).length, 2, "categories counted " + Object.keys(points).length);
  t.equal(points["cat1"], 30, "points of cat1 was " + points["cat1"]);
  t.equal(points["cat2"], 40, "points of cat2 was " + points["cat2"]);
  
  t.end()
});

test("assignCategoriesToAnswers adds the question category to each answer", (t)=> {
    const assigned = assignCategoriesToAnswers(questions);

    Object.values(questions).forEach((question) => {
      Object.values(question.answers).forEach((answer) => {
        t.notOk(answer.category, "category " + question.category + " not found")
      })
    })    

    Object.values(assigned).forEach((question) => {
      Object.values(question.answers).forEach((answer) => {
        t.equal(answer.category, question.category, "category " + question.category + " found")
      })
    })    
    t.end()
  }

);