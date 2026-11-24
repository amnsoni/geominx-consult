import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import {
  ArrowRightIcon,
  BoltIcon,
  BookIcon,
  CheckIcon,
  EyeIcon,
  GlobeIcon,
  GraduationCapIcon,
  LayersIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TargetIcon,
  WrenchIcon,
} from "./components/icons";

const serviceLines = [
  "Mining Consultancy",
  "Drone Survey & Geospatial",
  "Mine Planning & Design",
  "Corporate Training",
  "GET Induction",
  "Civil Engineering",
];

const services = [
  {
    number: "01",
    title: "Mining Engineering Consultancy",
    description:
      "Technical consultancy and engineering support for mining companies, mine operators and project developers.",
    items: [
      "Preparation and assistance in approval of mining plans",
      "Mining plan modifications and review",
      "Preparation of mining schemes and technical reports",
      "Mine development and production planning",
      "Opencast and underground mine planning",
      "Mine design and layout development",
      "Preparation of statutory mining drawings and plans",
      "Technical documentation and project feasibility support",
      "Mine safety and operational improvement consultancy",
      "Technical assistance for regulatory compliance",
    ],
  },
  {
    number: "02",
    title: "Drone Survey & Geospatial Solutions",
    description:
      "Modern surveying and mapping using drone technology and digital data-processing techniques.",
    items: [
      "DGPS and drone-based surveying",
      "Topographical surveys",
      "Digital Terrain Model (DTM) preparation",
      "Digital Elevation Model (DEM) generation",
      "Contour mapping",
      "Orthomosaic map preparation",
      "Mine lease boundary and area mapping",
      "Volume calculation of overburden, dumps and mineral stockpiles",
      "Progress monitoring of mining operations",
      "3D terrain modelling and visualization",
      "Survey data processing and technical reporting",
    ],
  },
  {
    number: "03",
    title: "Computer-Aided Mine Planning & Designing",
    description:
      "Practical software skills for mining and civil engineering professionals, from drafting to 3D modelling.",
    items: [
      "AutoCAD for mining and civil engineering drawings",
      "Surpac for geological modelling and mine planning",
      "Datamine for geological and mining applications",
      "Deswik for mine planning and design",
      "Mine scheduling and production planning",
      "Open-pit mine design and optimization",
      "Underground mine planning and layout design",
      "Geological modelling and resource estimation concepts",
      "3D mine modelling and visualization",
      "Preparation of technical drawings and sections",
    ],
  },
  {
    number: "04",
    title: "Corporate Training Programs",
    description:
      "Customized technical training that improves the knowledge, efficiency and capability of industry teams.",
    items: [
      "Mining engineering and operational practices",
      "Mine planning and production management",
      "Mine surveying and digital technologies",
      "Computer-aided design and drafting",
      "Mine safety and statutory compliance",
      "Drilling and blasting technology",
      "Heavy earth-moving machinery and equipment",
      "Underground mining operations",
      "Opencast mining operations",
      "Project planning and management",
      "Technical documentation and reporting",
    ],
  },
  {
    number: "05",
    title: "Graduate Engineer Trainee (GET) Induction Program",
    description:
      "Structured induction and professional development that turns fresh graduates into industry-ready engineers.",
    items: [
      "Introduction to the mining and infrastructure industries",
      "Fundamentals of opencast and underground mining",
      "Mining machinery and equipment familiarization",
      "Drilling and blasting fundamentals",
      "Mine planning and production operations",
      "Mine surveying and survey instruments",
      "Computer-aided drafting and designing",
      "Introduction to mining software",
      "Mine safety and statutory regulations",
      "Practical case studies and field-oriented learning",
      "Professional communication and workplace practices",
    ],
  },
  {
    number: "06",
    title: "Civil Engineering Consultancy & Training",
    description:
      "Technical consultancy, software training and practical engineering applications for civil professionals.",
    items: [
      "AutoCAD and civil drafting",
      "Civil 3D and infrastructure design",
      "Surveying and digital mapping",
      "Quantity estimation and BOQ preparation",
      "Project planning and scheduling",
      "Construction management",
      "Engineering drawings and documentation",
      "3D modelling and design applications",
    ],
  },
];

