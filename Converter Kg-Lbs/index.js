const dv = document.getElementsByClassName("rotate")[0];
const inConverter = document.getElementsByClassName("form__field")[0];

const toKg = 0.453592;
const toPound = 2.20462;

poundToKg = (pound) =>
  pound != null ? Number(pound) * toKg : console.log("getting null");

kgToPound = (kg) =>
  kg != null ? Number(kg) * toPound : console.log("getting null");

dv.addEventListener("click", () => {
  const result = document.getElementById("outRes");

  dv.classList.toggle("down");

  if (dv.className.includes("down")) {
    inConverter.placeholder = "Enter pounds to Kg";
    result.innerHTML = ` Pounds in Kilograms : ${poundToKg(inConverter.value)}`;
  } else {
    inConverter.placeholder = "Enter Kg to Pounds";
    result.innerHTML = ` Kilograms in pounds : ${kgToPound(inConverter.value)}`;
  }
});
inConverter.addEventListener("input", () => {
  const result = document.getElementById("outRes");

  if (dv.className.includes("down")) {
    result.innerHTML = ` Pounds in Kilograms : ${poundToKg(inConverter.value)}`;
  } else {
    result.innerHTML = ` Kilograms in pounds : ${kgToPound(inConverter.value)}`;
  }
});
