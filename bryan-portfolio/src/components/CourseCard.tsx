import { FileText} from "lucide-react";

interface CourseCardProps {
    title: string;
    institution: string;
    image?: string; 
    certificateUrl?: string; 
}

export default function CourseCard({ title, institution, image, certificateUrl }: CourseCardProps) {
    return (
        <div className="flex items-center justify-between gap-4 border border-gray-200 rounded-lg p-3 w-full max-w-2xl">
            <div className="flex items-center gap-4">
                {image && <img src={image} alt={title} className="w-20 h-16 object-contain" />}
                <div>
                    <h4 className="text-sm font-bold text-gray-700">{title}</h4>
                    <p className="text-xs text-gray-500">{institution}</p>
                </div>
            </div>
            {certificateUrl && (
                <a href={certificateUrl} target="_blank" rel="noopener noreferrer" aria-label="View certificate">
                    <FileText className="w-6 h-6 text-gray-500" />
                </a>
            )}
        </div>
    );
}