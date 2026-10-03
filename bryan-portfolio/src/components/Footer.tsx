import SkillBadge from './SkillBadge'

const hobbyCardClassName = 'rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-900/70'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 border-t border-slate-200 pt-10 dark:border-slate-800">
      <section aria-labelledby="story-heading" className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/80 p-6 sm:p-8 dark:border-slate-800 dark:from-slate-900 dark:to-indigo-950/30">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">The person behind the code</p>
        <h2 id="story-heading" className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white">How I got into Computer Engineering</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
          At first, I thought Computer Engineering was about repairing computers. As I learned more, I discovered programming, infrastructure, networking, cloud, and many other areas of IT—and that inspired me to study at the Costa Rica Institute of Technology. I started with no programming experience, but step by step I learned how to build software, manage my time, and collaborate with a team. It has been a rewarding journey, and I am excited to bring what I have learned into my next professional experience.
        </p>
      </section>

      <section aria-labelledby="interests-heading" className="flex flex-col gap-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">Beyond the screen</p>
          <h2 id="interests-heading" className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">A few things I enjoy</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className={hobbyCardClassName}>
            <h3 className="font-bold text-slate-900 dark:text-white">Fishing</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">I love fishing from shore or by boat, especially exploring the beaches and river mouths near Limón with my grandpa. Even when I do not catch anything, being near the water makes me happy.</p>
          </article>
          <article className={hobbyCardClassName}>
            <h3 className="font-bold text-slate-900 dark:text-white">Staying active</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">I work out at a local gym and keep a home routine for busy days. Exercise helps me feel better and maintain a healthy balance.</p>
          </article>
          <article className={hobbyCardClassName}>
            <h3 className="font-bold text-slate-900 dark:text-white">Learning new things</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">When something catches my interest, I like to dive into it—whether it is cooking, soccer, MMA, AI, or a new technical topic.</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="soft-skills-heading" className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white/70 px-5 py-7 text-center dark:border-slate-800 dark:bg-slate-900/60">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">How I work</p>
          <h2 id="soft-skills-heading" className="mt-1 text-xl font-bold text-slate-950 dark:text-white">Soft skills</h2>
        </div>
        <ul className="flex flex-wrap justify-center gap-2.5">
          <SkillBadge label="Team player" />
          <SkillBadge label="Communicative" />
          <SkillBadge label="Adaptable" />
          <SkillBadge label="Autonomous" />
          <SkillBadge label="Empathetic" />
          <SkillBadge label="Flexible" />
        </ul>
      </section>

      <p className="text-center text-xs text-slate-500 dark:text-slate-400">Thanks for taking the time to explore my portfolio.</p>
    </footer>
  )
}