// Below are the process of Accessing relevent elements -

let height = document.querySelector('#height');
let weight = document.querySelector('#weight');

let parah = document.querySelector('p');

let btn = document.querySelector('button');
let resetbtn = document.querySelector('#reset')

let calculate;

// Below are the process of adding events -

btn.addEventListener('click', () => {
    const heightValue = parseInt(height.value);
    let heightInMtr = heightValue/100;

    const weightValue = parseInt(weight.value);
    calculate = Math.round(weightValue/Math.pow(heightInMtr, 2) * 100)/100;

    parah.innerText = calculate;
})

resetbtn.addEventListener('click', () => {
    height.value = '';
    weight.value = '';
    parah.innerText = '';
})





