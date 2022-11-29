let nameInput = document.querySelector('#name');
let scoreInput = document.querySelector('#score');
let addBtn = document.querySelector('#but1');
let textDisp = document.querySelector('#scores');
let deleteSmBtn = document.querySelector('#but2');
let isString = false;


addBtn.addEventListener('click', () =>{
    checkInp();
    if(isString){  
        scoreInput.value = '';
        isString = false;
    } else{
    let name = nameInput.value;
    let score = scoreInput.value;
    results.push(`${name} - ${score}`)
    console.log(results)
    textDisp.textContent = results;
    nameInput.value = '';
    scoreInput.value = '';
}
})
deleteSmBtn.addEventListener('click', () =>{
    let smallest = [];
    let sorted = []
for(let i = 0; i < results.length; i++){
    let a = results[i].split(' ');
    sorted.push(results[i].split(' '))
    smallest.push((parseInt(a[2])));
}
smallest.sort(function(a, b){return a-b})
let smallestScore = smallest[0].toString()
let joined = results.join();
let index = joined.indexOf(smallestScore)
let splicedScore = joined.slice(index + (smallestScore.length) + 1)
results = splicedScore;
textDisp.textContent = results;

console.log(smallestScore)
console.log(index)
console.log(joined);
console.log(splicedScore);


})


function checkInp()
{
  var x = scoreInput.value;
  if (isNaN(x)) 
  {
    alert("Must input numbers");
    isString = true;
  } else{

  }
}