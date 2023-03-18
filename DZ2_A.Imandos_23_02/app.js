const CIRCLE = 'circle';
const TRIANGLE = 'triangle';


const block = document.getElementById('block');


function moveBlock(direction, distance, speed, callback) {
  let currentPosition = parseInt(block.style[direction], 10);
  let newPosition = currentPosition + distance;
  block.style[direction] = newPosition + 'px';

  setTimeout(() => {
    if (newPosition !== distance) {
      moveBlock(direction, distance, speed, callback);
    } else {
      callback();
    }
  }, speed);
}


function traverseCircle() {
  const centerX = 200;
  const centerY = 200;
  const radius = 100;
  const step = Math.PI / 180;
  let angle = 0;

  function move() {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    moveBlock('left', x, 10, () => {
      moveBlock('top', y, 10, () => {
        angle += step;
        if (angle <= 2 * Math.PI) {
          move();
        } else {
          resetBlock();
        }
      });
    });
  }

  move();
}

function traverseTriangle() {
  const pointA = {x: 100, y: 100};
  const pointB = {x: 300, y: 100};
  const pointC = {x: 200, y: 300};
  const points = [pointA, pointB, pointC];
  let index = 0;

  function move() {
    const point = points[index];
    moveBlock('left', point.x, 10, () => {
      moveBlock('top', point.y, 10, () => {
        index++;
        if (index < points.length) {
          move();
        } else {
          resetBlock();
        }
      });
    });
  }

  move();
}

function traverseFigure(figure) {
  switch (figure) {
    case CIRCLE:
      traverseCircle();
      break;
    case TRIANGLE:
      traverseTriangle();
      break;
    
    default:
      console.log('Unknown figure');
  }
}


function resetBlock() {
  block.style.top = '20px';
  block.style.left = '20px';
  setTimeout(() => {
    traverseFigure(CIRCLE); 
  }, 1000);
}


block.addEventListener('click', () => {
  resetBlock();
});
