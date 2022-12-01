let nameInput = document.querySelector("#name");
let scoreInput = document.querySelector("#score");
let addBtn = document.querySelector("#but1");
let textDisp = document.querySelector("#scores");
let deleteSmBtn = document.querySelector("#but2");
let isString = false;
let results = [];
addBtn.addEventListener("click", () => {
  checkInp();
  if (isString) {
    scoreInput.value = "";
    isString = false;
  } else {
    let name = nameInput.value;
    let score = scoreInput.value;
    results.push(`${name} - ${score}`);
    textDisp.textContent = results;
    nameInput.value = "";
    scoreInput.value = "";
    console.log(results);
  }
});
deleteSmBtn.addEventListener("click", () => {
  let a = results.join();
  let matchNumber = a.match(/\d+/g);
  matchNumber.sort(function (a, b) {
    return a - b;
  });

  results.map((val, ind) => {
    if (val.match(matchNumber[0])) {
      results.splice(ind, 1);
      textDisp.textContent = results;
    }
  });
});

function checkInp() {
  var x = scoreInput.value;
  if (isNaN(x)) {
    alert("Must input numbers");
    isString = true;
  } else {
  }
}
