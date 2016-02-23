// variables to identify racers and message
var racer;
var msg;

//init function invoked when page is loaded
//id for the racer, pos for the position and msg to id winner
function init() {
  document.onkeypress=keyPressHandler;
  racer = [ { "id" : document.getElementById("racer0"),
              "pos" : 0,
              "msg" : "Red Racer Wins!"},
            { "id" : document.getElementById("racer1"),
              "pos" : 0,
              "msg" : "Green Racer Wins!"},
          ];
    msg = document.getElementById( "msg" );
}
//key press event for moving racer along track
function keyPressHandler(event) {
  var e = event || window.event;
  switch(e.charCode) {
    case 113: moveRacer(0); break; //Q
    case 112: moveRacer(1); break; //P
  }
}

//Moving the player/Racer - inserting spaces behind racer with keystrokes
function moveRacer(n) {
  if (racer[n].pos < 96 ) {
    racer[n].pos += 4;
    racer[n].id.style.marginLeft = racer[n].pos.toString() + "%";
  }
  if (racer[n].pos == 96 && racer[1-n].pos < 96) {
    msg.innerHTML = racer[n].msg;
  }
  //to test
  console.log("moveRacer " + n.toString() + " " + racer[n].pos.toString() + "%");
}