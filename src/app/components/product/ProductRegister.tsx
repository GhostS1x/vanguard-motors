"use client";

import { useState } from "react";

export default function CadastrarProdutoPage() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);

  const categorias = ["Motor", "Suspensão", "Freio", "Elétrica", "Interior", "Rodas"];

  const handleImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImagem(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o Firebase, por exemplo
    console.log({ nome, descricao, categoria, preco, quantidade, imagem });
  };

  return (
    <main className="min-h-screen bg-black flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-2xl bg-zinc-950 p-8 rounded-xl shadow-xl text-white">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Cadastrar Produto</h1>

        <form className="space-y-4 grid gap-4" onSubmit={handleSubmit}>
          <input
            className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
            type="text"
            placeholder="Nome do produto"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          

          <select
            className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Selecione a categoria</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <input
            className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
            type="number"
            placeholder="Preço (R$)"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            step="0.01"
            required
          />

          <input
            className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
            type="number"
            placeholder="Quantidade em estoque"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            required
          />

          <input
            className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
            type="file"
            accept="image/*"
            onChange={handleImagemChange}
          />

          <textarea
            className="input h-28 resize-none px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
            placeholder="Descrição do produto"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold"
          >
            Cadastrar Produto
          </button>
        </form>
      </div>

      {/* Tailwind style shortcut */}
      <style jsx>{`
        .input {
          @apply w-full px-4 py-2 bg-zinc-900 text-white rounded border border-zinc-700 focus:outline-none;
        }
      `}</style>
    </main>
  );
}
