import type { ResumeExample } from './types'

const manualEntries: ResumeExample[] = [
  {
    slug: "software-engineer",
    title: "Software Engineer",
    industry: "Tech",
    level: "Mid",
    summary: "A results-driven software engineer with expertise in full-stack development, system design, and agile methodologies.",
    skills: ["JavaScript", "Python", "React", "Node.js", "AWS", "SQL", "Git", "Docker", "REST APIs", "Agile"],
    sampleResume: `John Smith
john.smith@email.com | +1 (555) 123-4567 | San Francisco, CA
linkedin.com/in/johnsmith | github.com/johnsmith

PROFESSIONAL SUMMARY
Software engineer with 5+ years of experience building scalable web applications. Proficient in JavaScript, Python, React, and Node.js. Passionate about clean code, system design, and delivering exceptional user experiences.

EXPERIENCE
Senior Software Engineer | TechCorp | Jan 2022 - Present
- Architected and built microservices handling 10K+ requests/second, reducing latency by 40%
- Led migration of legacy monolith to microservices architecture serving 2M+ users
- Mentored 4 junior engineers through code reviews and paired programming sessions

Software Engineer | StartupXYZ | Jun 2019 - Dec 2021
- Developed React-based dashboard used by 500+ enterprise clients
- Built RESTful APIs in Node.js/Express serving 50K+ daily requests
- Reduced deployment time by 60% through CI/CD pipeline automation

EDUCATION
B.S. Computer Science | University of California | 2015 - 2019

SKILLS
Languages: JavaScript, TypeScript, Python, Java
Frontend: React, Next.js, HTML/CSS, Tailwind
Backend: Node.js, Express, Django, PostgreSQL, MongoDB
DevOps: AWS, Docker, Kubernetes, CI/CD`,
    tips: [
      "Highlight specific technologies and frameworks you've worked with",
      "Include GitHub links and open-source contributions",
      "Quantify system performance metrics (requests/sec, latency reduction)",
      "Mention agile methodologies and team collaboration experience",
      "List both frontend and backend skills for full-stack roles",
      "Include relevant certifications (AWS, Google Cloud, etc.)"
    ]
  },
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    industry: "Tech",
    level: "Mid",
    summary: "A creative frontend developer specializing in React, responsive design, and building exceptional user interfaces.",
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Next.js", "Tailwind CSS", "Figma", "Git", "Webpack", "REST APIs"],
    sampleResume: `Emily Chen
emily.chen@email.com | +1 (555) 234-5678 | Austin, TX
linkedin.com/in/emilychen | github.com/emilychen

PROFESSIONAL SUMMARY
Frontend developer with 4+ years of experience building responsive, accessible web applications. Expert in React, TypeScript, and modern CSS. Passionate about creating intuitive user interfaces that delight users.

EXPERIENCE
Frontend Developer | WebFlow Inc | Mar 2021 - Present
- Built React component library used across 8 product teams, reducing development time by 30%
- Improved Core Web Vitals scores by 45% through performance optimization
- Implemented responsive designs achieving 98% mobile usability score

Junior Frontend Developer | DesignStudio | Aug 2019 - Feb 2021
- Developed 15+ client websites using React and Next.js
- Created reusable UI components adopted by the entire engineering team
- Integrated REST APIs and handled state management with Redux

EDUCATION
B.A. Computer Science | University of Texas | 2015 - 2019

SKILLS
Frontend: React, Next.js, TypeScript, JavaScript, HTML5, CSS3
Styling: Tailwind CSS, Sass, Styled Components, CSS Modules
Tools: Git, Webpack, Vite, Figma, Jest, Cypress`,
    tips: [
      "Showcase your component library and design system experience",
      "Include performance metrics (load times, Lighthouse scores)",
      "Demonstrate responsive design skills across devices",
      "Mention accessibility (a11y) improvements you've implemented",
      "List specific React ecosystem tools (Next.js, Redux, etc.)",
      "Include links to live projects or portfolio"
    ]
  },
  {
    slug: "backend-developer",
    title: "Backend Developer",
    industry: "Tech",
    level: "Mid",
    summary: "A backend specialist focused on building robust, scalable APIs and distributed systems.",
    skills: ["Python", "Node.js", "PostgreSQL", "MongoDB", "AWS", "Docker", "Redis", "GraphQL", "RabbitMQ", "CI/CD"],
    sampleResume: `Michael Brown
michael.brown@email.com | +1 (555) 345-6789 | Seattle, WA
linkedin.com/in/michaelbrown | github.com/michaelbrown

PROFESSIONAL SUMMARY
Backend engineer with 6+ years of experience designing and building distributed systems. Specialized in Python, Node.js, and cloud infrastructure. Proven track record of building systems that scale to millions of users.

EXPERIENCE
Senior Backend Engineer | CloudScale | Mar 2020 - Present
- Designed and built event-driven architecture processing 5M+ daily events
- Optimized database queries reducing average response time from 200ms to 30ms
- Implemented caching layer with Redis reducing database load by 60%

Backend Engineer | DataFlow | Jun 2017 - Feb 2020
- Built RESTful and GraphQL APIs serving 100K+ daily active users
- Migrated MySQL database to PostgreSQL improving query performance by 35%
- Automated deployment pipeline reducing release time from 2 hours to 15 minutes

EDUCATION
M.S. Computer Science | University of Washington | 2015 - 2017
B.S. Computer Engineering | University of Michigan | 2011 - 2015

SKILLS
Languages: Python, JavaScript/Node.js, Go, SQL
Databases: PostgreSQL, MongoDB, Redis, Elasticsearch
Cloud: AWS (EC2, Lambda, RDS, SQS), Docker, Kubernetes`,
    tips: [
      "Emphasize system design and architecture experience",
      "Include specific performance metrics (response times, throughput)",
      "Mention database optimization and migration experience",
      "List cloud platforms and infrastructure tools",
      "Highlight experience with message queues and event-driven systems",
      "Include security practices and knowledge (auth, encryption)"
    ]
  },
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    industry: "Tech",
    level: "Mid",
    summary: "A versatile full-stack developer capable of building complete web applications from database to UI.",
    skills: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "TypeScript", "Docker", "GraphQL", "Redis", "CI/CD"],
    sampleResume: `Alex Rivera
alex.rivera@email.com | +1 (555) 456-7890 | Denver, CO
linkedin.com/in/alexrivera | github.com/alexrivera

PROFESSIONAL SUMMARY
Full-stack developer with 5+ years of experience building end-to-end web applications. Proficient in React, Node.js, Python, and cloud infrastructure. Adept at owning features from concept to production.

EXPERIENCE
Full Stack Developer | ProductLabs | Jan 2021 - Present
- Built and deployed a SaaS platform serving 10K+ users using React, Node.js, and PostgreSQL
- Designed RESTful and GraphQL APIs reducing frontend-backend integration time by 50%
- Implemented automated testing achieving 90% code coverage

Software Engineer | BuildCo | Mar 2019 - Dec 2020
- Developed full-stack features for e-commerce platform with 500K+ monthly visitors
- Built real-time notification system using WebSockets and Redis pub/sub
- Reduced infrastructure costs by 30% through AWS resource optimization

EDUCATION
B.S. Computer Science | Colorado State University | 2015 - 2019

SKILLS
Frontend: React, TypeScript, Next.js, Tailwind CSS
Backend: Node.js/Express, Python/Django, GraphQL, REST
Database: PostgreSQL, MongoDB, Redis
DevOps: AWS, Docker, GitHub Actions, Terraform`,
    tips: [
      "Show your ability to work across the entire tech stack",
      "Highlight end-to-end feature ownership",
      "Include both frontend and backend metrics",
      "Mention database design and optimization experience",
      "List DevOps and deployment skills",
      "Demonstrate understanding of system architecture"
    ]
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    industry: "Tech",
    level: "Senior",
    summary: "A data scientist with expertise in machine learning, statistical analysis, and building data-driven products.",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Statistics", "PyTorch", "NLP", "Data Visualization", "A/B Testing", "Spark"],
    sampleResume: `Dr. Sarah Williams
sarah.williams@email.com | +1 (555) 567-8901 | Boston, MA
linkedin.com/in/sarahwilliams | github.com/sarahwilliams

PROFESSIONAL SUMMARY
Data scientist with 7+ years of experience applying machine learning to solve business problems. Ph.D. in Statistics with a track record of deploying ML models that drive measurable business impact.

EXPERIENCE
Senior Data Scientist | AI Analytics | Mar 2020 - Present
- Developed recommendation system increasing user engagement by 25%
- Built NLP pipeline for sentiment analysis processing 1M+ documents daily
- Led A/B testing framework adopted across 4 product teams

Data Scientist | DataCorp | Jun 2017 - Feb 2020
- Created predictive models reducing customer churn by 18%
- Designed real-time fraud detection system saving $2M annually
- Built interactive dashboards serving insights to 50+ stakeholders

EDUCATION
Ph.D. Statistics | MIT | 2013 - 2017
M.S. Data Science | Stanford University | 2011 - 2013

SKILLS
ML/DL: TensorFlow, PyTorch, Scikit-learn, XGBoost
Programming: Python, R, SQL, Spark
Statistics: Regression, Time Series, Bayesian, Hypothesis Testing
Tools: Jupyter, Docker, MLflow, Airflow`,
    tips: [
      "Highlight the business impact of your models (revenue, engagement)",
      "Include specific ML techniques and frameworks you've used",
      "Mention A/B testing and experiment design experience",
      "Showcase deployment and MLOps experience",
      "List domain expertise areas",
      "Include publications or conference presentations"
    ]
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    industry: "Tech",
    level: "Mid",
    summary: "A strategic product manager with experience driving product vision, roadmap execution, and cross-functional leadership.",
    skills: ["Product Strategy", "Roadmapping", "User Research", "A/B Testing", "Agile", "Data Analysis", "Stakeholder Management", "Wireframing", "JIRA", "SQL"],
    sampleResume: `David Kim
david.kim@email.com | +1 (555) 678-9012 | New York, NY
linkedin.com/in/davidkim

PROFESSIONAL SUMMARY
Product manager with 5+ years of experience defining product strategy and leading cross-functional teams. Proven ability to translate user needs into product features that drive growth and engagement.

EXPERIENCE
Senior Product Manager | GrowthTech | Mar 2021 - Present
- Defined product strategy that grew ARR from $5M to $12M in 18 months
- Led cross-functional team of 12 engineers, designers, and analysts
- Launched 3 major features resulting in 40% increase in user retention

Product Manager | StartupHub | Jun 2019 - Feb 2021
- Managed product roadmap for SaaS platform with 50K+ users
- Conducted 100+ user interviews to inform product decisions
- Improved onboarding conversion by 35% through iterative improvements

EDUCATION
MBA | Columbia Business School | 2017 - 2019
B.S. Computer Science | University of Michigan | 2013 - 2017

SKILLS
Product: Strategy, Roadmapping, User Stories, A/B Testing
Analytics: SQL, Mixpanel, Google Analytics, Excel
Tools: JIRA, Figma, Notion, Amplitude`,
    tips: [
      "Quantify business impact (revenue growth, user metrics)",
      "Highlight cross-functional leadership experience",
      "Include specific product launches and their outcomes",
      "Demonstrate user research and data-driven decision making",
      "Mention experience with different product methodologies",
      "Show understanding of technical concepts and trade-offs"
    ]
  },
  {
    slug: "fresher",
    title: "Fresher / Graduate",
    industry: "General",
    level: "Entry",
    summary: "A motivated graduate with strong academic foundations and internship experience, eager to launch a career in tech.",
    skills: ["Python", "Java", "SQL", "HTML/CSS", "Git", "Communication", "Problem Solving", "Teamwork", "Microsoft Office", "Research"],
    sampleResume: `Priya Patel
priya.patel@email.com | +1 (555) 789-0123 | Chicago, IL
linkedin.com/in/priyapatel | github.com/priyapatel

PROFESSIONAL SUMMARY
Recent Computer Science graduate with internship experience in full-stack development. Passionate about building software that makes a difference. Quick learner with strong problem-solving skills and a collaborative mindset.

EXPERIENCE
Software Engineering Intern | TechCompany | Jun 2024 - Aug 2024
- Developed REST API endpoints serving 10K+ daily requests using Node.js
- Built internal dashboard used by 20+ team members for monitoring
- Fixed 15+ bugs in production codebase improving system reliability

Teaching Assistant | University CS Department | Sep 2023 - May 2024
- Assisted 60+ students in Data Structures and Algorithms course
- Conducted weekly lab sessions and graded assignments
- Created supplementary learning materials improving class average by 12%

EDUCATION
B.S. Computer Science | University of Illinois | 2021 - 2025
GPA: 3.7/4.0 | Dean's List: 4 semesters

SKILLS
Programming: Python, Java, JavaScript, SQL
Web: HTML/CSS, React (basic), Node.js (basic)
Tools: Git, VS Code, Linux, Microsoft Office`,
    tips: [
      "Include relevant internship and project experience",
      "Highlight GPA, honors, and academic achievements",
      "List technical skills even at basic proficiency",
      "Include extracurricular activities and leadership roles",
      "Add links to GitHub, portfolio, or personal projects",
      "Emphasize soft skills: communication, teamwork, adaptability",
      "Keep resume to one page - you don't need extensive experience"
    ]
  },
  {
    slug: "marketing-manager",
    title: "Marketing Manager",
    industry: "Marketing",
    level: "Mid",
    summary: "A data-driven marketing manager with expertise in digital marketing, brand strategy, and growth campaigns.",
    skills: ["SEO", "SEM", "Content Marketing", "Social Media", "Google Analytics", "CRM", "Campaign Management", "Brand Strategy", "Email Marketing", "Budget Management"],
    sampleResume: `Jessica Martinez
jessica.martinez@email.com | +1 (555) 890-1234 | Los Angeles, CA
linkedin.com/in/jessicamartinez

PROFESSIONAL SUMMARY
Marketing manager with 6+ years of experience driving brand growth and customer acquisition. Expertise in digital marketing strategy, campaign optimization, and team leadership. Track record of delivering measurable ROI across channels.

EXPERIENCE
Marketing Manager | BrandGrowth | Mar 2021 - Present
- Developed integrated marketing strategy increasing leads by 150% YoY
- Managed $2M annual marketing budget across digital and traditional channels
- Led team of 5 marketing specialists, improving campaign ROI by 40%

Digital Marketing Specialist | MarketPro | Jun 2018 - Feb 2021
- Executed SEO strategy improving organic traffic by 200% in 12 months
- Managed Google Ads campaigns with $500K monthly spend, achieving 3.5x ROAS
- Created content calendar producing 50+ pieces of content monthly

EDUCATION
B.A. Marketing | UCLA | 2014 - 2018

SKILLS
Digital: SEO, SEM, Google Ads, Facebook Ads, LinkedIn Ads
Analytics: Google Analytics, Mixpanel, Tableau
Tools: HubSpot, Salesforce, Mailchimp, Canva, Asana`,
    tips: [
      "Quantify campaign results (ROI, lead generation, traffic growth)",
      "Include budget management experience",
      "Showcase multi-channel marketing expertise",
      "Mention team leadership and management experience",
      "List specific tools and platforms you've mastered",
      "Demonstrate data-driven decision making"
    ]
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    industry: "Design",
    level: "Mid",
    summary: "A creative graphic designer with expertise in branding, typography, and visual communication across print and digital media.",
    skills: ["Adobe Creative Suite", "Photoshop", "Illustrator", "InDesign", "Figma", "Typography", "Branding", "Logo Design", "Print Design", "Motion Graphics"],
    sampleResume: `Ryan O'Brien
ryan.obrien@email.com | +1 (555) 901-2345 | Portland, OR
linkedin.com/in/ryanobrien | ryanobrien.design

PROFESSIONAL SUMMARY
Graphic designer with 5+ years of experience creating compelling visual identities for brands. Expertise in print and digital design, with a strong focus on typography and brand consistency.

EXPERIENCE
Senior Graphic Designer | CreativeStudio | Mar 2021 - Present
- Led brand identity redesign for 12 clients, resulting in 30% increase in brand recognition
- Designed marketing materials across print, digital, and social media channels
- Established brand guidelines system ensuring consistency across all touchpoints

Graphic Designer | DesignAgency | Jun 2019 - Feb 2021
- Created visual assets for 50+ campaigns reaching 2M+ impressions
- Designed packaging for product line that generated $5M in sales
- Collaborated with UX team to maintain visual consistency in web products

EDUCATION
B.F.A. Graphic Design | Rhode Island School of Design | 2015 - 2019

SKILLS
Design: Adobe Creative Suite, Figma, Sketch
Specialties: Branding, Typography, Print, Packaging, Motion
Web: HTML/CSS (basic), Webflow`,
    tips: [
      "Include a link to your online portfolio",
      "Highlight specific design projects and their impact",
      "Showcase versatility across print and digital media",
      "Mention brand identity and guidelines experience",
      "List all relevant design software proficiencies",
      "Include client names (with permission) and campaign results"
    ]
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    industry: "Tech",
    level: "Senior",
    summary: "A DevOps engineer specializing in cloud infrastructure, CI/CD pipelines, and site reliability engineering.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux", "Python", "Jenkins", "Prometheus", "Ansible"],
    sampleResume: `Chris Taylor
chris.taylor@email.com | +1 (555) 012-3456 | Portland, OR
linkedin.com/in/christaylor | github.com/christaylor

PROFESSIONAL SUMMARY
DevOps engineer with 7+ years of experience building and maintaining cloud infrastructure. Expert in AWS, Kubernetes, and CI/CD automation. Passionate about reliability, scalability, and infrastructure as code.

EXPERIENCE
Senior DevOps Engineer | CloudNative | Mar 2020 - Present
- Architected multi-region AWS infrastructure serving 99.99% uptime
- Reduced deployment time from 45 minutes to 3 minutes through CI/CD optimization
- Migrated 50+ microservices to Kubernetes reducing infrastructure costs by 40%

DevOps Engineer | TechPlatform | Jun 2017 - Feb 2020
- Built monitoring and alerting system using Prometheus and Grafana
- Automated infrastructure provisioning using Terraform, reducing setup time by 80%
- Implemented security scanning pipeline catching 95% of vulnerabilities pre-deployment

EDUCATION
B.S. Computer Engineering | Oregon State University | 2013 - 2017

SKILLS
Cloud: AWS (ECS, EKS, Lambda, CloudFormation), GCP
Container: Docker, Kubernetes, Helm
Infrastructure: Terraform, Ansible, Packer
CI/CD: Jenkins, GitHub Actions, ArgoCD, GitLab CI
Monitoring: Prometheus, Grafana, Datadog, ELK Stack`,
    tips: [
      "Emphasize reliability metrics (uptime, SLAs, SLOs)",
      "Quantify infrastructure improvements (cost reduction, deployment speed)",
      "Highlight migration and scaling experience",
      "List specific tools and versions you've worked with",
      "Include security and compliance experience",
      "Mention incident response and disaster recovery planning"
    ]
  },
  {
    slug: "project-manager",
    title: "Project Manager",
    industry: "General",
    level: "Mid",
    summary: "A certified project manager with expertise in agile methodologies, stakeholder management, and delivering complex projects on time and within budget.",
    skills: ["Agile", "Scrum", "JIRA", "Risk Management", "Budgeting", "Stakeholder Management", "MS Project", "Waterfall", "Resource Planning", "PMP"],
    sampleResume: `Amanda Foster
amanda.foster@email.com | +1 (555) 123-4567 | Atlanta, GA
linkedin.com/in/amandafoster

PROFESSIONAL SUMMARY
Project manager with 6+ years of experience leading cross-functional teams to deliver complex projects. PMP certified with expertise in agile and waterfall methodologies. Proven track record of delivering projects on time and under budget.

EXPERIENCE
Senior Project Manager | EnterpriseCorp | Mar 2021 - Present
- Managed $5M portfolio of 8 concurrent projects, all delivered on schedule
- Led agile transformation across 4 teams, reducing delivery time by 30%
- Implemented risk management framework reducing project incidents by 50%

Project Manager | BuildRight | Jun 2018 - Feb 2021
- Delivered 15+ projects with average budget variance of under 5%
- Managed stakeholder communication across 6 departments and executive leadership
- Developed project dashboards providing real-time visibility to 50+ stakeholders

EDUCATION
PMP Certification | Project Management Institute | 2019
MBA | Georgia State University | 2016 - 2018
B.S. Business Administration | University of Georgia | 2012 - 2016

SKILLS
Methodologies: Agile, Scrum, Waterfall, Kanban
Tools: JIRA, MS Project, Confluence, Smartsheet
Management: Risk, Budget, Stakeholder, Resource`,
    tips: [
      "Quantify project success (budget variance, on-time delivery)",
      "Include PMP or other relevant certifications",
      "Highlight team size and scope of projects managed",
      "Mention specific methodologies you've implemented",
      "Showcase stakeholder and executive communication skills",
      "Include industry-specific project examples"
    ]
  },
  {
    slug: "ux-designer",
    title: "UX Designer",
    industry: "Design",
    level: "Mid",
    summary: "A user experience designer focused on creating intuitive, accessible digital products through user research and iterative design.",
    skills: ["User Research", "Wireframing", "Prototyping", "Figma", "Usability Testing", "Information Architecture", "Interaction Design", "Design Systems", "Accessibility", "A/B Testing"],
    sampleResume: `Laura Kim
laura.kim@email.com | +1 (555) 234-5678 | San Jose, CA
linkedin.com/in/laurakim | laurakim.design

PROFESSIONAL SUMMARY
UX designer with 5+ years of experience designing user-centered digital products. Skilled in user research, wireframing, prototyping, and usability testing. Passionate about creating accessible and inclusive designs.

EXPERIENCE
Senior UX Designer | ProductCo | Mar 2021 - Present
- Redesigned core product experience improving task completion rate by 40%
- Conducted 60+ usability testing sessions, identifying and resolving 100+ usability issues
- Established design system used by 3 product teams, reducing design time by 35%

UX Designer | AppStudio | Jun 2019 - Feb 2021
- Designed user flows for mobile app with 100K+ downloads
- Developed user personas and journey maps based on 40+ user interviews
- Collaborated with engineers to ensure design fidelity in final implementation

EDUCATION
B.S. Human-Computer Interaction | Stanford University | 2015 - 2019

SKILLS
Research: User Interviews, Usability Testing, Surveys, Analytics
Design: Figma, Sketch, Adobe XD, InVision
Methods: Design Thinking, Lean UX, Agile, Accessibility (WCAG)`,
    tips: [
      "Include a link to your design portfolio",
      "Quantify design impact (completion rates, usability improvements)",
      "Showcase user research methodology expertise",
      "Mention accessibility (WCAG) experience",
      "Highlight design system and component library work",
      "Demonstrate collaboration with engineering teams"
    ]
  },
  {
    slug: "nurse",
    title: "Registered Nurse",
    industry: "Healthcare",
    level: "Mid",
    summary: "A dedicated registered nurse with experience in patient care, critical care, and healthcare team collaboration.",
    skills: ["Patient Care", "Critical Care", "EMR/EHR", "CPR/BLS", "Care Coordination", "Patient Education", "Wound Care", "Medication Administration", "Team Collaboration", "Clinical Documentation"],
    sampleResume: `Maria Garcia
maria.garcia@email.com | +1 (555) 345-6789 | Miami, FL
linkedin.com/in/mariagarcia

PROFESSIONAL SUMMARY
Compassionate registered nurse with 4+ years of experience in medical-surgical and critical care settings. Skilled in patient assessment, care planning, and interdisciplinary collaboration. Dedicated to providing high-quality, evidence-based patient care.

EXPERIENCE
Registered Nurse | City Medical Center | Jan 2021 - Present
- Manage care for 5-7 patients per shift in a 30-bed medical-surgical unit
- Reduced patient readmission rates by 15% through improved discharge planning
- Trained and mentored 8 new graduate nurses in clinical procedures

Staff Nurse | Community Hospital | Jun 2019 - Dec 2020
- Administered medications and treatments for 10+ patients per shift
- Collaborated with multidisciplinary team to develop patient care plans
- Achieved 98% patient satisfaction score in annual surveys

EDUCATION
B.S. Nursing | University of Miami | 2015 - 2019
RN License | Florida Board of Nursing | 2019

SKILLS
Clinical: Patient Assessment, Wound Care, IV Therapy, EKG Interpretation
Certifications: BLS, ACLS, PALS`,
    tips: [
      "Include your nursing license and certifications prominently",
      "Quantify patient load and care outcomes",
      "Highlight specialized clinical skills",
      "Mention continuing education and professional development",
      "Include volunteer work and community involvement",
      "Emphasize teamwork and communication skills"
    ]
  },
  {
    slug: "teacher",
    title: "Teacher",
    industry: "Education",
    level: "Mid",
    summary: "An experienced educator dedicated to student success, curriculum development, and creating engaging learning environments.",
    skills: ["Curriculum Development", "Classroom Management", "Lesson Planning", "Student Assessment", "Differentiated Instruction", "Educational Technology", "Parent Communication", "Special Education", "Data Analysis", "Mentoring"],
    sampleResume: `James Wilson
james.wilson@email.com | +1 (555) 456-7890 | Chicago, IL
linkedin.com/in/jameswilson

PROFESSIONAL SUMMARY
Dedicated high school science teacher with 6+ years of experience inspiring students through engaging, hands-on learning. Proven track record of improving student performance and fostering a love for learning.

EXPERIENCE
Science Teacher | Lincoln High School | Aug 2019 - Present
- Developed and implemented NGSS-aligned curriculum for 150+ students annually
- Increased average standardized test scores by 22% over 3 years
- Founded after-school STEM club growing from 8 to 40+ members

Teaching Assistant | University of Chicago | Sep 2017 - Jun 2019
- Assisted professor in teaching introductory biology to 200+ students
- Developed lab exercises and graded assignments
- Provided one-on-one tutoring improving student pass rates by 15%

EDUCATION
M.Ed. Secondary Education | University of Chicago | 2017 - 2019
B.S. Biology | Northwestern University | 2013 - 2017
Teaching License | Illinois State Board of Education | 2019

SKILLS
Teaching: Curriculum Design, Lesson Planning, Assessment, Differentiation
Subjects: Biology, Chemistry, Physics, Environmental Science
Tools: Google Classroom, Canvas, Blackboard, Smart Board`,
    tips: [
      "Include teaching certifications and endorsements",
      "Quantify student performance improvements",
      "Highlight curriculum development experience",
      "Mention extracurricular involvement and mentorship",
      "Showcase technology integration in the classroom",
      "Include professional development and continuing education"
    ]
  },
  {
    slug: "sales-representative",
    title: "Sales Representative",
    industry: "Sales",
    level: "Mid",
    summary: "A results-oriented sales professional with a track record of exceeding quotas and building lasting client relationships.",
    skills: ["Sales", "CRM", "Negotiation", "Lead Generation", "Cold Calling", "Account Management", "Salesforce", "Forecasting", "Presentation", "Contract Negotiation"],
    sampleResume: `Kevin Johnson
kevin.johnson@email.com | +1 (555) 567-8901 | Dallas, TX
linkedin.com/in/kevinjohnson

PROFESSIONAL SUMMARY
Sales representative with 5+ years of experience exceeding quotas in B2B SaaS sales. Proven ability to generate leads, close deals, and manage key accounts. Consistently ranked in top 10% of sales team.

EXPERIENCE
Senior Sales Representative | CloudSoft | Mar 2021 - Present
- Exceeded annual quota of $1.2M by 35% in 2023
- Closed 40+ enterprise deals with average contract value of $85K
- Generated $500K in pipeline from cold outreach in first 6 months

Sales Representative | TechSales | Jun 2019 - Feb 2021
- Consistently achieved 120%+ of monthly quota for 18 consecutive months
- Developed and maintained relationships with 50+ key accounts
- Reduced customer churn by 20% through proactive account management

EDUCATION
B.A. Business Administration | University of Texas | 2015 - 2019

SKILLS
Sales: B2B, Enterprise Sales, Solution Selling, MEDDIC
Tools: Salesforce, HubSpot, LinkedIn Sales Navigator, ZoomInfo`,
    tips: [
      "Quantify quota achievement and performance rankings",
      "Include specific deal sizes and pipeline numbers",
      "Highlight industry expertise and product knowledge",
      "Mention CRM proficiency",
      "Demonstrate both hunting and farming capabilities",
      "Include relevant sales methodology training"
    ]
  },
  {
    slug: "accountant",
    title: "Accountant",
    industry: "Finance",
    level: "Mid",
    summary: "A detail-oriented accountant with expertise in financial reporting, tax preparation, and audit compliance.",
    skills: ["Financial Reporting", "GAAP", "Tax Preparation", "QuickBooks", "Excel", "Audit", "Accounts Payable", "Accounts Receivable", "Reconciliation", "CPA"],
    sampleResume: `Rachel Green
rachel.green@email.com | +1 (555) 678-9012 | New York, NY
linkedin.com/in/rachelgreen

PROFESSIONAL SUMMARY
CPA with 5+ years of experience in financial reporting, tax preparation, and audit. Skilled in managing full-cycle accounting for mid-sized organizations. Committed to accuracy, compliance, and continuous improvement.

EXPERIENCE
Senior Accountant | FinanceCorp | Mar 2021 - Present
- Manage full-cycle accounting for 3 entities with combined revenue of $50M
- Reduced monthly close time from 15 to 8 days through process improvements
- Led successful tax filings resulting in $200K in savings through strategic planning

Staff Accountant | AccountingPro | Jun 2019 - Feb 2021
- Prepared financial statements and supporting schedules for quarterly reviews
- Reconciled 20+ bank accounts monthly with 99.9% accuracy rate
- Assisted with external audit preparation, resulting in clean audit opinions

EDUCATION
CPA License | New York State | 2020
M.S. Accounting | Baruch College | 2017 - 2019
B.S. Accounting | SUNY Albany | 2013 - 2017

SKILLS
Accounting: GAAP, Financial Reporting, Audit, Tax, Reconciliation
Software: QuickBooks, SAP, Oracle NetSuite, Excel (Advanced)
Certifications: CPA`,
    tips: [
      "Include CPA license and other certifications",
      "Quantify process improvements (close time, accuracy rates)",
      "Highlight experience with specific accounting software",
      "Mention audit preparation and results",
      "Showcase tax planning and savings achieved",
      "Include industry-specific experience"
    ]
  },
  {
    slug: "mechanical-engineer",
    title: "Mechanical Engineer",
    industry: "Engineering",
    level: "Mid",
    summary: "A mechanical engineer with expertise in product design, CAD modeling, and manufacturing process optimization.",
    skills: ["SolidWorks", "AutoCAD", "FEA", "MATLAB", "Product Design", "Thermodynamics", "Fluid Mechanics", "Manufacturing", "Project Management", "Six Sigma"],
    sampleResume: `Thomas Lee
thomas.lee@email.com | +1 (555) 789-0123 | Detroit, MI
linkedin.com/in/thomaslee

PROFESSIONAL SUMMARY
Mechanical engineer with 5+ years of experience in product design and manufacturing. Proficient in CAD software, FEA analysis, and process optimization. Passionate about creating efficient, cost-effective designs.

EXPERIENCE
Mechanical Engineer | AutoParts Inc | Mar 2021 - Present
- Designed and optimized mechanical components reducing manufacturing costs by 25%
- Led FEA analysis for new product line ensuring 100% pass rate on safety tests
- Improved production line efficiency by 20% through process redesign

Junior Mechanical Engineer | EngineeringWorks | Jun 2019 - Feb 2021
- Created 3D models and detailed drawings for 30+ products using SolidWorks
- Conducted stress analysis and material selection for automotive components
- Collaborated with manufacturing team to resolve production issues

EDUCATION
B.S. Mechanical Engineering | University of Michigan | 2015 - 2019
EIT Certification | NCEES | 2019

SKILLS
CAD: SolidWorks, AutoCAD, CATIA, Creo
Analysis: FEA, CFD, MATLAB, ANSYS
Manufacturing: Lean, Six Sigma, Process Optimization`,
    tips: [
      "Include EIT or PE certification status",
      "Quantify design improvements (cost reduction, efficiency gains)",
      "Highlight specific CAD and analysis software expertise",
      "Mention manufacturing and production experience",
      "Include project examples with measurable outcomes",
      "Showcase cross-functional collaboration skills"
    ]
  },
  {
    slug: "software-engineer-intern",
    title: "Software Engineer Intern",
    industry: "Tech",
    level: "Entry",
    summary: "A motivated computer science student seeking a software engineering internship to apply programming skills and learn from experienced engineers.",
    skills: ["Python", "Java", "JavaScript", "HTML/CSS", "Git", "SQL", "React", "Data Structures", "Algorithms", "Problem Solving"],
    sampleResume: `Aisha Patel
aisha.patel@email.com | +1 (555) 890-1234 | San Francisco, CA
linkedin.com/in/aishapatel | github.com/aishapatel

EDUCATION
B.S. Computer Science | UC Berkeley | Expected May 2026
GPA: 3.8/4.0 | Dean's List: All Semesters
Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Machine Learning

PROJECTS
Personal Finance Tracker | React, Node.js, MongoDB
- Built full-stack web app for tracking personal expenses with 50+ users
- Implemented data visualization dashboard using Chart.js
- Deployed on AWS using EC2 and MongoDB Atlas

Task Management API | Python, FastAPI, PostgreSQL
- Designed and built REST API for task management with authentication
- Achieved 95% test coverage with pytest
- Documented API using Swagger/OpenAPI

SKILLS
Languages: Python, Java, JavaScript, TypeScript, SQL
Frameworks: React, Node.js, FastAPI, Spring Boot
Tools: Git, Docker, VS Code, Linux, AWS (EC2, S3)

EXPERIENCE
Computer Science Tutor | UC Berkeley | Sep 2024 - Present
- Tutor 20+ students in Data Structures and Algorithms weekly
- Created study guides improving average exam scores by 15%

LEADERSHIP
Vice President | CS Student Association | 2024 - Present
- Organize weekly tech talks with industry speakers, attendance up 40%
- Lead hackathon planning committee for 200+ participant event`,
    tips: [
      "Keep resume to one page - you don't have extensive experience",
      "Lead with education since you're still in school",
      "Highlight projects with technical details and outcomes",
      "Include relevant coursework and GPA if strong",
      "Showcase GitHub and personal projects",
      "Include leadership and extracurricular activities",
      "List technical skills honestly (even basic proficiency)"
    ]
  },
  {
    slug: "financial-analyst",
    title: "Financial Analyst",
    industry: "Finance",
    level: "Mid",
    summary: "A financial analyst with expertise in financial modeling, valuation, and investment analysis.",
    skills: ["Financial Modeling", "Excel", "Valuation", "Financial Analysis", "Bloomberg", "SQL", "Forecasting", "Budgeting", "PowerPoint", "M&A"],
    sampleResume: `Andrew Park
andrew.park@email.com | +1 (555) 901-2345 | New York, NY
linkedin.com/in/andrewpark

PROFESSIONAL SUMMARY
Financial analyst with 4+ years of experience in investment banking and corporate finance. Skilled in financial modeling, valuation, and M&A analysis. CFA Level II candidate.

EXPERIENCE
Financial Analyst | InvestmentBank | Mar 2021 - Present
- Built financial models for 15+ M&A transactions valued at $500M+ total
- Prepared valuation analyses using DCF, LBO, and comparable company analysis
- Created pitch books and client presentations for 20+ deals

Junior Analyst | CorporateFinance | Jun 2019 - Feb 2021
- Developed monthly financial reports for $200M revenue business unit
- Built budgeting and forecasting models reducing variance to under 3%
- Conducted industry research supporting strategic planning initiatives

EDUCATION
B.S. Finance | NYU Stern | 2015 - 2019
CFA Level II Candidate

SKILLS
Financial: Modeling, Valuation, M&A, DCF, LBO, Comps
Tools: Excel (Advanced), Bloomberg, Capital IQ, SQL`,
    tips: [
      "Quantify deal sizes and transaction values",
      "Include CFA progress or other certifications",
      "Highlight specific valuation methodologies",
      "Showcase financial modeling complexity and scope",
      "Mention industry coverage and sector expertise",
      "Include Excel and financial software proficiency"
    ]
  },
  {
    slug: "hr-manager",
    title: "HR Manager",
    industry: "HR",
    level: "Mid",
    summary: "An experienced HR professional specializing in talent acquisition, employee relations, and organizational development.",
    skills: ["Talent Acquisition", "Employee Relations", "HRIS", "Performance Management", "Compensation", "Benefits", "Employment Law", "Diversity & Inclusion", "Training", "Change Management"],
    sampleResume: `Nicole Williams
nicole.williams@email.com | +1 (555) 012-3456 | Boston, MA
linkedin.com/in/nicolewilliams

PROFESSIONAL SUMMARY
HR manager with 7+ years of experience in talent management and organizational development. Skilled in building high-performing teams, developing HR strategies, and fostering inclusive workplace cultures.

EXPERIENCE
HR Manager | TechGrowth | Mar 2021 - Present
- Led talent acquisition strategy growing company from 50 to 200 employees
- Reduced time-to-hire from 45 to 22 days through process optimization
- Implemented DEI initiatives increasing diverse hires by 35%

Senior HR Generalist | CorporateInc | Jun 2018 - Feb 2021
- Managed employee relations for 500+ employee organization
- Developed performance management framework adopted company-wide
- Led annual compensation review process for $20M payroll budget

EDUCATION
M.S. Human Resources Management | Cornell University | 2018
SHRM-SCP Certification | 2019

SKILLS
HR: Talent Acquisition, Employee Relations, Performance Management, Compensation
Tools: Workday, BambooHR, Greenhouse, ADP
Certifications: SHRM-SCP`,
    tips: [
      "Include HR certifications (SHRM, PHR/SPHR)",
      "Quantify hiring metrics (time-to-hire, retention rates)",
      "Highlight DEI initiatives and outcomes",
      "Mention HRIS implementation experience",
      "Showcase employee engagement and culture initiatives",
      "Include experience with compensation and benefits management"
    ]
  },
  {
    slug: "lawyer",
    title: "Lawyer / Attorney",
    industry: "Legal",
    level: "Mid",
    summary: "An experienced attorney with expertise in corporate law, contracts, and litigation.",
    skills: ["Legal Research", "Contract Drafting", "Litigation", "Negotiation", "Corporate Law", "Compliance", "Due Diligence", "Legal Writing", "Courtroom Advocacy", "Client Counseling"],
    sampleResume: `Michael Chen
michael.chen@email.com | +1 (555) 123-4567 | Washington, DC
linkedin.com/in/michaelchen

PROFESSIONAL SUMMARY
Corporate attorney with 6+ years of experience in mergers and acquisitions, contract negotiation, and regulatory compliance. Licensed to practice in New York and District of Columbia.

EXPERIENCE
Associate Attorney | LawFirm LLP | Mar 2021 - Present
- Managed due diligence for 25+ M&A transactions valued at $2B+ total
- Drafted and negotiated complex commercial contracts worth $500M+
- Advised clients on regulatory compliance matters across multiple jurisdictions

Junior Associate | LegalGroup | Sep 2018 - Feb 2021
- Conducted legal research supporting high-stakes litigation cases
- Prepared briefs, motions, and discovery documents for federal and state courts
- Assisted with corporate governance and SEC compliance matters

EDUCATION
J.D. | Georgetown University Law Center | 2015 - 2018
B.A. Political Science | Harvard University | 2011 - 2015
Bar Admissions: New York, District of Columbia

SKILLS
Legal: Corporate Law, M&A, Contracts, Litigation, Compliance
Research: Westlaw, LexisNexis, PACER`,
    tips: [
      "Include bar admissions and jurisdictions",
      "Quantify deal values and case outcomes",
      "Highlight specific practice areas",
      "Mention law review, clerkships, or notable publications",
      "Include pro bono work and community involvement",
      "Showcase specialized legal expertise"
    ]
  },
  {
    slug: "consultant",
    title: "Management Consultant",
    industry: " Consulting",
    level: "Mid",
    summary: "A strategic management consultant with experience in business strategy, operations, and digital transformation.",
    skills: ["Strategy", "Data Analysis", "Financial Modeling", "Presentation", "Project Management", "Stakeholder Management", "Market Research", "Process Improvement", "Change Management", "Excel"],
    sampleResume: `Sarah Kim
sarah.kim@email.com | +1 (555) 234-5678 | New York, NY
linkedin.com/in/sarahkim

PROFESSIONAL SUMMARY
Management consultant with 4+ years of experience at a top-tier firm. Expertise in corporate strategy, operational efficiency, and digital transformation for Fortune 500 clients.

EXPERIENCE
Senior Consultant | ConsultingGroup | Sep 2021 - Present
- Led 8 strategy engagements for Fortune 500 clients across tech and healthcare
- Developed go-to-market strategy generating $50M in new revenue for SaaS client
- Managed cross-functional teams of 5-8 consultants delivering projects on time

Business Analyst | StrategyFirm | Sep 2019 - Aug 2021
- Conducted market sizing and competitive analysis for 15+ client engagements
- Built financial models supporting $200M investment decision
- Created executive presentations delivered to C-suite stakeholders

EDUCATION
MBA | Harvard Business School | 2017 - 2019
B.S. Economics | University of Pennsylvania | 2013 - 2017

SKILLS
Strategy: Corporate Strategy, Go-to-Market, Operational Excellence
Analytics: Financial Modeling, Data Analysis, Market Research
Tools: Excel, PowerPoint, Tableau, SQL`,
    tips: [
      "Quantify project impact and client outcomes",
      "Highlight industry expertise and engagement types",
      "Include team leadership and management experience",
      "Showcase analytical and problem-solving skills",
      "Mention specific frameworks and methodologies",
      "Include education pedigree (relevant for consulting)"
    ]
  },
  {
    slug: "business-analyst",
    title: "Business Analyst",
    industry: "General",
    level: "Mid",
    summary: "A detail-oriented business analyst bridging the gap between business needs and technical solutions.",
    skills: ["Requirements Gathering", "Data Analysis", "SQL", "Process Modeling", "Agile", "JIRA", "Stakeholder Management", "Documentation", "UML", "Testing"],
    sampleResume: `David Thompson
david.thompson@email.com | +1 (555) 345-6789 | Chicago, IL
linkedin.com/in/davidthompson

PROFESSIONAL SUMMARY
Business analyst with 4+ years of experience translating business requirements into technical solutions. Skilled in data analysis, process improvement, and stakeholder management.

EXPERIENCE
Senior Business Analyst | TechSolutions | Mar 2021 - Present
- Elicited and documented requirements for 12+ software projects delivered on time
- Reduced processing time by 40% through redesigned business workflows
- Facilitated 50+ requirements workshops with cross-functional stakeholders

Business Analyst | EnterpriseSystems | Jun 2019 - Feb 2021
- Analyzed and documented business processes for 3 major system implementations
- Created user stories and acceptance criteria for agile development teams
- Coordinated UAT with 30+ business users, achieving 98% acceptance rate

EDUCATION
B.S. Information Systems | University of Illinois | 2015 - 2019
CBAP Certification | IIBA | 2021

SKILLS
Analysis: Requirements Gathering, Process Modeling, Gap Analysis
Methodologies: Agile, Scrum, Waterfall
Tools: JIRA, Confluence, Visio, Lucidchart, SQL`,
    tips: [
      "Include CBAP or other business analysis certifications",
      "Quantify process improvements and project outcomes",
      "Highlight experience with specific methodologies (agile, waterfall)",
      "Showcase stakeholder management and facilitation skills",
      "Mention industry-specific domain knowledge",
      "Include technical skills (SQL, process modeling tools)"
    ]
  },
]

import { generatedExamples } from './generatedExamples'

export const resumeExamples = [...manualEntries, ...generatedExamples]
