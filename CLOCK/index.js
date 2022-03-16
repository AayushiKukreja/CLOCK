let date;
let day;
let time;
let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

setInterval(function() {
  date = new Date();
  day = date.toLocaleDateString("en-US", options);
  time = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
  document.getElementById("time").innerHTML = time + "<br />on " + day;
}, 1000);
