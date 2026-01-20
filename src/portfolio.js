/* Sultan Ul Arfeen - Portfolio Configuration */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Sultan Ul Arfeen",
  title: "Hi, I'm Sultan",
  subTitle:
    "Head of AI & Full-Stack Architecture @ KodeRift. Building Agentic AI workflows, Enterprise RAG pipelines, and scalable full-stack applications. Stanford ML certified with published research in neural network optimization."
  ,
  resumeLink: "https://drive.google.com/file/d/1-E7jUjKnT9QvscBzzPU42AK3W5UNO-6L/view?usp=drive_link", // Add your resume link here
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/SultanArfeen",
  linkedin: "https://www.linkedin.com/in/sultan-arfeen-560a24353/",
  gmail: "SultaanUlArfeen@gmail.com",
  medium: "https://medium.com/@sultanularfeen",
  instagram: "https://www.instagram.com/arfeenkd/",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "AI ENGINEER WHO BRIDGES RESEARCH WITH PRODUCTION",
  skills: [
    "Build Agentic AI workflows and autonomous agents using LangChain & LlamaIndex",
    "Architect Enterprise RAG pipelines serving 50,000+ service minutes monthly",
    "Develop scalable full-stack applications with React, Next.js, and FastAPI",
    "Apply research methods to fine-tune models for domain-specific efficiency"
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "LangChain", fontAwesomeClassname: "fas fa-link" },
    { skillName: "OpenAI", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "HuggingFace", fontAwesomeClassname: "fas fa-smile" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Next.js", fontAwesomeClassname: "fas fa-arrow-right" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-dharmachakra" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "GCP", fontAwesomeClassname: "fab fa-google" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "n8n", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "MCP", fontAwesomeClassname: "fas fa-network-wired" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "National University of Computer and Emerging Sciences (FAST)",
      logo: require("./assets/images/nucesLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2020 - December 2024",
      desc: "Built the mathematical foundation for AI and developed published research in neural network optimization.",
      descBullets: [
        "Published research on Selective Neuron Fine-Tuning using Mutation-Based Analysis",
        "Increased model efficiency by 20% through novel optimization techniques",
        "Focus: Deep Learning, Computer Vision, NLP, AI Software Development"
      ]
    },
    {
      schoolName: "Stanford University School of Computing",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Machine Learning Certificate Degree",
      duration: "December 2024 - December 2025",
      desc: "Specialized in advanced machine learning techniques and production AI systems.",
      descBullets: [
        "Deep Neural Networks, CNNs, Computer Vision",
        "Chatbot Development, Fine-Tuning, Workflow Automation"
      ]
    }
  ]
};

