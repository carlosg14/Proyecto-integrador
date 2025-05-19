function StatsPanel({
  mostExpensive,
  cheapest,
  longTitleCount,
  totalPrice,
  avgDiscount,
  lowStockCount,
  highRatingCount,
  highDiscountCount,
  smartphonesCount,
}) {
  return (
    <div className="max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-bold mb-2 text-blue-600">Producto más caro</h3>
        {mostExpensive ? (
          <div>
            <span className="font-semibold">{mostExpensive.title}</span> - ${mostExpensive.price}
          </div>
        ) : <span>No hay productos</span>}
      </div>
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-bold mb-2 text-blue-600">Producto más barato</h3>
        {cheapest ? (
          <div>
            <span className="font-semibold">{cheapest.title}</span> - ${cheapest.price}
          </div>
        ) : <span>No hay productos</span>}
      </div>
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-bold mb-2 text-blue-600">Títulos &gt; 20 caracteres</h3>
        {longTitleCount}
      </div>
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-bold mb-2 text-blue-600">Precio total</h3>
        ${totalPrice}
      </div>
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-bold mb-2 text-blue-600">Promedio descuento (%)</h3>
        {avgDiscount}
      </div>
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-bold mb-2 text-blue-600">Stock menor a 50</h3>
        {lowStockCount}
      </div>
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-bold mb-2 text-blue-600">Rating &gt; 4.5</h3>
        {highRatingCount}
      </div>
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-bold mb-2 text-blue-600">Descuento &gt; 20%</h3>
        {highDiscountCount}
      </div>
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-bold mb-2 text-blue-600">Smartphones</h3>
        {smartphonesCount}
      </div>
    </div>
  );
}

export default StatsPanel;