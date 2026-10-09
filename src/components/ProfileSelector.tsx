import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile, viewerProfiles, type ProfileId } from '../data/portfolio';
import { EASE } from './fx';

export function ProfileAvatar({ id, size = 'lg' }: { id: ProfileId; size?: 'sm' | 'lg' }) {
  const p = viewerProfiles.find((v) => v.id === id) ?? viewerProfiles[0];
  const box = size === 'lg' ? 'h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-2xl' : 'h-8 w-8 rounded-lg';
  const glyph: Record<ProfileId, string> = { recruiter: '💼', developer: '</>', explorer: '✦' };

  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden font-display text-bone shadow-lg ${box}`}
      style={{ background: `linear-gradient(145deg, ${p.color}33, #0b0b10 120%)`, border: `1px solid ${p.color}55` }}
    >
      <span className={size === 'lg' ? (id === 'developer' ? 'font-mono text-3xl sm:text-4xl text-[#46e3a8]' : 'text-4xl sm:text-5xl') : 'text-xs'}>
        {glyph[id]}
      </span>
    </span>
  );
}

export default function ProfileSelector({ onPick }: { onPick: (id: ProfileId) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onPick('developer');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onPick]);

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-y-auto bg-ink px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
      transition={{ duration: 0.7, ease: EASE }}
      role="dialog"
      aria-label="Who's watching?"
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(229,19,43,0.18),transparent_70%)]" />
      <motion.h2
        className="relative mb-3 text-center font-sans text-3xl font-medium tracking-tight text-bone sm:text-5xl"
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Who&apos;s watching?
      </motion.h2>
      <motion.p
        className="relative mb-12 text-center text-sm text-mist max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      >
        Select your profile to begin the series. Each perspective highlights what matters most to you.
      </motion.p>
      <motion.ul
        className="relative flex flex-wrap justify-center gap-6 sm:gap-10"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        {viewerProfiles.map((p) => (
          <motion.li key={p.id} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}>
            <button type="button" onClick={() => onPick(p.id)} data-cursor="play" className="group flex flex-col items-center gap-3 text-center">
              <span className="relative rounded-2xl ring-2 ring-transparent transition duration-300 group-hover:scale-105 group-hover:ring-bone group-focus-visible:ring-bone">
                <ProfileAvatar id={p.id} />
              </span>
              <span className="font-sans text-base font-semibold text-mist transition group-hover:text-bone sm:text-lg">{p.name}</span>
              <span className="max-w-[11rem] text-[12px] leading-snug text-smoke">{p.blurb}</span>
            </button>
          </motion.li>
        ))}
      </motion.ul>
      <p className="relative mt-14 max-w-md text-center text-xs leading-relaxed text-smoke">
        Every profile features the verified documentary and journey of {profile.displayName} — tailored for your focus.
      </p>
    </motion.div>
  );
}
