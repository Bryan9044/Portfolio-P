import { FaGithub, FaLinkedin } from "react-icons/fa";


interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
    outcome: string;
    githubUrl: string;
}

export default function ProjectCard({ title, image,description,outcome,githubUrl }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-2 border border-gray-200 rounded-lg p-4">
            <img src={image} alt={title} className="w-full h-56 object-cover rounded-md" />
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-700">{title}</h3>
                <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub repo" 
                >
                    <FaGithub className="w-7 h-7" />
                </a>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-sm text-gray-500 italic">{outcome}</p>
        </div> 
    )   
}