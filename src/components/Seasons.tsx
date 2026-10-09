import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { seasons } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import EpisodeCard from './EpisodeCard';
import { RailButtons } from './Rail';

export default function Seasons() {
  const [active, setActive] = useState(0);
  const season = seasons[active];
  const rail = useRef<HTMLDivElement>(null);

  return (
    <>
      <SectionHeading
        kicker={`${seasons.length} Seasons`}
        title="My Journey"
        aside={<p className="max-w-xs text-sm" style={{ color: 'var(--text-secondary)' }}>Every stage of academic and development growth, documented as a season — select one to explore its episodes.</p>}
      />

      {/* Season Selector Tabs */}
      <div className="rail gutter mb-8 flex gap-2 overflow-x-auto" role="tablist" aria-label="Seasons">
        {seasons.map((s, i) => (
          <button
            key={s.number}
            role="tab"
            aria-selected={i === active}
            type="button"
            onClick={() => {
              setActive(i);
              rail.current?.scrollTo({ left: 0, behavior: 'smooth' });
            }}
            className={`relative shrink-0 rounded-full px-5 py-2.5 text-left transition ${
              i === active
                ? 'font-bold'
                : 'opacity-70 hover:opacity-100'
            }`}
            style={{
              color: i === active ? 'var(--bg-primary)' : 'var(--text-primary)',
            }}
          >
            {i === active && (
              <motion.span
                layoutId="season-pill"
                className="absolute inset-0 rounded-full shadow-md"
                style={{ background: 'var(--text-primary)' }}
                transition={{ duration: 0.45, ease: EASE }}
              />
            )}
            <span className="relative block text-[10px] font-bold tracking-[0.24em] opacity-80">SEASON {String(s.number).padStart(2, '0')}</span>
            <span className="relative block whitespace-nowrap text-sm font-semibold">{s.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={season.number}
          initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="gutter mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-4xl tracking-wide sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              <span className="text-crimson-2 mr-3 font-mono text-3xl sm:text-4xl">S{String(season.number).padStart(2, '0')}</span>
              {season.title}
            </h3>
            <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              {season.period} · {season.episodes.length} Episodes
            </span>
          </div>
          <p className="gutter max-w-3xl text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {season.synopsis}
          </p>

          <div className="group/rail relative">
            <div ref={rail} className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto py-6 [perspective:1200px]">
              {season.episodes.map((e, i) => (
                <EpisodeCard key={e.code} episode={e} index={i} />
              ))}
            </div>
            <RailButtons rail={rail} />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
