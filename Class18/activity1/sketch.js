var S1, S2

function setup() {
  createCanvas(600, 400);
   S1 = new Student("Justin", 8, 6)
   S2 = new Student("Austin", 8, 6)
}

function draw() {
  background(220);

  S1.display()
  S2.display()
}

