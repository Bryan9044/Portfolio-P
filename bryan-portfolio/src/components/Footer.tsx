import SkillBadge from "./SkillBadge"

export default function Footer() {
    return (
        <div className="flex flex-col gap-4 mx-auto max-w-3xl mt-2">
            <h2 className="text-lg font-bold text-slate-900 text-center dark:text-slate-100">How I Got Into Computer Engineering</h2>
            <p className="text-sm text-slate-800 dark:text-slate-300">
                At first I thought that Computer Engineering was about repairing computers,
                but then I researched and understood that CE was about making programs,
                infrastructure, networking, cloud, and other areas in IT, and this became
                an exciting idea to begin studying Computer Engineering at the Tecnológico
                de Costa Rica. At the beginning it was very hard because I had no experience
                at all in programming languages, but step by step I learned how to make
                programs, what I needed to build them, and how to manage not just my time
                but also my team and all the ideas on the table. It's been a great journey,
                and now my next step is bringing all this knowledge to my next job.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-800 space-y-1 dark:text-slate-300">
                <li>
                    Fishing: One of my favorite hobbies is fishing. I like shore fishing, and at the same
                    time I like to go on a boat and try to catch different fish. Most of my fishing trips
                    are with my grandpa — I like to go with him to all the beaches near Limón and river
                    mouths. Usually I don't catch anything, but I feel happy just being near the water
                    and nature.
                </li>

                <li>
                    Gym: I usually work out at a local gym in downtown Limón, but when I have limited time I like
                    to do my routine at home with all the equipment that I have. I think everyone in the world
                    should exercise at least two days a week. This would make you feel better and have a better quality of life.
                </li>

                <li>
                    Learning new things: Whenever something catches my interest, I tend to dive
                    deep into it for a while — sometimes a whole week — until I feel I understand
                    it well. This happened with things outside programming too, like cooking recipes,
                    soccer, MMA, and AI.
                </li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900  text-center dark:text-slate-100">Soft skills</h2>
            <div className="flex flex-wrap gap-3 justify-center">
                <SkillBadge label="Team player" />
                <SkillBadge label="Communicative" />
                <SkillBadge label="Adaptable" />
                <SkillBadge label="Autonomous" />
                <SkillBadge label="Empathetic" />
                <SkillBadge label="Flexible" />
            </div>
        </div>
    )
}