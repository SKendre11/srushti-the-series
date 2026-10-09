import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.5em', '0.04em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(14px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const socialLinks = [
    {
      label: 'Email Srushti',
      href: `mailto:${profile.email}`,
      primary: true,
      icon: '✉',
    },
    {
      label: 'LinkedIn',
      href: profile.links.linkedin,
      icon: '↗',
    },
    {
      label: 'GitHub',
      href: profile.links.github,
      icon: '↗',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]" />
      <Particles count={36} />

      <motion.p
        className="relative mb-4 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Closing Scene
      </motion.p>
      
      <motion.h2
        className="relative font-display leading-[0.85]"
        style={{ fontSize: 'clamp(3.2rem, 12vw, 11rem)', letterSpacing: spacing, filter: blur, opacity, color: 'var(--text-primary)' }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-8 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      >
        <p className="font-serif text-2xl sm:text-3xl italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>
          &ldquo;Every great story starts with curiosity.&rdquo;
        </p>
        <p className="text-sm sm:text-base font-medium tracking-wide" style={{ color: 'var(--text-secondary)' }}>
          Thanks for watching — the journey continues.
        </p>
      </motion.div>

      <motion.div
        className="relative mt-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-bold tracking-[0.2em] sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
          {profile.displayName.toUpperCase()}
        </p>
        <p className="mt-2 text-xs font-semibold tracking-[0.3em] sm:text-sm" style={{ color: 'var(--text-muted)' }}>
          {profile.role.toUpperCase()}
        </p>
      </motion.div>

      {/* Verified Contact Details */}
      <motion.div
        className="relative mt-8 flex flex-wrap justify-center items-center gap-4 text-sm font-medium"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
      >
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 rounded-full border px-4 py-2 transition hover:border-crimson-2 hover:text-crimson-2 shadow-sm"
          style={{ borderColor: 'var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-primary)' }}
        >
          <span>✉</span> {profile.email}
        </a>
        <a
          href={`tel:${profile.phone}`}
          className="flex items-center gap-2 rounded-full border px-4 py-2 transition hover:border-crimson-2 hover:text-crimson-2 shadow-sm"
          style={{ borderColor: 'var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-primary)' }}
        >
          <span>📞</span> {profile.phone}
        </a>
      </motion.div>

      {/* Verified Social & Action Buttons */}
      <motion.div
        className="relative mt-8 flex flex-wrap justify-center gap-3.5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
      >
        {socialLinks.map((c) => (
          <motion.div key={c.label} variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
            <Magnetic>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-bold tracking-[0.12em] transition ${
                  c.primary
                    ? 'bg-crimson text-white shadow-[0_0_40px_rgba(229,19,43,0.45)] hover:bg-crimson-2'
                    : ''
                }`}
                style={
                  !c.primary
                    ? {
                        border: '1px solid var(--border-color-strong)',
                        background: 'var(--bg-card)',
                        color: 'var(--text-primary)',
                      }
                    : undefined
                }
              >
                <span>{c.icon}</span>
                {c.label.toUpperCase()}
              </a>
            </Magnetic>
          </motion.div>
        ))}

        {/* Working Resume download */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
          <Magnetic>
            <a
              href={profile.resumePdf}
              download="Srushti_Kendre_Resume.pdf"
              data-cursor="link"
              className="flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-bold tracking-[0.12em] transition"
              style={{
                border: '1px solid var(--border-color-strong)',
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
              }}
            >
              ⤓ DOWNLOAD RESUME
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Navigation & Controls */}
      <div className="relative mt-14 flex flex-wrap justify-center items-center gap-6 text-xs font-semibold tracking-[0.24em]" style={{ color: 'var(--text-muted)' }}>
        <button
          type="button"
          onClick={() => scrollTo(0, { offset: 0 })}
          className="flex items-center gap-1.5 hover:text-crimson-2 transition py-2 px-3 rounded-lg border border-transparent hover:border-[var(--border-color)]"
        >
          ↑ BACK TO TOP
        </button>
        <button
          type="button"
          onClick={onReplay}
          className="hover:text-crimson-2 transition py-2 px-3"
        >
          ▶ REPLAY OPENING
        </button>
        <button
          type="button"
          onClick={() => scrollTo('#originals')}
          className="hover:text-crimson-2 transition py-2 px-3"
        >
          ＋ MY PROJECTS
        </button>
      </div>

      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} {profile.displayName} — &ldquo;SRUSHTI — THE SERIES&rdquo;. A personal developer portfolio documentary.
        </p>
      </footer>
    </section>
  );
}
