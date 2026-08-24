

interface SkillBadgeProps {
    label: string;
}


export default function SkillBadge({ label }: SkillBadgeProps) {
    return (
        <div className="bg-indigo-200 rounded-full p-2 w-fit flex items-center gap-2 text-center mb-7">
            <p className="text-sm text-slate-600">{label}</p>
        </div>
    )
}
