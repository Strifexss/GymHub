import logo from '../images/GymHubFont.png'
import logoProfessor from '../images/GymHubProfessorLogo.png'
import logoAluno from '../images/GymHubAlunoLogo.png'
import ProfessorImg from '../images/ProfessorImgCHose.png'
import Image from "next/image"
export default function appChose() {
    return(
        <div className="w-screen h-screen bg-black flex justify-center items-center gap-[1rem] flex-wrap">
            <a href="https://faculdade-projeto.vercel.app" target="blank">
                <div className="w-[90vw] h-[30vh] md:w-[30vw] md:h-[20rem] 2xl:w-[30rem] 2xl:h-[30rem] md:bg-EmpresarioImage bg-cover bg-center border-solid border-[0.3rem] border-purple-600 rounded-[1rem] scale-[90%] flex justify-center items-center hover:scale-[100%] transition-[0.1s] cursor-pointer">
                    <Image 
                        src={logo}
                        width={250}
                        height={250}
                        alt='GymHub'
                    />                
                </div>
            </a>
            <a href="https://gymhub-professor.vercel.app" target='blank'>
            <div className="w-[90vw] h-[30vh] md:w-[30vw] md:h-[20rem] 2xl:w-[30rem] 2xl:h-[30rem] md:bg-ProfessorImage bg-cover border-solid border-[0.3rem] border-purple-600 rounded-[1rem] scale-[90%] flex justify-center items-center hover:scale-[100%] transition-[0.1s] cursor-pointer">
            <Image className='rounded-[1rem]'
                        src={logoProfessor}
                        width={250}
                        height={250}
                        alt='GymHub'
                    />        
            </div>
            </a>
            <div className="w-[90vw] h-[30vh] md:w-[30vw] md:h-[20rem] 2xl:w-[30rem] bg-AlunoImage bg-center 2xl:h-[30rem] border-solid border-[0.3rem] border-purple-600 rounded-[1rem] scale-[90%] flex justify-center items-center hover:scale-[100%] transition-[0.1s] cursor-pointer">
                <Image 
                        src={logoAluno}
                        width={250}
                        height={250}
                        alt='GymHub'
                    />       
            </div>
        </div>
    )
}