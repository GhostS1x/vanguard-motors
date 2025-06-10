export default function ProductDetails() {
  return (
    <main className="bg-white text-gray-900">
      {/* Container principal */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Imagem principal + galeria */}
        <div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src="/pecas/alternador.png"
              alt="Alternador de carro"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="mt-4 flex space-x-4">
            {['/pecas/alternador.png', '/pecas/alternador-2.png'].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Alternador ${i + 1}`}
                className="w-20 h-20 object-contain border border-gray-300 rounded-md cursor-pointer hover:ring-2 hover:ring-red-600"
              />
            ))}
          </div>
        </div>

        {/* Informações do produto */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Alternador para motor 1.6 Flex</h1>
          <div className="flex items-center space-x-2 text-yellow-500 mb-4">
            {'★★★★★'} <span className="text-sm text-gray-500">(120 avaliações)</span>
          </div>
          <div className="text-3xl text-red-600 font-bold mb-4">R$ 850,00</div>
          <div className="flex items-center space-x-2 mb-6">
            <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">
              NOVO
            </span>
            <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
              FRETE GRÁTIS
            </span>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium">
              Quantidade
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              defaultValue="1"
              className="w-20 mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex space-x-4 mb-8">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Comprar agora
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold transition">
              Adicionar ao carrinho
            </button>
          </div>

          <ul className="text-sm text-gray-600 space-y-1">
            <li>✔️ Envio imediato</li>
            <li>✔️ Garantia de 12 meses</li>
            <li>✔️ Devolução grátis em até 7 dias</li>
          </ul>
        </div>
      </div>

      {/* Descrição detalhada */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Descrição do produto</h2>
        <p className="text-gray-700 mb-4">
          Alternador compatível com motores 1.6 Flex de diversas marcas. Produto novo, original de fábrica com alta durabilidade
          e eficiência no carregamento da bateria. Indicado para carros como Gol, Palio, Corsa, Fiesta e similares.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Especificações técnicas:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Tensão: 12V</li>
          <li>Corrente máxima: 90A</li>
          <li>Polia de 6 canais</li>
          <li>Compatível com motores flex 1.6</li>
          <li>Material: Alumínio e cobre</li>
        </ul>
      </section>

      {/* Avaliações */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Avaliações</h2>
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="border border-gray-200 p-4 rounded-md shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <strong>Usuário{i}</strong>
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="text-gray-700">
                Produto excelente, chegou no prazo e funcionando perfeitamente. Recomendo a todos que precisam de um alternador confiável!
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos relacionados */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Produtos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src="/pecas/disco-freio.png"
                  alt="Produto relacionado"
                  className="w-full h-32 object-contain mb-4"
                />
                <h4 className="font-semibold text-lg">Disco de Freio Ventilado</h4>
                <p className="text-red-600 font-bold">R$ 186,60</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}