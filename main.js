var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  },
  currentInterval: 0,
  hasStarted: false
};

var $car = document.querySelector('.car');

function moveCar(event) {
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
  } else if (event.key === ' ') {
    if (data.hasStarted === false) {
      data.currentInterval = setInterval(moveCarForward, 16);
      data.hasStarted = true;
    } else {
      clearInterval(data.currentInterval);
      data.hasStarted = false;
    }
  }
}

function moveCarForward() {
  if (data.direction === 'east') {
    data.location.x += 8;
    $car.style.left = data.location.x + 'px';
  } else if (data.direction === 'west') {
    data.location.x -= 8;
    $car.style.left = data.location.x + 'px';
  } else if (data.direction === 'north') {
    data.location.y -= 8;
    $car.style.top = data.location.y + 'px';
  } else if (data.direction === 'south') {
    data.location.y += 8;
    $car.style.top = data.location.y + 'px';
  }
}

document.addEventListener('keydown', moveCar);
