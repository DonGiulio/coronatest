const  questions = [
  {
    "id": 10,
    "question": "Condizioni generali",
    "category": "common:questions.category.conditions.name",
    "type": "radio",
    "points": 30,
    "answers": [
      {
        "id": 101,
        "answer": "mi sento bene",
        "value": 0
      },
      {
        "id": 102,
        "answer": "mi sento stanco, spossato",
        "value": 30
      }
    ]
  },
  {
    "id": 20,
    "question": "Respirazione",
    "category": "common:questions.category.conditions.name",
    "type": "radio",
    "points": 80,
    "answers": [
      {
        "id": 201,
        "answer": "respiro bene",
        "value": 0
      },
      {
        "id": 202,
        "answer": "respiro a fatica",
        "value": 80
      }
    ]
  },
  {
    "id": 30,
    "question": "Percezione",
    "category": "common:questions.category.conditions.name",
    "type": "radio",
    "points": 50,
    "answers": [
      {
        "id": 301,
        "answer": "Tutto normale",
        "value": 0
      },
      {
        "id": 302,
        "answer": "non sento gli odori/sapori",
        "value": 50
      }
    ]
  },
  {
    "id": 40,
    "question": "Temperatura",
    "category": "common:questions.category.conditions.name",
    "type": "radio",
    "points": 60,
    "answers": [
      {
        "id": 401,
        "answer": "febbre (sopra i 37,5 ˚c)",
        "value": 60
      },
      {
        "id": 402,
        "answer": "febbre leggera ( tra 37,0˚c e 37,5˚c)",
        "value": 40
      },
      {
        "id": 403,
        "answer": "niente febbre (sotto i 37,0˚c)",
        "value": 20
      }
    ]
  },
  {
    "id": 50,
    "question": "Tosse",
    "category": "common:questions.category.conditions.name",
    "type": "radio",
    "points": 60,
    "answers": [
      {
        "id": 501,
        "answer": "tosse secca",
        "value": 60
      },
      {
        "id": 502,
        "answer": "tosse con secrezioni",
        "value": 40
      },
      {
        "id": 503,
        "answer": "niente tosse",
        "value": 20
      }
    ]
  },
  {
    "id": 4,
    "question": "Gola",
    "category": "common:questions.category.conditions.name",
    "type": "radio",
    "points": 30,
    "answers": [
      {
        "id": 12,
        "answer": "mi fa male la gola",
        "value": 5
      },
      {
        "id": 13,
        "answer": "sento un fastidio alla gola",
        "value": 5
      },
      {
        "id": 14,
        "answer": "la mia gola va bene",
        "value": 5
      }
    ]
  },
  {
    "id": 5,
    "question": "Patologie",
    "category": "common:questions.category.gravity.name",
    "type": "checkbox",
    "points": 30,
    "answers": [
      {
        "id": 15,
        "answer": "soffro di altre patologie",
        "value": 5
      },
      {
        "id": 16,
        "answer": "non ho altre patologie",
        "value": 5
      }
    ]
  },
  {
    "id": 6,
    "question": "Etá",
    "category": "common:questions.category.gravity.name",
    "type": "radio",
    "points": 30,
    "answers": [
      {
        "id": 17,
        "answer": "meno di 15 anni",
        "value": 5
      },
      {
        "id": 18,
        "answer": "tra 15 e 35 anni",
        "value": 5
      },
      {
        "id": 19,
        "answer": "tra 35 e 50 anni",
        "value": 5
      },
      {
        "id": 20,
        "answer": "tra 50 e 75 anni",
        "value": 5
      },
      {
        "id": 21,
        "answer": "oltre 75 anni",
        "value": 5
      }
    ]
  },
  {
    "id": 7,
    "question": "Posizione",
    "category": "common:questions.category.risk",
    "type": "checkbox",
    "points": 30,
    "answers": [
      {
        "id": 22,
        "answer": "nelle mie vicinanze c'è un gran numero di contagiati",
        "value": 5
      },
      {
        "id": 23,
        "answer": "nelle mie vicinanze c'è qualche caso di contagio ",
        "value": 5
      },
      {
        "id": 24,
        "answer": "nelle mie vicinanze non ci sono casi riconosciuti",
        "value": 5
      },
      {
        "id": 25,
        "answer": "nelle mie vicinanze non c'è nessuno, vivo in una zona molto remota",
        "value": 5
      }
    ]
  },
  {
    "id": 8,
    "question": "abitudini proprie",
    "category": "common:questions.category.risk",
    "type": "checkbox",
    "points": 30,
    "answers": [
      {
        "id": 26,
        "answer": "indosso la mascherina quando esco di casa",
        "value": 5
      },
      {
        "id": 27,
        "answer": "indosso i guanti di lattice quando esco di casa",
        "value": 5
      },
      {
        "id": 28,
        "answer": "non esco di casa da più di 2 settimane",
        "value": 5
      },
      {
        "id": 29,
        "answer": "sono uscito di casa di recente",
        "value": 5
      }
    ]
  },
  {
    "id": 9,
    "question": "Contatti recenti",
    "category": "common:questions.category.risk",
    "type": "checkbox",
    "points": 30,
    "answers": [
      {
        "id": 30,
        "answer": "sono stato in mezzo alla folla con estranei che mi stavano vicino",
        "value": 5
      },
      {
        "id": 31,
        "answer": "sono stato in presenza di persone infette dal covid-19 (corona virus), senza protezioni",
        "value": 5
      },
      {
        "id": 32,
        "answer": "sono stato in presenza di persone infette dal covid-19 (corona virus), ma eravamo protetti",
        "value": 5
      },
      {
        "id": 33,
        "answer": "sono stato fuori nei giorni scorsi e mi sono tenuto a buona distanza da tutti",
        "value": 5
      },
      {
        "id": 34,
        "answer": "non esco di casa da due settimane, non ho incontrato nessuno",
        "value": 5
      }
    ]
  }
]

export default questions;