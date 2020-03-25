import inspect from "./inspect";

function totalForCategory(questions, category) {
  var total = 0;
  Object.values(questions).forEach((question) => {
    if(question.category == category.category) {
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
    if(answer.category == category.category) {
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
  Object.values(questions).map((question) => {
    Object.values(question.answers).map((answer) => {
      answer.category = question.category;
    })
  });
}

function calculatePoints(questions, answers, categories) {
  const totals = totalsByCategory(questions, categories);
  const results = answersByCategory(answers, categories);
  console.log(results);
  const points = Object.values(totals).map((category) => {
    return {category: results.category} 
  });
  return points;
}


export {calculatePoints, assignCategoriesToAnswers};