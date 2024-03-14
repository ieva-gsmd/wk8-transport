

function setup() {
  createCanvas(windowWidth, windowHeight);
  //start the transport
  Tone.Transport.start();

  //set the initial position
  Tone.Transport.position = "0";

  //create a loop
  Tone.Transport.loop = true;

  //create the loop start and end points
  Tone.Transport.loopStart = "0:0";
  Tone.Transport.loopEnd = "4:0";

  
}
function draw() {
  background(220);

  //set the variable transportPos to be have the position
  let transportPos = Tone.Transport.position;
  //console.log(transportPos)

  //since transportPos is a string, we can separate its values using the bracket notation
  let bars = transportPos[0]
  let beats = transportPos[2]
  //console.log(beats)

  //set text to black and display the transport time
  fill(0);
  text(transportPos, 10, 20);
  textSize(18);

  //draw 4 squares
  for (let i = 0; i < 4; i++){
    fill(255);
    rect((60*i)+10, 50, 50, 50);
  }
  
  //draw a red square every beat
  fill(255, 0, 0);
  rect((60*beats)+10, 50, 50, 50);
  
  
  //console.log(Tone.Transport.get())
  
}


