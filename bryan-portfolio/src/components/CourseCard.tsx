import { FileText} from "lucide-react";

interface CourseCardProps {
    title: string;
    institution: string;
    image?: string; 
    certificateUrl?: string; 
}

export default function CourseCard({ title, institution, image, certificateUrl }: CourseCardProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-slate-200 rounded-lg p-3 w-full max-w-2xl">
            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4">
                {image && <img src={image} alt={title} className="w-20 h-16 object-contain shrink-0" />}
                <div className="text-center sm:text-left">
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-100">{title}</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300">{institution}</p>
                </div>
            </div>
            {certificateUrl && (
                <a href={certificateUrl} target="_blank" rel="noopener noreferrer" aria-label="View certificate">
                    <FileText className="w-6 h-6 text-gray-500 dark:text-slate-100" />
                </a>
            )}
        </div>
    );
}