import { useRef } from 'react';
import { motion } from 'framer-motion';
import { topPicks } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, SectionHeading } from './fx';
import { PosterBackdrop } from './Poster';
import { RailButtons } from './Rail';

export default function TopPicks() {
  const rail = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();

  return (
    <>
      <SectionHeading kicker="Featured Highlights" title="Top Picks for You" />
      <div className="group/rail relative">
        <div ref={rail} className="rail gutter flex snap-x snap-mandatory gap-2 overflow-x-auto py-6">
          {topPicks.map((pick, i) => (
            <motion.div
              key={pick.title}
              className="group relative flex h-[260px] shrink-0 snap-start items-end sm:h-[300px] cursor-pointer"
              onClick={() => scrollTo(`#${pick.section}`)}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px -5% 0px 0px' }}
              transition={{ duration: 0.7, delay: Math.min(i, 5) * 0.06, ease: EASE }}
            >
              <span
                aria-hidden
                className="text-outline -mr-6 select-none font-display leading-[0.78] transition duration-500 group-hover:[-webkit-text-stroke-color:rgba(255,61,90,0.85)] sm:-mr-8"
                style={{ fontSize: i === 9 ? 'clamp(9rem, 22vw, 15rem)' : 'clamp(11rem, 26vw, 19rem)', letterSpacing: i === 9 ? '-0.06em' : 0 }}
              >
                {i + 1}
              </span>
              <div className="relative z-10 h-[85%] w-[150px] overflow-hidden rounded-xl shadow-[-12px_0_30px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition duration-500 group-hover:-translate-y-2 group-hover:ring-crimson-2 sm:w-[185px]">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <PosterBackdrop palette={pick.palette} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-3.5 bg-gradient-to-t from-black/80 via-transparent to-black/20">
                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/80">{pick.label}</span>
                  <div>
                    <p className="font-display text-[1.65rem] leading-[0.92] tracking-wide text-white">{pick.title}</p>
                    <p className="mt-1.5 text-[11px] leading-snug text-white/70">{pick.detail}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <RailButtons rail={rail} />
      </div>
    </>
  );
}
