export default function landing() {
    return(
    <>
    <div className="w-screen h-screen flex flex-col  md:items-start text-left justify-center md:pl-[10rem] lg:bg-[url('./images/FundoLanding.png')] bg-cover bg-no-repeat">
        <h1 className="text-white text-[2rem] lg:text-[4rem] text-center md:text-left font-bold mb-[1rem]" >O sistema favorito <br /> dos gestores do <br />segmento fitness</h1>
        <p className="text-white text-[1.2rem] text-center md:text-left lg:ml-0 font-thin">Somos dedicados à ajudar você a <br /> transformar seu negocio em um sucesso</p>
        <section className="flex flex-col md:flex-row mt-[1rem] w-[100%] md:justify-start items-center">
            <button className="font-bold text-white m-4 md:m-[0] md:mr-4 border-solid w-[16rem] md:w-[12rem] h-[3rem] border-2 border-gray-200">
               Demonstração grátis
            </button>
            <a href="https://faculdade-projeto.vercel.app" target="_blank">
            <button className='text-white m-4 bg-purple-600 ml-0 font-bold h-[3rem] w-[8rem] rounded-[0.5rem] hover:bg-purple-800 cursor-pointer'>
              Já sou Cliente
            </button>
            </a>
        </section>
    </div>
    </>
    )
    }