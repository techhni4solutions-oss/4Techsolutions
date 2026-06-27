import { useEffect, useRef, useState, type FormEvent, type SVGProps } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  BriefcaseBusiness,
  CalendarCheck2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Code2,
  Command,
  Compass,
  Facebook,
  Figma,
  GraduationCap,
  Globe2,
  Instagram,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Play,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
  Layers3,
  Smartphone,
  ShoppingCart,
  PenTool,
  ServerCog,
  Cpu,
  GraduationCap as GraduationCapIcon,
  CircleDot,
  Globe,
  Database,
  Workflow,
  Github,
  PanelTop,
  Palette,
  SquareStack,
  ChevronLeft,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from 'framer-motion';

type NavItem = {
  label: string;
  id: string;
};

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  impact: string;
  accent: string;
};

type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Tech = {
  name: string;
  tone: string;
  icon: LucideIcon;
};

type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  metrics: string;
  accent: string;
  icon: LucideIcon;
};

type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type TrainingItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type UiDesignProject = {
  title: string;
  category: string;
  description: string;
  badge: string;
  figmaLink?: string;
  accent: string;
};

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

type Faq = {
  question: string;
  answer: string;
};

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const navItems: NavItem[] = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'UI Design', id: 'ui-design' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Process', id: 'process' },
  { label: 'Training', id: 'training' },
  { label: 'Contact', id: 'contact' },
];

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Conversion-focused websites and web apps engineered for speed, clarity, and measurable growth.',
    icon: Globe2,
    impact: 'Responsive, fast, and SEO-ready',
    accent: 'from-[#2b5cff] to-[#64c7ff]',
  },
  {
    title: 'Mobile App Development',
    description: 'High-performance mobile products for Android and iOS with intuitive flows and scalable architecture.',
    icon: Smartphone,
    impact: 'Native-like user experience',
    accent: 'from-[#1f8bff] to-[#4dd4ff]',
  },
  {
    title: 'Digital Marketing',
    description: 'Campaign systems that turn awareness into qualified leads through disciplined strategy and content.',
    icon: TrendingUp,
    impact: 'Lead generation and brand reach',
    accent: 'from-[#f1c453] to-[#f8d77e]',
  },
  {
    title: 'E-Commerce',
    description: 'Storefronts, product funnels, and checkout experiences that make online selling feel effortless.',
    icon: ShoppingCart,
    impact: 'Built to sell with confidence',
    accent: 'from-[#0fb67f] to-[#6de1bb]',
  },
  {
    title: 'UI/UX Design',
    description: 'Elegant interfaces, friction-free flows, and product systems that feel premium on every screen.',
    icon: Figma,
    impact: 'Design that improves conversion',
    accent: 'from-[#b777ff] to-[#f19ef8]',
  },
  {
    title: 'IT Training',
    description: 'Practical training programs that help students and professionals build job-ready technical skills.',
    icon: GraduationCapIcon,
    impact: 'Mentorship-led learning',
    accent: 'from-[#f2994a] to-[#f2c94c]',
  },
  {
    title: 'Internship Programs',
    description: 'Structured internships with real project exposure, teamwork, and portfolio-building experience.',
    icon: BriefcaseBusiness,
    impact: 'Work on live deliverables',
    accent: 'from-[#7f9cff] to-[#9dcbff]',
  },
  {
    title: 'FYP Support',
    description: 'End-to-end final year project support from idea validation to deployment and presentation polish.',
    icon: Rocket,
    impact: 'Guidance from concept to demo',
    accent: 'from-[#ff8d6b] to-[#ffce8b]',
  },
];

const values: Value[] = [
  {
    title: 'Mission',
    description: 'Help ambitious brands and students turn ideas into polished digital products that deliver real business value.',
    icon: Target,
  },
  {
    title: 'Vision',
    description: 'Be the most trusted growth partner for companies and learners who want premium execution without waste.',
    icon: Compass,
  },
  {
    title: 'Values',
    description: 'Clear communication, quality craftsmanship, on-time delivery, and accountability on every engagement.',
    icon: ShieldCheck,
  },
];

const techStack: Tech[] = [
  { name: 'HTML5', tone: 'from-[#ea5b0c] to-[#ff9f43]', icon: Code2 },
  { name: 'CSS3', tone: 'from-[#1d7de2] to-[#59b2ff]', icon: PanelTop },
  { name: 'JavaScript', tone: 'from-[#f7d24c] to-[#f5b74f]', icon: Zap },
  { name: 'React.js', tone: 'from-[#66dbff] to-[#2aa3ff]', icon: Layers3 },
  { name: 'Node.js', tone: 'from-[#41b883] to-[#3a9f67]', icon: ServerCog },
  { name: 'MongoDB', tone: 'from-[#1f9d55] to-[#59ce8f]', icon: Database },
  { name: 'PHP', tone: 'from-[#787cb5] to-[#4d5ea7]', icon: CircleDot },
  { name: 'MySQL', tone: 'from-[#00758f] to-[#4db6d0]', icon: Workflow },
  { name: 'WordPress', tone: 'from-[#21759b] to-[#77b7d5]', icon: Globe },
  { name: 'GitHub', tone: 'from-[#6b7280] to-[#9ca3af]', icon: Github },
];

