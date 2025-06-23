import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full flex bg-zinc-900 absolute p-0">
      <Image src="/logo1.png" className="p-2" alt="" width={90} height={90}></Image>
    </div>
  );
}