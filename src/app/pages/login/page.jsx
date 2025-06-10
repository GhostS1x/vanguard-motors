"use client"

import { useState } from "react";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const toggleMode = () => setIsRegister(!isRegister);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-950 p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          {isRegister ? "Criar Conta" : "Entrar"}
        </h1>

        <form className="space-y-4">
          {isRegister && (
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-red-500"
            />
          )}

          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-red-500"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-red-500"
          />

          {isRegister && (
            <input
              type="password"
              placeholder="Confirmar senha"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-red-500"
            />
          )}

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold transition"
          >
            {isRegister ? "Cadastrar" : "Entrar"}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          {isRegister ? "Já tem uma conta?" : "Ainda não tem uma conta?"}{" "}
          <button
            type="button"
            onClick={toggleMode}
            className="text-red-500 hover:underline ml-1"
          >
            {isRegister ? "Entrar" : "Criar conta"}
          </button>
        </p>
      </div>
    </main>
  );
}