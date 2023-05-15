
import WeDo from "./components/weDoComponent"

export default function oQuee() {
    return(
        <div id="oQuee" className="snap-center md:h-auto 2xl:h-screen h-auto w-screen md:flex flex-col items-center md:pl-[10rem] md:pr-[10rem] 2xl:pl-[20rem] 2xl:pr-[20rem] justify-center bg-white">
            <h1 className=" m-3 md:mt-16 mt-12 2xl:mt-0 text-black text-[2rem] md:text-[2rem] 2xl:text-[3rem] text-center font-bold">
            O GymHub é o <span className="text-purple-600">sistema do segmento fitness que mais cresce no Brasil</span> e abaixo você entenderá os motivos!
            </h1>
            <section className="flex flex-row justify-center items-center flex-wrap">
            <WeDo texto="Gestão prática e simples"/>
            <WeDo texto="Venda muito mais"/>
            <WeDo texto="Rápido e acessível"/>
            <WeDo texto="Confiável"/>
            </section>
            
        </div>
    )
}