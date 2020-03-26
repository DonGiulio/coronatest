function totalForCategory(questions, category) {
  var total = 0;
  Object.values(questions).forEach((question) => {
    if(question.category === category.category) {
       total += question.points
    } 
  })
  return total;
}

function totalsByCategory(questions, categories) {
  var result = [];
  Object.values(categories).forEach((category) => 
    result[category.category] = totalForCategory(questions, category)
  );
  return result;
}

function countAnswersInCategory(answers, category) {
  var total = 0;
  Object.values(answers).forEach((answer) => {
    if(answer.category === category.category) {
      total += answer.value
    }
  })
  return total;
}

function answersByCategory(answers, categories){
  var result = [];
  Object.values(categories).forEach((category) => {
    result[category.category] = countAnswersInCategory(answers, category)
  });
  return result;
}

function assignCategoriesToAnswers(questions){
  const copy = JSON.parse(JSON.stringify(questions));

  Object.values(copy).map((question) => {
    Object.values(question.answers).map((answer) => {
      answer.category = question.category
      return null;
    })
    return null;
  });
  return copy;
}

function calculatePoints(questions, answers, categories) {
  const totalQuestions = totalsByCategory(questions, categories);
  const totalAnswers = answersByCategory(answers, categories);
 
  var points = [];
  Object.values(categories).forEach((category) => {
    const total = totalQuestions[category.category];
    const answers = totalAnswers[category.category];
    const rawPoints = answers / total;
    const curPoints = rawPoints.toFixed(2)*100;
    points[category.category] = curPoints;
  });
  return points;
}


export {calculatePoints, assignCategoriesToAnswers};