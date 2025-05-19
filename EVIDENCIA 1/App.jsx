import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res)=>{
      setProducts(res.data.products);
    });
  }, []);

  return (
    <>
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
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <li
            key={p.id}
            className="border p-4 m-2 rounded bg-white flex flex-col items-center shadow"
          >
            <span className="font-semibold text-lg text-gray-800 mb-2">{p.title}</span>
            <span className="text-blue-600 font-bold text-xl">${p.price}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;