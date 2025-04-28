const productos = [
    { nombre: "Notebook", precio: 1200 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 80 }
  ];
 
/// 1. Usar filter para obtener solo los productos cuyo precio sea mayor a 100.
  const productosFiltrados = productos.filter(producto => producto.precio > 100);

console.log(productosFiltrados);

/// 2. Usar map para obtener un nuevo array de strings con el siguiente formato: "Notebook: $1200"
  const productosFormato = productos.map(producto => `${producto.nombre}: $${producto.precio}`);
  console.log(productosFormato);

/// 3. Usar reduce para calcular el precio total de todos los productos.
  const precioTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(`Precio total: $${precioTotal}`); 

// 4. Combinar filter y map para obtener los nombres de los productos que cuesten menos de 100, todo en minúsculas
const productosBaratos = productos
  .filter(producto => producto.precio < 100)
  .map(producto => producto.nombre.toLowerCase());
console.log(productosBaratos); 

