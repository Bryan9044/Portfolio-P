import { VscPython  } from "react-icons/vsc"
import { SiReact, SiTypescript, SiNodedotjs, SiPostgresql, SiTailwindcss, SiCplusplus,SiMysql } from "react-icons/si";
import TechBadge from "./TechBadge";
import ProjectCard from "./ProjectCard";
import CourseCard from "./CourseCard";

import GestorArchivos from '../assets/GestorArchivos.png'
import Taller from '../assets/TallerF.jpeg'
import QCarne from '../assets/QCarne.png'
import Klab from '../assets/k-lab.png'
import Mejoremos from '../assets/mejorCR.jpg'
import Udemy from '../assets/udemy.png'
import DataCamp from '../assets/dataCamp.png'
import Cisco from '../assets/cisco.png'

export default function Body () {
    return (
        <div className="flex flex-col mx-auto max-w-3xl gap-4 mt-2">
            <h2 className="text-lg font-bold text-gray-700">Technologies I use the most</h2>
            <div className="flex items-center flex-wrap gap-3">  
                <TechBadge icon={VscPython} label="Python" />
                <TechBadge icon={SiCplusplus} label="C++" />
                <TechBadge icon={SiTypescript} label="TypeScript" />
                <TechBadge icon={SiReact} label="React" />
                <TechBadge icon={SiNodedotjs} label="Node.js" />
                <TechBadge icon={SiTailwindcss} label="Tailwind" />
                <TechBadge icon={SiMysql} label="MySQL" />
            </div>

            <h2 className="text-xl font-bold text-gray-700">Experience</h2>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg text-gray-600">Qcarne Loyalty & Ticket Management System</h3>
                    <p className="text-sm bg-blue-200 w-fit rounded-4xl px-3 py-1">13/01/2026 - 16/02/2026</p>
                </div>
                <h4 className="text-sm text-gray-500">Full-Stack Developer</h4>
                <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                    <li>
                        Built the full-stack admin module for a loyalty stamp system, including
                        unique supervisor codes used to validate qualifying purchases and
                        award loyalty stamps.
                    </li>
                    <li>
                        Implemented worker management (CRUD) and an action history log for
                        auditing/tracking.
                    </li>
                    <li>
                        Worked across backend and frontend as part of a small team on a
                        real-world project for a meat products company.
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg text-gray-600">Vehicle Repair Shop Management System</h3>
                    <p className="text-sm bg-blue-200 w-fit rounded-4xl px-3 py-1">10/03/2026 - 12/06/2026</p>
                </div>
                <h4 className="text-sm text-gray-500">Full-Stack Developer</h4>
                <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                    <li>
                        Built a full-stack system to manage the repair workflow: vehicle
                        intake with client comments, mechanic diagnosis, and tracking of
                        repairs and required parts.
                    </li>
                    <li>
                        Implemented automatic cost calculation and PDF generation with the
                        final quote/invoice for the client.
                    </li>
                    <li>
                        Developed as part of a university project at TEC, collaborating with
                        a small team.
                    </li>
                </ul>
            </div>
            <h2 className="text-xl font-bold text-gray-700">Projects</h2>
            <ProjectCard 
                title="File manager made with Java" 
                image={GestorArchivos} 
                description="Assignment of contiguous blocks, FCB, superblock, MBR, bitmaps, and using the 
                            program through an interface with Linux commands"
                outcome="Simulates real file system internals (FCBs, SuperBlock, bitmaps) with 
                        byte-level serialization verifiable in a hex editor."
                githubUrl="https://github.com/2026-Semestre-1/proyecto-3-bryan"
            />

            <ProjectCard
                title="Vehicle Repair Shop Management"
                image={Taller}
                description="Full-stack system to manage a mechanic shop's repair workflow: 
                            vehicle intake, mechanic diagnosis, tracking of repairs and 
                            required parts, with automatic cost calculation and PDF quote 
                            generation."
                outcome="Built for a real mechanic shop client as a university project, 
                        streamlining the shop's paper-based process into a digital system 
                        with automatic pricing and client-ready invoices."
                githubUrl=""
            />
            <ProjectCard
                title="Qcarne Loyalty System"
                image={QCarne}
                description="Admin module for a loyalty stamp system: unique supervisor 
                            codes to validate qualifying purchases, worker management 
                            (CRUD), and an action history log for auditing."
                outcome="Built for a real meat products company as part of a small team, 
                        giving supervisors a simple way to award loyalty stamps and 
                        managers full visibility into worker actions."
                githubUrl=""

            />

            <CourseCard 
                title="AWS Essentials Building High Availability Architectures"
                institution="K-Lab"
                image={Klab}
                certificateUrl="https://www.linkedin.com/in/bryan-londo%C3%B1o-marchena-ba779525b/overlay/Certifications/711081994/treasury/?profileId=ACoAAEAChW8BAKFg-A1M_oaajbh_GAqQz5elh2g"
            />
            <CourseCard 
                title="Soft Skills and Leadership for Transformation."
                institution="Mejoremos Costa Rica"
                image={Mejoremos}
                certificateUrl="https://www.linkedin.com/in/bryan-londo%C3%B1o-marchena-ba779525b/overlay/Certifications/712174582/treasury/?profileId=ACoAAEAChW8BAKFg-A1M_oaajbh_GAqQz5elh2g"                
            />

            <CourseCard 
                title="Scrum Master Certification 2026 + Agile Scrum Certification"
                institution="Udemy"
                image={Udemy}
                certificateUrl="https://www.linkedin.com/in/bryan-londo%C3%B1o-marchena-ba779525b/overlay/Certifications/1100640050/treasury/?profileId=ACoAAEAChW8BAKFg-A1M_oaajbh_GAqQz5elh2g"                
            />   

            <CourseCard 
                title="Introduction to Git"
                institution="DataCamp"
                image={DataCamp}
                certificateUrl="https://www.datacamp.com/completed/statement-of-accomplishment/course/765d1ac6e0f65c4c3d49e01d51a17faaa8c8b383?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink"                
            />      

            <CourseCard 
                title="Networking Basics"
                institution="Cisco"
                image={Cisco}
                certificateUrl="https://www.credly.com/badges/0d3e02dd-688d-407b-82cb-46ef39516911"                
            />                             
        </div>
    )
}