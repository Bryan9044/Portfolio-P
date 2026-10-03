import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  image: string
  description: string
  outcome: string
  highlights: string[]
  githubUrl?: string
}

export default function ProjectCard({ title, image, description, outcome, highlights, githubUrl }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-950/5 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10 dark:hover:border-indigo-800">
      <div className="aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={`${title} project preview`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
        <p className="mt-4 border-l-2 border-indigo-400 pl-3 text-sm leading-6 text-slate-600 dark:border-indigo-500 dark:text-slate-300">{outcome}</p>
        <ul aria-label={`${title} highlights`} className="mt-4 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <li key={highlight} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200">
              {highlight}
            </li>
          ))}
        </ul>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-5 text-sm font-semibold text-indigo-800 transition hover:text-indigo-950 focus-visible:rounded focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 dark:text-indigo-300 dark:hover:text-indigo-200 dark:focus-visible:ring-indigo-700"
          >
            <FaGithub aria-hidden="true" className="h-5 w-5" />
            View source code <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  )
}