const uiDesignProjects: UiDesignProject[] = [
  {
    title: 'Pet Connect',
    category: 'Pet adoption & community app',
    description: 'A warm, trust-first mobile experience built to connect pet lovers, adopters, and shelters through simple flows.',
    badge: 'Mobile UI Concept',
    figmaLink: '',
    accent: 'from-[#ffb347] via-[#ffd166] to-[#fff1b8]',
  },
  {
    title: 'ClassMind',
    category: 'Learning management experience',
    description: 'An elegant education platform interface with clear dashboards, smart course organization, and motivating progress visuals.',
    badge: 'SaaS UI System',
    figmaLink: '',
    accent: 'from-[#60a5fa] via-[#93c5fd] to-[#dbeafe]',
  },
  {
    title: 'Rural Care Health App',
    category: 'Accessible healthcare solution',
    description: 'A simple and empathetic care interface designed to support rural communities with quick booking and support flows.',
    badge: 'Healthcare UX',
    figmaLink: '',
    accent: 'from-[#34d399] via-[#6ee7b7] to-[#dcfce7]',
  },
  {
    title: 'CareConnect',
    category: 'Caregiver collaboration app',
    description: 'A polished, human-centered experience for caregivers to coordinate appointments, notes, and updates with ease.',
    badge: 'Product Design',
    figmaLink: '',
    accent: 'from-[#a78bfa] via-[#c4b5fd] to-[#ede9fe]',
  },
];

const projects: Project[] = [
  {
    title: 'Atlas Commerce',
    category: 'E-Commerce Platform',
    description: 'A premium online store experience with curated product journeys, checkout optimization, and conversion tracking.',
    stack: ['React', 'Tailwind', 'Node.js', 'Stripe'],
    metrics: '42% higher conversion rate',
    accent: 'from-[#152f5b] via-[#0f2143] to-[#091627]',
    icon: ShoppingCart,
  },
  {
    title: 'AxisPK Shop',
    category: 'E-Commerce (Live)',
    description: 'A live storefront optimized for conversions and easy management. Available at axispk.shop.',
    stack: ['React', 'Tailwind', 'Stripe'],
    metrics: 'Active sales channel',
    accent: 'from-[#0fb67f] to-[#6de1bb]',
    icon: ShoppingCart,
  },
  {
    title: 'Pulse Healthcare',
    category: 'Appointment Web App',
    description: 'A patient-first booking system with reminders, provider pages, and elegant analytics for operations teams.',
    stack: ['React', 'Framer Motion', 'API', 'Dashboard'],
    metrics: '3x faster booking flow',
    accent: 'from-[#123d4d] via-[#0e2f3d] to-[#081c25]',
    icon: MonitorSmartphone,
  },
  {
    title: 'Northstar Academy',
    category: 'Training Portal',
    description: 'A learning portal designed for structured enrollments, lesson planning, and internship readiness.',
    stack: ['Next.js', 'MongoDB', 'Course CMS', 'SEO'],
    metrics: 'Higher engagement and retention',
    accent: 'from-[#40301e] via-[#241d14] to-[#12100d]',
    icon: GraduationCap,
  },
];

const ceo = {
  name: 'Rana Zunair Amjad',
  title: 'CEO',
  motive:
    'Our mission is to turn careful product thinking into measurable business growth — one reliable release at a time.',
  image: '/IMG-20260624-WA0068.jpg',
};
const liveSites = [
  { title: 'AxisPK Shop', url: 'https://axispk.shop', status: 'Live (indexed on Google)' },
  { title: 'Puraaqua Technology', url: '#', status: 'Development — currently in progress (Gujranwala)' },
];

const processSteps: ProcessStep[] = [
  { title: 'Discovery', description: 'Understand the business, audience, goals, and constraints before we shape the solution.', icon: Search },
  { title: 'Planning', description: 'Map user journeys, scope, timelines, content strategy, and technical architecture.', icon: CalendarCheck2 },
  { title: 'Design', description: 'Create premium visuals, responsive layouts, and polished interactions that feel enterprise-grade.', icon: Palette },
  { title: 'Development', description: 'Build the product with maintainable code, reusable components, and performance in mind.', icon: Code2 },
  { title: 'Testing', description: 'Check responsive behavior, accessibility, and key flows across major breakpoints.', icon: BadgeCheck },
  { title: 'Deployment', description: 'Launch confidently with optimized assets, SEO essentials, and production readiness.', icon: Rocket },
  { title: 'Support', description: 'Stay aligned after launch with updates, improvements, and growth-focused iterations.', icon: BellRing },
];

const trainingItems: TrainingItem[] = [
  { title: 'Web Development Training', description: 'Hands-on frontend and backend training with real project tasks and code reviews.', icon: MonitorSmartphone },
  { title: 'Digital Marketing Training', description: 'Practical learning in content, paid ads, analytics, and lead generation systems.', icon: TrendingUp },
  { title: 'Internship Programs', description: 'Structured internship paths for students who want to build confidence and portfolio quality.', icon: BriefcaseBusiness },
  { title: 'Career Guidance', description: 'Mentorship on portfolios, interviews, and the skills hiring teams look for today.', icon: Compass },
  { title: 'FYP Support', description: 'Implementation support, documentation help, and demo-day polish for final year projects.', icon: Rocket },
];

const testimonials: Testimonial[] = [
  {
    name: 'Ahsan Malik',
    role: 'Founder',
    company: 'RetailX',
    quote: '4Tech Solutions delivered a site that finally felt aligned with our brand. The polish, speed, and structure improved how clients perceived us immediately.',
    rating: 5,
  },
  {
    name: 'Hira Shah',
    role: 'Product Lead',
    company: 'Pulse Healthcare',
    quote: 'The team translated a complex booking workflow into a clean product experience. Communication was sharp and the execution felt premium throughout.',
    rating: 5,
  },
  {
    name: 'Bilal Khan',
    role: 'Student',
    company: 'BSCS Final Year',
    quote: 'Their FYP support went beyond code. We got direction on architecture, presentation, and the confidence to defend our project clearly.',
    rating: 5,
  },
];

