let snake;
let rez = 20;
let answercorrect;
let answerwrong1;
let answerwrong2;
let w;
let h;
let nowq;
let rannum;
let username;
let wrong, wrong2;
// let wronglist = ["not maths", "Maths is not mela"]

var qlist = ["Find the amount due on rs.2620 at 5% per annum for 3 years.", 
"Find the simple interest if principal = ₹2000, rate=5%, time= 5 years",
"Find the simple interest if principal = ₹500, rate=12.5%, time= 4 years",
"Find the simple interest if principal = ₹4500, rate=4%, time= 6 months",
"Find the simple interest if principal = ₹236, rate=80%, time=17 years",
"Find the amount if principal = ₹2000, rate=5%, time= 5 years",
"Find the amount if principal = ₹500, rate=12.5%, time= 4 years",
"Find the amount if principal = ₹4500, rate=4%, time= 6 months",
"Find the amount if principal = ₹236, rate=80%, time=17 years",
]
var anslist = ["₹393", "₹500", "₹250", "₹90", "3209.6", "2500", "750", "4590", "3445.6"]

const database = firebase.database();

function setup() {
  createCanvas(600, 600);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();


}

function foodLocation() {
  rannum = floor(random(0, qlist.length))
  nowq = qlist[rannum]
  wrong= floor(random(0, 10000))
  wrong2 = floor(random(0, 10000))
  answercorrect = createVector(floor(random(w)), floor(random(h)));
  answerwrong1 = createVector(floor(random(w)), floor(random(h)));
  answerwrong2 = createVector(floor(random(w)), floor(random(h))); 
  alert(nowq)

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }
}

function draw() {
  scale(rez);
  background(0);



  if (snake.eat(answercorrect)) {
    foodLocation();
  }


  snake.update();
  snake.show();
  textSize(1)
  text(snake.body.length, 1, 1)


  if (snake.endGame(answerwrong1, answerwrong2)) {
    alert('YOU LOSE');
    background(255, 0, 0);
    username = document.getElementById('uname').value;
    console.log(username);
    database.ref('/users/userid'+username).set({
      username: username,
      gameScore: snake.body.length
  });
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);


  rect(answercorrect.x, answercorrect.y, 1, 1);
  text(anslist[rannum], answercorrect.x, answercorrect.y)
  rect(answerwrong1.x, answerwrong1.y, 1, 1);
  text(wrong, answerwrong1.x, answerwrong1.y)
  rect(answerwrong2.x, answerwrong2.y, 1, 1);
  text(wrong2, answerwrong2.x, answerwrong2.y)
}
