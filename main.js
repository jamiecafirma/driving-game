var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  },
  currentInterval: 0,
  hasStarted: false,
  speed: 8
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
  } else if (event.key === 'a') {
    if (data.speed < 20) {
      data.speed = 20;
    } else {
      data.speed += 2;
    }
  } else if (event.key === 'd') {
    if (data.speed === 0) {
      data.speed = 2;
    } else {
      data.speed -= 2;
    }
  }
}

function moveCarForward() {
  if (data.direction === 'east') {
    data.location.x += data.speed;
    $car.style.left = data.location.x + 'px';
  } else if (data.direction === 'west') {
    data.location.x -= data.speed;
    $car.style.left = data.location.x + 'px';
  } else if (data.direction === 'north') {
    data.location.y -= data.speed;
    $car.style.top = data.location.y + 'px';
  } else if (data.direction === 'south') {
    data.location.y += data.speed;
    $car.style.top = data.location.y + 'px';
  }
}

document.addEventListener('keydown', moveCar);
