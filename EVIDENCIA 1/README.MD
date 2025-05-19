#Evidencia React  + Vite + Tailwind + Axios

Este proyecto es una aplicación desarrollada con React que consume la API de DummyJSON para mostrar productos en formato de tarjetas. La interfaz está diseñada utilizando Tailwind CSS para lograr un estilo moderno y responsivo.

## Características

- Consulta productos desde la API de DummyJSON.
- Muestra el título y precio de cada producto en una tarjeta.
- Búsqueda de productos por nombre (Filtracion de datos dentro de la Evidencia N°2).
- Estilos responsivos y modernos con Tailwind CSS.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## Estructura principal

- `src/App.jsx`: Componente principal, obtiene y muestra los productos.
- `src/componentes/ProductoCard.jsx`: Componente para mostrar cada producto (opcional).
- `src/main.jsx`: Punto de entrada de la aplicación.
- `tailwind.config.js` y `postcss.config.js`: Configuración de Tailwind CSS.

## Tecnologías usadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
