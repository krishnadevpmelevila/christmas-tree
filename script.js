

function setup() {
  createCanvas(1900, 950);
}

function draw() {
  background(128,0,0);

  // Draw the Christmas tree with a gradient
  for(let y = 100; y < 340; y++) {
    let inter = map(y, 100, 340, 0, 1);
    let c = lerpColor(color(0, 100, 0), color(0, 200, 0), inter);
    fill(c);
    noStroke();
    triangle(200, y, 200 - 0.8 * (y - 100), 340, 200 + 0.8 * (y - 100), 340);
  }

  // Draw the tree trunk
  fill(101, 67, 33); // Brown color for the trunk
  rect(190, 340, 20, 30); // Tree trunk

  // Draw ornaments
  drawOrnaments();

  // Draw twinkling lights
  drawLights();
}

function drawOrnaments() {
  // Add more ornaments with different colors
  fill(255, 215, 0); // Gold color
  circle(170, 260, 10);
  circle(230, 260, 10);

  fill(255, 0, 0); // Red color
  circle(200, 120, 10);
  circle(200, 300, 10);

  fill(0, 191, 255); // Blue color
  circle(160, 220, 10);
  circle(240, 220, 10);
}

function drawLights() {
  // Add some twinkling lights
  for (let i = 0; i < 10; i++) {
    let x = random(120, 280);
    let y = random(120, 320);
    let r = random(3, 5);
    let lightColor = color(random(255), random(255), random(255));
    fill(lightColor);
    circle(x, y, r);
  }
}

