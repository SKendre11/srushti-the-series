import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillCategories, skillEvidence, type Skill } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

const HUES = ['#ff3d5a', '#4cc9ff', '#46e3a8', '#ffb547', '#b98bff'];

export default function Skills() {
  const [cat, setCat] = useState(0);
  const category = skillCategories[cat];
  const hue = HUES[cat % HUES.length];

  return (
    <>
      <SectionHeading
        kicker="Technical Stack"
        title="Technical Skills"
        aside={<p className="max-w-xs text-sm" style={{ color: 'var(--text-secondary)' }}>Hover or tap any skill to see verified cross-references across project implementations.</p>}
      />

      <div className="gutter grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
        {/* Genre / Category List */}
        <div className="rail -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0" role="tablist" aria-label="Skill categories">
          {skillCategories.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={i === cat}
              onClick={() => setCat(i)}
              className="group relative shrink-0 rounded-xl px-4 py-3 text-left transition lg:px-5"
              style={{
                color: i === cat ? 'var(--text-primary)' : 'var(--text-muted)',
              }}
            >
              {i === cat && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-xl border shadow-sm"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-color-strong)',
                  }}
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
              {i === cat && (
                <motion.span layoutId="skill-bar" className="absolute bottom-2.5 left-0 top-2.5 hidden w-[3.5px] rounded lg:block" style={{ background: hue }} />
              )}
              <span className="relative block font-display text-2xl tracking-wide lg:text-3xl">{c.title}</span>
              <span className="relative hidden text-xs opacity-75 lg:block">
                {c.skills.length} skills · {c.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div key={category.id} initial="hidden" animate="show" exit="exit" transition={{ staggerChildren: 0.04 }}>
              <motion.p
                className="mb-5 text-sm"
                style={{ color: 'var(--text-secondary)' }}
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 }, exit: { opacity: 0 } }}
              >
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{category.title}</span> — {category.subtitle}
              </motion.p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((s) => (
                  <SkillCard key={s.name} skill={s} hue={hue} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function SkillCard({ skill, hue }: { skill: Skill; hue: string }) {
  const [open, setOpen] = useState(false);
  const evidence = skillEvidence[skill.name];

  return (
    <motion.button
      type="button"
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95, filter: 'blur(6px)' },
        show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: EASE } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
      }}
      whileHover={{ y: -5 }}
      className="group relative flex min-h-[148px] flex-col overflow-hidden rounded-2xl p-4 text-left border shadow-sm transition-shadow duration-300"
      style={{
        background: 'var(--bg-card)',
        borderColor: open ? hue : 'var(--border-color)',
        boxShadow: open ? `0 14px 40px -10px ${hue}44` : undefined,
      }}
    >
      <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-40" style={{ background: hue }} />
      <motion.span
        className="relative flex h-12 w-12 items-center justify-center rounded-xl font-display text-2xl tracking-wide shadow-sm"
        style={{ background: `${hue}18`, color: hue, border: `1px solid ${hue}44` }}
        animate={open ? { rotate: [0, -6, 6, 0], scale: 1.06 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        aria-hidden
      >
        {skill.mono}
      </motion.span>
      <span className="relative mt-4 flex items-center gap-2 text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>
        {skill.name}
        {skill.note && (
          <span className="rounded px-1.5 py-px text-[9px] font-bold uppercase tracking-wider text-black" style={{ background: hue }}>
            {skill.note}
          </span>
        )}
      </span>
      <AnimatePresence initial={false}>
        {open && evidence && (
          <motion.span
            className="relative mt-2 block text-[11px] leading-snug"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {evidence.join(' · ')}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
