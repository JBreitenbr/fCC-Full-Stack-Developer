const getAverage=(arr)=>{
  return arr.reduce((a,b)=>a+b,0)/arr.length;
}

const getGrade=(num)=>{
  let grade;
  grade=num==100?"A+":(num>=90?"A":(num>=80?"B":(num>=70?"C":(num>=60?"D":"F"))));
  return grade;
}

const hasPassingGrade=(score)=>{
  let pass;
  pass=getGrade(score)==="F"?false:true;
  return pass;
}

const studentMsg=(allScores,studentScore)=>{
  let avg=getAverage(allScores);
  let yourGrade=getGrade(studentScore);
  let passed=hasPassingGrade(studentScore);
  return passed==true?`Class average: ${avg}. Your grade: ${yourGrade}. You passed the course.`:`Class average: ${avg}. Your grade: ${yourGrade}. You failed the course.`
}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100) );

