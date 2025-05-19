function ProductoCard({ title, price }) {
  return (
    <div className="border p-4 m-2 rounded bg-white flex flex-col items-center shadow">
      <span className="font-semibold text-lg text-gray-800 mb-2">{title}</span>
      <span className="text-blue-600 font-bold text-xl">${price}</span>
    </div>
  );
}

export default ProductoCard;