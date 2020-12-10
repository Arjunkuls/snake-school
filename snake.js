class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(w / 2), floor(h / 2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
    this.isAdmin = false;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.len++;
    this.body.push(head);
  }

  endGame(no1, no2) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (this.isAdmin == false){
    if (dist(x, y, no1.x, no1.y) < 1){
      return true
    }
    if (dist(x, y, no2.x, no2.y) < 1){
      return true
    }}



    if (x > w - 1 ){
      this.body[this.body.length - 1].x = 0 
    }
    if (x <= 0){
      this.body[this.body.length - 1].x = w 
    }
    if (y > h - 1){
      this.body[this.body.length - 1].y = 0 
    }
    if(y<0){
      this.body[this.body.length - 1].y = h 
    }



    if (this.isAdmin === false){
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (part.x == x && part.y == y) {
        return true;
      }
    }}
    return false;
  }

  eat(pos) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill(255);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
    if (keyIsDown(65)&&keyIsDown(75)){
      this.isAdmin = true;
      this.grow();
    }
  }
}