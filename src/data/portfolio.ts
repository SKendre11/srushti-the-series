/**
 * Central portfolio data — Srushti Kendre's portfolio.
 * Every fact on the site comes from this file.
 * Nothing here is invented — all facts are verified from Srushti Kendre's resume and actual projects.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Srushti Kendre',
  displayName: 'Srushti Kendre',
  firstName: 'SRUSHTI',
  seriesTag: 'THE SERIES',
  /** Cinematic studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ORIGINAL STORY',
  role: 'Computer Science Engineering Student | Aspiring Full-Stack Developer',
  headline: 'Computer Science Engineering Student | Aspiring Full-Stack Developer',
  tagline: ['CSE Student', 'Aspiring Full-Stack Developer', 'Continuous Learner'],
  intro:
    'Computer Science Engineering student interested in full-stack web development and building practical, user-focused applications. Passionate about learning by building, crafting responsive web interfaces, and developing scalable full-stack solutions.',
  location: 'Chhatrapati Sambhajinagar, Maharashtra, India',
  email: 'kendre.srushti1@gmail.com',
  phone: '+91 8623020607',
  links: {
    linkedin: 'https://www.linkedin.com/in/srushti-kendre',
    github: 'https://github.com/SKendre11',
  },
  resumePdf: '/assets/Srushti_Kendre_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Srushti Kendre',
  },
  interests: ['Full-Stack Development', 'Data Structures & Algorithms', 'Web Applications', 'Database Design'],
};

export const education = [
  {
    school: "G.S. Mandal's Maharashtra Institute of Technology",
    place: 'Chhatrapati Sambhajinagar, Maharashtra, India',
    degree: 'B.Tech in Computer Science and Engineering',
    period: 'Expected 2028',
    score: 'B.Tech CSE',
  },
];

export const experience = [
  {
    company: 'WebStack Academy',
    role: 'Web Development Project / Internship',
    place: 'Remote',
    period: 'Internship Program',
    points: [
      'Worked on a full-stack web development project as part of the WebStack Academy learning/internship program.',
      'Applied frontend, backend, database, and API integration concepts to develop real-world web application features.',
      'Built and integrated REST APIs, structured backend data models with MongoDB, and implemented authentication workflows.',
    ],
  },
];

export const coursework = [
  'Data Structures & Algorithms',
  'Database Management Systems (DBMS)',
  'Object-Oriented Programming (OOP)',
  'Computer Networks',
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'cart';
};

export const projects: Project[] = [
  {
    id: 'homelyhub',
    title: 'HomelyHub',
    year: '2024',
    genre: 'Full-Stack • Real Estate • MERN Stack',
    logline: 'A full-stack property rental platform featuring property listings and user/owner workflows.',
    stack: ['React', 'Redux', 'Axios', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    build: [
      'Built a full-stack rental platform with property listings and user/owner workflows.',
      'Implemented JWT and cookie-based authentication for secure session handling.',
      'Integrated Redux for scalable state management and Axios for RESTful API requests.',
      'Configured MongoDB with Mongoose schemas for managing properties, bookings, and user records.',
    ],
    features: [
      'Property listings and discovery',
      'User and owner workflows',
      'JWT/cookie-based authentication',
      'Redux state management',
      'REST APIs with Express.js & MongoDB',
    ],
    metrics: [],
    github: 'https://github.com/SKendre11/HomelyHub-Intership-Project',
    live: 'https://glittering-stroopwafel-1d7c1a.netlify.app',
    palette: { from: '#0e1a2b', via: '#1a4a7a', to: '#060c14', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'krushiconnect',
    title: 'KrushiConnect',
    year: '2024',
    genre: 'Full-Stack • Agriculture Web App',
    logline: 'A web application project focused on connecting users with agriculture-related resources and services.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    build: [
      'Developed a web application focused on connecting users with agriculture-related resources and services.',
      'Implemented responsive frontend components with modern full-stack backend connectivity.',
    ],
    features: [
      'Agriculture-related resources and services connection',
      'Responsive web interface',
      'Full-stack architecture with React and Node.js',
    ],
    metrics: [],
    live: 'https://krushiconnect-6y3q.onrender.com',
    palette: { from: '#061a0c', via: '#1a5c28', to: '#030d06', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'freshcart',
    title: 'FreshCart',
    year: '2024',
    genre: 'Frontend • E-Commerce Grocery App',
    logline: 'A grocery shopping application project with product categories and a web-based shopping interface.',
    stack: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    build: [
      'Built a grocery shopping web application with product category browsing and an interactive cart interface.',
      'Focused on intuitive user experience, responsive layout, and clean component-driven React architecture.',
    ],
    features: [
      'Product category browsing',
      'Web-based grocery shopping interface',
      'Responsive cart and item selection',
      'Component-based frontend architecture',
    ],
    metrics: [],
    github: 'https://github.com/SKendre11/freshcart-grocery-app',
    palette: { from: '#1c0b02', via: '#7a3a06', to: '#0a0601', accent: '#ffb547' },
    motif: 'cart',
  },
  {
    id: 'zerodha-dashboard',
    title: 'Trading Dashboard',
    year: '2024',
    genre: 'Full-Stack • Finance UI • Educational Project',
    logline:
      'An educational personal project inspired by stock-trading dashboards, built to practise frontend interfaces, backend APIs, and database integration.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    build: [
      'Created as an educational personal learning project inspired by trading platforms to practise full-stack engineering.',
      'Explored dashboard UI components, data structures for portfolio visualization, and REST endpoints.',
    ],
    features: [
      'Trading dashboard interface (Educational learning project)',
      'Data visualization components',
      'Backend REST API practice',
      'Database integration with MongoDB',
    ],
    metrics: [],
    palette: { from: '#0d1a0d', via: '#2a5c2a', to: '#050d05', accent: '#46e3a8' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

// Omitted to prevent inventing unverified content as per strict instructions
export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link?: string };

// Omitted to prevent inventing unverified content as per strict instructions
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Core languages',
    skills: [
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'Java', mono: 'Jv' },
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Client-side web development',
    skills: [
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'React', mono: 'Re', note: 'Primary' },
      { name: 'Redux', mono: 'Rd' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Vite', mono: 'Vt' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Server logic & services',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data storage & schemas',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    subtitle: 'Development environment',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'VS' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  React: ['HomelyHub', 'KrushiConnect', 'FreshCart', 'Trading Dashboard'],
  Redux: ['HomelyHub'],
  'Node.js': ['HomelyHub', 'KrushiConnect', 'Trading Dashboard'],
  'Express.js': ['HomelyHub', 'KrushiConnect', 'Trading Dashboard'],
  MongoDB: ['HomelyHub', 'KrushiConnect', 'Trading Dashboard'],
  'REST APIs': ['HomelyHub', 'KrushiConnect'],
  JavaScript: ['FreshCart', 'HomelyHub'],
  HTML5: ['FreshCart', 'HomelyHub'],
  CSS3: ['FreshCart', 'HomelyHub'],
  Vite: ['HomelyHub'],
  Git: ['HomelyHub', 'FreshCart'],
  GitHub: ['HomelyHub', 'FreshCart'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Foundations of Computer Science',
    period: 'Academic Foundation',
    synopsis: 'Starting the B.Tech in Computer Science and Engineering at MIT, Chhatrapati Sambhajinagar — establishing fundamental engineering knowledge and core programming logic.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Academic Beginning',
        description: "Enrolling in B.Tech Computer Science and Engineering at G.S. Mandal's Maharashtra Institute of Technology, Chhatrapati Sambhajinagar.",
        tags: ['B.Tech CSE', 'MIT', 'Education'],
        runtime: 'Expected 2028',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Core Programming Languages',
        description: 'Learning fundamental programming logic through C, C++, Java, and Python — developing strong algorithmic thinking.',
        tags: ['C', 'C++', 'Java', 'Python'],
        runtime: 'Core Foundations',
        palette: crimson,
      },
      {
        code: 'S01 E03',
        title: 'Data Structures & Algorithms',
        description: 'Studying core data structures and algorithm analysis for efficient problem solving and software design.',
        tags: ['DSA', 'Algorithms', 'Logic'],
        runtime: 'Coursework',
        palette: ocean,
      },
      {
        code: 'S01 E04',
        title: 'Database Management & Networks',
        description: 'Understanding relational schema design with MySQL, database fundamentals, and computer networking concepts.',
        tags: ['DBMS', 'MySQL', 'Computer Networks'],
        runtime: 'Coursework',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning Full-Stack Development',
    period: 'Web Architecture',
    synopsis: 'Venturing into modern web architecture — learning responsive interfaces, server-side development, database schemas, and RESTful APIs.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Modern Web Foundations',
        description: 'Mastering HTML5, CSS3, JavaScript, and Tailwind CSS to craft accessible, highly responsive web interfaces.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
        runtime: 'Frontend',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'React & Component Architecture',
        description: 'Building dynamic single-page web applications with React, Redux state management, and Vite build tooling.',
        tags: ['React', 'Redux', 'Vite', 'Frontend'],
        runtime: 'React Ecosystem',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'Node.js & Express.js Backends',
        description: 'Writing backend services, routing, and controller architectures using Node.js and Express.js.',
        tags: ['Node.js', 'Express.js', 'Backend'],
        runtime: 'Server-side',
        palette: crimson,
      },
      {
        code: 'S02 E04',
        title: 'Database Modeling & APIs',
        description: 'Modeling documents in MongoDB with Mongoose and designing REST APIs tested with Postman.',
        tags: ['MongoDB', 'Mongoose', 'REST APIs', 'Postman'],
        runtime: 'Data Layer',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Real Projects',
    period: 'Applied Development',
    synopsis: 'Applying full-stack knowledge to build functional, practical applications addressing real-world user scenarios.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'HomelyHub — Rental Platform',
        description: 'Developing a full-stack rental platform with React, Redux, Node.js, Express.js, MongoDB, and JWT authentication.',
        tags: ['HomelyHub', 'MERN Stack', 'JWT Auth', 'Axios'],
        runtime: 'Featured Project',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'KrushiConnect — Agriculture Hub',
        description: 'Building an agriculture-focused web application connecting users with resources and services, deployed on Render.',
        tags: ['KrushiConnect', 'Agriculture', 'Full-Stack'],
        runtime: 'Web Application',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'FreshCart — Grocery Platform',
        description: 'Crafting a grocery shopping application featuring category-based browsing and interactive cart management with React.',
        tags: ['FreshCart', 'React', 'E-Commerce', 'UI/UX'],
        runtime: 'Shopping Interface',
        palette: amber,
      },
      {
        code: 'S03 E04',
        title: 'Trading Dashboard — Educational UI',
        description: 'Personal educational project inspired by financial trading dashboards to practise complex data representation and API handling.',
        tags: ['Dashboard', 'React', 'Node.js', 'Educational'],
        runtime: 'Personal Learning',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Continuous Learning and Future Goals',
    period: 'Present & Beyond',
    synopsis: 'Refining software engineering practices, strengthening DSA problem solving, and pursuing impactful full-stack opportunities.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Strengthening Problem Solving',
        description: 'Continuously practicing data structures and algorithms to write cleaner, more performant software.',
        tags: ['DSA', 'Problem Solving', 'Optimization'],
        runtime: 'Ongoing',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'WebStack Academy Learning',
        description: 'Gaining industry-oriented software engineering exposure through hands-on development and project-based workflows.',
        tags: ['WebStack Academy', 'Full-Stack', 'Internship'],
        runtime: 'Learning Journey',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'Engineering Best Practices',
        description: 'Deepening knowledge in application architecture, clean code standards, Git collaboration, and secure authentication.',
        tags: ['Clean Code', 'Git', 'Security', 'Architecture'],
        runtime: 'Best Practices',
        palette: jade,
      },
      {
        code: 'S04 E04',
        title: 'Future Horizons',
        description: 'Preparing for software engineering internships and career opportunities where practical web solutions create impact.',
        tags: ['Career Goals', 'Internship', 'Full-Stack Developer'],
        runtime: 'Next Episode',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette; section: string };

export const topPicks: TopPick[] = [
  { label: 'Featured MERN', title: 'HomelyHub', detail: 'Full-stack property rental platform with JWT & Redux', palette: ocean, section: 'originals' },
  { label: 'Agriculture Web App', title: 'KrushiConnect', detail: 'Agriculture resources & services platform', palette: jade, section: 'originals' },
  { label: 'Grocery Platform', title: 'FreshCart', detail: 'React grocery shopping application interface', palette: amber, section: 'originals' },
  { label: 'Educational Project', title: 'Trading Dashboard', detail: 'Educational stock dashboard UI & backend', palette: violet, section: 'originals' },
  { label: 'Technical Skills', title: 'Tech Stack', detail: 'React, Node.js, Express.js, MongoDB, C++, Java', palette: crimson, section: 'skills' },
  { label: 'Development Journey', title: '4 Seasons', detail: 'Academic and full-stack development journey', palette: amber, section: 'journey' },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'The Beginning',
    title: 'Srushti Kendre',
    lines: [
      "G.S. Mandal's Maharashtra Institute of Technology",
      'B.Tech in Computer Science and Engineering',
      'Chhatrapati Sambhajinagar, Maharashtra · Expected 2028',
    ],
    chips: ['B.Tech CSE', 'MIT'],
  },
  {
    kicker: 'The Focus',
    title: 'Full-Stack Developer',
    lines: [
      'Passionate about full-stack web development and problem solving.',
      'Building practical, user-focused digital experiences with modern stacks.',
    ],
    chips: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    kicker: 'The Projects',
    title: 'Real Applications',
    lines: [
      'HomelyHub — Full-stack property rental platform (MERN + JWT)',
      'KrushiConnect — Agriculture connectivity web application',
      'FreshCart — Grocery shopping web application',
    ],
  },
  {
    kicker: 'The Journey',
    title: 'Hands-On Learning',
    lines: [
      'Practical web development experience through WebStack Academy.',
      'Applying frontend, backend, database, and RESTful API integration concepts.',
      'Continuously building, testing, and improving.',
    ],
  },
  {
    kicker: 'The Next Episode',
    title: "Let's Connect",
    lines: [
      'Explore my projects, verified code, and resume.',
      'Open to internship and collaboration opportunities.',
      'Every project has a story — welcome to mine.',
    ],
  },
];

export type ProfileId = 'recruiter' | 'developer' | 'explorer';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  welcome: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Focus on qualifications, projects & resume',
    welcome: 'Welcome Recruiter — viewing portfolio tailored for qualifications and project deliverables.',
    color: '#4cc9ff',
    order: ['about', 'originals', 'skills', 'story', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Explore tech stacks, code & architecture',
    welcome: 'Welcome Developer — viewing technical stack, repositories, and architecture.',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'about', 'picks', 'story'],
  },
  {
    id: 'explorer',
    name: 'Explorer',
    blurb: 'Experience the full journey and story',
    welcome: 'Welcome Explorer — discovering the complete journey, projects, and milestones.',
    color: '#ffb547',
    order: ['about', 'journey', 'originals', 'skills', 'picks', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Education & Background', palette: violet },
  journey: { nav: 'My Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Verified Projects`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Featured highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & Download', palette: violet },
};
