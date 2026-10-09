import { motion } from 'framer-motion';
import type { Episode } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { PosterBackdrop } from './Poster';

export default function EpisodeCard({ episode, index }: { episode: Episode; index: number }) {
  const [season, ep] = episode.code.split(' ');
  return (
    <motion.article
      className="w-[80vw] shrink-0 snap-start sm:w-[52vw] md:w-[38vw] lg:w-[30vw] xl:w-[26vw]"
      initial={{ opacity: 0, y: 30, rotateY: -6 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={6} className="group h-full rounded-2xl">
        <div
          className="flex h-full flex-col overflow-hidden rounded-2xl border shadow-lg transition duration-500 hover:border-crimson-2/60"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="relative aspect-video overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease-cine)] group-hover:scale-105">
              <PosterBackdrop palette={episode.palette}>
                <span className="absolute -bottom-6 right-2 font-display text-[7.5rem] leading-none text-white/[0.09]">{ep}</span>
              </PosterBackdrop>
            </div>
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="rounded bg-black/50 px-2 py-0.5 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur">{season}</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/90">EPISODE {ep.replace('E', '')}</span>
            </div>
            <h4 className="absolute bottom-4 left-4 right-4 font-display text-2xl sm:text-3xl leading-none tracking-wide text-white drop-shadow-md">{episode.title}</h4>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="mb-2 flex items-center justify-between text-[11px]">
              <span className="font-semibold text-crimson-2">{episode.runtime}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-black/20 dark:border-white/20 text-[10px] transition group-hover:bg-crimson group-hover:text-white group-hover:border-crimson">
                ▶
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {episode.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {episode.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-medium border"
                  style={{
                    background: 'var(--bg-card-2)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