const faqs: Faq[] = [
  {
    question: 'What industries do you work with?',
    answer: 'We support startups, SMEs, training businesses, e-commerce brands, service companies, and student-led projects that need premium execution.',
  },
  {
    question: 'Do you build both websites and mobile apps?',
    answer: 'Yes. We design and develop modern websites, mobile applications, and connected product systems tailored to the business goal.',
  },
  {
    question: 'Can you help with SEO and marketing after launch?',
    answer: 'Absolutely. We can support SEO, performance marketing, content strategy, and ongoing improvements after the launch phase.',
  },
  {
    question: 'Do you offer training or internships only for students?',
    answer: 'No. We work with students, recent graduates, and professionals who want structured, practical learning and real-world project exposure.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We keep communication structured with clear milestones, quick updates, and transparent feedback loops so the project stays on track.',
  },
];

const stats = [
  { value: 240, label: 'Projects Completed', suffix: '+' },
  { value: 160, label: 'Happy Clients', suffix: '+' },
  { value: 18, label: 'Technologies Used', suffix: '+' },
  { value: 420, label: 'Student Trained', suffix: '+' },
];

const heroStats = [
  { label: 'Custom Digital Products', value: '100%' },
  { label: 'On-Time Delivery Mindset', value: 'Always' },
  { label: 'Business-Focused Thinking', value: 'Built in' },
];

const socialLinks = [
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com' },
];

const servicesOptions = ['Web Development', 'Mobile App Development', 'E-Commerce Solutions', 'Digital Marketing', 'SEO Services', 'UI/UX Design', 'IT Training', 'Internship Programs', 'FYP Support', 'Custom Software Development'];

const serviceDetails: Record<string, { long: string; tiers?: { name: string; price: string; features: string[] }[] }> = {
  'Digital Marketing': {
    long: 'Strategy-led marketing that turns visitors into qualified leads. Includes audience research, campaign setup, creative guidance, and performance monitoring.',
    tiers: [
      { name: 'Normal', price: 'PKR 25,000 / mo', features: ['Basic ads setup', 'Monthly reporting', '1 creative asset'] },
      { name: 'Standard', price: 'PKR 55,000 / mo', features: ['Ads + SEO basics', 'Bi-weekly reporting', '3 creative assets', 'Landing page support'] },
      { name: 'Pro', price: 'PKR 120,000 / mo', features: ['Full-funnel campaigns', 'Weekly reporting', 'Creative suite', 'Conversion optimisation', 'Dedicated account manager'] },
    ],
  },
  'Web Development': { long: 'Conversion-focused websites and web apps engineered for speed, clarity, and measurable growth.' },
  'Mobile App Development': { long: 'High-performance mobile products for Android and iOS with intuitive flows and scalable architecture.' },
  'E-Commerce': { long: 'Storefronts, product funnels, and checkout experiences that make online selling feel effortless.' },
};

function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f5c95d]/20 bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#f5c95d]">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

function AnimatedCounter({
  value,
  label,
  suffix = '',
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });
  const [count, setCount] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, reducedMotion, value]);

  return (
    <div ref={ref} className="glass-card premium-border p-6 text-center">
      <div className="text-4xl font-bold text-white sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
        {label}
      </div>
    </div>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[#f5c95d]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`h-4 w-4 ${index < rating ? 'fill-current' : 'text-white/15'}`} />
      ))}
    </div>
  );
}

function TechCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % techStack.length), 2800);
    return () => window.clearInterval(id);
  }, []);

  const tech = techStack[index];
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="glass-card premium-border p-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-4"
        >
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tech.tone} text-[#07111f] shadow-lg shadow-black/10`}>
            <tech.icon className="h-8 w-8" />
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-slate-900">{tech.name}</p>
            <p className="mt-1 text-sm text-slate-600">Trusted building block for modern apps</p>
          </div>
        </motion.div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((item, itemIndex) => (
            <motion.button
              key={item.name}
              type="button"
              whileHover={{ y: -2, scale: 1.02 }}
              onClick={() => setIndex(itemIndex)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${itemIndex === index ? 'border-[#f59e0b] bg-[#fff7ed] text-[#b45309]' : 'border-slate-200 bg-white/70 text-slate-600 hover:border-[#f5c95d] hover:text-slate-900'}`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br ${project.accent} p-1 shadow-2xl shadow-black/40`}>
      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#07111f]/90 p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
            <span className="h-3 w-3 rounded-full bg-[#f5c95d]" />
            <span className="h-3 w-3 rounded-full bg-[#37d399]" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-300">
            Live Preview
          </span>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 rounded-[26px] border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5c95d]">{project.category}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="rounded-2xl bg-white/10 p-3 text-[#f5c95d]">
                <project.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#0d1e34] p-3">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Reach</p>
                <p className="mt-2 text-sm font-semibold text-white">Multi-channel visibility</p>
              </div>
              <div className="rounded-2xl bg-[#0d1e34] p-3">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Conversion</p>
                <p className="mt-2 text-sm font-semibold text-white">Optimized user journeys</p>
              </div>
              <div className="rounded-2xl bg-[#0d1e34] p-3">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Performance</p>
                <p className="mt-2 text-sm font-semibold text-white">Built for speed</p>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-[#08121f] p-4">
              <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                <span>Traffic growth</span>
                <span>{project.metrics}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[58, 86, 70, 94].map((height, index) => (
                  <div key={index} className="flex h-36 items-end rounded-2xl bg-white/5 p-2">
                    <div
                      className="w-full rounded-2xl bg-gradient-to-t from-[#f5c95d] via-[#f7d47c] to-[#ffefd0] shadow-[0_10px_30px_rgba(245,201,93,0.25)]"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-[26px] border border-white/10 bg-white/5 p-4">
            <div className="rounded-[22px] bg-[linear-gradient(180deg,rgba(245,201,93,0.18),rgba(255,255,255,0.03))] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#f5c95d]">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-[#091321] px-3 py-1.5 text-xs font-semibold text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-[#08121f] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Experience layer</p>
              <div className="mt-4 space-y-3">
                {['Strategy', 'Interface', 'Launch'].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5c95d]/15 text-sm font-bold text-[#f5c95d]">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item}</p>
                      <p className="text-xs text-slate-400">Premium product checkpoint</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
              We design each digital experience to feel calm, credible, and ready for business growth.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'ui-design', 'portfolio', 'process', 'training', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBookAppointment = () => {
    setSelectedService(null);
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 140);
  };

  const openWhatsApp = (message: string) => {
    const phoneNumber = '923208158913';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inquiry = `Hello 4Tech Solutions,\n\nName: ${form.name}\nEmail: ${form.email || 'Not provided'}\nService: ${form.service}\n\nMessage:\n${form.message || 'I would like to discuss a project.'}`;
    openWhatsApp(inquiry);
  };

  const introductionVariants: Variants = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0 : 0.75, ease: 'easeOut' },
    },
  };

  return (
    <div className="app-shell relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f7fcff_0%,#f5fbff_58%,#eef9fd_100%)] text-slate-900">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05101d]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="relative flex flex-col items-center gap-6">
              <motion.div
                className="absolute h-40 w-40 rounded-full bg-[#f5c95d]/10 blur-3xl"
                animate={reducedMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="relative flex h-24 w-24 items-center justify-center rounded-[24px]border  shadow-2xl shadow-black/40"
                animate={reducedMotion ? {} : { rotate: [0, 3, -3, 0], y: [0, -4, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="relative flex h-24 w-24 shrink-0 overflow-hidden rounded-full border border-[#f5c95d]/20 shadow-[0_10px_30px_rgba(245,201,93,0.25)]">
                  <img
                    src="/4 tech logo.png"
                    alt="4Tech Solutions logo"
                    className="h-full w-full object-cover"
                  />
                </span>
              </motion.div>
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.4em] text-gray-400">4Tech Solutions</p>
                <p className="mt-2 text-lg font-bold text-gray-500">
                  Building premium digital growth systems
                </p>
              </div>
              <div className="h-1.5 w-56 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#f5c95d] via-[#f9df90] to-[#c98d24]"
                  initial={{ x: '-50%' }}
                  animate={{ x: '150%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ width: '50%' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[#f5c95d]/12 blur-3xl"
          animate={reducedMotion ? {} : { y: [0, 24, 0], x: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-[#2563eb]/18 blur-3xl"
          animate={reducedMotion ? {} : { y: [0, -24, 0], x: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0fb67f]/10 blur-3xl"
          animate={reducedMotion ? {} : { y: [0, -18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-2xl shadow-slate-200/70 backdrop-blur-2xl' : 'bg-transparent'
          }`}
      >
        <div className="section-shell">
          <div className="flex items-center justify-between gap-3 overflow-hidden py-4">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex min-w-0 max-w-full items-center gap-3 text-left"
            >
              <span className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#f5c95d]/20 bg-white shadow-[0_10px_30px_rgba(245,201,93,0.25)] p-0.5">
                <img
                  src="/4 tech logo.png"
                  alt="4Tech Solutions logo"
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-base font-bold tracking-wide text-slate-900 sm:text-lg">4Tech Solutions</span>
                <span className="block truncate text-[0.65rem] uppercase tracking-[0.24em] text-slate-500 sm:text-xs">Your Partner in Digital Growth</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-2xl"
            >
              <div className="section-shell grid gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${activeSection === item.id ? 'border-[#f5c95d]/60 bg-[#fff7e8] text-[#b45309]' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden pt-28 lg:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(78,183,200,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(7,34,58,0.14),transparent_28%)]" />
          <div className="section-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-14 pb-16 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-0">
            <motion.div
              variants={introductionVariants}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f5c95d]/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#f5c95d]" />
                Premium software house built for growth and trust
              </div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 80, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
                >
                  We Build Digital Solutions That Drive Business Growth
                </motion.h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  4Tech Solutions creates polished websites, mobile apps, marketing systems, and training experiences that help ambitious businesses grow with confidence.
                </p>
                <p className="mt-2 max-w-2xl text-base leading-7 text-slate-300 font-semibold">
                  We digitalize small businesses into larger, growth-ready organizations.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => handleNavClick('portfolio')}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#f5c95d_0%,#f2c75b_55%,#d69225_100%)] px-7 py-4 text-base font-bold text-[#07111f] shadow-[0_18px_45px_rgba(245,201,93,0.28)] transition hover:scale-[1.02]"
                >
                  View Portfolio
                  <Play className="h-4 w-4 fill-current" />
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('contact')}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200/80 bg-white/80 px-7 py-4 text-base font-semibold text-slate-800 backdrop-blur-xl transition hover:border-[#2f7d95]/30 hover:bg-white"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4 text-[#f5c95d]" />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div key={item.label} className="glass-card premium-border p-5">
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                {['Enterprise Feel', 'Smooth Animations', 'Mobile First', 'SEO Ready'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, scale: 0.94, y: 34 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: reducedMotion ? 0 : 0.8, ease: "easeOut" }}
  className="relative mx-auto w-full max-w-[620px]"
>
  <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(245,201,93,0.28),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.22),transparent_38%)] blur-2xl" />

  <div
    className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,18,31,0.84),rgba(7,14,26,0.96))] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
    style={{ maxWidth: "100%" }}
  >
    <div className="soft-grid absolute inset-0 opacity-[0.06]" />

    <div className="relative grid gap-3 lg:grid-cols-[1fr_0.9fr]">
      {/* Left Section */}
      <div className="glass-card premium-border relative overflow-hidden p-4">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f5c95d]/10 blur-3xl" />

        <div className="relative flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#f5c95d]">
              Digital Growth Engine
            </p>

            <h3 className="mt-2 font-display text-xl font-bold text-white">
              Growth Strategy
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#f5c95d]">
            <Rocket className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {/* Launch Velocity */}
          <div className="rounded-[20px] border border-white/10 bg-[#091422] p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300">
                Launch Velocity
              </span>

              <TrendingUp className="h-4 w-4 text-[#f5c95d]" />
            </div>

            <div className="mt-4 h-20 rounded-2xl bg-[linear-gradient(180deg,rgba(245,201,93,0.18),rgba(255,255,255,0.03))] p-3">
              <div className="flex h-full items-end gap-2">
                {[40, 64, 52, 86, 74, 96].map((height, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 rounded-full bg-gradient-to-t from-[#f5c95d] via-[#f8df98] to-[#fff5d8]"
                    style={{ height: `${height}%` }}
                    animate={
                      reducedMotion
                        ? {}
                        : { y: [0, -4, 0] }
                    }
                    transition={{
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Automation */}
          <div className="rounded-[20px] border border-white/10 bg-[#091422] p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300">
                Automation
              </span>

              <Cpu className="h-10 w-15 text-[#7ad8ff]" />
            </div>

            <div className="mt-4 space-y-2">
              {[
                "Lead Capture",
                "Smart Routing",
                "Analytics Sync",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl bg-white/5 px-1 py-1 text-xs text-slate-200"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7ad8ff]/10 text-[#7ad8ff]">
                    <BadgeCheck className="h-2 w-2" />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-3">
        {/* Premium Presence */}
        <div className="glass-card premium-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                Client Ready
              </p>

              <h3 className="mt-2 font-display text-lg font-bold text-white">
                Premium Presence
              </h3>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f5c95d]/20 to-white/5 text-[#f5c95d]">
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-[#08121f] p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Delivery Confidence
              </span>

              <span className="text-xs font-semibold text-[#f5c95d]">
                High
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Design", value: "10/10" },
                { label: "Speed", value: "A+" },
                { label: "Trust", value: "Elite" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-white/5 p-2 text-center"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400">
                    {item.label}
                  </p>

                  <p className="mt-1 font-display text-base font-bold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Digital Products */}
        <div className="glass-card premium-border p-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(245,201,93,0.24),rgba(255,255,255,0.05))] text-[#f5c95d]">
              <motion.div
                className="absolute inset-1 rounded-xl border border-white/10"
                animate={
                  reducedMotion ? {} : { rotate: 360 }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <LayoutDashboard className="relative h-6 w-6" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#f5c95d]">
                Software Solutions
              </p>

              <h3 className="mt-2 font-display text-xl font-bold text-white">
                Digital Products
              </h3>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              {
                icon: MonitorSmartphone,
                label: "Responsive UI",
              },
              {
                icon: BarChart3,
                label: "Analytics",
              },
              {
                icon: Workflow,
                label: "Automation",
              },
              {
                icon: Globe2,
                label: "Cross Platform",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-2"
              >
                <item.icon className="h-4 w-4 text-[#f5c95d]" />

                <p className="mt-2 text-xs font-semibold text-white">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>
          </div>
        </section>

        <section id="about" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="About 4Tech Solutions"
              title="A premium partner for businesses that want polished digital growth."
              description="4Tech Solutions blends strategy, design, engineering, and training into one focused delivery model. We build systems that look expensive, feel reliable, and move businesses forward."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="glass-card premium-border overflow-hidden p-7"
              >
                <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f5c95d]">Company story</p>
                    <h3 className="mt-3 font-display text-3xl font-bold text-white">Built for teams who care about perception and performance.</h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                      We created 4Tech Solutions to give companies and learners a partner that feels premium from the first call to the final delivery. Our work is guided by clarity, aesthetics, and the discipline to ship quality without unnecessary complexity.
                    </p>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                      Whether the goal is a corporate website, a mobile product, a digital campaign, or a structured training journey, we treat every project as a growth system rather than a one-off task.
                    </p>
                    <div className="mt-6">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Live & in-progress projects</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {liveSites.map((site) => (
                          <li key={site.title}>
                            <a href={site.url || '#'} target="_blank" rel="noreferrer" className="font-semibold text-white hover:text-[#f5c95d]">
                              {site.title}
                            </a>
                            <span className="ml-2 text-slate-400">— {site.status}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(245,201,93,0.14),rgba(255,255,255,0.04))] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm uppercase tracking-[0.25em] text-slate-400">Core promise</span>
                      <ShieldCheck className="h-5 w-5 text-[#f5c95d]" />
                    </div>
                    <div className="mt-6 space-y-4">
                      {[
                        'Transparent communication',
                        'Careful UX and brand detail',
                        'Performance-first implementation',
                        'Growth-oriented delivery',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200">
                          <BadgeCheck className="h-5 w-5 text-[#f5c95d]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="glass-card premium-border p-6"
                >
                  <div className="grid gap-4 md:grid-cols-2 items-start">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <img src={ceo.image} alt="CEO" className="h-25 w-25 rounded-full object-cover" />
                      
                      </div>

                      <div className="mt-2 text-sm text-slate-300">
                          <div>
                          <p className="font-display text-xl font-bold text-white">{ceo.name}</p>
                          <p className="text-sm text-slate-400">{ceo.title}</p>
                        </div>
                        <p className="font-semibold text-white">Our Team</p>
                        <ul className="mt-3 space-y-1 list-disc list-inside text-slate-300">
                          <li>Developers and Engineers</li>
                          <li>Design and UX</li>
                          <li>Marketing and Growth</li>
                          <li>Interns and Trainees</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-400 uppercase tracking-[0.25em] text-sm">Company mission & values</p>
                      <div className="mt-3 space-y-3 text-slate-300">
                        <p className="text-sm">{ceo.motive}</p>
                        {values.map((v) => (
                          <div key={v.title} className="rounded-2xl bg-white/5 p-3">
                            <div className="flex items-start gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f5c95d]/20 to-white/5 text-[#f5c95d]">
                                <v.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-display text-lg font-bold text-white">{v.title}</p>
                                <p className="text-sm text-slate-300 mt-1">{v.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Services Showcase"
              title="Modern solutions designed to make your brand feel more capable and more trusted."
              description="Every service is framed around outcomes: better visibility, better experience, better leads, and stronger long-term growth."
              center
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedService(service)}
                  role="button"
                  tabIndex={0}
                  className="group glass-card premium-border relative overflow-hidden p-6 cursor-pointer"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} />
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-[#f5c95d] transition group-hover:scale-105">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-300">
                      Premium
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{service.description}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-slate-400">
                    <span>{service.impact}</span>
                    <ChevronRight className="h-4 w-4 text-[#f5c95d] transition group-hover:translate-x-1" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="A delivery model built around confidence, clarity, and quality."
              description="We combine aesthetic standards with disciplined execution so the final experience feels premium and dependable from every angle."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                { title: 'Professional Team', description: 'Experienced creators who think in systems and communicate clearly.', icon: Users },
                { title: 'Affordable Pricing', description: 'Premium results without bloated overhead or unclear scopes.', icon: BadgeCheck },
                { title: 'On-Time Delivery', description: 'Milestone-driven progress so launch dates stay credible.', icon: Clock3 },
                { title: 'Quality Assurance', description: 'We review responsiveness, performance, and consistency carefully.', icon: ShieldCheck },
                { title: 'Latest Technologies', description: 'Modern stacks that keep products maintainable and scalable.', icon: Cpu },
                { title: 'Customer Satisfaction', description: 'We stay aligned with goals and refine details until the result feels right.', icon: HeartIcon },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="glass-card premium-border p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(245,201,93,0.2),rgba(255,255,255,0.04))] text-[#f5c95d]">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="technologies" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Technologies"
              title="We work with modern tools that keep your digital products fast and future-ready."
              description="The right stack depends on the project, but our process consistently favors maintainability, performance, and flexibility."
              center
            />
            {/* enhanced slideshow */}
            <TechCarousel />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="group glass-card premium-border flex items-center gap-4 p-5"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tech.tone} text-[#07111f] shadow-lg shadow-black/20`}>
                    <tech.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-white">{tech.name}</p>
                    <p className="text-sm text-slate-400">Trusted building block</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="ui-design" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="UI Design Showcase"
              title="Figma-ready concepts for products that feel premium from the first tap."
              description="These interface concepts reflect our design direction for Pet Connect, ClassMind, Rural Care Health App, and CareConnect—ready to evolve with your final content and links."
              center
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {uiDesignProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="glass-card premium-border overflow-hidden p-6"
                >
                  <div className={`rounded-[24px] bg-gradient-to-br ${project.accent} p-[1px]`}>
                    <div className="rounded-[23px] bg-white/90 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{project.badge}</p>
                          <h3 className="mt-3 font-display text-2xl font-bold text-slate-900">{project.title}</h3>
                          <p className="mt-2 text-sm font-medium text-slate-600">{project.category}</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-200">
                          <Figma className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="mt-6 rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm leading-7 text-slate-600">{project.description}</p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-3">
                          {['Research', 'Flows', 'Visual Design'].map((item) => (
                            <div key={item} className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                        {project.figmaLink ? (
                          <a
                            href={project.figmaLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                          >
                            Open Figma
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        ) : (
                          <span className="rounded-full border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-500">
                            Figma link coming soon
                          </span>
                        )}
                        <span className="text-sm font-medium text-slate-500">UI/UX concept</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Portfolio"
              title="Selected work that shows how clean structure can drive more trust and more conversions."
              description="Each showcase blends strategy, interface quality, and business objectives into a refined digital experience."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="glass-card premium-border overflow-hidden"
                >
                  <div className={`bg-gradient-to-br ${project.accent} p-[1px]`}>
                    <div className="bg-white/95 p-5">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-700">
                          {project.category}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/90 text-[#2f7d95] shadow-sm">
                          <project.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-6 rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#f8fcff_0%,#f3fbfe_100%)] p-4 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Project image</p>
                            <h3 className="mt-2 font-display text-2xl font-bold text-slate-900">{project.title}</h3>
                          </div>
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#2f7d95] shadow-sm">{project.metrics}</span>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-[1fr_0.7fr]">
                          <div className="rounded-[22px] border border-slate-200 bg-white/90 p-4">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-500">
                                <span>UI preview</span>
                                <span>Live-ready</span>
                              </div>
                              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                                <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                                <div className="mt-4 grid grid-cols-3 gap-2">
                                  {[1, 2, 3].map((item) => (
                                    <div key={item} className="rounded-2xl bg-white p-2 shadow-sm">
                                      <div className="h-16 rounded-xl bg-[linear-gradient(180deg,rgba(78,183,200,0.18),rgba(255,255,255,0.82))]" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-[22px] border border-slate-200 bg-white/90 p-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Technology stack</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {project.stack.map((stack) => (
                                <span key={stack} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                                  {stack}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5 p-6">
                    <p className="text-base leading-7 text-slate-600">{project.description}</p>
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setPreviewProject(project)}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#2f7d95]/30 hover:bg-[#f3fbfe]"
                      >
                        Live Preview
                        <Play className="h-4 w-4 text-[#2f7d95]" />
                      </button>
                      <span className="text-sm text-slate-500">Built to impress and convert</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Process"
              title="A clear workflow keeps quality high and surprises low."
              description="We keep each project moving with a structured sequence that protects both the schedule and the final quality."
              center
            />
            <div className="mt-14 grid gap-4 lg:grid-cols-7">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="relative glass-card premium-border p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(245,201,93,0.2),rgba(255,255,255,0.04))] text-[#f5c95d]">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-2xl font-bold text-white/25">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="absolute right-[-12px] top-1/2 hidden h-0.5 w-6 bg-gradient-to-r from-[#f5c95d]/70 to-transparent lg:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="training" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
                className="glass-card premium-border p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f5c95d]">IT Training & Internship</p>
                <h2 className="mt-4 font-display text-4xl font-bold text-white">Build skills that are actually usable in real projects.</h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  We support learners who want practical experience, portfolio quality, and a stronger path into professional work. The focus stays on outcomes, not just theory.
                </p>
                <div className="mt-6 space-y-3">
                  {['Web Development Training', 'Digital Marketing Training', 'Internship Programs', 'Career Guidance', 'FYP Support'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      <BadgeCheck className="h-5 w-5 text-[#f5c95d]" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2">
                {trainingItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass-card premium-border p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(245,201,93,0.2),rgba(255,255,255,0.04))] text-[#f5c95d]">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Client Testimonials"
              title="Premium feedback from teams and learners who wanted a serious result."
              description="A strong delivery process should feel calm, clear, and dependable. These experiences reflect that standard."
              center
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card premium-border p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-[#f5c95d]">Featured review</p>
                      <h3 className="mt-3 font-display text-3xl font-bold text-white">{testimonials[activeTestimonial].name}</h3>
                      <p className="mt-2 text-sm text-slate-400">
                        {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                      </p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#f5c95d]">
                      <StarRow rating={testimonials[activeTestimonial].rating} />
                    </div>
                  </div>
                  <p className="mt-7 text-xl leading-9 text-slate-200 sm:text-2xl">
                    “{testimonials[activeTestimonial].quote}”
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="grid gap-4">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveTestimonial(index)}
                    className={`glass-card premium-border text-left transition ${index === activeTestimonial ? 'border-[#f5c95d]/40 bg-white/10' : 'bg-white/5 hover:bg-white/10'} p-5`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-display text-lg font-bold text-white">{testimonial.name}</p>
                        <p className="text-sm text-slate-400">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                      <StarRow rating={testimonial.rating} />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{testimonial.quote}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Statistics"
              title="Performance numbers that reflect momentum and experience."
              description="These counters are animated to create a premium presentation while still keeping the design clean and credible."
              center
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="FAQ"
              title="Answers to the questions clients ask most often."
              description="Clear expectations help projects move faster. Here are the essentials before we start."
              center
            />
            <div className="mx-auto mt-14 max-w-4xl space-y-4">
              {faqs.map((faq, index) => {
                const open = activeFaq === index;
                return (
                  <motion.div
                    key={faq.question}
                    layout
                    className="glass-card premium-border overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(open ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    >
                      <span className="font-display text-lg font-bold text-white sm:text-xl">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 flex-none text-[#f5c95d] transition ${open ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-base leading-8 text-slate-300">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-24 lg:py-32">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Book an Appointment"
              title="Let’s turn the next idea into a polished digital experience."
              description="Use the form, WhatsApp button, or phone line to book an appointment and start a project conversation. We’ll respond with a clear next step."
              center
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.form
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
                onSubmit={handleSubmit}
                className="glass-card premium-border space-y-5 p-7"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-200">Your Name</span>
                    <input
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-white/10 bg-[#08111e] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#f5c95d]/50"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-200">Email Address</span>
                    <input
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-[#08111e] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#f5c95d]/50"
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-200">Service Needed</span>
                  <select
                    value={form.service}
                    onChange={(event) => setForm({ ...form, service: event.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-[#08111e] px-4 py-3.5 text-white outline-none transition focus:border-[#f5c95d]/50"
                  >
                    {servicesOptions.map((option) => (
                      <option key={option} value={option} className="bg-[#08111e] text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-200">Project Details</span>
                  <textarea
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    rows={6}
                    placeholder="Tell us what you want to build, improve, or launch."
                    className="w-full rounded-2xl border border-white/10 bg-[#08111e] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#f5c95d]/50"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f5c95d_0%,#f2c75b_55%,#d69225_100%)] px-6 py-3.5 text-sm font-bold text-[#07111f] shadow-[0_12px_30px_rgba(245,201,93,0.24)] transition hover:brightness-110"
                  >
                    Send via WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </button>
                  <a
                    href="tel:03208158913"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4 text-[#f5c95d]" />
                    Call 03208158913 (manager)
                  </a>
                </div>
              </motion.form>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65 }}
                  className="glass-card premium-border p-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f5c95d]">Contact details</p>
                  <div className="mt-6 space-y-4 text-sm text-slate-300">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-[#f5c95d]">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-slate-400">Phone</p>
                        <a href="tel:03208158913" className="font-semibold text-white transition hover:text-[#f5c95d]">
                          03208158913 (manager)
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-[#f5c95d]">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-slate-400">Email</p>
                        <a href="mailto:info@4techsolutions.digital" className="font-semibold text-white hover:text-[#f5c95d]">info@4techsolutions.digital</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-[#f5c95d]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-slate-400">Coverage</p>
                        <p className="font-semibold text-white">Serving clients across Pakistan and beyond</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-[#f5c95d]/40 hover:text-[#f5c95d]"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: 0.1 }}
                  className="glass-card premium-border overflow-hidden"
                >
                  <iframe
                    title="Puraaqua - Gujranwala"
                    src="https://www.google.com/maps?q=32.1877,74.1945&z=15&output=embed"
                    className="h-[320px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-[#06101c] py-14">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(245,201,93,0.22),rgba(255,255,255,0.05))] text-[#f5c95d]">
                <span className="font-display text-lg font-bold">4T</span>
              </span>
              <div>
                <p className="font-display text-xl font-bold text-white">4Tech Solutions</p>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Your Partner in Digital Growth</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Premium software, product, and growth solutions for companies and learners who want a polished result and a reliable partner.
            </p>
          </div>

          <div>
            <p className="font-display text-lg font-bold text-white">Services</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {['Web Development', 'Mobile App Development', 'E-Commerce Solutions', 'Digital Marketing', 'SEO Services', 'UI/UX Design'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-lg font-bold text-white">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button type="button" onClick={() => handleNavClick(item.id)} className="transition hover:text-white">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-lg font-bold text-white">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="tel:03208158913" className="block transition hover:text-white">
                03208158913 (manager)
              </a>
              <a href="mailto:info@4techsolutions.digital" className="block transition hover:text-white">
                info@4techsolutions.digital
              </a>
              <button
                type="button"
                onClick={() => openWhatsApp('Hello 4Tech Solutions, I would like to discuss a project.')}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-[#f5c95d]/40 hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-[#f5c95d]" />
                WhatsApp Us
              </button>
              <div className="text-xs text-slate-400">Manager WhatsApp: +92 320 8158913</div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/923208158913?text=Hello%204Tech%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_50px_rgba(37,211,102,0.32)] transition hover:scale-[1.03]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>

      <AnimatePresence>
        {previewProject && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#04101bcc]/80 px-4 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35 }}
              onClick={(event) => event.stopPropagation()}
              className="glass-card premium-border relative max-h-[90vh] w-full max-w-5xl overflow-y-auto p-5 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#f5c95d]">Project live preview</p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-white">{previewProject.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{previewProject.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewProject(null)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6">
                <ProjectPreview project={previewProject} />
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    setPreviewProject(null);
                    handleNavClick('contact');
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f5c95d] via-[#f0c04d] to-[#c98d24] px-6 py-3.5 text-sm font-bold text-[#07111f]"
                >
                  Build Something Similar
                  <ArrowRight className="h-4 w-4" />
                </button>
                {/** If the previewed project has a live URL in liveSites, show Visit / Google actions */}
                {(() => {
                  const live = previewProject ? liveSites.find((s) => s.title === previewProject.title) : null;
                  if (live && live.url && live.url !== '#') {
                    return (
                      <>
                        <a
                          href={live.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                          Visit Live Site
                        </a>
                        <a
                          href={`https://www.google.com/search?q=${encodeURIComponent(live.url)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3.5 text-sm font-medium text-slate-300 transition hover:text-white"
                        >
                          Check on Google
                        </a>
                      </>
                    );
                  }

                  return (
                    <button
                      type="button"
                      onClick={() => setPreviewProject(null)}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Close Preview
                    </button>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-[#04101bcc]/80 px-4 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.32 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card premium-border relative max-h-[90vh] w-full max-w-6xl overflow-y-auto p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#f5c95d]">Service Details</p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">{selectedService.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{serviceDetails[selectedService.title]?.long || selectedService.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6">
                {serviceDetails[selectedService.title]?.tiers ? (
                  <div className="grid gap-4 sm:grid-cols-3">
                    {serviceDetails[selectedService.title]!.tiers!.map((tier) => (
                      <div key={tier.name} className="rounded-[18px] border border-white/10 bg-white/5 p-5">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{tier.name}</p>
                        <p className="mt-3 text-2xl font-bold text-white">{tier.price}</p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-300">
                          {tier.features.map((f) => (
                            <li key={f} className="flex items-start gap-2">
                              <span className="text-[#f5c95d]">•</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-slate-300">{selectedService.description}</div>
                )}
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Ready to move forward?</p>
                  <p className="mt-1 text-sm text-slate-400">Book an appointment and we’ll guide the next step.</p>
                </div>
                <button
                  type="button"
                  onClick={handleBookAppointment}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f5c95d_0%,#f2c75b_55%,#d69225_100%)] px-6 py-3 text-sm font-bold text-[#07111f] shadow-[0_12px_30px_rgba(245,201,93,0.24)] transition hover:brightness-110"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20.8 4.6c-1.5-1.6-4-1.7-5.7-.2L12 7.4l-3.1-3c-1.7-1.5-4.2-1.4-5.7.2-1.7 1.8-1.6 4.6.1 6.3L12 21l8.7-10.1c1.7-1.7 1.8-4.5.1-6.3Z" />
    </svg>
  );
}
