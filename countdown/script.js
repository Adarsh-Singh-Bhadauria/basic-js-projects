let timer = document.getElementById("timer");

function updateTime(){
  // insert target date according to you [Ex. let targetDate = new Date('2024-01-01T00:00:00')];
  let targetDate = new Date();
  let currentDate = new Date();
  let difference = targetDate - currentDate;

  let days = Math.floor(difference/(1000*60*60*24));
  let hours = Math.floor((difference%(1000*60*60*24))/(1000*60*60));
  let minutes = Math.floor((difference%(1000*60*60))/(1000*60));
  let seconds = Math.floor((difference%(1000*60))/(1000));

  timer.innerHTML = `${days} Days ${hours}  hours ${minutes} minutes ${seconds} seconds`
}
setInterval(updateTime, 1000);