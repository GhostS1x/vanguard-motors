"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function CarrinhoPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Alternador 1.6 Flex',
      price: 850,
      quantity: 1,
      image: '/pecas/alternador.png',
    },
    {
      id: 2,
      name: 'Disco de Freio Ventilado',
      price: 186.6,
      quantity: 2,
      image: '/pecas/disco-freio.png',
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-red-600">Seu Carrinho</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400 text-xl">Seu carrinho está vazio.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de produtos */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row bg-zinc-950 p-4 rounded-lg shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-40 h-40 object-contain bg-black p-2 rounded"
                  />
                  <div className="flex-1 sm:ml-6 mt-4 sm:mt-0">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-red-500 font-bold mt-2">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </p>
                    <div className="flex items-center mt-4 space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-gray-400 hover:text-red-500 mt-3"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo do pedido */}
            <div className="bg-zinc-950 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-red-500">Resumo</h3>
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span className="text-red-500 font-bold">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between mb-6 text-sm text-gray-400">
                <span>Frete</span>
                <span>A calcular</span>
              </div>
              <Link href="/pages/checkout" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition">
                Finalizar Compra
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}