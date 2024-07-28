"use client"
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ['400', '500'],
  variable: '--font-manrope'
});
export default function Home() {
  console.log("OK");
  
  return (
    <main className="">
      <header className="min-h-screen p-8">
        <nav className="flex justify-between items-center">
          <div className="logo">
            <Image
      src="/logo.png"
      alt="Company Logo"
      width={151}
      height={40}
      priority
    />
          </div>
          <div className="menu">
            <ul className= {`${manrope.variable} font-normal flex gap-7`}>
              <li className={`${manrope.variable} font-semibold`}>
              <Link href={'/dashboard'}> ¿Por qué usar Pigueon? </Link> 
              </li>
              <li>
              
              <Link href={'/dashboard'}> Funciones </Link> 
              </li>
              <li>
              
              <Link href={'/dashboard'}> Recursos grátis </Link> 
              </li>
              <li>
              
              <Link href={'/dashboard'}> Empresas </Link> 
              </li>
              <li>
              <Link href={'/dashboard'}> 
              Precios </Link> 
              </li>
            </ul>
          </div>
          <div className="cta">
            <a href="" className="text-[#595984]">Iniciar sesión</a>
            <button className="bg-[#595984] p-3 ml-3 text-white rounded shadow-lg">
            ¡Comienza grátis!
            </button>
          </div>
        </nav>
      </header>
    </main>
  );
}
