let song1;
let f1,destiny,birthday,patrick;
function preload() {
song1=loadSound("assets/Saymyname.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  f1=loadFont("assets/font.ttf");
  destiny= loadImage("assets/Destiny.jpg");
  birthday = loadImage("assets/Birthday.jpg");
  patrick = loadImage("assets/Patrick.jpg");
  song1.loop();

}

function draw() {
  createCanvas(windowWidth,windowHeight);
  background('green');
  fill('black');
  textSize(56);
  textFont(f1);
  textAlign(CENTER);
  text("Happy Birthday Song!"+ "Destiny's Child first charted in 1997 and ever since then was competing against big names like TLC,En Vogue,ect. Say my name was released in 1999 and was reaching top 100 charts in March of 2000. It took 12 weeks to reach #1 on the Billboard charts. It spent 32 weeks on the Hot 100's.",200 , 100, windowWidth - 200, windowHeight - 200);
  image(destiny,100,500, 400, 400);
image(birthday,1500,500, 400, 400);
image(patrick,800,500,400,400)


}
function mouseReleased(){
  if (song1.isPlaying()) {
    song1.pause(); } else {
      song1.loop();
    }

  }

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
