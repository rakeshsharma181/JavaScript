    const form =  document.querySelector('form');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#results');
        if(height < 0 || height === '' || isNaN(height)) {
            results.innerHTML = `Please give a valid height ${height}`
        } else if(weight < 0 || weight === '' || isNaN(weight)) {
            results.innerHTML = `Please give a valid weight ${weight}`
        }
        else {
            const bmi = (weight / ((height * height) / 10000)) .toFixed(2)
            console.log(bmi);
            if(bmi < 18.6) {
                results.innerHTML = `<sapn>${bmi}(Under Weight)</span>`;
            }
            if(bmi > 18.5 && bmi <= 24.9) {
                results.innerHTML = `<sapn>${bmi}(Normal)</span>`;

            }
            if(bmi > 24.9) {
                results.innerHTML = `<sapn>${bmi}(Over Weight)</span>`;

            }
        }
    })