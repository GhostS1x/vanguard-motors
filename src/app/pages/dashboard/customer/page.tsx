"use client";

import { useState, ReactNode } from "react";
import { LogOut, User, ClipboardList, Settings } from "lucide-react";

// Tipos possíveis para as abas
type Aba = "pedidos" | "dados" | "config";

export default function AreaCliente() {
  const [abaAtiva, setAbaAtiva] = useState<Aba>("pedidos");

  return (
    <main className="min-h-screen bg-black text-white flex">
      {/* Menu lateral */}
      <aside className="hidden md:flex flex-col w-64 bg-zinc-900 p-6 border-r border-zinc-800">
        <h2 className="text-2xl font-bold text-red-600 mb-8">Minha Conta</h2>

        <MenuItem
          icone={<ClipboardList size={20} />}
          ativo={abaAtiva === "pedidos"}
          onClick={() => setAbaAtiva("pedidos")}
          texto="Meus Pedidos"
        />
        <MenuItem
          icone={<User size={20} />}
          ativo={abaAtiva === "dados"}
          onClick={() => setAbaAtiva("dados")}
          texto="Dados Pessoais"
        />
        <MenuItem
          icone={<Settings size={20} />}
          ativo={abaAtiva === "config"}
          onClick={() => setAbaAtiva("config")}
          texto="Configurações"
        />

        <div className="mt-auto">
          <MenuItem
            icone={<LogOut size={20} />}
            onClick={() => alert("Logout")}
            texto="Sair"
            danger
          />
        </div>
      </aside>

      {/* Conteúdo principal */}
      <section className="flex-1 p-6">
        {abaAtiva === "pedidos" && <Pedidos />}
        {abaAtiva === "dados" && <DadosPessoais />}
        {abaAtiva === "config" && <Configuracoes />}
      </section>
    </main>
  );
}

// Tipagem do MenuItem
type MenuItemProps = {
  texto: string;
  icone: ReactNode;
  onClick: () => void;
  ativo?: boolean;
  danger?: boolean;
};

function MenuItem({ texto, icone, onClick, ativo = false, danger = false }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition font-medium w-full text-left ${
        ativo
          ? "bg-red-600 text-white"
          : danger
          ? "text-red-500 hover:bg-red-950"
          : "text-zinc-300 hover:bg-zinc-800"
      }`}
    >
      {icone}
      {texto}
    </button>
  );
}

function Pedidos() {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-500 mb-4">Meus Pedidos</h2>
      <p className="text-gray-300">Aqui você verá o histórico de compras.</p>
    </div>
  );
}

function DadosPessoais() {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-500 mb-4">Seus Dados</h2>
      <p className="text-gray-300">Nome, e-mail, endereço, telefone, etc.</p>
    </div>
  );
}

function Configuracoes() {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-500 mb-4">Configurações</h2>
      <p className="text-gray-300">Alterar senha, notificações, etc.</p>
    </div>
  );
}
