"use client"

import { useState } from 'react';

export default function CheckoutPage() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    pagamento: 'pix',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulário de entrega */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Finalizar Pedido</h1>

          <div className="bg-zinc-950 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-red-500">Dados de Entrega</h2>

            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              value={form.nome}
              onChange={handleChange}
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded border border-zinc-700 focus:outline-red-500"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded border border-zinc-700"
            />

            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={form.endereco}
              onChange={handleChange}
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded border border-zinc-700"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="cidade"
                placeholder="Cidade"
                value={form.cidade}
                onChange={handleChange}
                className="bg-zinc-800 text-white px-4 py-2 rounded border border-zinc-700"
              />
              <input
                type="text"
                name="estado"
                placeholder="Estado"
                value={form.estado}
                onChange={handleChange}
                className="bg-zinc-800 text-white px-4 py-2 rounded border border-zinc-700"
              />
              <input
                type="text"
                name="cep"
                placeholder="CEP"
                value={form.cep}
                onChange={handleChange}
                className="bg-zinc-800 text-white px-4 py-2 rounded border border-zinc-700"
              />
            </div>
          </div>

          {/* Pagamento */}
          <div className="bg-zinc-950 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-red-500">Pagamento</h2>

            <select
              name="pagamento"
              value={form.pagamento}
              onChange={handleChange}
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded border border-zinc-700"
            >
              <option value="pix">Pix</option>
              <option value="boleto">Boleto Bancário</option>
              <option value="cartao">Cartão de Crédito</option>
            </select>
          </div>
        </div>

        {/* Resumo do pedido */}
        <div className="bg-zinc-950 p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Resumo do Pedido</h2>

          <div className="text-sm text-zinc-300 space-y-3">
            <div className="flex justify-between">
              <span>Alternador 1.6</span>
              <span>R$ 850,00</span>
            </div>
            <div className="flex justify-between">
              <span>Disco de Freio</span>
              <span>R$ 373,20</span>
            </div>
            <div className="flex justify-between border-t border-zinc-700 pt-4 mt-4 font-bold">
              <span>Total</span>
              <span className="text-red-500">R$ 1.223,20</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition">
            Concluir Compra
          </button>
        </div>
      </div>
    </main>
  );
}