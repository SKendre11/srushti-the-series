import { motion } from 'framer-motion';
import { coursework, education, experience, profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const facts = [
    { k: 'Studying', v: 'B.Tech CSE', s: `${education[0].school}` },
    { k: 'Expected Graduation', v: '2028', s: 'Chhatrapati Sambhajinagar, MH' },
    { k: 'Experience', v: `${experience[0].company}`, s: 'Web Development Internship / Learning' },
    { k: 'Building', v: 'Full-Stack Web Apps', s: 'React · Node.js · Express.js · MongoDB' },
  ];

  return (
    <>
      <SectionHeading kicker="The Pilot" title="About Me" />
      <div className="gutter grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tilt max={5} className="rounded-2xl">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#5a0b1b,#14060a_60%,#07070a)]" />
              <img
                src="/assets/srushti-profile.jpg"
                alt={profile.portrait.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">STARRING</p>
                  <p className="font-display text-3xl leading-none text-bone">{profile.displayName}</p>
                </div>
                <span className="rounded border border-white/30 px-2 py-0.5 text-[10px] font-bold text-bone">S01–S04</span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        <div>
          <motion.p
            className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] italic leading-[1.2]"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            &ldquo;{profile.intro}&rdquo;
          </motion.p>
          <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>— {profile.fullName}</p>

          <motion.dl
            className="mt-8 grid gap-px overflow-hidden rounded-xl sm:grid-cols-2"
            style={{ background: 'var(--border-color)' }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="p-5"
                style={{ background: 'var(--bg-card)' }}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: 'var(--text-muted)' }}>{f.k}</dt>
                <dd className="mt-2 text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{f.v}</dd>
                <dd className="mt-0.5 text-xs" style={{ color: 'var(--text-secondary)' }}>{f.s}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: 'var(--text-muted)' }}>Relevant Coursework</p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span key={c} className="glass rounded-lg px-3 py-1.5 text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
