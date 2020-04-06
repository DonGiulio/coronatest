const  questions = [
  {
    "id": "general_conditions",
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
        "value": 200
      }
    ]
  },
  {
    "id": "breathing",
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
    "id": "pains",
    "question": "common:q.questions.pains.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "pains.hard",
        "answer": "common:q.questions.pains.none",
        "value": 150
      },
      {
        "id": "pains.well",
        "answer": "common:q.questions.pains.have",
        "value": 0
      }
    ]
  },
  {
    "id": "headache",
    "question": "common:q.questions.headache.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "headache.none",
        "answer": "common:q.questions.headache.none",
        "value": 0
      },
      {
        "id": "headache.have",
        "answer": "common:q.questions.headache.have",
        "value": 150
      }
    ]
  },
  {
    "id": "chills",
    "question": "common:q.questions.chills.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "chills.hard",
        "answer": "common:q.questions.chills.none",
        "value": 150
      },
      {
        "id": "chills.well",
        "answer": "common:q.questions.chills.have",
        "value": 0
      }
    ]
  },
  {
    "id": "perception",
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
    "id": "temperature",
    "question": "common:q.questions.temperature.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "temperature.none",
        "answer": "common:q.questions.temperature.none",
        "value": 0
      },
      {
        "id": "temperature.mid",
        "answer": "common:q.questions.temperature.mid",
        "value": 150
      },
      {
        "id": "temperature.high",
        "answer": "common:q.questions.temperature.high",
        "value": 300
      },
    ]
  },
  {
    "id": "cough",
    "question": "common:q.questions.cough.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "cough.none",
        "answer": "common:q.questions.cough.none",
        "value": 0
      },
      {
        "id": "cough.wet",
        "answer": "common:q.questions.cough.wet",
        "value": 60
      },
      {
        "id": "cough.dry",
        "answer": "common:q.questions.cough.dry",
        "value": 160
      }
    ]
  },
  {
    "id": "mucus",
    "question": "common:q.questions.mucus.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "mucus.none",
        "answer": "common:q.questions.mucus.none",
        "value": 0
      },
      {
        "id": "mucus.have",
        "answer": "common:q.questions.mucus.have",
        "value": 90
      }
    ]
  },
  {
    "id": "throat",
    "question": "common:q.questions.throat.question",
    "category": "common:q.category.conditions.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "throat.ok",
        "answer": "common:q.questions.throat.ok",
        "value": 0
      },
      {
        "id": "throat.itches",
        "answer": "common:q.questions.throat.itches",
        "value": 20
      },
      {
        "id": "throat.aches",
        "answer": "common:q.questions.throat.aches",
        "value": 60
      }
    ]
  },
  {
    "id": "conditions",
    "question": "common:q.questions.conditions.question",
    "category": "common:q.category.gravity.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "conditions.none",
        "answer": "common:q.questions.conditions.none",
        "value": 0
      },
      {
        "id": "conditions.have",
        "answer": "common:q.questions.conditions.have",
        "value": 130
      }
    ]
  },
  {
    "id": "hypertension",
    "question": "common:q.questions.hypertension.question",
    "category": "common:q.category.gravity.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "hypertension.none",
        "answer": "common:q.questions.hypertension.none",
        "value": 0
      },
      {
        "id": "hypertension.have",
        "answer": "common:q.questions.hypertension.have",
        "value": 100
      }
    ]
  },
  {
    "id": "cardiovascular",
    "question": "common:q.questions.cardiovascular.question",
    "category": "common:q.category.gravity.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "cardiovascular.none",
        "answer": "common:q.questions.cardiovascular.none",
        "value": 0
      },
      {
        "id": "cardiovascular.have",
        "answer": "common:q.questions.cardiovascular.have",
        "value": 100
      }
    ]
  },
  {
    "id": "cholesterol",
    "question": "common:q.questions.cholesterol.question",
    "category": "common:q.category.gravity.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "cholesterol.none",
        "answer": "common:q.questions.cholesterol.none",
        "value": 0
      },
      {
        "id": "cholesterol.have",
        "answer": "common:q.questions.cholesterol.have",
        "value": 100
      }
    ]
  },
  {
    "id": "age",
    "question": "common:q.questions.age.question",
    "category": "common:q.category.gravity.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "age.40",
        "answer": "common:q.questions.age.40",
        "value": 40
      },
      {
        "id": "age.60",
        "answer": "common:q.questions.age.60",
        "value": 80
      },
      {
        "id": "age.80",
        "answer": "common:q.questions.age.80",
        "value": 120
      },
      {
        "id": "age.100",
        "answer": "common:q.questions.age.100",
        "value": 170
      }
    ]
  },
  {
    "id": "gender",
    "question": "common:q.questions.gender.question",
    "category": "common:q.category.gravity.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "gender.female",
        "answer": "common:q.questions.gender.female",
        "value": 60
      },
      {
        "id": "gender.male",
        "answer": "common:q.questions.gender.male",
        "value": 120
      }
    ]
  },
  {
    "id": "location",
    "question": "common:q.questions.location.question",
    "category": "common:q.category.exposure.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "location.remote",
        "answer": "common:q.questions.location.remote",
        "value": 20
      },
      {
        "id": "location.no",
        "answer": "common:q.questions.location.no",
        "value": 40
      },
      {
        "id": "location.some",
        "answer": "common:q.questions.location.some",
        "value": 100
      },
      {
        "id": "location.great",
        "answer": "common:q.questions.location.great",
        "value": 150
      }
    ]
  },
  {
    "id": "precautions",
    "question": "common:q.questions.precautions.question",
    "category": "common:q.category.exposure.name",
    "type": "checkbox",
    "points": -80,
    "answers": [
      {
        "id": "precautions.mask",
        "answer": "common:q.questions.precautions.mask",
        "value": -10
      },
      {
        "id": "precautions.gloves",
        "answer": "common:q.questions.precautions.gloves",
        "value": -10
      },
      {
        "id": "precautions.distance",
        "answer": "common:q.questions.precautions.distance",
        "value": -50
      },
      {
        "id": "precautions.wash_hands_quick",
        "answer": "common:q.questions.precautions.wash_hands_quick",
        "value": -30
      },
      {
        "id": "precautions.wash_hands_thoroughly",
        "answer": "common:q.questions.precautions.wash_hands_thoroughly",
        "value": -80
      }
    ]
  },
  {
    "id": "contacts",
    "question": "common:q.questions.contacts.question",
    "category": "common:q.category.exposure.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "contacts.normal",
        "answer": "common:q.questions.contacts.normal",
        "value": 60
      },
      {
        "id": "contacts.crowd",
        "answer": "common:q.questions.contacts.crowd",
        "value": 180
      },
      {
        "id": "contacts.infected_no_protection",
        "answer": "common:q.questions.contacts.infected_no_protection",
        "value": 180
      },
      {
        "id": "contacts.infected_with_protection",
        "answer": "common:q.questions.contacts.infected_with_protection",
        "value": 120
      },
      {
        "id": "contacts.distanza",
        "answer": "common:q.questions.contacts.no_one",
        "value": 0
      }
    ]
  },
  {
    "id": "immuno",
    "question": "common:q.questions.immuno.question",
    "category": "common:q.category.exposure.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "immuno.normal",
        "answer": "common:q.questions.immuno.normal",
        "value": 30
      },
      {
        "id": "immuno.depressed",
        "answer": "common:q.questions.immuno.depressed",
        "value": 150
      }
    ]
  },
  {
    "id": "family",
    "question": "common:q.questions.family.question",
    "category": "common:q.category.exposure.name",
    "type": "radio",
    "points": 100,
    "answers": [
      {
        "id": "family.safe",
        "answer": "common:q.questions.family.safe",
        "value": 20
      },
      {
        "id": "family.exposed",
        "answer": "common:q.questions.family.exposed",
        "value": 300
      }
    ]
  }
]

export default questions;