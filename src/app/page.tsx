import Link from "next/link";
import Dropdown from './components//ui/Dropdown';
import TriangleBackground from './components/ui/TriangleBackground';
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 via-red-800 via-30% to-black to-90% text-white">
      <div className="h-screen">
        <div className="">
          <TriangleBackground />
        </div>

        {/* Header */}
        <header >
          <div className="grid grid-cols-3 relative justify-items-center justify-center gap-60 px-6 py-4 max-w-7xl">
            <div className="text-2xl font-bold">
              <Image src="/logo1.png" alt="" width={90} height={90}></Image>
            </div>

            <div className="grid justify-items-center">
              <input
                type="search"
                placeholder={"Buscar peças por nome, marca ou modelo"}
                className="rounded-full grid shadow px-4 mt-5 h-10 white bg-black/80 w-52 md:w-[40rem] focus:outline-none"
              />
              <div className="grid items-center justify-center">
            <nav className=" relative mt-16 md:mt-0 md:flex md:space-x-8 space-x-2 text-sm font-semibold md:text-lg">
              {['Motor', 'Suspensão', 'Pneus', 'Freios', 'Interior', 'Extériores'].map((cat) => (
                <a key={cat} href="#" className="hover:text-red-400 transition">
                  {cat}
                </a>
              ))}
            </nav>
          </div>
              {/* <button className="md:hidden px-3 py-2 text-white rounded-md"><Search /></button> */}
            </div>

            <div className="flex">
              <div aria-label="Entrar" className="hover:text-red-400 md:mx-2 mt-5 transition absolute right-1 md:right-16 md:block">
                <Dropdown />
              </div>
              <div aria-label="Entrar" className="hover:text-red-400 mt-7 transition absolute right-7 hidden md:block">
                <Link href="/pages/login">Entrar</Link>
              </div>
            </div>
          </div>
          
        </header>

        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 py-26 flex flex-col md:flex-row items-center gap-10" style={{ backgroundImage: "url('/imagens/hero-home.jpg')" }}>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 max-w-lg">
              Encontre <br />
              a peça certa <br />
              para o seu carro, <br />
              em segundos
            </h1>
            <Link href="/pages/search" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold transition">
              COMEÇAR AGORA
            </Link>
          </div>
        </section>
      </div>
      {/* Novidades */}
      <section className="max-w-7xl mx-auto px-6 py-50">
        <h2 className="text-3xl font-bold mb-8">Novidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: 'Alternador',
              price: 'R$ 850,00',
              tag: 'NOVIDADE',
              img: '/pecas/alternador.png',
            },
            {
              title: 'Amortecedor',
              price: 'R$ 200,00',
              tag: null,
              img: '/pecas/amortecedor.png',
            },
            {
              title: 'Pneu All-Season',
              price: 'R$ 500,00',
              tag: 'MAIS VENDIDO',
              img: '/pecas/pneu.png',
            },
            {
              title: 'Disco de Freio',
              price: 'R$ 186,60',
              tag: 'DESCONTO',
              img: '/pecas/disco-freio.png',
            },
            {
              title: 'Roda',
              price: 'R$ 850,00',
              tag: 'NOVIDADE',
              img: '/pecas/alternador.png',
            },
            {
              title: 'Pneu',
              price: 'R$ 200,00',
              tag: null,
              img: '/pecas/amortecedor.png',
            },
            {
              title: 'Bateria',
              price: 'R$ 500,00',
              tag: 'MAIS VENDIDO',
              img: '/pecas/pneu.png',
            },
            {
              title: 'Pastilha de freio',
              price: 'R$ 186,60',
              tag: 'DESCONTO',
              img: '/pecas/disco-freio.png',
            },
          ].map(({ title, price, tag, img }) => (
            <div
              key={title}
              className="bg-gradient-to-br hover:text-red-400 transition from-red-900 to-black rounded-lg shadow-lg p-4 relative flex flex-col"
            >
              {tag && (
                <span className="absolute top-2 left-2 bg-red-700 px-3 py-1 rounded font-semibold text-sm uppercase">
                  {tag}
                </span>
              )}
              <img
                src={img}
                alt={title}
                className="mx-auto mb-4 max-h-40 object-contain"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="mb-3 font-semibold">{price}</p>
              <Link href="/pages/productDetails" className="mt-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded flex items-center justify-center gap-2 font-semibold transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                  <circle cx="7" cy="21" r="2" />
                  <circle cx="17" cy="21" r="2" />
                </svg>
                Comprar
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-10 justify-items-center text-center">
          <Link href="/pages/search" className="bg-red-600 w-56 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold transition">
            Ver mais
          </Link>
        </div>
      </section>

      {/* Marcas populares */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">Marcas populares</h2>
        <div className="flex justify-center gap-10 flex-wrap">
          {[
            '/marcas/volkswagen.png',
            '/marcas/toyota.png',
            '/marcas/chevrolet.png',
            '/marcas/bmw.png',
            '/marcas/fiat.png',
            '/marcas/ford.png',
            '/marcas/honda.png',
          ].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Marca popular"
              className="h-12 object-contain filter brightness-75 hover:brightness-100 transition cursor-pointer"
            />
          ))}
        </div>
      </section>
    </main >
  );
}