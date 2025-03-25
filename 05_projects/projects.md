#Project information

##project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution Code 1

```Javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'white') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id;
        }
    });
});

```
#Solution Code 2

```Javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === ' ' || height <= 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height: ${height}`;
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
        if (`${bmi}>=30`) {
            result.innerHTML = "Sorry not in the range"
        }
    }
});

```