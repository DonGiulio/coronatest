function totalForCategory(questions, category) {
  var total = 0;
  Object.values(questions).forEach((question) => {
    if(question.category === null) throw "question is missing category";
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
    if(answer.category === null) throw "answer is missing category";
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

function calculatePoints(questions, answers, categories) {
  const totalQuestions = totalsByCategory(questions, categories);
  const totalAnswers = answersByCategory(answers, categories);

  var points = [];
  Object.values(categories).forEach((category) => {
    const total = totalQuestions[category.category];
    const answers = totalAnswers[category.category];
    const rawPoints = answers / total;
    const curPoints =  Math.min(Math.round(rawPoints.toFixed(2)*100), 90);
    points[category.category] = curPoints;
  });
  return points;
}

function clone(object){
  return JSON.parse(JSON.stringify(object));
}

export {calculatePoints, clone};