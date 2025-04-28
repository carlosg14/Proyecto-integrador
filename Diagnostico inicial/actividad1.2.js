const numeros = [3, 7, 12, 5, 2]

const numerosCuadrados = numeros.map(numero => numero ** 2);
console.log(numerosCuadrados);

const filtro = numeros.filter(numero => numero > 5);
console.log(filtro);

const par= numeros.filter(numero => numero % 2 === 0);
console.log(par);