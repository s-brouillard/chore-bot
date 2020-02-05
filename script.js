// DOM elements variable
let door1DOM = document.getElementById('door1');
let door2DOM = document.getElementById('door2');
let door3DOM = document.getElementById('door3');
let startButtonDOM = document.getElementById('start');
// Assign door image path
let botDoorPath = 'Images/robot.svg';
let beachDoorPath = 'Images/beach.svg';
let spaceDoorPath = 'Images/space.svg';
let closedDoorPath = 'Images/closed_door.svg';
// The door objects
let door1;
let door2;
let door3;
// counter to keep track of doors opened
let numClosedDoors = 3;
// variable to hold the image to display when the door is opened
let openDoor1;
let openDoor2;
let openDoor3;
// booleans to control the game flow
let isGameLost = false;
let isGameWon = false;

class Door {
  constructor() {
    // holds the state to see if door is opened or closed
    this.isClosed = true;
  }
};

const doorsCreation = () => {
  door1 = new Door();
  door2 = new Door();
  door3 = new Door();
}

const gameReset = () => {
  door1.isClosed = true;
  door2.isClosed = true;
  door3.isClosed = true;
  door1DOM.src = closedDoorPath;
  door2DOM.src = closedDoorPath;
  door3DOM.src = closedDoorPath;
  isGameWon = false;
  isGameLost = false;
  startButtonDOM.innerHTML = 'Good luck!';
}

// randomizes which door image is behind which door -- 3 cases missing to make the game truly random
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * 3);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 1) {
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  }
  else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
};

// implementation of what happens when you click on door 1
door1DOM.onclick = () => {
  if (isGameWon || isGameLost) {
    return;
  }
  else if (door1.isClosed) {
    door1.isClosed = false;
    door1DOM.src = openDoor1;
    playDoor(openDoor1);
  }
};

door2DOM.onclick = () => {
  if (isGameWon || isGameLost) {
    return;
  }
  else if (door2.isClosed) {
    door2.isClosed = false;
    door2DOM.src = openDoor2;
    playDoor(openDoor2);
  }
};

door3DOM.onclick = () => {
  if (isGameWon || isGameLost) {
    return;
  }
  else if (door3.isClosed) {
    door3.isClosed = false;
    door3DOM.src = openDoor3;
    playDoor(openDoor3);
  }
};

startButtonDOM.onclick = () => {
  if (isGameLost || isGameWon) {
    randomChoreDoorGenerator();
    gameReset();
    numClosedDoors = 3;
  }
};

function playDoor(door) {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    isGameWon = true;
    gameOver('win');
  }
  else if (door === botDoorPath) {
    isGameLost = true;
    gameOver('lost');
  }
};

function gameOver(status) {
  if (status === 'lost') {
    startButtonDOM.innerHTML = 'You lost! Play again?'
  }
  else if (status === 'win') {
    startButtonDOM.innerHTML = 'You win! Play again?';
  }
};

randomChoreDoorGenerator();
doorsCreation();


