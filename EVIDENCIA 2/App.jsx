import axios from 'axios';
import { useEffect, useState } from 'react';
import Panel from './componentes/Panel';
import Lista from './componentes/Lista';

function App() {
  const [products, setProducts] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res)=>{
      setProducts(res.data.products);
    });
  }, []);

  // Filtrado por término de búsqueda
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(term.toLowerCase())
  );

  // Estadísticas
const mostExpensive = filtered.reduce((max, p) => (p.price > (max?.price ?? 0) ? p : max), null);
const cheapest = filtered.reduce((min, p) => (p.price < (min?.price ?? Infinity) ? p : min), null);
const longTitleCount = filtered.filter(p => p.title.length > 20).length;
const totalPrice = filtered.reduce((sum, p) => sum + p.price, 0);
const avgDiscount = filtered.length
  ? (filtered.reduce((sum, p) => sum + p.discountPercentage, 0) / filtered.length).toFixed(2)
  : 0;
const highRatingCount = filtered.filter(p => p.rating > 4.5).length;
const highDiscountCount = filtered.filter(p => p.discountPercentage > 20).length;
const smartphonesCount = filtered.filter(p => p.category === "smartphones").length;
const lowStockCount = filtered.filter(p => p.stock < 50).length;
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Evidencia</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Buscar productos"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400 w-full max-w-md"
        />
      </div>
      <h2 className="text-xl text-center mb-4 text-gray-700">{term}</h2>

      {/* Panel de estadísticas con fondo distinto */}
      <div className="mb-8 bg-amber-700 rounded-b-lg">
        <Panel
          mostExpensive={mostExpensive}
          cheapest={cheapest}
          longTitleCount={longTitleCount}
          totalPrice={totalPrice}
          avgDiscount={avgDiscount}
          lowStockCount={lowStockCount}
        />
      </div>

      {/* Lista de productos */}
      <Lista products={filtered} />
    </div>
  );
}

export default App;