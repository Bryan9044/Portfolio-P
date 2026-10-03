import { VscPython } from 'react-icons/vsc'
import { SiCplusplus, SiMysql, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Cisco from '../assets/cisco.png'
import DataCamp from '../assets/dataCamp.png'
import GestorArchivos from '../assets/GestorArchivos.png'
import Klab from '../assets/k-lab.png'
import Mejoremos from '../assets/mejorCR.jpg'
import QCarne from '../assets/QCarne.png'
import Taller from '../assets/TallerF.jpeg'
import Udemy from '../assets/udemy.png'
import CourseCard from './CourseCard'
import ProjectCard from './ProjectCard'
import TechBadge from './TechBadge'

const sectionHeadingClassName = 'text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white'
const sectionEyebrowClassName = 'text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300'
const timelineCardClassName = 'relative rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-950/5 sm:p-6 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/10'
const timelineDotClassName = 'absolute -left-[2.15rem] top-7 h-4 w-4 rounded-full border-4 border-[#f7f8fc] bg-indigo-600 ring-1 ring-indigo-200 dark:border-[#0c1220] dark:bg-indigo-400 dark:ring-indigo-800'

export default function Body() {
  return (
    <main className="flex flex-col gap-12 sm:gap-16">
      <section aria-labelledby="technology-heading" className="flex flex-col gap-4">
        <div>
          <p className={sectionEyebrowClassName}>My toolkit</p>
          <h2 id="technology-heading" className={`${sectionHeadingClassName} mt-1`}>Technologies I use</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <TechBadge icon={VscPython} label="Python" />
          <TechBadge icon={SiCplusplus} label="C++" />
          <TechBadge icon={SiTypescript} label="TypeScript" />
          <TechBadge icon={SiReact} label="React" />
          <TechBadge icon={SiNodedotjs} label="Node.js" />
          <TechBadge icon={SiTailwindcss} label="Tailwind CSS" />
          <TechBadge icon={SiMysql} label="MySQL" />
        </div>
      </section>

      <section aria-labelledby="experience-heading" className="flex flex-col gap-6">
        <div>
          <p className={sectionEyebrowClassName}>Where I have contributed</p>
          <h2 id="experience-heading" className={`${sectionHeadingClassName} mt-1`}>Experience</h2>
        </div>
        <div className="ml-3 flex flex-col gap-5 border-l-2 border-indigo-200 pl-6 dark:border-indigo-900">
          <article className={timelineCardClassName}>
            <span aria-hidden="true" className={timelineDotClassName} />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Qcarne Loyalty &amp; Ticket Management System</h3>
                <p className="mt-1 text-sm font-medium text-indigo-800 dark:text-indigo-300">Full-Stack Developer</p>
              </div>
              <span className="w-fit shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200">
                <time dateTime="2026-02-13">Feb 13</time> – <time dateTime="2026-03-16">Mar 16, 2026</time>
              </span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 marker:text-indigo-500 dark:text-slate-300">
              <li>Built the full-stack admin module for a loyalty stamp system, including unique supervisor codes to validate qualifying purchases and award stamps.</li>
              <li>Implemented worker management (CRUD) and an action history log for auditing and tracking.</li>
              <li>Collaborated with a small team on a real-world project for a meat products company.</li>
            </ul>
          </article>

          <article className={timelineCardClassName}>
            <span aria-hidden="true" className={timelineDotClassName} />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Vehicle Repair Shop Management System</h3>
                <p className="mt-1 text-sm font-medium text-indigo-800 dark:text-indigo-300">Full-Stack Developer</p>
              </div>
              <span className="w-fit shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200">
                <time dateTime="2026-03-15">Mar 15</time> – <time dateTime="2026-06-12">Jun 12, 2026</time>
              </span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 marker:text-indigo-500 dark:text-slate-300">
              <li>Built a full-stack system for the repair workflow: vehicle intake, mechanic diagnosis, repairs, and required parts.</li>
              <li>Implemented automatic cost calculation and PDF generation for client quotes and invoices.</li>
              <li>Developed as part of a university project at TEC, collaborating with a small team.</li>
            </ul>
          </article>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="flex flex-col gap-6">
        <div>
          <p className={sectionEyebrowClassName}>Selected work</p>
          <h2 id="projects-heading" className={`${sectionHeadingClassName} mt-1`}>Projects</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <ProjectCard
            title="File Manager in Java"
            image={GestorArchivos}
            description="A file-system simulator with contiguous block allocation, FCBs, a superblock, MBR, bitmaps, and a Linux-command-inspired interface."
            outcome="Models file-system internals with byte-level serialization that can be inspected in a hex editor."
            highlights={['Java', 'File systems', 'Operating systems']}
            githubUrl="https://github.com/2026-Semestre-1/proyecto-3-bryan"
          />
          <ProjectCard
            title="Vehicle Repair Shop Management"
            image={Taller}
            description="A full-stack system for vehicle intake, mechanic diagnosis, repair tracking, parts, automatic cost calculation, and PDF quotes."
            outcome="Created for a real mechanic shop client to digitize a paper-based workflow and produce client-ready invoices."
            highlights={['Full-stack', 'Workflow management', 'PDF generation']}
          />
          <ProjectCard
            title="Qcarne Loyalty System"
            image={QCarne}
            description="An admin module for a loyalty stamp system with supervisor codes, worker management, and an action history log."
            outcome="Built for a real meat products company, helping supervisors award loyalty stamps and managers track worker actions."
            highlights={['Full-stack', 'Loyalty system', 'Audit history']}
          />
        </div>
      </section>

      <section aria-labelledby="courses-heading" className="flex flex-col gap-6">
        <div>
          <p className={sectionEyebrowClassName}>Learning in progress</p>
          <h2 id="courses-heading" className={`${sectionHeadingClassName} mt-1`}>Courses &amp; certifications</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <CourseCard
            title="AWS Essentials: Building High Availability Architectures"
            institution="K-Lab"
            image={Klab}
            certificateUrl="https://www.linkedin.com/in/bryan-londo%C3%B1o-marchena-ba779525b/overlay/Certifications/711081994/treasury/?profileId=ACoAAEAChW8BAKFg-A1M_oaajbh_GAqQz5elh2g"
          />
          <CourseCard
            title="Soft Skills and Leadership for Transformation"
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
      </section>
    </main>
  )
}