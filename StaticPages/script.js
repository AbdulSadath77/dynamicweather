const form = document.querySelector("form");
const searchInput = document.getElementById("searchBar");
let cityName = document.getElementById("city");
let temperature = document.getElementById("temp");

const getResponse = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dbaf08282ae87cf26ecca26d0507a08f`;
    const response = await fetch(url);
    const data = [await response.json()];
    temperature.innerText = data[0].main.temp;
    cityName.innerText = city;
  } catch (err) {
    console.error(err);
  }
};

window.addEventListener("load", (e) => {
  e.preventDefault();
  getResponse("Nizamabad");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = searchInput.value;
  getResponse(city);
});
