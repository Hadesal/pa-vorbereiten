const countries = [
  {
    name: "Albania",
    capital: "Tirana",
  },
  {
    name: "Belgium",
    capital: "Brussels",
  },
  {
    name: "Bulgaria",
    capital: "Sofia",
  },
  {
    name: "Comoros",
    capital: "Moroni",
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
  },
  {
    name: "Italy",
    capital: "Rome",
  },
  {
    name: "Liberia",
    capital: "Monrovia",
  },
  {
    name: "Madagascar",
    capital: "Antananarivo",
  },
  {
    name: "Nigeria",
    capital: "Abuja",
  },
  {
    name: "Singapore",
    capital: "Singapore",
  },
  {
    name: "Tajikistan",
    capital: "Dushanbe",
  },
  {
    name: "Zimbabwe",
    capital: "Harare",
  },
];
const searchInput = document.getElementById("search");
const filteredCountries = document.getElementById("countries");
const select = document.getElementById("select");

function filter(country) {
  let n = new RegExp(searchInput.value.toString().trim(), "gi");
  let co = [];
  country.map((country) => {
    if (select.value === "name") {
      if (country.name.match(n)) {
        co.push(country.name);
        filteredCountries.textContent = co.join(`\n`);
      }
    } else if (select.value === "capital") {
      if (country.capital.match(n)) {
        co.push(country.capital);
        filteredCountries.textContent = co.join(`\n`);
      }
    }
  });
}

searchInput.addEventListener("input", () => {
  filter(countries);
});
