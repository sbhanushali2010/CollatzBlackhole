let i = 0;
let a = 0;

let canvas;
const config = {
  len: 2,
  angle: 1,
  innerRadius: 10,
  rollX: 100,
  rollY: 100,
  x: 0,
  y: 0,
  RedMultipler: 255,
  GreenMultipler: 200,
  BlueMultipler: 200,
  OverlayBlend: false
}

function Collatz(n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return (n * 3 + 1) / 2
  }
}

function compute(i) {
  let n = i;
  push();
  config.OverlayBlend && blendMode(OVERLAY);
  resetMatrix();
  translate(config.x, config.y);
  do {
    n = Collatz(n);
    // visualize
    if (n % 2 == 0) {
      rotate(config.angle)
    } else {
      rotate(-config.angle * a)
    }
    strokeWeight(0.5);
    // 500, 15, 50,
    stroke(a * config.RedMultipler, a * config.GreenMultipler, a * config.BlueMultipler, constrain(a * 5, 0, 255));
    line(a * config.rollX, a * config.rollY, a * config.innerRadius, -config.len);
    translate(0, -config.len);
  } while (n !== 1);
  pop();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0,0,0);
  config.x = width / 2;
  config.y = height / 2;

}

function draw() {
  i++;
  a += 0.1;
  compute(i);
}