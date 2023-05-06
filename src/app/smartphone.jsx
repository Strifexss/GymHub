import Image from "next/image"

export default function smartphone() {
    return(
        <div id="smartphone" className="w-scree h-screen bg-[url('./images/SmartphoneMokup.png')] md:bg-cover flex flex-col justify-center md:px-[10rem] 2xl:px-[15rem] bg-fixed">
            <h1 className="text-white text-[3rem] 2xl:text-[4rem] font-bold">Na palma da mão</h1>
            <h1 className="text-gray-300 text-[1.5rem] font-thin 2xl:text-[2rem]">Infinitas possibilidades de cuidar do seu bem-estar, <br /> reunidas num só lugar. Baixe nosso app e descubra.</h1>
        </div>
    )
}