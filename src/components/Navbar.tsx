import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { viewerProfiles, type ProfileId } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { SeriesMark } from './Poster';
import { ProfileAvatar } from './ProfileSelector';
import { EASE } from './fx';

const NAV_ITEMS = [
  { id: 'top', label: 'Home' },
  { id: 'journey', label: 'My Journey' },
  { id: 'originals', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'story', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({
  profileId,
  onSwitch,
  isDark,
  onToggleTheme,
}: {
  order?: string[];
  profileId: ProfileId;
  onSwitch: (id: ProfileId) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [active, setActive] = useState<string>('top');
  const { scrollTo } = useSmoothScroll();
  const menuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > 400 && y > prev && !menu && !mobileNav);
  });

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-40% 0px -45% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!menu) return;
    const close = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenu(false);
    };
    window.addEventListener('pointerdown', close);
    return () => window.removeEventListener('pointerdown', close);
  }, [menu]);

  const go = (id: string) => {
    setMobileNav(false);
    scrollTo(`#${id}`, { offset: id === 'top' ? 0 : -64 });
  };

  const current = viewerProfiles.find((p) => p.id === profileId) ?? viewerProfiles[0];

  const navBg = solid || mobileNav
    ? isDark
      ? 'bg-ink/85 backdrop-blur-xl border-b border-white/5'
      : 'bg-[#faf9f7]/90 backdrop-blur-xl border-b border-black/5 shadow-sm'
    : isDark
      ? 'bg-gradient-to-b from-black/80 to-transparent'
      : 'bg-gradient-to-b from-white/70 to-transparent';

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[60]"
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <div className={`gutter flex h-16 items-center justify-between gap-6 transition-[background,backdrop-filter] duration-500 md:h-[72px] ${navBg}`}>
        <div className="flex items-center gap-8 lg:gap-10">
          <button type="button" onClick={() => go('top')} className="text-[22px]" aria-label="Back to top">
            <SeriesMark isDark={isDark} />
          </button>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                active={active === item.id}
                onClick={() => go(item.id)}
                isDark={isDark}
              />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Working Theme toggle */}
          <motion.button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
              isDark
                ? 'border-white/20 text-mist hover:border-white/50 hover:text-bone'
                : 'border-black/15 text-[#6d6c75] hover:border-black/40 hover:text-[#0e0e13]'
            }`}
            whileTap={{ scale: 0.92 }}
          >
            {isDark ? (
              /* Sun icon for light mode toggle */
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon icon for dark mode toggle */
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </motion.button>

          {/* Profile Switcher Menu */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              aria-haspopup="menu"
              aria-expanded={menu}
              aria-label={`Viewing as ${current.name}. Switch profile`}
              className={`flex items-center gap-2 rounded-lg p-1.5 border transition ${
                isDark ? 'border-white/10 hover:border-white/30' : 'border-black/10 hover:border-black/25'
              }`}
            >
              <ProfileAvatar id={profileId} size="sm" />
              <span className={`hidden text-xs font-semibold sm:inline ${isDark ? 'text-bone' : 'text-[#0e0e13]'}`}>
                {current.name}
              </span>
              <motion.span animate={{ rotate: menu ? 180 : 0 }} className={`text-[10px] ${isDark ? 'text-mist' : 'text-[#6d6c75]'}`}>
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {menu && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className={`absolute right-0 top-12 w-64 origin-top-right rounded-xl border p-2 shadow-2xl backdrop-blur-xl ${
                    isDark ? 'border-white/10 bg-ink-2/95' : 'border-black/10 bg-white/95'
                  }`}
                >
                  <p className={`px-3 pb-2 pt-1 text-[10px] font-semibold tracking-[0.24em] ${isDark ? 'text-smoke' : 'text-[#6d6c75]'}`}>
                    VIEWING PERSPECTIVE
                  </p>
                  {viewerProfiles.map((p) => (
                    <button
                      key={p.id}
                      role="menuitem"
                      type="button"
                      onClick={() => {
                        onSwitch(p.id);
                        setMenu(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition ${
                        isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'
                      } ${p.id === profileId ? (isDark ? 'bg-white/[0.08]' : 'bg-black/[0.06]') : ''}`}
                    >
                      <ProfileAvatar id={p.id} size="sm" />
                      <span>
                        <span className={`block text-sm font-semibold ${isDark ? 'text-bone' : 'text-[#0e0e13]'}`}>{p.name}</span>
                        <span className={`block text-[11px] ${isDark ? 'text-smoke' : 'text-[#6d6c75]'}`}>{p.blurb}</span>
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={mobileNav ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileNav}
            onClick={() => setMobileNav((v) => !v)}
          >
            <motion.span className={`block h-0.5 w-5 ${isDark ? 'bg-bone' : 'bg-[#0e0e13]'}`} animate={{ rotate: mobileNav ? 45 : 0, y: mobileNav ? 4 : 0 }} />
            <motion.span className={`block h-0.5 w-5 ${isDark ? 'bg-bone' : 'bg-[#0e0e13]'}`} animate={{ rotate: mobileNav ? -45 : 0, y: mobileNav ? -4 : 0 }} />
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <AnimatePresence>
        {mobileNav && (
          <motion.nav
            aria-label="Mobile Navigation"
            className={`gutter border-b pb-6 pt-3 backdrop-blur-2xl lg:hidden ${
              isDark ? 'border-white/5 bg-ink/95' : 'border-black/5 bg-white/95'
            }`}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {NAV_ITEMS.map((l, i) => (
              <motion.button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
                className={`block w-full py-2.5 text-left font-display text-2xl tracking-wide ${
                  active === l.id ? 'text-crimson-2' : isDark ? 'text-bone' : 'text-[#0e0e13]'
                }`}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ label, active, onClick, isDark }: { label: string; active: boolean; onClick: () => void; isDark: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative text-[13px] font-medium transition ${
        active
          ? isDark ? 'text-bone font-semibold' : 'text-[#0e0e13] font-semibold'
          : isDark ? 'text-mist hover:text-bone' : 'text-[#6d6c75] hover:text-[#0e0e13]'
      }`}
    >
      {label}
      {active && <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded bg-crimson" />}
    </button>
  );
}
