function totalForCategory(questions, category) {
  var total = 0;
  Object.values(questions).forEach((question) => {
    if(question.category === null) throw new Error("question is missing category");
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
    if(answer.category === null) throw new Error("answer is missing category");
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
  const min = 10;
  const max = 90;
  const totalQuestions = totalsByCategory(questions, categories);
  const totalAnswers = answersByCategory(answers, categories);

  if(false){
    console.log(totalQuestions);
    console.log(totalAnswers);
  }
  var points = [];
  Object.values(categories).forEach((category) => {
    const total = totalQuestions[category.category];
    const answers = totalAnswers[category.category];
    const rawPoints = answers / total;
    const curPoints =  Math.round(rawPoints.toFixed(2)*100);
    const cappedPoints = Math.max(Math.min(curPoints, max), min);
    points[category.category] = cappedPoints;
  });
  return points;
}

function clone(object){
  return JSON.parse(JSON.stringify(object));
}

export {calculatePoints, clone};