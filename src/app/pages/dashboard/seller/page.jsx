"use client"

import { useState } from "react";
import {
  Boxes,
  ClipboardList,
  Settings,
  LogOut,
  BarChart3,
} from "lucide-react";

export default function PainelVendedor() {
  const [abaAtiva, setAbaAtiva] = useState("dashboard");

  return (
    <main className="min-h-screen bg-black text-white flex">
      {/* Menu lateral */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-900 p-6 border-r border-gray-800">
        <h2 className="text-2xl font-bold text-red-600 mb-8">Painel do Vendedor</h2>

        <MenuItem
          icone={<BarChart3 size={20} />}
          texto="Dashboard"
          ativo={abaAtiva === "dashboard"}
          onClick={() => setAbaAtiva("dashboard")}
        />
        <MenuItem
          icone={<Boxes size={20} />}
          texto="Meus Produtos"
          ativo={abaAtiva === "produtos"}
          onClick={() => setAbaAtiva("produtos")}
        />
        <MenuItem
          icone={<ClipboardList size={20} />}
          texto="Pedidos Recebidos"
          ativo={abaAtiva === "pedidos"}
          onClick={() => setAbaAtiva("pedidos")}
        />
        <MenuItem
          icone={<Settings size={20} />}
          texto="Configurações"
          ativo={abaAtiva === "config"}
          onClick={() => setAbaAtiva("config")}
        />

        <div className="mt-auto">
          <MenuItem
            icone={<LogOut size={20} />}
            texto="Sair"
            onClick={() => alert("Logout")}
            danger
          />
        </div>
      </aside>

      {/* Conteúdo principal */}
      <section className="flex-1 p-6">
        {abaAtiva === "dashboard" && <Dashboard />}
        {abaAtiva === "produtos" && <Produtos />}
        {abaAtiva === "pedidos" && <Pedidos />}
        {abaAtiva === "config" && <Configuracoes />}
      </section>
    </main>
  );
}

function MenuItem({ texto, icone, onClick, ativo, danger }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition font-medium w-full text-left ${
        ativo
          ? "bg-red-600 text-white"
          : danger
          ? "text-red-500 hover:bg-red-950"
          : "text-gray-300 hover:bg-gray-800"
      }`}
    >
      {icone}
      {texto}
    </button>
  );
}

function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-500 mb-4">Resumo de Vendas</h2>
      <p className="text-gray-300">Total de pedidos, lucros, performance da loja...</p>
    </div>
  );
}

function Produtos() {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-500 mb-4">Meus Produtos</h2>
      <p className="text-gray-300">Aqui o vendedor pode ver e gerenciar seus anúncios.</p>
    </div>
  );
}

function Pedidos() {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-500 mb-4">Pedidos Recebidos</h2>
      <p className="text-gray-300">Pedidos feitos pelos clientes, com status e detalhes.</p>
    </div>
  );
}

function Configuracoes() {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-500 mb-4">Configurações da Loja</h2>
      <p className="text-gray-300">Nome da loja, contato, CNPJ, e outros dados importantes.</p>
    </div>
  );
}