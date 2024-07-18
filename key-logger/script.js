let log = document.getElementById("log");
let state = document.getElementById("state");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", logging);

  document.addEventListener("keyup", statelog);

  startBtn.disabled = true;
  stopBtn.disabled = false;
})

stopBtn.addEventListener("click", () => {

  document.removeEventListener("keydown", logging);

  document.removeEventListener("keyup", statelog);

  startBtn.disabled = false;
  stopBtn.disabled = true;
  log.textContent = "";
  state.textContent = "";
})

function logging(e){
  log.innerHTML = `Key ${e.key} is selected`;
  state.innerHTML = `Key is pressed`;
}

function statelog(){
  state.innerHTML = `Key is released`;
}