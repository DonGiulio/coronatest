import test from 'tape';
import {calculatePoints, assignCategoriesToAnswers} from "../src/calculations";
import {categories, questions, answers} from './fixtures';
import rewire from "rewire";

test("totalForCategory", (t) => {
  const md = rewire("../src/calculations.js")

  const totalForCategory = md.__get__("totalForCategory");
  t.ok(totalForCategory, "totalForCategory should be ok");

  const category = categories[0];
  const total = totalForCategory(questions, category);
  t.ok(total, "total should be ok");

  t.equals(total, 100, "total should be 100");
  t.end()
})

test("totalsByCategory", (t) => {
  const md = rewire("../src/calculations.js")

  const totalsByCategory = md.__get__("totalsByCategory");
  t.ok(totalsByCategory, "totalsByCategory should be ok");

  const totals = totalsByCategory(questions, categories);

  t.ok(totals, "totals should be ok")

  t.equals(totals["cat1"], 100, "cat1 total should be 100, was " + totals["cat1"]);
  t.equals(totals["cat2"], 30, "cat2 total should be 30, was " + totals["cat2"]);

  t.end();
  
})

test("countAnswersInCategory", (t) => {
  const md = rewire("../src/calculations.js")

  const countAnswersInCategory = md.__get__("countAnswersInCategory");
  t.ok(countAnswersInCategory, "countAnswersInCategory is an object");

  const category = categories[0];
  const total = countAnswersInCategory(answers, category);
  t.ok(total, "total is not ok")

  t.equals(total, 30, "cat1 total should be 30, was " + total);

  t.end();
  
})

test("answersByCategory", (t) => {
  const md = rewire("../src/calculations.js")

  const answersByCategory = md.__get__("answersByCategory");
  t.ok(answersByCategory, "answersByCategory is an object");

  const totals = answersByCategory(answers, categories);

  t.ok(totals, "totals should be ok")

  t.equals(totals["cat1"], 30, "cat1 total should be 30 was " + totals["cat1"]);
  t.equals(totals["cat2"], 12, "cat2 total should be 12 was " + totals["cat2"]);

  t.end();
})


test("calculatePoints",  (t) => { 
  const points = calculatePoints(questions, answers, categories);

  t.ok(points, "points should be ok");
  
  t.equal(Object.keys(points).length, 2, "categories counted " + Object.keys(points).length);
  t.equal(points["cat1"], 30, "points of cat1 was be 30, was " + points["cat1"]);
  t.equal(points["cat2"], 40, "points of cat2 should be 40, was " + points["cat2"]);
  
  t.end()
});

test("assignCategoriesToAnswers adds the question category to each answer", (t)=> {
    const assigned = assignCategoriesToAnswers(questions);

    Object.values(questions).forEach((question) => {
      Object.values(question.answers).forEach((answer) => {
        t.notOk(answer.category, "category " + question.category + " should not be found")
      })
    })    

    Object.values(assigned).forEach((question) => {
      Object.values(question.answers).forEach((answer) => {
        t.equal(answer.category, question.category, "category " + question.category + " should be found")
      })
    })    
    t.end()
  }

);