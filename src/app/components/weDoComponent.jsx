
import logo from "../images/GymHubFont.png"
import Image from "next/image"

export default function weDo(props) {
    return(
        <div className="cursor-pointer 2xl:w-[30rem] md:w-[29rem] md:h-[18rem] h-[25rem] w-[85%] 2xl:h-[18rem]  
        m-4 border-solid border-[2px] border-stone-500 flex flex-col">
            <Image className="m-4 mb-0 h-[6rem] w-[6rem]"
                src={logo}
                alt="Imagem"
                width={200}
                height={200}
            />
            <h1 className="text-[1.8rem] font-bold m-4">{props.texto}</h1>
            <p className=" text-lg  text-gray-600 font-semibold m-4 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea molestiae unde eligendi dolorem sunt corporis deserunt. Quas animi doloribus reiciendis inventore fugiat saepe recusandae, perspiciatis voluptates totam velit aspernatur.</p>
        </div>
    )
} 