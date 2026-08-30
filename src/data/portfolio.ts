import {
  PersonalInfo,
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  GitHubStats,
  CodingActivity
} from '../types';

export const personalData: PersonalInfo = {
  name: 'Mule Sai Satvik Reddy',
  title: 'Full Stack Developer | DevOps & Cloud | SQL',
  primaryPositioning: 'Full Stack Developer | DevOps & Cloud | SQL',
  secondaryPositioning: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS', 'Docker', 'Kubernetes', 'Jenkins CI/CD'],
  tagline: 'Computer Science undergraduate specializing in Cloud Native Software Engineering, full-stack development, and DevOps automation.',
  bio: [
    'Computer Science undergraduate specializing in Cloud Native Software Engineering, with hands-on experience across full-stack development, cloud infrastructure, and DevOps automation.',
    'Skilled in building REST APIs with Java and Spring Boot, containerizing and deploying applications with Docker, Kubernetes, and Jenkins CI/CD pipelines on AWS, and writing optimized SQL queries with strong foundation in DSA, DBMS, OOP, and the SDLC.'
  ],
  location: 'Vijayawada, India',
  email: '2300032844cseh1@gmail.com',
  phone: '+91-9573069185',
  github: 'https://github.com/satvik7770610',
  githubUsername: 'satvik7770610',
  linkedin: 'https://linkedin.com/in/satvikreddy0610',
  resumeUrl: '#',
  availability: {
    status: 'available',
    text: 'Available for Software Engineering, Cloud & DevOps opportunities'
  },
  achievements: [
    'Finalist, Eureka Junior – IIT Bombay Entrepreneurship Challenge',
    'Taekwondo Red Belt (District Bronze)'
  ],
  languages: [
    { language: 'English', proficiency: 'Advanced' },
    { language: 'Hindi', proficiency: 'Advanced' },
    { language: 'Telugu', proficiency: 'Proficient' }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    description: 'Programming and query languages for algorithms, backend services, and databases',
    skills: [
      { name: 'Java', level: 92, iconName: 'Coffee', highlight: true, experience: 'Core Language', description: 'Core Java, OOP, Collections, Concurrency, JVM execution' },
      { name: 'Python', level: 85, iconName: 'Terminal', highlight: true, experience: 'Scripting & Tools', description: 'Automation scripts, backend utilities, data structures' },
      { name: 'SQL', level: 90, iconName: 'Database', highlight: true, experience: 'Database Queries', description: 'Complex joins, indexing, query optimization, DDL/DML' },
      { name: 'C', level: 80, iconName: 'Cpu', experience: 'Systems & DSA', description: 'Memory management, pointers, fundamental computer science concepts' }
    ]
  },
  {
    id: 'backend-web',
    name: 'Backend & Web',
    description: 'Enterprise backend frameworks, RESTful web services, and user interfaces',
    skills: [
      { name: 'Spring Boot', level: 90, iconName: 'Server', highlight: true, experience: 'Framework', description: 'Spring MVC, Spring Data JPA, RESTful API architecture' },
      { name: 'REST APIs', level: 92, iconName: 'Network', highlight: true, experience: 'Architecture', description: 'API contract design, endpoint integration, HTTP methods, JSON' },
      { name: 'React', level: 88, iconName: 'Layout', highlight: true, experience: 'Frontend', description: 'Component-driven UI, state management, hooks, modern React' },
      { name: 'HTML / CSS / JavaScript', level: 90, iconName: 'FileCode2', experience: 'Web Standards', description: 'Semantic markup, modern styling, ES6+ asynchronous features' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    description: 'Relational data modeling, schema architecture, and query optimization',
    skills: [
      { name: 'MySQL', level: 90, iconName: 'Database', highlight: true, experience: 'Relational DB', description: 'Schema design, relations, stored procedures, transactions' },
      { name: 'PostgreSQL', level: 86, iconName: 'HardDrive', highlight: true, experience: 'Relational DB', description: 'Complex relational modeling, indexing, ACID compliance' },
      { name: 'Query Optimization', level: 88, iconName: 'Sparkles', highlight: true, experience: 'Performance', description: 'Execution plan analysis, index tuning, query refactoring' }
    ]
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    description: 'Cloud infrastructure, container orchestration, and CI/CD pipelines',
    skills: [
      { name: 'AWS (EC2, Lambda, S3, IAM)', level: 90, iconName: 'Cloud', highlight: true, experience: 'Cloud Platform', description: 'Compute provisioning, serverless functions, cloud storage, IAM security' },
      { name: 'GCP (Google Cloud)', level: 80, iconName: 'CloudRain', experience: 'Cloud Platform', description: 'Cloud infrastructure services and container hosting' },
      { name: 'Docker', level: 88, iconName: 'Container', highlight: true, experience: 'Containerization', description: 'Multi-stage builds, container isolation, image optimization' },
      { name: 'Kubernetes', level: 82, iconName: 'Boxes', highlight: true, experience: 'Orchestration', description: 'Pod management, container cluster scaling, service definitions' },
      { name: 'Jenkins', level: 85, iconName: 'GitMerge', highlight: true, experience: 'CI/CD Automation', description: 'Automated build triggers, testing stages, continuous delivery pipelines' },
      { name: 'CI/CD', level: 88, iconName: 'GitMerge', experience: 'DevOps', description: 'Continuous integration, automated deployment workflows' },
      { name: 'Microservices', level: 86, iconName: 'Layers', experience: 'Architecture', description: 'Decoupled service design, API gateway routing, distributed systems' }
    ]
  },
  {
    id: 'core-cs',
    name: 'Core CS Concepts',
    description: 'Fundamental computer science theoretical principles and systems',
    skills: [
      { name: 'DSA (Data Structures & Algorithms)', level: 90, iconName: 'Binary', highlight: true, experience: 'Core CS', description: 'Arrays, trees, graphs, dynamic programming, algorithmic complexity' },
      { name: 'OOP (Object-Oriented Programming)', level: 92, iconName: 'Boxes', highlight: true, experience: 'Core CS', description: 'Encapsulation, inheritance, polymorphism, abstraction, design patterns' },
      { name: 'DBMS (Database Management Systems)', level: 90, iconName: 'Database', highlight: true, experience: 'Core CS', description: 'Normalization, ACID properties, transaction management, concurrency' },
      { name: 'Operating Systems', level: 86, iconName: 'Cpu', experience: 'Core CS', description: 'Process scheduling, memory management, file systems, synchronization' }
    ]
  },
  {
    id: 'tools-practices',
    name: 'Tools & Practices',
    description: 'Version control, developer tools, and software engineering methodologies',
    skills: [
      { name: 'Git & GitHub', level: 92, iconName: 'GitBranch', highlight: true, experience: 'Version Control', description: 'Branching strategies, PR reviews, merge conflict resolution' },
      { name: 'GitHub Actions', level: 86, iconName: 'GitMerge', experience: 'Automation', description: 'Workflow automation, CI test suites, automated actions' },
      { name: 'Linux', level: 88, iconName: 'TerminalSquare', highlight: true, experience: 'OS & CLI', description: 'Bash commands, shell environment, system navigation and admin' },
      { name: 'Postman', level: 90, iconName: 'Zap', experience: 'API Testing', description: 'REST endpoint testing, request payloads, response validation' },
      { name: 'SDLC', level: 88, iconName: 'CheckCircle', experience: 'Process', description: 'Software Development Life Cycle stages, design to deployment' },
      { name: 'Agile / Scrum', level: 86, iconName: 'Users', experience: 'Methodology', description: 'Sprint planning, iterative delivery, collaborative workflows' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'student-report-system-erp',
    title: 'Student Report System ERP',
    tagline: 'Full-stack ERP application using React, Spring Boot, MySQL, Docker, Jenkins CI/CD, and AWS EC2/Lambda',
    category: 'Full Stack',
    featured: true,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/satvik7770610/student-report-system-erp',
    liveUrl: 'https://github.com/satvik7770610/student-report-system-erp',
    technologies: ['React', 'Spring Boot', 'MySQL', 'Docker', 'Jenkins', 'AWS EC2', 'AWS Lambda', 'REST APIs', 'SQL'],
    overview: 'A robust full-stack ERP application built for academic institutions to streamline student record administration, grade management, and automated report generation with role-based access control.',
    problem: 'Academic institutions faced bottlenecks with manual student grade tracking, slow report compilation, and lack of secure, containerized deployment pipelines.',
    architecture: [
      'React frontend interface providing role-based portals for administrators, faculty, and students',
      'Java Spring Boot backend service exposing modular REST APIs for record processing and authentication',
      'Optimized relational MySQL database with structured schemas for student records and course grades',
      'Docker containerization ensuring environment reproducibility across development and production',
      'Jenkins CI/CD automation pipeline automating build, test verification, and deployment stages',
      'Hybrid AWS deployment running core services on EC2 with select backend functions on AWS Lambda'
    ],
    solution: 'Engineered a scalable ERP platform with role-based authentication in Spring Boot, responsive React dashboards, optimized SQL queries, containerized Docker packaging, and an automated Jenkins CI/CD pipeline on AWS.',
    features: [
      'Role-based authentication & authorization for managing student records and administrative reports',
      'Relational database schemas designed in MySQL with optimized SQL queries for high-speed report queries',
      'Integrated REST APIs for backend data processing and transaction management',
      'Containerized application architecture built with Docker for seamless environment portability',
      'Automated Jenkins CI/CD pipeline triggering automated build, test suites, and deployments',
      'Deployed on AWS EC2 with serverless AWS Lambda execution for specific computational backend tasks'
    ],
    challenges: [
      'Structuring relational database tables to handle variable academic grading schemes with minimal query latency',
      'Configuring Jenkins CI/CD pipeline to automate container building and remote deployment on AWS EC2'
    ],
    metrics: [
      'Full role-based security across administrator, faculty, and student views',
      'Automated zero-downtime CI/CD deployment via Jenkins pipeline on AWS',
      'Optimized SQL queries delivering instant academic record retrieval'
    ]
  },
  {
    id: 'ecommerce-shopping-app',
    title: 'E-Commerce Shopping Application',
    tagline: 'Full-stack online shopping platform built with React, Spring Boot, MySQL, and REST APIs',
    category: 'Full Stack',
    featured: true,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/satvik7770610/ecommerce-shopping-app',
    liveUrl: 'https://github.com/satvik7770610/ecommerce-shopping-app',
    technologies: ['React', 'Spring Boot', 'MySQL', 'REST APIs', 'Java', 'HTML/CSS/JavaScript', 'SQL'],
    overview: 'A modern, full-stack e-commerce web application featuring intuitive product discovery, secure user authentication, shopping cart management, and streamlined checkout order processing.',
    problem: 'Creating an interconnected e-commerce experience requires synchronized cart state across client sessions, atomic inventory checks, and responsive catalog browsing.',
    architecture: [
      'React frontend application delivering interactive product catalogs, category filters, and live cart state',
      'Spring Boot RESTful API layer managing customer sessions, catalog operations, and order flows',
      'Relational MySQL database managing products, user credentials, shopping cart items, and order transactions',
      'Structured REST API communication facilitating secure payload validation and error handling'
    ],
    solution: 'Developed an end-to-end shopping application that couples a responsive React frontend with a high-performance Spring Boot REST API and relational MySQL backend for complete order workflows.',
    features: [
      'Online product browsing with dynamic category filtering and keyword search',
      'Secure user authentication and personalized user profile management',
      'Interactive shopping cart functionality with real-time quantity adjustments and price calculations',
      'Comprehensive order processing and order history tracking via Spring Boot REST APIs',
      'Optimized MySQL relational database tables ensuring transactional consistency during order placement'
    ],
    challenges: [
      'Maintaining client-side cart synchronization with backend inventory state through RESTful endpoints',
      'Designing relational schemas for order line items, product variations, and customer records'
    ],
    metrics: [
      'Complete end-to-end e-commerce pipeline from catalog browsing to order confirmation',
      'Sub-second API response times across product listings and cart checkout operations'
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'AWS Intern',
    company: 'AICTE Eduskills',
    location: 'Virtual',
    period: 'Apr 2024 – Jun 2024',
    type: 'Internship',
    description: 'Hands-on cloud engineering internship focused on scalable cloud workflows on AWS, infrastructure monitoring, and deployment reliability.',
    responsibilities: [
      'Implemented scalable cloud workflows on AWS, focusing on deployment reliability and security best practices.',
      'Gained hands-on exposure to core cloud infrastructure, deployment concepts, and infrastructure monitoring.',
      'Collaborated with mentors to troubleshoot configuration issues and improve service reliability.'
    ],
    technologies: ['AWS (EC2, S3, IAM, CloudWatch)', 'Cloud Infrastructure', 'DevOps Concepts', 'Infrastructure Monitoring', 'Security Best Practices']
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Tech, Computer Science & Engineering',
    institution: 'KL University',
    location: 'Vijayawada, India',
    period: '2023 – 2027',
    gpa: '9.18 CGPA',
    coursework: [
      'Data Structures & Algorithms (DSA)',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Cloud Native Software Engineering',
      'Software Development Life Cycle (SDLC)'
    ],
    achievements: [
      'Maintaining an outstanding academic record of 9.18 CGPA in Computer Science & Engineering.',
      'Specializing in Cloud Native Software Engineering, distributed systems, and DevOps automation.'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Certificate — HSC (MPC)',
    institution: 'Bhavishya College',
    location: 'Vijayawada, India',
    period: '2023',
    gpa: '72.4%',
    coursework: [
      'Mathematics',
      'Physics',
      'Chemistry'
    ],
    achievements: [
      'Successfully completed senior secondary education with MPC specialization.'
    ]
  },
  {
    id: 'edu-3',
    degree: 'Secondary School Certificate — SSC',
    institution: 'Amali High School',
    location: 'Vijayawada, India',
    period: '2021',
    gpa: '9.8 CGPA',
    coursework: [
      'Mathematics',
      'Science',
      'Social Studies',
      'English & Languages'
    ],
    achievements: [
      'Achieved distinction with 9.8 CGPA in secondary board examinations.'
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: '2025',
    credentialId: 'AWS-CCP-2025',
    url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    badgeType: 'aws'
  },
  {
    id: 'cert-2',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: '2025',
    credentialId: 'MS-AZ900-2025',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
    badgeType: 'cloud'
  },
  {
    id: 'cert-3',
    title: 'Oracle Cloud Infrastructure (OCI) Architect Associate',
    issuer: 'Oracle',
    date: '2025',
    credentialId: 'OCI-ARCH-2025',
    url: 'https://education.oracle.com/oracle-cloud-infrastructure-architect-associate',
    badgeType: 'cloud'
  },
  {
    id: 'cert-4',
    title: 'Red Hat Certified Enterprise Linux',
    issuer: 'Red Hat',
    date: '2024',
    credentialId: 'RHEL-CERT-2024',
    url: 'https://www.redhat.com/en/services/certification',
    badgeType: 'devops'
  }
];

export const githubStatsData: GitHubStats = {
  totalRepos: 18,
  totalStars: 24,
  contributionsThisYear: 420,
  topLanguages: [
    { name: 'Java', percentage: 40, color: '#b07219' },
    { name: 'JavaScript / React', percentage: 25, color: '#f1e05a' },
    { name: 'SQL', percentage: 15, color: '#e38c00' },
    { name: 'Python', percentage: 12, color: '#3572A5' },
    { name: 'Docker / YAML', percentage: 8, color: '#38bdf8' }
  ],
  pinnedRepos: [
    {
      name: 'student-report-system-erp',
      description: 'Full-stack ERP system with React, Spring Boot, MySQL, role-based auth, Docker, Jenkins CI/CD, and AWS deployment.',
      language: 'Java / React',
      stars: 12,
      forks: 4,
      url: 'https://github.com/satvik7770610/student-report-system-erp'
    },
    {
      name: 'ecommerce-shopping-app',
      description: 'Full-stack e-commerce shopping platform with React frontend, Spring Boot REST APIs, and MySQL relational database.',
      language: 'Java / React',
      stars: 10,
      forks: 3,
      url: 'https://github.com/satvik7770610/ecommerce-shopping-app'
    }
  ]
};

export const codingActivityData: CodingActivity = {
  weeklyHours: 32.5,
  dailyAverage: '4 hrs 40 mins',
  topLanguages: [
    { name: 'Java & Spring Boot', percent: 42, time: '13 hrs 40 mins', color: '#b07219' },
    { name: 'React & JavaScript', percent: 26, time: '8 hrs 30 mins', color: '#f1e05a' },
    { name: 'SQL & MySQL', percent: 18, time: '5 hrs 50 mins', color: '#e38c00' },
    { name: 'Cloud & DevOps (AWS / Docker)', percent: 14, time: '4 hrs 30 mins', color: '#38bdf8' }
  ],
  categories: [
    { name: 'Backend & REST APIs', percent: 45 },
    { name: 'Frontend Web Development', percent: 25 },
    { name: 'Cloud & DevOps Automation', percent: 20 },
    { name: 'Database Query Tuning', percent: 10 }
  ],
  environments: [
    { name: 'VS Code & Eclipse / IntelliJ', percent: 80 },
    { name: 'Linux Terminal & Postman', percent: 20 }
  ]
};
