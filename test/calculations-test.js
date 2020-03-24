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
    "category": "Condizioni",
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
    "category": "Condizioni",
    "points": 30,
    "answers": 
      [{ "answer": "febbre (sopra i 37,5 ˚c)",
         "value": 5 },
       { "answer": "febbre leggera ( tra 37,0˚c e 37,5˚c)",
         "value": 5 }]
  }];

test("calculatePoints", function (t){t.end()} );

test("assignCategoriesToAnswers adds the question category to each answer", (t)=> {

    assignedQuestions = assignCategoriesToAnswers(questions);
    t.end()
  }

);