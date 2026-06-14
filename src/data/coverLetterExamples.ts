export interface CoverLetterExample {
  slug: string
  title: string
  company: string
  role: string
  level: string
  summary: string
  sampleLetter: string
  tips: string[]
}

const r = (c: CoverLetterExample) => c

export const coverLetterExamples: CoverLetterExample[] = [
  r({
    slug: "google-cover-letter",
    title: "Google Cover Letter",
    company: "Google",
    role: "Software Engineer",
    level: "Mid",
    summary: "A compelling cover letter for Google Software Engineer roles, emphasizing technical excellence and cultural alignment.",
    sampleLetter: `Dear Google Hiring Manager,

I am writing to express my strong interest in the Software Engineer position at Google. With 5+ years of experience building scalable distributed systems and a deep passion for solving complex problems, I am confident I can contribute meaningfully to Google's engineering teams.

In my current role at Flipkart, I designed and built a low-latency recommendation service handling 50K+ QPS, reducing service latency by 40% through query optimization and caching strategies. I led the migration of a monolith to microservices, improving deployment frequency by 5x. These experiences have given me a strong foundation in the type of large-scale systems engineering that Google is known for.

What draws me to Google is not just the technical challenge but the company's mission to organize the world's information. I have maintained a GitHub profile with open-source contributions and consistently participate in competitive programming, having solved 300+ LeetCode problems and participated in Google Kick Start and Code Jam.

I am particularly excited about the opportunity to work with Google's infrastructure and contribute to products that impact billions of users. My experience with distributed systems, combined with my strong CS fundamentals and bias for action, makes me a strong fit for this role.

Thank you for considering my application. I look forward to discussing how I can contribute to Google's engineering excellence.

Best regards,
Vikram Patel
vikram.patel@email.com
linkedin.com/in/vikrampatel`,
    tips: [
      "Research Google's engineering culture and mention specific projects/products you admire",
      "Quantify your impact with metrics — Google values data-driven candidates",
      "Highlight distributed systems and large-scale system design experience",
      "Mention competitive programming, open-source contributions, or side projects",
      "Keep it concise — Google recruiters read hundreds of cover letters daily",
      "Align your experience with Google's leadership principles and values"
    ]
  }),
  r({
    slug: "amazon-cover-letter",
    title: "Amazon Cover Letter",
    company: "Amazon",
    role: "SDE",
    level: "Mid",
    summary: "A results-oriented cover letter for Amazon SDE roles, structured around Amazon's leadership principles.",
    sampleLetter: `Dear Amazon Hiring Team,

I am excited to apply for the Software Development Engineer position at Amazon. With 5+ years of experience building large-scale distributed systems and a strong ownership mindset, I am eager to contribute to Amazon's customer-obsessed engineering culture.

At Uber, I built a real-time pricing engine processing 10K+ events per second using Java and Apache Kafka. I reduced P99 latency from 200ms to 45ms through systematic performance optimization and designed a multi-region deployment strategy achieving 99.99% availability. These results demonstrate my ability to Deliver Results at scale — a principle I know Amazon values deeply.

My experience at MakeMyTrip, where I developed an inventory management system serving 5M+ daily API requests and reduced database load by 70% through Redis caching, taught me to Think Big and insist on high standards. I took ownership of on-call rotations and incident management, embodying the customer obsession that drives great engineering.

Amazon's commitment to being Earth's most customer-centric company resonates with me. I thrive in environments where engineers take ownership, make data-driven decisions, and have a bias for action. I am ready to bring my experience in distributed systems, operational excellence, and team leadership to Amazon.

I would welcome the opportunity to discuss how my background aligns with Amazon's engineering challenges.

Sincerely,
Ananya Singh
ananya.singh@email.com
linkedin.com/in/ananyasingh`,
    tips: [
      "Structure your letter around Amazon's Leadership Principles (Customer Obsession, Ownership, Deliver Results, etc.)",
      "Use specific metrics and data — Amazon is obsessed with quantitative results",
      "Mention examples of taking ownership and working backwards from customer needs",
      "Highlight experience with high-scale distributed systems and operational excellence",
      "Keep the tone direct and action-oriented — avoid fluff",
      "Reference the Bar Raiser process by showing you raise the bar"
    ]
  }),
  r({
    slug: "microsoft-cover-letter",
    title: "Microsoft Cover Letter",
    company: "Microsoft",
    role: "Software Engineer",
    level: "Mid",
    summary: "A cover letter for Microsoft engineering roles focusing on the Microsoft tech stack and enterprise experience.",
    sampleLetter: `Dear Microsoft Recruitment Team,

I am writing to apply for the Software Engineer position at Microsoft. With 5+ years of experience building enterprise applications using the Microsoft technology stack, I am excited about the opportunity to contribute to Microsoft's mission of empowering every person and organization on the planet to achieve more.

In my current role at Zoho, I architected a multi-tenant SaaS platform serving 10K+ business customers using .NET Core and Azure. I led the migration of on-premise applications to Azure, reducing infrastructure costs by 35%, and built real-time collaboration features using SignalR and WebSockets. My deep experience with C#, .NET Core, and Azure aligns directly with Microsoft's engineering practices.

Previously at Freshworks, I developed RESTful APIs handling 1M+ daily requests and implemented SQL Server optimization strategies improving query performance by 50%. I am passionate about clean architecture, domain-driven design, and writing testable code — principles that Microsoft's engineering teams champion.

Microsoft's investments in Azure, AI, and developer tools inspire me. I am particularly interested in contributing to products that empower developers and businesses worldwide. My background in the Microsoft ecosystem, combined with my experience building at scale, positions me to make an immediate impact.

Thank you for your time and consideration.

Warm regards,
Siddharth Rao
siddharth.rao@email.com
linkedin.com/in/siddharthrao`,
    tips: [
      "Highlight your experience with Microsoft technologies (C#, .NET, Azure, SQL Server)",
      "Quantify migration and cost-saving achievements",
      "Show understanding of Microsoft's mission and product ecosystem",
      "Mention clean architecture, design patterns, and engineering best practices",
      "Reference specific Microsoft products or teams you're interested in",
      "Keep professional and technically detailed"
    ]
  }),
  r({
    slug: "tcs-cover-letter",
    title: "TCS Cover Letter",
    company: "TCS",
    role: "Software Engineer",
    level: "Entry",
    summary: "A professional cover letter for TCS fresher hiring, highlighting academic foundation and technical skills.",
    sampleLetter: `Dear TCS Recruitment Team,

I am writing to express my keen interest in the Software Engineer position at Tata Consultancy Services. As a recent B.Tech Computer Science graduate with strong fundamentals in Java, SQL, and web development, I am eager to begin my career with a global leader like TCS.

During my academic journey at SRM Institute of Technology, I built a strong foundation in data structures, algorithms, and software engineering principles. My internship at TechSolutions India involved developing REST APIs using Java Spring Boot and building responsive web dashboards with React.js. I also achieved 85% code coverage through comprehensive unit testing, demonstrating my commitment to code quality.

What attracts me to TCS is its reputation for innovation, its global delivery model, and its commitment to employee development through programs like the TCS Learning Platform. I am eager to contribute to TCS's digital transformation initiatives and work on projects that create impact for clients worldwide.

I am a quick learner, a team player, and someone who thrives in challenging environments. I am confident that my technical skills, combined with my strong work ethic, make me a valuable addition to TCS.

Thank you for considering my application. I look forward to the opportunity to contribute to TCS's legacy of excellence.

Yours sincerely,
Arun Kumar
arun.kumar@email.com
linkedin.com/in/arunkumar`,
    tips: [
      "Keep the tone professional and respectful — TCS values corporate etiquette",
      "Highlight academic achievements and technical fundamentals",
      "Mention any TCS-specific training or certification programs completed",
      "Emphasize adaptability and willingness to learn",
      "Quantify internship projects with specific outcomes",
      "Showcase communication skills and teamwork"
    ]
  }),
  r({
    slug: "infosys-cover-letter",
    title: "Infosys Cover Letter",
    company: "Infosys",
    role: "Systems Engineer",
    level: "Entry",
    summary: "A cover letter for Infosys fresher hiring focused on technical training and full-stack capabilities.",
    sampleLetter: `Dear Infosys Hiring Team,

I am writing to apply for the Systems Engineer position at Infosys. As a B.E. Computer Science graduate with comprehensive training in full-stack development and a passion for technology, I am excited about the opportunity to start my career at Infosys.

During my time at R.V. College of Engineering, I developed strong programming skills in Java, Python, and JavaScript. My internship at WebWorks India allowed me to build a full-stack e-commerce application using Java Spring Boot and React.js, and design MySQL database schemas for production-ready applications. I also implemented JWT-based authentication, showcasing my understanding of security best practices.

Infosys's commitment to nurturing fresh talent through the Infosys Mysore training program is something I greatly admire. The structured learning path, focus on both technical and soft skills, and exposure to global clients make Infosys an ideal place for me to build my career.

I am a dedicated learner with excellent problem-solving abilities and strong communication skills. I am ready to contribute to Infosys's mission of helping clients navigate their digital transformation journey.

Thank you for your consideration.

Best regards,
Priya Sharma
priya.sharma@email.com
linkedin.com/in/priyasharma-in`,
    tips: [
      "Mention Infosys Mysore training program and enthusiasm for structured learning",
      "Highlight full-stack development capabilities",
      "Showcase academic projects and internship experience",
      "Emphasize communication and client-facing skills — Infosys values these",
      "Keep the tone enthusiastic but professional",
      "Quantify technical achievements where possible"
    ]
  }),
  r({
    slug: "wipro-cover-letter",
    title: "Wipro Cover Letter",
    company: "Wipro",
    role: "Project Engineer",
    level: "Entry",
    summary: "A focused cover letter for Wipro's Turbo hiring program, emphasizing programming fundamentals and automation skills.",
    sampleLetter: `Dear Wipro Recruitment Team,

I am excited to apply for the Project Engineer position at Wipro. Selected through the Wipro Turbo hiring program, I bring strong programming fundamentals, automation skills, and a passion for technology innovation.

At MIT World Peace University, I built a strong foundation in C++, Java, and Python. My internship at SoftTech Solutions involved developing Python scripts that automated data processing tasks, reducing manual effort by 60%. I also created interactive dashboards for data visualization and assisted in migrating applications to cloud infrastructure.

Wipro's emphasis on innovation, sustainability, and empowering talent through programs like Wipro Turbo aligns perfectly with my career aspirations. I am particularly drawn to Wipro's work in digital transformation and its commitment to creating meaningful impact through technology.

I am a quick learner with strong analytical skills and a collaborative mindset. I am eager to contribute to Wipro's projects and grow as a technology professional within the organization.

Thank you for this opportunity. I look forward to contributing to Wipro's success.

Sincerely,
Rahul Verma
rahul.verma@email.com
linkedin.com/in/rahulverma`,
    tips: [
      "Highlight Wipro Turbo hiring program selection prominently",
      "Emphasize automation and efficiency improvements",
      "Showcase programming fundamentals across multiple languages",
      "Mention adaptability and willingness to work across domains",
      "Keep the letter concise and achievement-oriented",
      "Include specific metrics from internship or academic projects"
    ]
  }),
  r({
    slug: "accenture-cover-letter",
    title: "Accenture Cover Letter",
    company: "Accenture",
    role: "Associate Software Engineer",
    level: "Entry",
    summary: "A professional cover letter for Accenture entry-level roles focusing on consulting skills and technology aptitude.",
    sampleLetter: `Dear Accenture Recruitment Team,

I am writing to express my strong interest in the Associate Software Engineer position at Accenture. As a recent B.Tech graduate with a solid foundation in software development and cloud technologies, I am eager to contribute to Accenture's mission of delivering innovative solutions to clients worldwide.

During my studies at VIT Vellore and my internship at DigitalIndia Tech, I built RESTful web services using Java Spring Boot, created CI/CD pipelines with Jenkins and Docker, and developed automated test suites that reduced regression testing effort by 40%. These experiences have prepared me to work effectively in Accenture's fast-paced, client-focused environment.

What attracts me to Accenture is its commitment to continuous learning, its diverse range of industries and clients, and its focus on technology consulting. I am excited about the opportunity to work with cutting-edge technologies while developing the consulting and communication skills that Accenture is known for developing in its people.

I am adaptable, collaborative, and ready to take on new challenges. I am confident that my technical foundation and eagerness to learn will enable me to contribute meaningfully to Accenture's client engagements.

Thank you for your time and consideration.

Best regards,
Neha Gupta
neha.gupta@email.com
linkedin.com/in/nehagupta`,
    tips: [
      "Highlight both technical skills and consulting aptitude",
      "Showcase communication and client-facing abilities",
      "Mention willingness to work across industries and domains",
      "Emphasize adaptability and continuous learning mindset",
      "Quantify internship and academic achievements",
      "Keep the tone professional and consulting-appropriate"
    ]
  }),
  r({
    slug: "flipkart-cover-letter",
    title: "Flipkart Cover Letter",
    company: "Flipkart",
    role: "Software Engineer",
    level: "Mid",
    summary: "A cover letter for Flipkart engineering roles emphasizing e-commerce domain experience and high-scale systems.",
    sampleLetter: `Dear Flipkart Hiring Team,

I am writing to apply for the Software Engineer position at Flipkart. With 4+ years of experience building high-scale e-commerce systems, I am excited about the opportunity to contribute to India's leading e-commerce platform.

In my current role at Nykaa, I designed an inventory management system handling 10M+ SKUs with sub-100ms query latency and built a real-time pricing engine using Kafka Streams processing 50K+ events per second. I also reduced cart abandonment by 15% through checkout flow optimization. These experiences have given me deep expertise in the specific engineering challenges that e-commerce platforms face.

Flipkart's scale — handling millions of transactions during Big Billion Days, managing complex supply chain logistics, and serving a diverse Indian customer base — is precisely the type of engineering challenge I thrive on. My experience with MySQL sharding, Elasticsearch-based search, and Redis caching directly applies to Flipkart's technology stack.

I am passionate about building systems that make online shopping accessible and delightful for millions of Indians. I would love to bring my e-commerce domain expertise, system design skills, and bias for action to Flipkart.

Thank you for considering my application.

Warm regards,
Amit Joshi
amit.joshi@email.com
linkedin.com/in/amitjoshi`,
    tips: [
      "Highlight e-commerce domain experience specifically",
      "Quantify scale metrics (transactions, latency, inventory size)",
      "Show understanding of Flipkart's unique challenges (Big Billion Days, India-specific)",
      "Mention experience with Flipkart's technology stack (Java, Kafka, Redis, MySQL)",
      "Demonstrate customer-centric thinking",
      "Keep achievement-oriented and specific"
    ]
  }),
  r({
    slug: "deloitte-cover-letter",
    title: "Deloitte Cover Letter",
    company: "Deloitte",
    role: "Consultant",
    level: "Entry",
    summary: "A polished cover letter for Deloitte consulting roles emphasizing analytical and communication skills.",
    sampleLetter: `Dear Deloitte Recruitment Team,

I am writing to express my enthusiastic interest in the Consultant position at Deloitte. As an MBA graduate from IIM Ahmedabad with experience in business analysis and strategy consulting, I am eager to contribute to Deloitte's reputation for delivering exceptional client outcomes.

During my consulting internship at KPMG India, I conducted market sizing and competitive analysis for a Fortune 500 retail client, built financial models to evaluate acquisition targets, and presented strategic recommendations to senior partners. As a Business Analyst at StartupIndia, I analyzed customer data to identify growth opportunities, increasing revenue by 18%, and built data dashboards for real-time business monitoring.

Deloitte's commitment to making an impact that matters, its industry-leading consulting practice, and its focus on developing talent through mentorship and diverse client engagements make it my top choice for a consulting career. I am particularly drawn to Deloitte's work in digital transformation and strategy consulting.

I bring strong analytical skills, excellent communication abilities, and a genuine passion for solving complex business problems. I am ready to contribute to Deloitte's client engagements from day one.

Thank you for your consideration. I look forward to the opportunity to discuss how I can contribute to Deloitte.

Sincerely,
Shreya Iyer
shreya.iyer@email.com
linkedin.com/in/shreyaiyer`,
    tips: [
      "Keep the tone polished and consulting-appropriate",
      "Highlight analytical and problem-solving skills with specific examples",
      "Showcase client-facing experience and presentation skills",
      "Mention educational pedigree (relevant for consulting recruiting)",
      "Demonstrate knowledge of Deloitte's practice areas and culture",
      "Quantify business impact of your work"
    ]
  }),
  r({
    slug: "ibm-cover-letter",
    title: "IBM Cover Letter",
    company: "IBM",
    role: "Associate Systems Engineer",
    level: "Entry",
    summary: "A cover letter for IBM entry-level roles emphasizing cloud, AI, and enterprise technology skills.",
    sampleLetter: `Dear IBM Hiring Team,

I am writing to apply for the Associate Systems Engineer position at IBM. As a recent B.Tech graduate with strong skills in cloud computing, AI/ML, and enterprise software, I am excited about the opportunity to start my career at a company that has shaped the technology industry for over a century.

During my academic career at Amrita Vishwa Vidyapeetham, I developed strong programming skills in Python, Java, and SQL. My internship at InfoTech Solutions involved building Python-based data processing pipelines handling 100K+ records daily and assisting in migrating client workloads to cloud infrastructure. I also completed IBM SkillsBuild training, which deepened my understanding of IBM's technology portfolio and consulting approach.

IBM's leadership in hybrid cloud, AI, and quantum computing is inspiring. I am particularly interested in contributing to IBM's work in helping enterprises navigate their digital transformation journeys. The opportunity to work with leading technologies like IBM Cloud, Watson, and Red Hat while developing client-facing skills is exactly what I am looking for in my career.

I am a fast learner with strong problem-solving skills and a collaborative mindset. I am ready to contribute to IBM's mission of using technology to solve the world's toughest problems.

Thank you for your time and consideration.

Best regards,
Karthik Nair
karthik.nair@email.com
linkedin.com/in/karthiknair`,
    tips: [
      "Highlight IBM SkillsBuild training or IBM Cloud certifications",
      "Showcase cloud and AI/ML foundational knowledge",
      "Emphasize problem-solving and client-facing aptitude",
      "Mention familiarity with IBM's technology portfolio (IBM Cloud, Watson, Red Hat)",
      "Keep the tone professional and enthusiastic",
      "Quantify academic and internship achievements"
    ]
  }),
]
