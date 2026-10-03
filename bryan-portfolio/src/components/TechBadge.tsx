import type { IconType } from 'react-icons'

interface TechBadgeProps {
  icon: IconType
  label: string
}

export default function TechBadge({ icon: Icon, label }: TechBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-indigo-100 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
      <Icon aria-hidden="true" className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
      <span>{label}</span>
    </div>
  )
}
