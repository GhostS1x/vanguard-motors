"use client"

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [isRegister] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-950 p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Entrar
        </h1>

        <form className="space-y-4">   

          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold transition"
          >
            {isRegister ? "Cadastrar" : "Entrar"}
          </button>
        </form>

        <p className="text-sm text-zinc-400 mt-4 text-center">
          {isRegister ? "Já tem uma conta?" : "Ainda não tem uma conta?"}{" "}
          <Link
            type="button"
            href="/pages/register"
            className="text-red-500 hover:underline ml-1"
          >
            {isRegister ? "Entrar" : "Cadastrar"}
          </Link>
        </p>
      </div>
    </main>
  );
}