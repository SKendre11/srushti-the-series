import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

/**
 * Achievements & Certifications section.
 * Shows verified achievements and certifications if available.
 */
export default function Achievements() {
  const hasAchievements = achievements.length > 0;
  const hasCertifications = certifications.length > 0;

  if (!hasAchievements && !hasCertifications) {
    return (
      <>
        <SectionHeading kicker="Milestones" title="Achievements" />
        <div className="gutter">
          <motion.div
            className="rounded-2xl p-10 text-center border shadow-sm"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="font-display text-3xl leading-none tracking-wide" style={{ color: 'var(--text-primary)' }}>
              MILESTONES IN PROGRESS
            </p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Academic milestones, certifications, and project accomplishments will appear here as verified.
            </p>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <SectionHeading kicker="Honors & Credentials" title="Achievements" />
      {hasAchievements && (
        <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.article
              key={a.id}
              className="rounded-2xl p-6 border shadow-sm"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">{a.laurel}</p>
              <h3 className="mt-3 font-display text-2xl" style={{ color: 'var(--text-primary)' }}>{a.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-crimson-2/80">{a.org}</p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{a.detail}</p>
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-crimson-2 hover:underline"
                >
                  View certificate ↗
                </a>
              )}
            </motion.article>
          ))}
        </div>
      )}

      {hasCertifications && (
        <div className="mt-12 gutter">
          <h3 className="mb-4 font-sans text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            Certifications <span style={{ color: 'var(--text-muted)' }}>· {certifications.length}</span>
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <motion.div
                key={c.name}
                className="rounded-xl p-4 border"
                style={{ background: 'var(--bg-card-2)', borderColor: 'var(--border-color)' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">{c.issuer}</p>
                <p className="mt-2 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{c.name}</p>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-crimson-2 hover:underline"
                  >
                    View ↗
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
