var data = {
  carDirection: 'east'
};

var $car = document.querySelector('.car');

function turnCar(event) {
  if (event.key === 'ArrowDown') {
    $car.className = 'car south';
    data.carDirection = 'south';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'car north';
    data.carDirection = 'north';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'car east';
    data.carDirection = 'east';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'car west';
    data.carDirection = 'west';
  }
}

document.addEventListener('keydown', turnCar);
