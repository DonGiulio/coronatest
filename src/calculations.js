function makeTotal(questions, category) {
  return Object.values(questions).reduce((total, question) => {
      if(question.category == category.category) {
        return total += question.points
      } else return total
    }
  )
}

function makeTotals(questions, categories) {
  return Object.values(categories).map((category) => 
    {category: makeTotal(questions, category)}
  );
}

function makeTotalAnswers(answers, category) {
  return Object.values(answers).reduce((total, answer) => {
    if(answer.category == category.category) {
      return total += answer.points
    } else return total
  })
}

function countTotalAnswers(answers, categories){
  return Object.values(categories).map((category) => {
    return {category: makeTotalAnswers(answers, category)}
  });
  

  var total = 0;
  answers.forEach((answer) => 
    total += answer.value
  )
  return total;
}

function assignCategoriesToAnswers(questions){
  Object.values(questions).map((question) => {
    Object.values(question.answers).map((answer) => {
      answer.category = question.category;
    })
  });
}

function calculatePoints(questions, answers, categories) {
  const totals = makeTotals(questions, categories);
  const results = countTotalAnswers(answers, categories);
  const points = Object.values(totals).map((category) => {
    return {category: results.category} 
  });

}


export {calculatePoints, assignCategoriesToAnswers};