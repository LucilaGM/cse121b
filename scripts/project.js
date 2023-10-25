import { getWeatherData } from "./weather.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const msg = document.querySelector(".msg");
const list = document.querySelector(".cities");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputVal = input.value.trim();

  const listItems = list.querySelectorAll(".city");
  const existingCity = Array.from(listItems).find((el) => {
    const content = el
      .querySelector(".city-name span")
      .textContent.toLowerCase();
    return content === inputVal.toLowerCase();
  });

  if (existingCity) {
    msg.textContent = `You know the time to ${
      existingCity.querySelector(".city-name span").textContent
    } ...Give me the country code, please. `;
    form.reset();
    input.focus();
    return;
  }

  try {
    const data = await getWeatherData(inputVal);
    const { main, name, sys, weather } = data;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

    const li = document.createElement("li");
    li.classList.add("city");
    const markup = `
      <h2 class="city-name" data-name="${name},${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
      </h2>
      <div class="city-temp">${Math.round(main.temp)}<sup>°F</sup></div>
      <figure>
        <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
        <figcaption>${weather[0]["description"]}</figcaption>
      </figure>
    `;
    li.innerHTML = markup;
    list.appendChild(li);
  } catch (error) {
    msg.textContent = `Please a valid city `;
  }

  msg.textContent = "";
  form.reset();
  input.focus();
});