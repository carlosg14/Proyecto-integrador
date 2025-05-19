function ProductList({ products }) {
  return (
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
  );
}

export default ProductList;