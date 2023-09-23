let select = document.querySelectorAll('.currency'),
inputCurrency = document.getElementById('input_currency'),
outputCurrency = document.getElementById('output_currency');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(data => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    for(i = 0; i < entries.length; i++) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
    }
  });

  function converter() {
    let input_currency_val = input_currency.value;
    if(select[0].value != select[1].value) {
      // alert("Верно")
      const host = 'api.frankfurter.app';
      fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
        .then((val) => val.json())
        .then((val) => {
          outputCurrency.value = Object.values(val.rates)[0]
      });
    }else {
      alert("Пожалуйста, выберите две разные валюты")
    }
  }