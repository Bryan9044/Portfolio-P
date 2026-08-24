import type { IconType } from "react-icons";


interface TechBadgeProps {
    icon: IconType;
    label: string;
}


export default function TechBadge({ icon: Icon, label }: TechBadgeProps) {
    return (
        <div className="bg-indigo-200 rounded-full p-2 w-fit flex items-center gap-2 dark:bg-indigo-400">
            <Icon className="w-6 h-6" />
            <p className="text-sm text-gray-500 dark:text-slate-300 ">{label}</p>
        </div>
    )
}
