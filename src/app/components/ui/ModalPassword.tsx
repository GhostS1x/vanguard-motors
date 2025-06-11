'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type='button'
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center bg-red-600 hover:bg-red-700 text-white w-full rounded-md  px-4 py-2  text-sm font-medium  "
                >
                    Alterar
                </button>
            </div>

            {isOpen && (
                <div className="relative transition-all justify-items-center justify-center md:mt-2 w-[40rem] h-[25rem] rounded-md shadow-lg bg-zinc-800 ">
                    <div className="py-1" role="menu">

                        <button onClick={() => setIsOpen(false)} className='text-white'><X /></button>
                        <h1 className='text-center text-white'>Alterar senha</h1>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className="grid mt-2">
                                <label htmlFor="Senha" className="text-white">Senha antiga</label>
                                <input
                                    type="password"
                                    placeholder=""
                                    className="w-62 px-4 py-2 bg-zinc-700 text-white rounded border border-zinc-700 focus:outline-red-500"
                                />
                            </div>
                            <div className="grid">
                                <label htmlFor="Senha" className="text-white">Nova Senha</label>
                                <input
                                    type="password"
                                    placeholder=""
                                    className="w-62 px-4 py-2 bg-zinc-700 text-white rounded border border-zinc-700 focus:outline-red-500"
                                />
                            </div>
                            <div className="grid">
                                <label htmlFor="Senha" className="text-white">Confirmar Senha</label>
                                <input
                                    type="password"
                                    placeholder=""
                                    className="w-62 px-4 py-2 bg-zinc-700 text-white rounded border border-zinc-700 focus:outline-red-500"
                                />
                            </div>
                            <button
                                type='button'
                                onClick={() => setIsOpen(false)}
                                className="inline-flex justify-center bg-red-600 hover:bg-red-700 text-white rounded-md  px-4 py-2  text-sm font-medium  "
                            >
                                Alterar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
