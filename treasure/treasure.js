

function userChoice(pick) {
  if(pick == Math.floor(Math.random() * 3)) {
    alert("You win the treasure");
  } else {
    alert("You lose - time to walk the plank!");
  }
}

jAlert ( {
  
    headingText   : "Attention!"  ,  // Important 
    contentText   : "Dare to find the treasure!" 
      
  }, "bottom" ) ;


