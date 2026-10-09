import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { education, profile, projects, type ProfileId } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: EASE } },
};

export default function Hero({
  onPlay,
  onResume,
  profileId,
  isDark,
}: {
  onPlay: () => void;
  onResume: () => void;
  profileId: ProfileId;
  isDark: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  // Pointer parallax (desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const imgRotY = useTransform(px, [-1, 1], [-4, 4]);
  const imgRotX = useTransform(py, [-1, 1], [3, -3]);
  const imgShiftX = useTransform(px, [-1, 1], [-10, 10]);
  const chipX = useTransform(px, [-1, 1], [18, -18]);
  const chipY = useTransform(py, [-1, 1], [12, -12]);
  const glowX = useTransform(px, [-1, 1], ['-6%', '6%']);

  const meta = [
    'B.Tech CSE',
    `${projects.length} Verified Projects`,
    education[0].period,
  ];

  const floating = [
    { text: 'Full-Stack Developer', sub: 'MERN Stack', pos: 'left-[2%] top-[28%]', depth: 1 },
    { text: 'React · Node.js', sub: 'Core Architecture', pos: 'right-[0%] top-[18%]', depth: -1 },
    { text: 'MongoDB · MySQL', sub: 'Databases', pos: 'right-[4%] bottom-[22%]', depth: 0.6 },
  ];

  const textColor = isDark ? '#f4f1ec' : '#0e0e13';
  const mutedColor = isDark ? '#a7a6ad' : '#6d6c75';

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      style={{ background: isDark ? '#07070a' : '#faf9f7' }}
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* atmosphere */}
      <motion.div aria-hidden className="absolute inset-0" style={{ x: glowX }}>
        <div className="absolute right-[-10%] top-[-10%] h-[90vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.38),rgba(229,19,43,0.08)_55%,transparent)] blur-2xl lg:right-[-4%] lg:w-[60vw]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(90,20,120,0.22),transparent)] blur-2xl" />
      </motion.div>
      <Particles className="z-[1]" color={isDark ? '255,90,110' : '229,19,43'} />
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <span className="light-streak left-[40%] top-[22%] w-[50vw]" style={{ animationDelay: '1.2s' }} />
        <span className="light-streak left-[30%] top-[64%] w-[40vw]" style={{ animationDelay: '3.6s' }} />
        <span className="light-streak left-[55%] top-[44%] w-[30vw]" style={{ animationDelay: '5.2s' }} />
      </div>

      {/* portrait */}
      <motion.div
        className="absolute inset-x-0 top-12 z-[2] flex h-[64svh] items-end justify-center sm:h-[70svh] lg:bottom-0 lg:left-auto lg:right-[3vw] lg:top-20 lg:h-auto lg:w-[54vw] xl:right-[6vw] xl:w-[48vw]"
        style={{ y: imgY, scale: imgScale, opacity: fade }}
      >
        <motion.div
          className="relative h-full w-full lg:h-[86vh] flex items-end justify-center"
          style={{ rotateY: imgRotY, rotateX: imgRotX, x: imgShiftX, transformPerspective: 1200 }}
          initial={{ clipPath: 'inset(100% -30% -10% -30%)', opacity: 0 }}
          animate={{ clipPath: 'inset(-30% -30% -10% -30%)', opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
        >
          {/* rim light ring */}
          <div aria-hidden className="absolute bottom-[8%] left-1/2 h-[78%] w-[78%] -translate-x-1/2 rounded-full border border-crimson-2/20 shadow-[0_0_120px_rgba(229,19,43,0.35),inset_0_0_80px_rgba(229,19,43,0.18)]" />
          <img
            src={profile.portrait.src}
            srcSet={profile.portrait.srcSet}
            sizes="(max-width: 1024px) 100vw, 54vw"
            alt={profile.portrait.alt}
            className="relative bottom-0 max-h-[82vh] w-auto max-w-[90vw] object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] [mask-image:linear-gradient(to_bottom,black_65%,transparent_98%)] rounded-2xl"
          />

          {/* floating UI chips */}
          {floating.map((f, i) => (
            <FloatChip key={f.text} {...f} index={i} mx={chipX} my={chipY} isDark={isDark} />
          ))}
        </motion.div>
      </motion.div>

      {/* readability gradients */}
      {isDark ? (
        <>
          <div aria-hidden className="absolute inset-x-0 top-[40svh] z-[3] h-[36svh] bg-gradient-to-b from-transparent via-ink/70 to-ink lg:hidden" />
          <div aria-hidden className="absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(7,7,10,0.7)_32%,transparent_58%)] lg:block" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-ink to-transparent" />
        </>
      ) : (
        <>
          <div aria-hidden className="absolute inset-x-0 top-[40svh] z-[3] h-[36svh] bg-gradient-to-b from-transparent via-[#faf9f7]/70 to-[#faf9f7] lg:hidden" />
          <div aria-hidden className="absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,#faf9f7_0%,rgba(250,249,247,0.7)_32%,transparent_58%)] lg:block" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-[#faf9f7] to-transparent" />
        </>
      )}

      {/* copy */}
      <motion.div
        className="gutter relative z-[4] flex min-h-[100svh] flex-col justify-end pb-16 pt-[54svh] sm:pb-20 lg:max-w-[54vw] lg:justify-center lg:pb-0 lg:pt-24"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-2 text-lg">
          <SeriesMark isDark={isDark} />
        </motion.div>
        <motion.h1 variants={item} className="font-display leading-[0.82] tracking-[0.02em]" style={{ fontSize: 'clamp(3.8rem, 11vw, 10.5rem)', color: textColor }}>
          <span className="shimmer-text">{profile.fullName}</span>
        </motion.h1>
        <motion.p variants={item} className="mt-1 font-sans text-xs font-bold tracking-[0.55em] text-crimson-2 sm:text-sm">
          {profile.seriesTag}
        </motion.p>

        <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium" style={{ color: mutedColor }}>
          <span className="rounded border px-1.5 py-px text-[10px] font-bold tracking-wider" style={{ color: textColor, borderColor: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)' }}>
            STUDENT
          </span>
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full" style={{ background: mutedColor }} />}
              {m}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-3 flex items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] border"
            style={{
              borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)',
              color: isDark ? '#46e3a8' : '#0b8252',
              background: isDark ? 'rgba(70,227,168,0.08)' : 'rgba(11,130,82,0.08)',
            }}
          >
            Perspective: {profileId.toUpperCase()}
          </span>
        </motion.div>
        <motion.p variants={item} className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.24em]" style={{ color: isDark ? '#46e3a8' : '#0b8252' }}>
          {profile.headline}
        </motion.p>

        <motion.p variants={item} className="mt-4 max-w-xl text-[15px] leading-relaxed sm:text-base" style={{ color: isDark ? 'rgba(244,241,236,0.85)' : '#3a3940' }}>
          {profile.intro}
        </motion.p>

        {/* Buttons & Links */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onPlay}
              className="flex min-h-12 items-center gap-2.5 rounded-md px-6 py-3 text-[15px] font-bold transition shadow-md sm:px-7"
              style={{ background: isDark ? '#f4f1ec' : '#0e0e13', color: isDark ? '#07070a' : '#f4f1ec' }}
            >
              <span className="text-base">▶</span> Play Intro
            </button>
          </Magnetic>
          <Magnetic>
            <button
              type="button"
              onClick={() => scrollTo('#originals')}
              className="glass flex min-h-12 items-center gap-2.5 rounded-md px-6 py-3 text-[15px] font-semibold transition sm:px-7"
              style={{ color: textColor }}
            >
              <span className="text-lg leading-none">＋</span> Explore Projects
            </button>
          </Magnetic>
          <Magnetic>
            <button
              type="button"
              onClick={onResume}
              className="glass flex min-h-12 items-center gap-2.5 rounded-md px-5 py-3 text-[15px] font-semibold transition sm:px-6"
              style={{ color: textColor }}
            >
              <span className="text-base">⤓</span> View Resume
            </button>
          </Magnetic>
          <div className="flex items-center gap-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border text-base transition hover:border-crimson-2 hover:text-crimson-2"
              style={{
                borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
                color: textColor,
              }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border text-base transition hover:border-crimson-2 hover:text-crimson-2"
              style={{
                borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
                color: textColor,
              }}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5]" style={{ opacity: blackout, background: isDark ? '#07070a' : '#faf9f7' }} />
    </section>
  );
}

type MV = ReturnType<typeof useTransform<number, number>>;

function FloatChip({ text, sub, pos, depth, index, mx, my, isDark }: { text: string; sub: string; pos: string; depth: number; index: number; mx: MV; my: MV; isDark: boolean }) {
  const x = useTransform(mx, (n: number) => n * depth);
  const y = useTransform(my, (n: number) => n * depth);
  return (
    <motion.div
      className={`glass absolute hidden rounded-xl px-4 py-2.5 md:block ${pos}`}
      style={{ x, y }}
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay: 1.2 + index * 0.18, ease: EASE }}
    >
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}>
        <p className="text-sm font-semibold" style={{ color: isDark ? '#f4f1ec' : '#0e0e13' }}>{text}</p>
        <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: isDark ? '#a7a6ad' : '#6d6c75' }}>{sub}</p>
      </motion.div>
    </motion.div>
  );
}
