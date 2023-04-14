const inputElement = document.querySelector(".inputElement");
const btn = document.querySelector(".btn");
const activeCases = document.querySelector("#active");
const totalCases = document.querySelector("#cases");
const totalCritical = document.querySelector("#critical");
const totalDeaths = document.querySelector("#death");
const recovered = document.querySelector("#recovered");
const tests = document.querySelector("#tests");

btn.addEventListener("click", () => {
  const country = inputElement.value.trim().toLowerCase();
  fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
    .then((response) => response.json())
    .then((data) => {
      activeCases.textContent = data.active;
      totalCases.textContent = data.cases;
      totalCritical.textContent = data.critical;
      totalDeaths.textContent = data.deaths;
      recovered.textContent = data.recovered;
      tests.textContent = data.tests;
    })
    .catch((error) => {
      console.error(error);
    });
});
