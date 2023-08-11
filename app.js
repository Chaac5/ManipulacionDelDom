const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')

btn.addEventListener('click', btnclick);

function btnclick(){
    let suma = input1.value + input2.value;
    result.innerText = "Resultado: " + suma
}