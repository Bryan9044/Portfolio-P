import { ArrowUpRight, FileText } from 'lucide-react'

interface CourseCardProps {
  title: string
  institution: string
  image?: string
  certificateUrl?: string
}

export default function CourseCard({ title, institution, image, certificateUrl }: CourseCardProps) {
  return (
    <article className="flex min-h-28 items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 transition hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-indigo-800">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-14 w-16 shrink-0 object-contain"
        />
      )}
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-bold leading-5 text-slate-900 dark:text-slate-100">{title}</h3>
        <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">{institution}</p>
      </div>
      {certificateUrl && (
        <a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} certificate from ${institution} (opens in a new tab)`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-indigo-800 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 dark:text-indigo-300 dark:hover:bg-slate-800 dark:focus-visible:ring-indigo-700"
        >
          <FileText aria-hidden="true" className="h-5 w-5" />
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      )}
    </article>
  )
}