const mission = [
  {
    title: "Empowering Young Engineers",
    text: "Educate and develop young mining and civil engineers through practical, industry-oriented technical training.",
  },
  {
    title: "Digital Engineering Excellence",
    text: "Promote the use of computer-aided planning, designing, modelling and engineering software in mining and civil engineering.",
  },
  {
    title: "Industry–Academia Connection",
    text: "Bridge the gap between theoretical education and practical industrial requirements.",
  },
  {
    title: "Professional Development",
    text: "Provide specialized corporate training, Graduate Engineer Trainee (GET) induction programs and skill-development initiatives.",
  },
  {
    title: "Engineering Consultancy",
    text: "Deliver reliable, efficient and technology-driven consultancy services to mining and infrastructure organizations.",
  },
  {
    title: "Innovation & Technology",
    text: "Encourage the adoption of advanced surveying, digital mapping, automation and modern engineering practices.",
  },
];

const reasons = [
  {
    icon: BookIcon,
    title: "Industry-Oriented Knowledge",
    text: "Our approach focuses on practical engineering applications rather than limiting learning to theoretical concepts.",
  },
  {
    icon: BoltIcon,
    title: "Technology-Driven Approach",
    text: "We encourage the adoption of modern engineering software, digital surveying and advanced planning tools.",
  },
  {
    icon: WrenchIcon,
    title: "Practical Learning",
    text: "Our training methodology emphasizes real-world engineering problems, case studies and practical exercises.",
  },
  {
    icon: TargetIcon,
    title: "Customized Training",
    text: "Programs can be tailored according to the technical requirements of organizations, institutions and individual professionals.",
  },
  {
    icon: GraduationCapIcon,
    title: "Career Development",
    text: "We help young engineers develop the technical knowledge and confidence required to build successful careers.",
  },
  {
    icon: LayersIcon,
    title: "Integrated Engineering Solutions",
    text: "We bring consultancy, training, planning, surveying and designing services together under one platform.",
  },
];

const approach = [
  {
    title: "LEARN",
    text: "Develop strong technical fundamentals and engineering knowledge.",
  },
  {
    title: "PRACTICE",
    text: "Apply knowledge through software training, practical exercises and real-world case studies.",
  },
  {
    title: "IMPLEMENT",
    text: "Build the confidence and competence to apply engineering skills in actual industrial projects.",
  },
];

const audience = [
  "Mining Engineering Students and Graduates",
  "Civil Engineering Students and Graduates",
  "Working Mining and Civil Engineers",
  "Graduate Engineer Trainees",
  "Mining Contractors and Project Developers",
  "Mining Companies and Infrastructure Organizations",
  "Engineering Colleges and Technical Institutions",
  "Professionals seeking software and technical skill development",
];

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
};

