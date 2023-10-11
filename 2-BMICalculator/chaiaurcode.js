const formEl = document.querySelector('form')

formEl.addEventListener('submit' , (e)=>{
    e.preventDefault();

    const heightEl = parseInt(document.querySelector('#height').value);
    const weightEl = parseInt(document.querySelector('#weight').value);
    const resultsEl = document.querySelector('#results')

    if (heightEl === '' || heightEl<0 || isNaN(heightEl)) {
        resultsEl.innerHTML = `plz enter valid height ${heightEl}`;
    }else if (weightEl === '' || weightEl<0 || isNaN(weightEl)) {
        resultsEl.innerHTML = `plz enter valid  height ${weightEl}`;
    }else{
        const bmi = (weightEl/((heightEl*heightEl)/10000)).toFixed(2);

        if (bmi < 18.6) {
            resultsEl.innerHTML = `<span>${bmi} Under Weight  <span/>`;
        }else if (bmi > 24.9) {
            resultsEl.innerHTML = `<span>${bmi} over Weight  <span/>`;
        } else {
            resultsEl.innerHTML = `<span>${bmi} normal Weight  <span/>`;            
        }
    }

});