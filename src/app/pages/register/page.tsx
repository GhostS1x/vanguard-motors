"use client";

import Link from "next/link";
import { useState } from "react";

export default function CadastroPage() {
  const [tipoConta, setTipoConta] = useState("cliente");
  const [etapa, setEtapa] = useState(1);
  const [isRegister] = useState(false);

  const isVendedor = tipoConta === "vendedor";

  const avancar = () => setEtapa((prev) => prev + 1);
  const voltar = () => setEtapa((prev) => prev - 1);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
      <div className="w-full max-w-3xl bg-zinc-950 p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Criar Conta ({tipoConta === "cliente" ? "Cliente" : "Vendedor"})
        </h1>

        {/* Seletor de tipo de conta */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setTipoConta("cliente")}
            className={`px-4 py-2 rounded font-semibold transition ${tipoConta === "cliente"
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
          >
            Cliente
          </button>
          <button
            onClick={() => setTipoConta("vendedor")}
            className={`px-4 py-2 rounded font-semibold transition ${tipoConta === "vendedor"
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
          >
            Vendedor
          </button>
        </div>

        {/* Formulário dividido por etapas */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          {etapa === 1 && (
            <>
              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="text" placeholder="Nome completo" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="email" placeholder="E-mail" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="password" placeholder="Senha" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="password" placeholder="Confirmar senha" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="text" placeholder="Telefone" />
              
              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="number" placeholder="CPF ou CNPJ" />
            </>
          )}

          {etapa === 2 && (
            <>
              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="number" placeholder="CEP" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="text" placeholder="Rua" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="number" placeholder="Número" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="text" placeholder="Complemento" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="text" placeholder="Bairro" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="text" placeholder="Cidade" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="text" placeholder="Estado" />
            </>
          )}

          {etapa === 3 && isVendedor && (
            <>
              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="text" placeholder="Nome da loja" />

              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="text" placeholder="Tipo de vendedor (Física/Jurídica)" />
              
              <input className="input px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500" type="text" placeholder="Instagram / Redes sociais (opcional)" />
            </>
          )}
        </form>

        {/* Botões de navegação */}
        <div className="flex justify-between mt-6">
          {etapa > 1 && (
            <button onClick={voltar} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500">
              Voltar
            </button>
          )}

          {((etapa === 2 && !isVendedor) || etapa === 3) ? (
            <button
              type="submit"
              className="ml-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold"
            >
              Cadastrar
            </button>
          ) : (
            <button
              onClick={avancar}
              className="ml-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold"
            >
              Próximo
            </button>
          )}
        </div>

        {/* Link de login */}
        <p className="text-sm text-gray-400 mt-4 text-center">
          {isRegister ? "Ainda não tem uma conta?" : "Já tem uma conta?"}{" "}
          <Link
            href="/pages/login"
            className="text-red-500 hover:underline ml-1"
          >
            {isRegister ? "Cadastrar" : "Entrar"}
          </Link>
        </p>
      </div>

      <style jsx>{`
        .input {
          @apply w-full px-4 py-2 bg-zinc-900 text-white rounded border border-zinc-700 focus:outline-none;
        }
      `}</style>
    </main>
  );
}
