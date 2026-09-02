export const profile = {
  name: "YOUR NAME",
  tagline: "Experience · Craft · Silence",
  summary:
    "A builder who values quiet precision. I turn complex problems into clean systems, and measure success by how little people notice the machinery behind the work.",

  experience: [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Example Corp",
      location: "Shanghai / Remote",
      start: "2023-03",
      end: "Present",
      bullets: [
        "Led architecture of a high-throughput data pipeline serving 2M+ daily users.",
        "Reduced average API latency by 40% through query optimization and caching strategy.",
        "Mentored 4 junior engineers and established code review standards across 3 teams.",
      ],
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Another Studio",
      location: "Beijing",
      start: "2020-07",
      end: "2023-02",
      bullets: [
        "Built the core payment module integrated with Stripe, Alipay, and WeChat Pay.",
        "Improved test coverage from 42% to 78%, cutting production incidents by half.",
        "Collaborated with designers to ship a dark-mode design system used company-wide.",
      ],
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Startup Zero",
      location: "Hangzhou",
      start: "2018-06",
      end: "2020-06",
      bullets: [
        "Developed customer-facing dashboard features with React and Node.js.",
        "Maintained CI/CD pipelines and automated deployment workflows on AWS.",
      ],
    },
  ],

  education: [
    {
      school: "Example University",
      degree: "B.S. Computer Science",
      period: "2014 — 2018",
      notes: "Dean's List · ACM-ICPC regional finalist · Thesis on distributed systems",
    },
  ],

  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "Go"],
    Frameworks: ["React", "Node.js", "Express", "Next.js"],
    Tools: ["Docker", "GitHub Actions", "AWS", "PostgreSQL"],
    Design: ["Figma", "CSS3", "Framer Motion"],
  },

  contact: {
    email: "you@example.com",
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
  },
};
