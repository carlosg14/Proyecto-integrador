import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res) => {
            setProducts(res.data.products);
        });
    }, []);

    const filteredProducts = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

return (
    <>
        <h1 className="text-3xl font-bold text-blue-600 mb-4">¡Hola!</h1>
        <input
            type="text"
            placeholder="Buscar producto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mb-4"
        />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.map((p) => (
                    <li key={p.id} className="p-2 bg-gray-100 rounded shadow border">
                        <span className="font-semibold">{p.title}</span>
                        <span className="text-green-700"> ${p.price}</span>
                    </li>
                ))}
            </ul>
    </>
);
}

export default App;