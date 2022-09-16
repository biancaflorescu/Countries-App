const card = document.querySelector(".card");
const flag = document.querySelector(".flag");
const title = document.querySelector(".title");
const continent = document.querySelector(".continent");
const population = document.querySelector(".population");
const language = document.querySelector(".language");
const currency = document.querySelector(".currency");
const inputCountry = document.querySelector("#country-input");
const error = document.querySelector(".error");

inputCountry.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Enter") {
    const country = event.target.value;

    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((res) => res.json())
      .then((data) => {
        try {
          flag.src = data[0].flag;
          title.innerText = data[0].name;
          continent.innerText = data[0].region;
          population.innerText = `🧑‍🤝‍🧑 ${(data[0].population / 1000000).toFixed(
            2
          )}M people`;
          language.innerText = `🗣️ ${data[0].languages[0].name}`;
          currency.innerText = `💰 ${data[0].currencies[0].name}`;

          card.classList.remove("hidden");
          error.innerText = "";
        } catch (err) {
          card.classList.add("hidden");
          error.innerText = "Write a valid country name!";
        }
      });
  }
});
