import Image from "next/image";

export default function ProfilePage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-black px-4">
            <div className="bg-zinc-950 rounded-xl p-8 shadow-xl">
                <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
                    Perfil
                </h1>

                <form className="space-x-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
                        <div className="grid grid-cols-1 gap-4">
                            <strong className="text-white">Infomações de Login</strong> 
                            <Image src="/perfil.png" width={100} height={100} alt="" className="rounded-full w-60 flex md:hidden h-60"/>
                            <div className="grid">
                                <label htmlFor="Email" className="text-white">Email</label>
                                <input
                                    type="email"
                                    placeholder="Estado"
                                    className="w-62 px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
                                />
                            </div>
                            <div className="grid">
                                <label htmlFor="Senha" className="text-white">Senha</label>
                                <input
                                    type="password"
                                    placeholder="Estado"
                                    className="w-62 px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
                                />
                            </div>
                            <div className="grid">
                                <label htmlFor="Telefone" className="text-white">Telefone</label>
                                <input
                                    type="number"
                                    placeholder="Telefone"
                                    className="w-62 px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
                                />
                            </div>
                        </div>
                        <Image src="/perfil.png" width={100} height={100} alt="" className="rounded-full w-60 hidden md:flex h-60"/>
                    </div>
                    <hr />
                    <strong className="text-white p-3">Endereço</strong>
                    <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid">
                            <label htmlFor="Estado" className="text-white">Rua</label>
                            <input
                                type="text"
                                placeholder="Estado"
                                className="w-62 px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="Estado" className="text-white">Cidade</label>
                            <input
                                type="text"
                                placeholder="Estado"
                                className="w-62 px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="Estado" className="text-white">Estado</label>
                            <input
                                type="text"
                                placeholder="Estado"
                                className="w-62 px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="Estado" className="text-white">CEP</label>
                            <input
                                type="text"
                                placeholder="Estado"
                                className="w-62 px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-red-500"
                            />
                        </div>
                    </div>


                </form>
            </div>
        </main>
    );
}
