// Get the car element
const car = document.getElementById("car");

// Set initial position of car
let carX = 0;
let carY = 0;

// Move the car on arrow key press
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: // left arrow
      carX -= 10;
      break;
    case 38: // up arrow
      carY -= 10;
      break;
    case 39: // right arrow
      carX += 10;
      break;
    case 40: // down arrow
      carY += 10;
      break;
  }
  car.style.left = carX + "px";
  car.style.top = carY + "px";
};
