import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';

import pwcLogo from './assets/company_logo/pwc_logo.png';

import pesLogo from './assets/education_logo/pes_logo.png';

import welth from './assets/work_logo/welth.png';
import classilog from './assets/work_logo/classilog.png';
import thumblify from './assets/work_logo/thumblify.png';
import pitchai from './assets/work_logo/pitchai.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: pwcLogo,
      role: "Data Engineering Trainee",
      company: "PwC",
      date: "Feb 2026 - Aug 2026",
      desc: "Completed the PwC Launchpad Data Engineering Program, covering SoftSkills and gaining hands-on skills in GenAI, Modern Data Systems, Python, Data engineering and Responsive Web Designing.Earned micro-certifications in SoftSkills, GenAI, Modern Data Systems, Python and Data Engineering.Ranked 8th out of 296 candidates overall and 1st out of 7 within the PES University cohort.",
      skills: [
        "Generative AI",
        "Machine Learning",
        "SQL",
        "Python",
        "ETL",
        "Data Warehousing",
        "Dimensional Modeling",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];
  
    export const education = [
    {
      id: 0,
      img: pesLogo,
      school: "PES University, Bengaluru",
      date: "2023 - 2027",
      desc: "I am currently pursuing my Bachelor's degree (B.Tech) in Computer Science and Engineering at PES University, Bengaluru. My coursework includes Data Structures, Algorithms, Database Systems, Web Development and Software Engineering. I actively participate in coding competitions and workshops, which have strengthened my technical and problem-solving skills. My journey at PES University continues to enhance my knowledge, creativity and passion for technology.",
      degree: "Bachelor of Technology - B.Tech",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "PitchAI",
      description:
        "Built an AI cold email generator for personalized outreach, engineered a vector database across portfolio entries, retrieved relevant links and integrated fast LLM inference to generate concise personalized emails.",
      image: pitchai,
      tags: ["Python", "LangChain", "Streamlit", "ChromaDB", "Llama 3.3"],
      github: "https://github.com/TrigunDev/PitchAI",
      webapp: "https://ai-cold-email.streamlit.app/",
    },
    {
      id: 1,
      title: "ClassiLog",
      description:
        "Architected a hybrid log classifier for automated log classification, trained a text classification model and developed a backend to classify uploaded log CSVs and return labeled results via REST endpoints.",
      image: classilog,
      tags: ["Scikit-learn", "BERT", "FastAPI"],
      github: "https://github.com/TrigunDev/ClassiLog",
    },
    {
      id: 2,
      title: "Welth",
      description:
        "Developed an AI-powered finance platform featuring advanced analytics, smart receipt scanning, budget planning and real-time multi-currency support with secure multi-account management.",
      image: welth,
      tags: ["React JS", "Next JS", "Supabase", "Shadcn UI"],
      github: "https://github.com/TrigunDev/welth",
      webapp: "https://welth-chi-ebon.vercel.app/",
    },
    {
      id: 3,
      title: "Thumblify",
      description:
        "Developed an AI-powered YouTube thumbnail generation platform using the Google Gemini API, enabling automated, scalable thumbnail creation with optimized APIs, secure key handling and efficient backend processing.",
      image: thumblify,
      tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
      github: "https://github.com/TrigunDev/Thumblify",
      webapp: "https://thumblify-tau.vercel.app/",
    },
  ];  