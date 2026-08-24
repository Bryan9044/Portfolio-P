import profilePicture from "../assets/profile_picture2.jpg";
import cvFile from "../assets/Bryan_Londono_CV.pdf";
import { Mail, FileText, Brain} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Header() {
    return (
        <div className="flex flex-col gap-4 mx-auto max-w-3xl px-4"> 
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 ">
                <img src={profilePicture} 
                alt="Profile picture of Bryan Londoño" 
                className="w-24 h-24 sm:w-32 sm:h-32  border-2 border-indigo-200 rounded-[55%]" />
                <div> 
                    <h1 className="font-bold text-2xl text-slate-900 dark:text-slate-50">Bryan Londoño Marchena</h1>
                    <h2 className="text-lg text-slate-700 dark:text-slate-100">Student in computer engineering at Instituto Tecnológico de Costa Rica</h2>
                    <h3 className="text-sm text-slate-700 dark:text-slate-100">Costa Rica, Limón</h3>
                    <div className="flex flex-wrap gap-4"> 
                        <a 
                            href="mailto:bryanlondo200415@gmail.com"
                            
                            className=" bg-indigo-400 rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-indigo-500
                            dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:text-slate-200" 
                            
                        > 
                            <Mail className="w-5 h-5"/>
                            <span className="hidden sm:inline"> bryanlondo200415@gmail.com</span>
                        </a>

                        <a 
                            href={cvFile} 
                            className="bg-indigo-400 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-indigo-500
                            dark:bg-indigo-500 dark:hover:bg-indigo-600" 
                        > 
                            <FileText className="w-5 h-5 dark:text-slate-100" /> 
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/bryan-londo%C3%B1o-marchena-ba779525b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="bg-indigo-400 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-indigo-500
                            dark:bg-indigo-500 dark:hover:bg-indigo-600"
                        > 
                            <FaLinkedin className="w-5 h-5 dark:text-slate-100" /> 
                        </a>
                        
                        <a 
                            href="https://github.com/Bryan9044"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"                    
                            className="bg-indigo-400 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-indigo-500
                            dark:bg-indigo-500 dark:hover:bg-indigo-600"
                        > 
                            <FaGithub className="w-5 h-5 dark:text-slate-100"/> 
                        </a>
                    </div>            
                </div> 
            </div>

            <div>
                <div className="flex items-center gap-2">
                    <h2 className="text-lg text-slate-700 font-bold dark:text-slate-100">About me</h2>
                    <Brain className="w-5 h-5 dark:text-slate-100"/>
                </div>
                <p className="text-sm text-slate-500 max-w-2xl leading-relaxed dark:text-slate-300">
                    I am currently an active student at the Costa Rica Institute of Technology. 
                    Throughout my university journey, I have acquired skills in computer engineering and, 
                    at the same time, I have developed a curious attitude that drives me to look for solutions 
                    beyond everyday problems. I consider myself a peaceful person, passionate about constant learning, 
                    and easy to talk to anyone.

                    My goal right now is to find an internship that gives me the opportunity to enter the workforce. 
                    I am in my last semester and this experience will be key for my professional practice. 
                </p>
            </div>

            <hr className="border-t-4 border-slate-300 my-2"></hr>


        </div>

            
    )
}