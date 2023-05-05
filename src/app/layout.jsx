import './globals.css'
import logo from "./images/GymHubFont.png"
import Image from 'next/image'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-screen h-screen bg-black flex flex-col font-sans'>
        <header className='w-screen h-20 flex flex-row justify-between items-center fixed'>
          <Image className='  m-4 2xl:w-[10rem] 2xl:h-[5rem] xl:h-[3rem] xl:w-[8rem]'
            src={logo}
            width={200}
            height={20}
            alt='Logo'
          />
          <section className='flex flex-row'>
            <h1 className='m-4 hover:text-gray-400 hover:border-b-[2px] hover:border-purple-600 text-white text-1x1 font-thin cursor-pointer'>Services</h1>
            <p className='m-4 hover:text-gray-400 hover:border-b-[2px] hover:border-purple-600 text-white text-1xl font-thin cursor-pointer' >Facility</p>
            <p className='m-4 hover:text-gray-400 hover:border-b-[2px] hover:border-purple-600 text-white text-1x1 font-thin cursor-pointer' >Merchandise</p>
          </section>
          <a href="https://faculdade-projeto.vercel.app" target="_blank">
            <button className='text-white m-4 bg-purple-600 ml-0 font-bold h-[3rem] w-[8rem] rounded-[0.5rem] hover:bg-purple-800 cursor-pointer'>
              Já sou Cliente
            </button>
            </a>
        </header>
        {children}
      </body>
    </html>
  )
}
