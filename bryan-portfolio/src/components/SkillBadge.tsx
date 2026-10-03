interface SkillBadgeProps {
  label: string
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <li className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-900 dark:border-indigo-900 dark:bg-indigo-950/70 dark:text-indigo-200">
      {label}
    </li>
  )
}
