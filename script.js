let homeEl = document.getElementById("home-el");
let awayEl = document.getElementById("away-el");
let homeCount = 0;
let awayCount = 0;
function add1Home() {
  homeCount = homeCount + 1;
  homeEl.innerText = homeCount;
}

function add2Home() {
  homeCount = homeCount + 2;
  homeEl.innerText = homeCount;
}

function add3Home() {
  homeCount = homeCount + 3;
  homeEl.innerText = homeCount;
}

function add1Away() {
  awayCount = awayCount + 1;
  awayEl.innerText = awayCount;
}

function add2Away() {
  awayCount = awayCount + 2;
  awayEl.innerText = awayCount;
}

function add3Away() {
  awayCount = awayCount + 3;
  awayEl.innerText = awayCount;
}

function newGame() {
  awayEl.innerText = 0;
  awayCount = 0;
  homeEl.innerText = 0;
  homeCount = 0;
}
