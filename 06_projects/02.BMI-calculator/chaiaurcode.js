const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi <= 18.6){
        results.innerHTML = `under weight <span>${bmi}</span> `;
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            results.innerHTML = `Normal Range <span>${bmi}</span> `;
            }
            else{
                results.innerHTML = `Overweight <span>${bmi}</span>`;
            }
    }
    
});
