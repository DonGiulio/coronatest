import test from 'tape';
import {calculatePoints, assignCategoriesToAnswers} from "../src/calculations";


const  categories = [
  {"category": "cat 1", "answers": []},
  {"category": "cat 2", "answers": []}
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
    "value": 30 },
  { "answer": "febbre (sopra i 37,5 ˚c)",
    "value": 5 }
]
test("calculatePoints",  (t) => { 
  
  t.end()
});

test("assignCategoriesToAnswers adds the question category to each answer", (t)=> {
    Object.values(questions).forEach((question) => {
      Object.values(question.answers).forEach((answer) => {
        t.notOk(answer.category, "category " + question.category + " not found")
      })
    })    

    const assignedQuestions = assignCategoriesToAnswers(questions);

    Object.values(assignedQuestions).forEach((question) => {
      Object.values(question.answers).forEach((answer) => {
        t.equal(answer.category, question.category, "category " + question.category + " found")
      })
    })    
    t.end()
  }

);