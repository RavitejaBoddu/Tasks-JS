function getDate() {
  const d = new Date();
  var date = document.getElementById("date");
  date.innerHTML = d.toLocaleDateString();
}

getDate();

function getCurrentTime() {
  const date = new Date();
  var time = document.getElementById("time");
  time.innerHTML = date.toLocaleTimeString();
}

setInterval(getCurrentTime, 1000);