function SectionHeading({ eyebrow, title, intro, tone = "light" }: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.25em] ${
          isDark ? "text-amber-400" : "text-amber-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-base leading-7 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                <MapPinIcon className="h-3.5 w-3.5 text-amber-400" />
                Jabalpur, Madhya Pradesh · India
              </span>

              <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block text-white">GEOMINX</span>
                <span className="block text-amber-400">INDIA</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg font-medium text-slate-200 sm:text-xl">
                Engineering Knowledge. Digital Innovation. Professional Excellence.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
                A Jabalpur-based engineering consultancy and technical training organization advancing
                practical knowledge, technical capability and industry-ready skills in mining and civil
                engineering.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
                >
                  Explore Services
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  Talk to Us
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                What we do
              </p>
              <ul className="mt-5 space-y-3">
                {serviceLines.map((line) => (
                  <li key={line} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-400/15 text-amber-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-7 grid grid-cols-3 divide-x divide-white/10 rounded-xl bg-slate-900/60 py-4 text-center">
                <div>
                  <p className="text-2xl font-semibold text-white">6</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">Core services</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">3</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">Pillars</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">100%</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">Industry focus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeading
                eyebrow="About us"
                title="Bridging academic education and industry requirements"
              />

              <div className="space-y-5 text-base leading-7 text-slate-600">
                <p>
                  GEOMINX INDIA is a Jabalpur, Madhya Pradesh-based engineering consultancy and
                  technical training organization dedicated to advancing professional knowledge,
                  technical capabilities and practical skills in the mining and civil engineering
                  industries.
                </p>
                <p>
                  We aim to bridge the gap between academic education and industry requirements by
                  providing specialized technical training, engineering consultancy and
                  technology-driven solutions.
                </p>
                <p>
                  Our focus is on empowering young mining and civil engineers with modern engineering
                  tools, computer-aided planning, designing, surveying and project management
                  techniques to prepare them for the evolving demands of the industry.
                </p>
                <p>
                  Through industry-oriented training programs, professional consultancy and practical
                  learning, GEOMINX INDIA strives to develop technically competent, confident and
                  industry-ready professionals.
                </p>

                <div className="grid gap-3 pt-2 sm:grid-cols-3">
                  {["Industry-oriented", "Technology-driven", "Practical learning"].map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      <CheckIcon className="h-4 w-4 text-amber-500" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionHeading eyebrow="Direction" title="Our vision and mission" />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/15 text-amber-600">
                    <EyeIcon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">Our Vision</h3>
                </div>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  To become a leading engineering consultancy and professional training organization in
                  India, recognized for developing skilled, technologically advanced and industry-ready
                  mining and civil engineers.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  We envision a future where young engineering professionals have access to practical
                  knowledge, modern digital technologies and industry-oriented skills that enable them
                  to contribute effectively to sustainable infrastructure and mineral development.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/15 text-amber-600">
                    <TargetIcon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
                </div>
                <ul className="mt-5 space-y-4">
                  {mission.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-amber-500" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-0.5 text-sm leading-6 text-slate-600">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionHeading
              eyebrow="What we offer"
              title="Our core services"
              intro="From mining consultancy and drone surveys to software training and civil engineering support — integrated engineering solutions under one platform."
            />

            <div className="mt-12 space-y-6">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-950 font-mono text-sm font-semibold text-amber-400">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionHeading
              eyebrow="The GEOMINX difference"
              title="Why choose GEOMINX INDIA?"
              intro="We combine practical engineering, modern tools and industry experience to prepare professionals for real-world demands."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/15 text-amber-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{reason.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="approach" className="relative overflow-hidden bg-slate-950 text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionHeading
              eyebrow="Our approach"
              title="Learn. Practice. Implement."
              tone="dark"
              intro="Engineering education should go beyond textbooks and classroom learning. Our methodology is built on three fundamental pillars."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {approach.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
                >
                  <span className="font-mono text-4xl font-semibold text-amber-400/40">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-[0.15em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionHeading
                eyebrow="Who we serve"
                title="Our target audience"
                intro="Programs and services designed for students, professionals, institutions and industry organizations."
              />

              <ul className="grid gap-3 sm:grid-cols-2">
                {audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Our commitment
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Building skills. Empowering engineers.
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              At GEOMINX INDIA, we believe the future of engineering lies in the integration of
              technical knowledge, practical experience and digital technology. Our commitment is to
              make quality engineering knowledge and modern technical skills more accessible to young
              professionals while supporting industries with reliable consultancy and specialized
              technical training.
            </p>
            <p className="mt-6 text-lg font-medium text-slate-900">
              We don’t just train engineers; we aim to prepare the next generation of engineering
              professionals.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                  Contact us
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let’s build the next generation of engineering professionals.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  Connect with us to explore our consultancy services, corporate training programs and
                  professional skill-development opportunities.
                </p>
                <a
                  href="#top"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
                >
                  Start a conversation
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-amber-400">GEOMINX INDIA</p>
                <p className="mt-1 text-sm text-slate-400">
                  Engineering Consultancy · Technical Training · Digital Engineering Solutions
                </p>

                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                    <div>
                      <dt className="text-slate-400">Office</dt>
                      <dd className="font-medium text-white">Jabalpur, Madhya Pradesh, India</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                    <div>
                      <dt className="text-slate-400">Email</dt>
                      <dd className="font-medium text-white">[Your Official Email Address]</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                    <div>
                      <dt className="text-slate-400">Contact</dt>
                      <dd className="font-medium text-white">[Your Contact Number]</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GlobeIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                    <div>
                      <dt className="text-slate-400">Website</dt>
                      <dd className="font-medium text-white">[Your Website URL]</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
