let contatore = document.querySelector('#counter');
let btnSott = document.querySelector('#sottrai');
let btnAgg = document.querySelector('#aggiungi');
let count = 0;


btnAgg.addEventListener('click', () =>{
  count++;
  contatore.innerHTML = count;
});

btnSott.addEventListener('click', () =>{
  count--;
  contatore.innerHTML = count;  
});
