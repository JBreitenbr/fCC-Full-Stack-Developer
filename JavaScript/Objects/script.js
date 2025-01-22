let questions=[{question: "Which one is the capital of Morocco?",category :"Geography",choices:["Casablanca","Marrakech","Rabat"], answer: "Rabat"},{question: "Which English rock band released the song 'Pinball Wizard' ?", category: "Music", choices: ["Led Zeppelin","The Kinks","The Who"],answer:"The Who"},{question: "The language 'Hausa' belongs to which language family?", category: "Linguistics", choices: ["Austronesian","Niger-Congo","Afroasiatic"],answer:"Afroasiatic"},{question: "Which of the following novels is considered David Foster Wallace's magnum opus?", category: "Literature", choices: ["Girl with Curious Hair","The Broom of the System","Infinite Jest"],answer:"Infinite Jest"},
{question: "What is the scientific name for the giant sequoia, commonly known as the mammoth tree?", category: "Biology", choices: ["Taxodium distichum","Metasequoia glyptostroboides","Sequoiadendron giganteum"], answer:"Sequoiadendron giganteum"}];

const getRandomQuestion=()=>{
  let rnd=Math.floor(Math.random()*questions.length);
  return questions[rnd];
}

const getRandomComputerChoice=(choices)=>{
  return choices[Math.floor(Math.random()*3)];
}

const getResults=(question,choice)=>{
  if(question.answer==choice){
    return "The computer's choice is correct!";
  }
  else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
  }
