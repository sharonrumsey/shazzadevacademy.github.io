//Game Play - racing click of keys q 113 and p 112
function keyhandler(event) {
  var e = event || window.event;
  switch( e.keyCode ) {
    case 112: advancePlayer(1);  break;
    case 113: advancePlayer(2);  break;
  }
}

//Moving the player on the table - inserting space behind keystroke
function advancePlayer(player) {

}

//Build race track
var trackLength = 20;
for ( i = 1; i < trackLength; i++ ) {
  document.getElementById("player1_strip").append(document.createElement( "td"));
  document.getElementById("player2_strip").append(document.createElement( "td"));
};

//Reset Track


//Notify who wins with the words You Win - BARKERS!
