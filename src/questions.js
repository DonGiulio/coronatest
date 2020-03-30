const  questions = [
  {
    "id": "gender.question",
    "question": "common:q.questions.gender.question",
    "category": "common:q.category.risk.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "gender.male",
        "answer": "common:q.questions.gender.male",
        "value": 72
      },
      {
        "id": "gender.female",
        "answer": "common:q.questions.gender.female",
        "value": 18
      }
    ]
  },
  {
    "id": "general_conditions.question",
    "question": "common:q.questions.general_conditions.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "general_conditions.feel_great",
        "answer": "common:q.questions.general_conditions.feel_great",
        "value": 0
      },
      {
        "id": "general_conditions.exhausted",
        "answer": "common:q.questions.general_conditions.exhausted",
        "value": 130
      }
    ]
  },
  {
    "id": "breathing.question",
    "question": "common:q.questions.breathing.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "breathing.well",
        "answer": "common:q.questions.breathing.well",
        "value": 0
      },
      {
        "id": "breathing.hard",
        "answer": "common:q.questions.breathing.hard",
        "value": 150
      }
    ]
  },
  {
    "id": "perception.question",
    "question": "common:q.questions.perception.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "perception.ok",
        "answer": "common:q.questions.perception.ok",
        "value": 0
      },
      {
        "id": "perception.no_smell",
        "answer": "common:q.questions.perception.no_smell",
        "value": 80
      }
    ]
  },
  {
    "id": "temperature.question",
    "question": "common:q.questions.temperature.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "temperature.high",
        "answer": "common:q.questions.temperature.high",
        "value": 120
      },
      {
        "id": "temperature.mid",
        "answer": "common:q.questions.temperature.mid",
        "value": 90
      },
      {
        "id": "temperature.none",
        "answer": "common:q.questions.temperature.none",
        "value": 0
      }
    ]
  },
  {
    "id": "cough.question",
    "question": "common:q.questions.cough.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "cough.dry",
        "answer": "common:q.questions.cough.dry",
        "value": 70
      },
      {
        "id": "cough.wet",
        "answer": "common:q.questions.cough.wet",
        "value": 40
      },
      {
        "id": "cough.none",
        "answer": "common:q.questions.cough.none",
        "value": 0
      }
    ]
  },
  {
    "id": "throat.question",
    "question": "common:q.questions.throat.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "throat.aches",
        "answer": "common:q.questions.throat.aches",
        "value": 60
      },
      {
        "id": "throat.itches",
        "answer": "common:q.questions.throat.itches",
        "value": 40
      },
      {
        "id": "throat.ok",
        "answer": "common:q.questions.throat.ok",
        "value": 0
      }
    ]
  },
  {
    "id": "conditions.question",
    "question": "common:q.questions.conditions.question",
    "category": "common:q.category.gravity.name",
    "type": "checkbox",
    "points": 100,
    "answers": [
      {
        "id": "conditions.have",
        "answer": "common:q.questions.conditions.have",
        "value": 5
      },
      {
        "id": "conditions.none",
        "answer": "common:q.questions.conditions.none",
        "value": 5
      }
    ]
  },
  {
    "id": "age.question",
    "question": "common:q.questions.age.question",
    "category": "common:q.category.gravity.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "age.15",
        "answer": "common:q.questions.age.15",
        "value": 5
      },
      {
        "id": "age.35",
        "answer": "common:q.questions.age.35",
        "value": 5
      },
      {
        "id": "age.50",
        "answer": "common:q.questions.age.50",
        "value": 5
      },
      {
        "id": "age.75",
        "answer": "common:q.questions.age.75",
        "value": 5
      },
      {
        "id": "age.100",
        "answer": "common:q.questions.age.100",
        "value": 5
      }
    ]
  },
  {
    "id": "location.question",
    "question": "common:q.questions.location.question",
    "category": "common:q.category.risk.name",
    "type": "checkbox",
    "points": 100,
    "answers": [
      {
        "id": "location.great",
        "answer": "common:q.questions.location.great",
        "value": 5
      },
      {
        "id": "location.some",
        "answer": "common:q.questions.location.some",
        "value": 5
      },
      {
        "id": "location.no",
        "answer": "common:q.questions.location.no",
        "value": 5
      },
      {
        "id": "location.remote",
        "answer": "common:q.questions.location.remote",
        "value": 5
      }
    ]
  },
  {
    "id": "own_habits.question",
    "question": "common:q.questions.own_habits.question",
    "category": "common:q.category.risk.name",
    "type": "checkbox",
    "points": 100,
    "answers": [
      {
        "id": "own_habits.mask",
        "answer": "common:q.questions.own_habits.mask",
        "value": 5
      },
      {
        "id": "own_habits.gloves",
        "answer": "common:q.questions.own_habits.gloves",
        "value": 5
      },
      {
        "id": "own_habits.14_days",
        "answer": "common:q.questions.own_habits.14_days",
        "value": 5
      },
      {
        "id": "own_habits.recently",
        "answer": "common:q.questions.own_habits.recently",
        "value": 5
      }
    ]
  },
  {
    "id": "recent_contacts.question",
    "question": "common:q.questions.recent_contacts.question",
    "category": "common:q.category.risk.name",
    "type": "checkbox",
    "points": 100,
    "answers": [
      {
        "id": "recent_contacts.crowd",
        "answer": "common:q.questions.recent_contacts.crowd",
        "value": 5
      },
      {
        "id": "recent_contacts.infected_no_protection",
        "answer": "common:q.questions.recent_contacts.infected_no_protection",
        "value": 5
      },
      {
        "id": "recent_contacts.infected_with_protection",
        "answer": "common:q.questions.recent_contacts.infected_with_protection",
        "value": 5
      },
      {
        "id": "recent_contacts.distanza",
        "answer": "common:q.questions.recent_contacts.distanza",
        "value": 5
      },
      {
        "id": "recent_contacts.no_one",
        "answer": "common:q.questions.recent_contacts.no_one",
        "value": 5
      }
    ]
  }
]

export default questions;