"use client";

import Link from "next/link";

export default function SearchPage() {
  const products = [
    {
      id: 1,
      name: "Alternador para motor 1.6",
      price: 850,
      image: "/pecas/alternador.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Disco de Freio Ventilado",
      price: 186.6,
      image: "/pecas/disco-freio.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Filtro de Óleo Bosch",
      price: 45.0,
      image: "/pecas/filtro-oleo.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Velas de Ignição NGK",
      price: 120.0,
      image: "/pecas/velas-ignicao.png",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Container geral */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filtros */}
        <aside className="bg-zinc-950 border border-zinc-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-red-600">Filtros</h2>

          <div className="mb-5">
            <h3 className="font-semibold mb-2">Categoria</h3>
            <ul>
              {["Motor", "Suspensão", "Elétrica", "Freios"].map((cat) => (
                <li key={cat} className="mb-1">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-600"
                    />
                    <span className="ml-2">{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="font-semibold mb-2">Marca</h3>
            <ul>
              {["Bosch", "Cofap", "NGK", "Valeo"].map((brand) => (
                <li key={brand} className="mb-1">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-600"
                    />
                    <span className="ml-2">{brand}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="font-semibold mb-2">Preço</h3>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 px-3 py-2 rounded-md bg-zinc-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 px-3 py-2 rounded-md bg-zinc-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition">
            Aplicar filtros
          </button>
        </aside>

        {/* Resultados */}
        <section className="md:col-span-3">
          {/* Barra de busca e ordenação */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <input
              type="search"
              placeholder="Buscar peças..."
              className="w-full sm:w-1/2 px-4 py-3 rounded-md border border-zinc-700 text-white bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <select
              className="mt-4 sm:mt-0 w-full sm:w-48 px-4 py-3 rounded-md bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              defaultValue="relevance"
            >
              <option value="relevance">Relevância</option>
              <option value="priceLow">Menor preço</option>
              <option value="priceHigh">Maior preço</option>
              <option value="bestSelling">Mais vendidos</option>
            </select>
          </div>

          {/* Grid de produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="bg-zinc-950 border border-zinc-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-48 object-contain bg-black p-4"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{prod.name}</h3>
                  <div className="flex items-center mb-2 text-yellow-400">
                    {"★".repeat(prod.rating)}{" "}
                    <span className="ml-2 text-sm text-gray-400">
                      ({prod.rating * 20} avaliações)
                    </span>
                  </div>
                  <p className="text-red-600 font-extrabold text-2xl mb-4">
                    R$ {prod.price.toFixed(2).replace(".", ",")}
                  </p>
                  <Link
                    href="/pages/productDetails"
                    className="flex justify-center justify-items-center w-full bg-red-600 hover:bg-red-700 text-white py-3 px-10 rounded-md font-semibold transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                      />
                      <circle cx="7" cy="21" r="2" />
                      <circle cx="17" cy="21" r="2" />
                    </svg>
                    Comprar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
