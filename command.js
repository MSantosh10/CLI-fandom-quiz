var readline=require("readline-sync")
var user=readline.question("Enter your name ")
console.log("hello ",user)
var know=readline.question("Do you know khaja? ")
score=0
if (know.toUpperCase()==="yes".toUpperCase()){

  function quest(question,answer){
      var Answer=readline.question(question );
      if (Answer.toUpperCase()===answer.toUpperCase()){
          console.log('Right')
          console.log("Your current score ",score+=1)
      }else{
          console.log('Wrong')
          console.log("Your current score ",score)
      }
  };
  var highScore={
    girraj:2,
    meena:2
  };

  var questi=[{
      question:'Fav. actor?',
      answer:'Professor'
  },
  {
      question:"Favorite Movie ",
      answer:'Ironman'
  },
  {
      question:"Favorite family member  ",
      answer:'mother'
  }];
  for (var i=0;i<questi.length;i++){
      var queslist=questi[i]
      quest(queslist.question,queslist.answer)
  };
  if (score>highScore.adarsh && score>highScore.abhimanyu){
      console.log("Yahoo you got highscore "+user+' your score is '+score)
  }else{
      console.log(user,"Your score is "+score)
      console.log("High Scores",highScore)
  }
}else{
  console.log("Tata Bye")
}