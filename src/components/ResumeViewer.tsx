import { useState } from 'react';
import { motion } from 'framer-motion';
import { coursework, education, experience, profile, projects, skillCategories } from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY — a designed resume preview plus view / download actions. */
export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <>
      <SectionHeading kicker="Official Curriculum Vitae" title="The Full Story" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <CollapsibleSheet />
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight" style={{ color: 'var(--text-primary)' }}>
            Every episode, documented in detail.
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Education, coursework, web development internship experience, and full-stack projects.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-bold transition hover:opacity-90 shadow-md"
                style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)' }}
              >
                ▶ View Full PDF Resume
              </button>
            </Magnetic>
            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Srushti_Kendre_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold transition"
                style={{ color: 'var(--text-primary)' }}
              >
                ⤓ Download Resume (PDF)
              </a>
            </Magnetic>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl text-center border" style={{ borderColor: 'var(--border-color)', background: 'var(--border-color)' }}>
            {[
              { v: String(education.length), k: 'Education' },
              { v: String(projects.length), k: 'Projects' },
              { v: String(skillCategories.length), k: 'Skill Areas' },
            ].map((s) => (
              <div key={s.k} className="px-2 py-4" style={{ background: 'var(--bg-card)' }}>
                <dd className="font-display text-3xl leading-none" style={{ color: 'var(--text-primary)' }}>{s.v}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

/** On phones the sheet starts as a teaser so the page keeps its pace; desktop shows it in full. */
function CollapsibleSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${open ? 'max-h-[4000px]' : 'max-h-[560px]'}`}>
        <ResumeSheet />
      </div>
      {!open && (
        <div
          className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl pb-4 md:hidden"
          style={{ background: 'linear-gradient(to top, var(--bg-primary) 0%, var(--bg-primary) 40%, transparent 100%)' }}
        >
          <button type="button" onClick={() => setOpen(true)} className="glass min-h-11 rounded-full px-5 text-sm font-semibold shadow-lg" style={{ color: 'var(--text-primary)' }}>
            Read the full story ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return (
    <h4
      className="mb-3 mt-7 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 first:mt-0"
      style={{ borderBottom: '1px solid var(--border-color)' }}
    >
      {children}
    </h4>
  );
}

export function ResumeSheet() {
  return (
    <article
      className="relative overflow-hidden rounded-2xl p-6 sm:p-10 border shadow-lg"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 pb-6" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em]" style={{ color: 'var(--text-muted)' }}>STARRING</p>
          <h3 className="mt-1 font-display text-[clamp(2.2rem,4.4vw,3.4rem)] leading-[0.9] tracking-wide" style={{ color: 'var(--text-primary)' }}>
            {profile.fullName}
          </h3>
          <p className="mt-1 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
            {profile.headline}
          </p>
        </div>
        <div className="text-xs leading-relaxed sm:text-right" style={{ color: 'var(--text-secondary)' }}>
          <a href={`mailto:${profile.email}`} className="block hover:text-crimson-2 transition">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="block hover:text-crimson-2 transition">
            {profile.phone}
          </a>
          <div className="mt-1 space-x-2">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-crimson-2 transition">
              LinkedIn ↗
            </a>
            <span>·</span>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-crimson-2 transition">
              GitHub ↗
            </a>
          </div>
        </div>
      </header>

      <div className="grid gap-x-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <H>Education</H>
          {education.map((e) => (
            <div key={e.school} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {e.school}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{e.period}</p>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{e.place}</p>
              <p className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                {e.degree}
              </p>
            </div>
          ))}

          <H>Experience / Internship</H>
          {experience.map((x) => (
            <div key={x.company} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {x.company} — {x.role}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{x.period}</p>
              </div>
              <ul className="mt-2 space-y-1.5">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crimson-2" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Key Projects</H>
          {projects.map((p) => (
            <div key={p.id} className="mb-3">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{p.title}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{p.year}</p>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{p.stack.join(', ')}</p>
            </div>
          ))}
        </div>

        <div>
          <H>Technical Skills</H>
          <div className="space-y-2">
            {skillCategories.map((c) => (
              <p key={c.id} className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{c.title}: </span>
                {c.skills.map((s) => s.name).join(', ')}
              </p>
            ))}
          </div>

          <H>Relevant Coursework</H>
          <ul className="space-y-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
            {coursework.map((course) => (
              <li key={course} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-crimson-2" />
                {course}
              </li>
            ))}
          </ul>

          <H>Location &amp; Contact</H>
          <div className="space-y-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <p>{profile.location}</p>
            <p><a href={`mailto:${profile.email}`} className="hover:text-crimson-2 transition">{profile.email}</a></p>
            <p><a href={`tel:${profile.phone}`} className="hover:text-crimson-2 transition">{profile.phone}</a></p>
            <p><a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-crimson-2 transition">linkedin.com/in/srushti-kendre ↗</a></p>
            <p><a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-crimson-2 transition">github.com/SKendre11 ↗</a></p>
          </div>
        </div>
      </div>
    </article>
  );
}
