# Evidencia 2

Este proyecto es una aplicación React que consume la API de [DummyJSON](https://dummyjson.com/products) para mostrar productos en tarjetas, utilizando estilos con Tailwind CSS. Incluye una sección de estadísticas dinámicas y búsqueda de productos.

## ¿Cómo se usa?

1. **Instala las dependencias**:
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abre el navegador** en [http://localhost:5173](http://localhost:5173)

4. **Busca productos** usando el campo de búsqueda. Las estadísticas y la lista de productos se actualizan automáticamente según el término ingresado.

---

## Estadísticas mostradas

La aplicación calcula y muestra dinámicamente las siguientes estadísticas sobre los productos filtrados:

- **Producto más caro**: muestra el nombre y el precio.
- **Producto más barato**: muestra el nombre y el precio.
- **Cantidad de productos cuyo título tiene más de 20 caracteres**.
- **Precio total** de todos los productos filtrados.
- **Promedio de descuento (%)** de los productos filtrados.
- **Cantidad de productos con stock menor a 50**.

### Estadísticas adicionales agregadas:

- **Cantidad de productos con rating mayor a 4.5**.
- **Cantidad de productos con descuento mayor al 20%**.
- **Cantidad de productos de la categoría "smartphones"**.

Todas estas estadísticas se recalculan automáticamente al buscar productos.

---

## Estructura del código y componentes

El código está dividido en componentes funcionales para mayor claridad y reutilización:

- **App.jsx**: Componente principal. Se encarga de la lógica de búsqueda, obtención de datos y cálculo de estadísticas. Pasa los datos filtrados y las estadísticas como props a los componentes hijos.
- **componentes/Panel.jsx**: Muestra todas las estadísticas recibidas como props en tarjetas estilizadas.
- **componentes/Lista.jsx**: Muestra la lista de productos filtrados en tarjetas, también estilizadas con Tailwind CSS.

---

## Tecnologías usadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

