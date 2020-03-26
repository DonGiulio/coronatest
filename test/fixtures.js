export const  categories = [
  {"category": "cat1", "answers": []},
  {"category": "cat2", "answers": []}
]

export const  questions = [
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

export const answers = [
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