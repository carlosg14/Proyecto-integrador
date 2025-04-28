function procesar(array, callback) {
    return array.map(callback);
  }
  const resultado = procesar([1, 2, 3], x => x * 2);
  console.log(resultado);
  