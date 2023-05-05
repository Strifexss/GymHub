export default function landing() {
    return(
    <>
    <div className="w-screen h-screen flex flex-col p-[2rem] lg:items-start items-center text-left justify-center lg:pl-[10rem] lg:bg-[url('./images/FundoLanding.png')] bg-cover bg-no-repeat">
        <h1 className="text-white text-[2rem] lg:text-[4rem] font-bold mb-[1rem]" >O sistema favorito <br /> dos gestores do <br />segmento fitness</h1>
        <p className="text-white text-[1.2rem] text-left lg:ml-0 ml-[1rem] font-thin">Somos dedicados à ajudar você a <br /> transformar seu negocio em um sucesso</p>
        <section className="flex flex-row mt-[1rem]">
            <a href="https://faculdade-projeto.vercel.app" target="_blank">
            <button className='text-white m-4 bg-purple-600 ml-0 font-bold h-[3rem] w-[8rem] rounded-[0.5rem] hover:bg-purple-800 cursor-pointer'>
              Já sou Cliente
            </button>
            </a>
            <button className="font-bold text-white m-4 border-solid lg:w-[12rem]  border-2 border-gray-200">
               Demonstração grátis
            </button>
        </section>
    </div>
    </>
    )
    }