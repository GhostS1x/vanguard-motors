"use client";

import Link from "next/link";
import { useState } from "react";

export default function CadastroPage() {
  const [tipoConta, setTipoConta] = useState("cliente");
  const [isRegister] = useState(false);

  const isVendedor = tipoConta === "vendedor";

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
      <div className="w-full max-w-3xl bg-zinc-950 p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Criar Conta ({tipoConta === "cliente" ? "Cliente" : "Vendedor"})
        </h1>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setTipoConta("cliente")}
            className={`px-4 py-2 rounded font-semibold transition ${
              tipoConta === "cliente"
                ? "bg-red-600 text-white rounded"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600  rounded"
            }`}
          >
            Cliente
          </button>
          <button
            onClick={() => setTipoConta("vendedor")}
            className={`px-4 py-2 rounded font-semibold transition ${
              tipoConta === "vendedor"
                ? "bg-red-600 text-white  rounded"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600  rounded"
            }`}
          >
            Vendedor
          </button>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          {/* Campos comuns */}
          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Nome completo" />

          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="email" placeholder="E-mail" />

          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="password" placeholder="Senha" />

          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="password" placeholder="Confirmar senha" />

          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Telefone" />

          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="CPF ou CNPJ" />

          {/* Endereço */}
          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="CEP" />

          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Rua" />

          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Número" />

          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Complemento" />

          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Bairro" />

          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Cidade" />
          
          <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Estado" />

          {/* Campos extras para vendedor */}
          {isVendedor && (
            <>
              <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Nome da loja" />
              <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Tipo de vendedor (Física/Jurídica)"
              />
              <input className="input bg-zinc-900 p-2 rounded border border-zinc-700" type="text" placeholder="Instagram / Redes sociais (opcional)"
              />
            </>
          )}
        </form>

        <button
          type="submit"
          className="mt-6 w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold transition"
        >
          Cadastrar
        </button>
        <p className="text-sm text-gray-400 mt-4 text-center">
          {isRegister ? "Ainda não tem uma conta?" : "Já tem uma conta?"}{" "}
          <Link
            type="button"
            href="/pages/login"
            className="text-red-500 hover:underline ml-1"
          >
            {isRegister ? "Cadastrar" : "Entrar"}
          </Link>
        </p>
      </div>

      {/* Tailwind style shortcut */}
      <style jsx>{`
        .input {
          @apply w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none;
        }
      `}</style>
    </main>
  );
}
