var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  },
  currentInterval: 0
};

var $car = document.querySelector('.car');

function turnCar(event) {
  if (event.key === 'ArrowDown') {
    $car.className = 'car south';
    data.direction = 'south';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'car north';
    data.direction = 'north';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'car east';
    data.direction = 'east';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'car west';
    data.direction = 'west';
  }
}

function moveCarForward() {
  data.location.x += 8;
  $car.style.left = data.location.x + 'px';
}

function startCar(event) {
  if (event.key === ' ') {
    data.currentInterval = setInterval(moveCarForward, 16);
  }
}

document.addEventListener('keydown', turnCar);

document.addEventListener('keydown', startCar);
