let h1 = document.querySelector('h1');
let input1 = document.querySelector('#calculo1');
let input2 = document.querySelector('#calculo2');
let btn = document.querySelector('#btnCalcular');
let pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnclick);

const btnOnclick = () =>{
  let sumaInputs = parseInt(input1.value) + parseInt(input2.value)
  pResult.innerHTML = "El resultado es " + sumaInputs;   
};