// Tech Stack Proficiency - FILLED WITH REAL VALUES
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "AI/ML & LLMs", progressPercentage: "95%" },
    { Stack: "Full-Stack Development", progressPercentage: "88%" },
    { Stack: "RAG & Vector Search", progressPercentage: "92%" },
    { Stack: "DevOps & Infrastructure", progressPercentage: "78%" },
    { Stack: "Research & Optimization", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Head of AI & Full-Stack Architecture",
      company: "KodeRift",
      companylogo: require("./assets/images/koderiftLogo.png"),
      date: "July 2024 - Present",
      desc: "Leading technical strategy for 100+ projects, bridging AI research with production engineering.",
      descBullets: [
        "Architecting Agentic AI workflows and Enterprise RAG pipelines",
        "Building scalable ecosystems with React, Next.js, Node.js, and Python",
        "Deploying intelligent SaaS platforms optimized for thousands of concurrent users",
        "Automating 50,000+ service minutes monthly with high factual accuracy"
      ]
    },
    {
      role: "AI Developer",
      company: "Fiverr",
      companylogo: require("./assets/images/fiverrLogo.png"),
      date: "February 2025 - Present",
      desc: "Freelance AI development specializing in automation and intelligent systems.",
      descBullets: [
        "Building AI automation solutions using n8n, LangChain, and custom agents",
        "Developing RAG-based applications with vector search integration",
        "Creating chatbots and workflow automation for enterprise clients"
      ]
    },
    {
      role: "AI Research Assistant",
      company: "FAST NUCES",
      companylogo: require("./assets/images/nucesLogo.png"),
      date: "January 2023 - December 2024",
      desc: "Conducted research in neural network optimization and spectral analysis.",
      descBullets: [
        "Published research on Selective Neuron Fine-Tuning methods",
        "Developed Mutation-Based Neuron Walking Analysis increasing efficiency by 20%",
        "Focus: CNNs, RNNs, Spectral Imaging, Artificial Neural Networks"
      ]
    },
    {
      role: "Web Developer & SEO Specialist",
      company: "eXputer",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "February 2022 - January 2023",
      desc: "Software Engineer and SEO specialist at a leading gaming content company.",
      descBullets: [
        "Created high-quality, SEO-optimized articles boosting organic traffic",
        "Implemented on-page SEO best practices improving SERP rankings",
        "Analyzed industry trends and competitor strategies for content optimization"
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: false
};

// Big Projects - 3x2 GRID, ALL CLICKABLE
const bigProjects = {
  title: "Projects",
  subtitle: "AI-POWERED APPLICATIONS I'VE BUILT FROM SCRATCH",
  projects: [
    {
      image: require("./assets/images/CloudChaserThumbnail.jpeg"),
      projectName: "CloudChaser",
      projectDesc: "AI-powered Android app that identifies weather by analyzing clouds through your camera. Features real-time ML classification, AR overlay, and weather integration.",
      footerLink: [
        { name: "View Project", url: "https://github.com/SultanArfeen/CloudChaser" }
      ]
    },
    {
      image: require("./assets/images/AIARThumbnail.jpeg"),
      projectName: "AIAR Guitar",
      projectDesc: "Browser-based Augmented Reality Guitar with real-time hand tracking, AI chord correction, and low-latency audio synthesis using MediaPipe and Three.js.",
      footerLink: [
        { name: "View Project", url: "https://github.com/SultanArfeen/AIAR-Guitar" }
      ]
    },
    {
      image: require("./assets/images/MedikThumbnail.png"),
      projectName: "Medik",
      projectDesc: "AI Medical Assistant powered by RAG from scratch. Features hybrid retrieval (BM25 + Dense), diagnostic knowledge graphs, and evidence-based medical responses.",
      footerLink: [
        { name: "View Project", url: "https://github.com/SultanArfeen/Medik" }
      ]
    },
    {
      image: require("./assets/images/CricketGOThumbnail.jpeg"),
      projectName: "CricketGo",
      projectDesc: "The Instagram/TikTok for sports content. Features live scores, AI-powered match summaries using Google Gemini, and personalized user experiences.",
      footerLink: [
        { name: "View Project", url: "https://github.com/SultanArfeen/cricketgo" }
      ]
    },
    {
      image: require("./assets/images/UrduPoetryGenThumbnail.jpg"),
      projectName: "Roman Urdu Poetry Generator",
      projectDesc: "Character-level language model using Stacked LSTM for generating Roman Urdu poetry. Trained on scraped data from Rekhta.org with Gradio interface.",
      footerLink: [
        { name: "View Project", url: "https://github.com/SultanArfeen/Urdu-Poetry-Generation---An-AI-Model" }
      ]
    },
    {
      image: require("./assets/images/PseudoCodeThumbnail.png"),
      projectName: "Pseudocode to C++ Transformer",
      projectDesc: "Built a Transformer model from scratch to convert pseudocode to C++ code. Deep dive into attention mechanisms and sequence-to-sequence learning.",
      footerLink: [
        { name: "View Project", url: "https://github.com/SultanArfeen/Pseudocode-to-C" }
      ]
    }
  ],
  display: true
};

// Achievement/Certification Section
const achievementSection = {
  title: "Certifications",
  subtitle: "Industry certifications validating my AI and ML expertise",

  achievementsCards: [
    {
      title: "AWS - Fundamentals of ML & AI",
      subtitle: "Amazon Web Services certification covering machine learning foundations and AI services on AWS cloud platform.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "OpenAI - ChatGPT Automation & Workflows",
      subtitle: "Certified in building production-ready automation workflows using ChatGPT and OpenAI APIs.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "OpenAI Logo",
      footerLink: []
    },
    {
      title: "Microsoft - AI & ML Engineering",
      subtitle: "Microsoft certification in AI and Machine Learning engineering practices and Azure AI services.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Microsoft Logo",
      footerLink: []
    },
    {
      title: "Google Cloud - Generative AI Leader",
      subtitle: "Google Cloud certification focusing on Generative AI technologies and cloud-based AI solutions.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Cloud Logo",
      footerLink: []
    },
    {
      title: "IBM - AI Engineering",
      subtitle: "IBM professional certification in AI Engineering covering deep learning, neural networks, and ML deployment.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "IBM Logo",
      footerLink: []
    }
  ],
  display: false
};

// Blog Section
const blogSection = {
  title: "Blogs",
  subtitle: "I write about AI, machine learning, and building production systems.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://medium.com/@sultanularfeen/cloudchaser-the-app-that-lets-you-predict-weather-by-looking-at-clouds-d98d6f8c4fd7",
      title: "CloudChaser: Predict Weather by Looking at Clouds",
      description: "Building an AI-powered Android app with on-device ML for real-time cloud classification."
    },
    {
      url: "https://medium.com/@sultanularfeen/aiar-guitar-an-ai-augmented-reality-browser-based-guitar-7b3d6992826e",
      title: "AIAR Guitar: AI Augmented Reality Guitar",
      description: "Creating a browser-based AR guitar with real-time hand tracking and AI chord correction."
    },
    {
      url: "https://medium.com/@sultanularfeen/medik-an-ai-medical-assistant-rag-from-scratch-4af9c895220a",
      title: "Medik: AI Medical Assistant - RAG from Scratch",
      description: "Building a sophisticated RAG system for medical information retrieval."
    },
    {
      url: "https://medium.com/@sultanularfeen/urdu-poetry-generation-an-ai-model-52118c57f7b5",
      title: "Urdu Poetry Generation: An AI Model",
      description: "Training a Stacked LSTM for generating Roman Urdu poetry."
    }
  ],
  display: true
};

// Talks Section - Disabled
const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section - Disabled
const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info - Email integrated, not separate
const contactInfo = {
  title: "Contact Me",
  subtitle: "Have a project in mind or want to discuss AI solutions? Let's connect!",
  number: "",
  email_address: "SultaanUlArfeen@gmail.com"
};

// Twitter - Disabled
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
