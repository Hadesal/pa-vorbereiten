const studentsClassA = [
  {
    name: "Johnny",
    grade: 10
  },
  {
    name: "Micky",
    grade: 4
  },
  {
    name: "Andrew",
    grade: 8
  },
  {
    name: "Katy",
    grade: 7
  },
  {
    name: "Michael",
    grade: 2
  },
  
  {
    name: "Lilly",
    grade: 6
  }
];

const studentsClassB = [
  {
    name: "Irene",
    grade: 7
  },
  {
    name: "Sonya",
    grade: 6
  },
  {
    name: "Richard",
    grade: 1
  },
  {
    name: "Nancy",
    grade: 3
  }
];

let textarea = document.querySelector('textarea')
let loadA = document.querySelector('#loadA');
let loadB = document.querySelector('#loadB');
let average = document.querySelector('#average');
let failing = document.querySelector('#failing');
let promter = document.querySelector('.prompter');

let resutls = [];
let grades = [];
let failed = [];
let objectList;
let A = false;
let B = false;


loadA.addEventListener('click', () => {
  A = true;
  B = false;
  resutls = [];
  failed = [];
  grades = [];
  textarea.textContent = resutls;
  let list = (Object.entries(studentsClassA))

  for(let i = 0; i < list.length; i++){
    let student = list[i][1].name + '-' + list[i][1].grade + '\n';
    let grade = Object.values(studentsClassA)[i].grade
    resutls.push(student.replace(/,/,''))
    grades.push(grade)
  }
  textarea.value = resutls.join('')
  promter.innerText = '';
})

loadB.addEventListener('click', () => {
  A = false;
  B = true;
  resutls = [];
  failed = [];
  grades = [];
  textarea.textContent = resutls;
  let list = (Object.entries(studentsClassB))

  for(let i = 0; i < list.length; i++){
    let student = list[i][1].name + '-' + list[i][1].grade + '\n'
    let grade = Object.values(studentsClassB)[i].grade
    resutls.push(student)
    grades.push(grade)
  }
  textarea.value = resutls.join('')
  promter.innerText = '';
})

average.addEventListener('click', () => {
  const average = grades.reduce((a, b) => a + b, 0) / grades.length;
  let averageGrade = Math.floor(average);
  promter.innerText = averageGrade;
})


failing.addEventListener('click', () => {
  if (A){
    objectList = studentsClassA
  } else if(B){
    objectList = studentsClassB
  }
  
  failed = []
  for(let i = 0; i < Object.values(objectList).length; i++ ){
    let test = Object.values(objectList[i]);
    if(test[1] < 5){
      let stNam = Object.values(objectList[i].name)
      failed.push(stNam.join(''));
      } 
  }
  let disp = failed.join().replace(/,/,'|')
  promter.innerText = disp;

})
