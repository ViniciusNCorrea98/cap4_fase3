function somar(){
  const n1 = document.getElementById('numero1');
  const n2 = document.getElementById('numero2');
  const span_valor = document.getElementsByClassName('span_valor')[0];
  
  const resultado = Number(n1.value)+Number(n2.value);
  
  span_valor.innerText = resultado;

  n1.value = ''
  n2.value = ''
}

function subtrair(){
  const n1 = document.getElementById('numero1');
  const n2 = document.getElementById('numero2');
  const span_valor = document.getElementsByClassName('span_valor')[0];

  const resultado = Number(n1.value)-Number(n2.value);
 
  
  span_valor.innerText = resultado;

  n1.value = ''
  n2.value = ''
}

function dividir(){
  const n1 = document.getElementById('numero1');
  const n2 = document.getElementById('numero2');
  const span_valor = document.getElementsByClassName('span_valor')[0];

  if (n2.value === '0'){
    alert('Divisão com a base 0 é indefinada!');

    n2.value = ''
    return;
  }

  const resultado = Number(n1.value)/Number(n2.value);

  
  span_valor.innerText = resultado;

  n1.value = ''
  n2.value = ''
}


function multiplicar(){
  const n1 = document.getElementById('numero1');
  const n2 = document.getElementById('numero2');
  const span_valor = document.getElementsByClassName('span_valor')[0];

  const resultado = Number(n1.value)*Number(n2.value);

  
  span_valor.innerText = resultado;
  

  n1.value = ''
  n2.value = ''
}