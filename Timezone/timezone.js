function getCountryTime() {
  var country = document.getElementById("country").value;

  let url = `http://worldtimeapi.org/api/timezone/${country}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      var d = new Date();
      let offc = d.getTimezoneOffset();
      utc = d.getTime() + d.getTimezoneOffset() * 60000;
      let offset = data.utc_offset;

      let [h, m] = offset.split(":");

      let op = offset.charAt(0);

      let off = Math.floor(h.substring(1) + "." + m);

      if (op == "+") {
        var newd = new Date(utc + 3600000 * off);
      } else {
        var newd = new Date(utc - 3600000 * off);
      }

      var readableDate = newd.toLocaleString();
      document.getElementById("tcresult").innerHTML = readableDate;
    });
}

function getTimezoneTime() {
  var timezone = document.getElementById("timezone").value;
  var result = luxon.DateTime.local().setZone(timezone);
  var date = result.c;
  readableDate =
    date.day +
    "-" +
    date.month +
    "-" +
    date.year +
    "  " +
    date.hour +
    ":" +
    date.minute +
    ":" +
    date.second;
  document.getElementById("tzresult").innerHTML = readableDate;
}
