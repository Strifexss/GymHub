import './globals.css'
import logo from "./images/GymHubFont.png"
import Image from 'next/image'

export const metadata = {
  title: 'GymHub',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-screen h-screen bg-black flex flex-col font-sans overflow-x-hidden'>
      {/*Pc Version and Tablets*/}
        <header className=' md:w-screen md:h-16 md:flex md:flex-row md:justify-between md:items-center md:fixed hidden'>
          <Image className='  m-4 2xl:w-[12rem] 2xl:h-[5rem] xl:h-[3rem] xl:w-[8rem]'
            src={logo}
            width={200}
            height={20}
            alt='Logo'
          />
          <section className='flex flex-row'>
           <a href="#inicio"><h1 className='m-4 hover:text-gray-400 hover:border-b-[2px] hover:border-purple-600 text-white text-1x1 font-bold cursor-pointer'>Inicio</h1></a>
           <a href="#oQuee"><p className='m-4 hover:text-gray-400 hover:border-b-[2px] hover:border-purple-600 text-white text-1xl font-bold cursor-pointer' >Por que nós escolher?</p></a>
           <a href="#smartphone"> <p className='m-4 hover:text-gray-400 hover:border-b-[2px] hover:border-purple-600 text-white text-1x1 font-bold cursor-pointer' >Smartphone</p></a>
          </section>
          <a href="https://faculdade-projeto.vercel.app" target="_blank">
            <button className='text-white m-4 bg-purple-600 ml-0 font-bold h-[3rem] w-[8rem] rounded-[0.5rem] hover:bg-purple-800 cursor-pointer'>
              Já sou Cliente
            </button>
            </a>
        </header>

        {/* Mobile Version */}
        <div className='snap-y'>
        {children}
          </div>    
      </body>
    </html>
  )
}
