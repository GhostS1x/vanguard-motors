"use client";

import { useState, ReactNode } from "react";
import { LogOut, User, ClipboardList, Settings } from "lucide-react";
import Image from "next/image";

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

const pedidos = [
  {
    id: '12345',
    data: '10/06/2025',
    status: 'Entregue',
    total: 'R$ 359,90',
    produtos: [
      {
        nome: 'Filtro de Ar Esportivo',
        imagem: '/produtos/filtro-ar.jpg',
        preco: 'R$ 129,90',
        quantidade: 1,
      },
      {
        nome: 'Óleo Sintético 5W30',
        imagem: '/produtos/oleo.jpg',
        preco: 'R$ 230,00',
        quantidade: 2,
      },
    ],
  },
  // ... outros pedidos
];

function Pedidos() {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-500 mb-4">Meus Pedidos</h2>
      {pedidos.map((pedido) => (
        <div
          key={pedido.id}
          className=" bg-zinc-950 border border-zinc-200 rounded-2xl shadow-sm mb-6 overflow-hidden"
        >
          <div className="flex flex-col bg-zinc-900 md:flex-row justify-between items-start md:items-center  px-6 py-4">
            <div>
              <p className="text-sm text-gray-200">Pedido #{pedido.id}</p>
              <p className="text-sm text-gray-200">Data: {pedido.data}</p>
            </div>
            <div className="mt-2 md:mt-0 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                {pedido.status}
              </span>
              <span className="text-lg font-semibold text-white">
                {pedido.total}
              </span>
            </div>
          </div>

          <div className="divide-y divide-zinc-300">
            {pedido.produtos.map((produto, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4">
                <div className="relative w-20 h-20">
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{produto.nome}</p>
                  <p className="text-sm text-gray-500">
                    {produto.quantidade}x {produto.preco}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 px-6 py-4 flex justify-end">
            <button className="text-red-600 font-semibold hover:underline">
              Ver Detalhes
            </button>
          </div>
        </div>
      ))}
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
