let links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("active");
  });

  if (link.classList.contains("home") === false) {
    link.addEventListener("mouseout", () => {
      link.classList.remove("active");
    });
  }
});

let arrDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let arrMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let temp_c = document.querySelector(".temp_c");
let city = document.querySelector(".city");
let day = document.querySelector(".day");
let day2 = document.querySelector(".day2");
let day3 = document.querySelector(".day3");
let dayno = document.querySelector(".dayno");
let mon = document.querySelector(".mon");
let icc = document.querySelector(".icc");
let textInfo = document.querySelector(".textInfo");
let secondIcc = document.querySelector(".secondIcc");
let maxtemp_c = document.querySelector(".maxtemp_c");
let maxtemp_c2 = document.querySelector(".maxtemp_c2");
let mintemp_c = document.querySelector(".mintemp_c");
let mintemp_c2 = document.querySelector(".mintemp_c2");
let textInfo2 = document.querySelector(".textInfo2");
let textInfo3 = document.querySelector(".textInfo3");
let thirdIcc = document.querySelector(".thirdIcc");
async function Res(q) {
  let my = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f387f9bd5d444f37bd482503232308%20&q=${q}&days=3&aqi=yes`
  );
  let finalRes = await my.json();
  temp_c.innerHTML = finalRes.current.temp_c;

  city.innerHTML = finalRes.location.name;
  let Dat = new Date(finalRes.current.last_updated);
  let d = arrDays[Dat.getDay()];
  let m = arrMonths[Dat.getMonth()];
  let dn = Dat.getDate();
  day.innerHTML = d;
  day2.innerHTML = arrDays[Dat.getDay() + 1];
  day3.innerHTML = arrDays[Dat.getDay() + 2];
  mon.innerHTML = m;
  dayno.innerHTML = dn;
  icc.src = finalRes.current.condition.icon;
  textInfo.innerHTML = finalRes.current.condition.text;
  secondIcc.src = finalRes.forecast.forecastday[1].day.condition.icon;
  maxtemp_c.innerHTML = finalRes.forecast.forecastday[1].day.maxtemp_c;
  maxtemp_c2.innerHTML = finalRes.forecast.forecastday[2].day.maxtemp_c;
  mintemp_c.innerHTML = finalRes.forecast.forecastday[1].day.mintemp_c;
  mintemp_c2.innerHTML = finalRes.forecast.forecastday[2].day.mintemp_c;
  textInfo2.innerHTML = finalRes.forecast.forecastday[1].day.condition.text;
  textInfo3.innerHTML = finalRes.forecast.forecastday[2].day.condition.text;
  thirdIcc.src = finalRes.forecast.forecastday[2].day.condition.icon;
}
Res("Cairo");

let find = document.getElementById("find");

find.addEventListener("input", () => {
  let x = find.value.length;
  if (x > 2) Res(find.value);
});
