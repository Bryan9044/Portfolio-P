import { Brain, FileText, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import cvFile from '../assets/Bryan_Londono_CV.pdf'
import profilePicture from '../assets/profile_picture2.jpg'

const socialLinkClassName = 'flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-300 dark:focus-visible:ring-indigo-700'

export default function Header() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-6 shadow-xl shadow-indigo-950/5 backdrop-blur sm:p-10 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20">
      <div aria-hidden="true" className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-indigo-100/80 blur-2xl dark:bg-indigo-950/70" />
      <div className="relative flex flex-col gap-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
          <img
            src={profilePicture}
            alt="Bryan Londoño Marchena"
            className="h-32 w-32 shrink-0 rounded-[2rem] border-4 border-white object-cover shadow-lg shadow-indigo-950/10 ring-1 ring-indigo-100 sm:h-36 sm:w-36 dark:border-slate-800 dark:ring-indigo-900"
          />
          <div className="min-w-0 flex-1">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:ring-emerald-900">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to internship opportunities
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">Bryan Londoño Marchena</h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Computer Engineering student building thoughtful software and practical solutions.
            </p>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-slate-500 sm:justify-start dark:text-slate-400">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              Limón, Costa Rica · Instituto Tecnológico de Costa Rica
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a
                href="mailto:bryanlondo200415@gmail.com"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-950/15 transition hover:-translate-y-0.5 hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:ring-indigo-700"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                Contact me
              </a>
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-300 dark:focus-visible:ring-indigo-700"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                View CV
              </a>
              <a href="https://www.linkedin.com/in/bryan-londo%C3%B1o-marchena-ba779525b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={socialLinkClassName}>
                <FaLinkedin aria-hidden="true" className="h-5 w-5" />
              </a>
              <a href="https://github.com/Bryan9044" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={socialLinkClassName}>
                <FaGithub aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <section aria-labelledby="about-heading" className="border-t border-slate-200 pt-6 dark:border-slate-800">
          <h2 id="about-heading" className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-slate-100">
            About me <Brain aria-hidden="true" className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
            I am an active student at the Costa Rica Institute of Technology, currently in my final semester. During my studies, I have built skills in computer engineering and developed a curious, practical approach to solving problems. I enjoy learning continuously, collaborating with others, and finding thoughtful solutions. I am looking for an internship where I can contribute, gain professional experience, and keep growing as an engineer.
          </p>
        </section>
      </div>
    </header>
  )
}