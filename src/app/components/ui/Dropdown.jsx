'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center w-full rounded-md  px-4 py-2  text-sm font-medium  "
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.814 0 5.408.92 7.379 2.476M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Perfil
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Configurações
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100" role="menuitem">
              Sair
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
