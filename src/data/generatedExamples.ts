import type { ResumeExample } from './types'

function slugHash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0 }
  return Math.abs(h)
}

function r(c: {
  slug: string; title: string; industry: string; level: string
  summary: string; skills: string[]
  n: string; e: string; ct: string; st: string; li: string
  gh?: string; ws?: string
  stxt: string
  j: { r: string; co: string; p: string; b: string[] }[]
  ed: { d: string; s: string; p: string; x?: string }
  sl: string[]; t: string[]
}): ResumeExample {
  const h = slugHash(c.slug)
  const phone = `(${100 + h % 900}) ${100 + ((h >> 4) % 900)}-${1000 + ((h >> 8) % 9000)}`
  const extras = [c.li]; if (c.gh) extras.push(c.gh); if (c.ws) extras.push(c.ws)
  return {
    slug: c.slug, title: c.title, industry: c.industry, level: c.level,
    summary: c.summary, skills: c.skills,
    sampleResume: `${c.n}\n${c.e} | ${phone} | ${c.ct}, ${c.st}\n${extras.join(' | ')}\n\nPROFESSIONAL SUMMARY\n${c.stxt}\n\nEXPERIENCE\n${c.j.map(j => `${j.r} | ${j.co} | ${j.p}\n${j.b.map(b => `- ${b}`).join('\n')}`).join('\n\n')}\n\nEDUCATION\n${c.ed.d} | ${c.ed.s} | ${c.ed.p}${c.ed.x ? '\n' + c.ed.x : ''}\n\nSKILLS\n${c.sl.join('\n')}`,
    tips: c.t
  }
}

export const generatedExamples: ResumeExample[] = [
  r({
    slug: "qa-engineer", title: "QA Engineer", industry: "Tech", level: "Mid",
    summary: "A meticulous QA engineer skilled in manual and automated testing, ensuring software quality and reliability.",
    skills: ["Test Automation", "Selenium", "Cypress", "JIRA", "API Testing", "Postman", "SQL", "Python", "Agile", "Performance Testing"],
    n: "Aisha Patel", e: "aisha.patel@email.com", ct: "Austin", st: "TX", li: "linkedin.com/in/aishapatel", gh: "github.com/aishapatel",
    stxt: "Detail-oriented QA engineer with 5+ years of experience in manual and automated testing. Proven track record of reducing defect rates and improving release quality through comprehensive test strategies.",
    j: [
      { r: "Senior QA Engineer", co: "QualityFirst", p: "Mar 2021 - Present", b: ["Built automated test suite covering 90%+ of critical paths, reducing regression time by 70%", "Led QA for 12 major releases with zero production defects", "Designed API testing framework using Postman and Newman, catching 95% of integration bugs"] },
      { r: "QA Engineer", co: "AppWorks", p: "Jun 2019 - Feb 2021", b: ["Executed manual and automated tests for web and mobile applications", "Reported and tracked 500+ bugs in JIRA, achieving 98% closure rate", "Collaborated with developers to improve testability of new features"] }
    ],
    ed: { d: "B.S. Computer Science", s: "University of Texas", p: "2015 - 2019" },
    sl: ["Automation: Selenium, Cypress, Playwright", "API: Postman, REST Assured, SoapUI", "Tools: JIRA, TestRail, Git, Jenkins", "Languages: Python, Java, JavaScript"],
    t: ["Quantify test coverage and defect reduction metrics", "Highlight both manual and automation experience", "Include specific testing frameworks and tools", "Mention CI/CD integration and shift-left testing"]
  }),
  r({
    slug: "ios-developer", title: "iOS Developer", industry: "Tech", level: "Mid",
    summary: "An iOS developer with expertise in Swift, UIKit, and building polished App Store applications.",
    skills: ["Swift", "UIKit", "SwiftUI", "Xcode", "Core Data", "REST APIs", "Git", "Firebase", "App Store Connect", "CI/CD"],
    n: "Marcus Johnson", e: "marcus.j@email.com", ct: "San Jose", st: "CA", li: "linkedin.com/in/marcusjohnson", gh: "github.com/marcusj",
    stxt: "iOS developer with 5+ years of experience building and shipping consumer-facing apps. Proficient in Swift, UIKit, SwiftUI, and modern iOS architecture patterns. Published 8 apps on the App Store.",
    j: [
      { r: "iOS Developer", co: "MobileApps Inc", p: "Feb 2021 - Present", b: ["Built social networking app with 500K+ downloads and 4.8 star rating", "Migrated legacy Objective-C codebase to Swift, improving compile time by 40%", "Implemented offline-first architecture using Core Data and CloudKit sync"] },
      { r: "Junior iOS Developer", co: "StartupXYZ", p: "Aug 2019 - Jan 2021", b: ["Developed features for e-commerce app serving 100K+ monthly active users", "Integrated payment processing with Stripe and Apple Pay", "Reduced crash rate from 0.8% to 0.05% through systematic bug fixes"] }
    ],
    ed: { d: "B.S. Computer Engineering", s: "San Jose State University", p: "2015 - 2019" },
    sl: ["Languages: Swift, Objective-C", "Frameworks: UIKit, SwiftUI, Core Data, Alamofire", "Tools: Xcode, Instruments, TestFlight, Fastlane", "Architecture: MVVM, MVC, Coordinator Pattern"],
    t: ["Include App Store links and download metrics", "Highlight specific iOS frameworks and patterns", "Mention performance optimization and crash reduction", "Showcase CI/CD and TestFlight experience"]
  }),
  r({
    slug: "android-developer", title: "Android Developer", industry: "Tech", level: "Mid",
    summary: "An Android developer skilled in Kotlin, Jetpack Compose, and building feature-rich mobile applications.",
    skills: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "MVVM", "Room", "Firebase", "Coroutines", "Dagger/Hilt", "REST APIs"],
    n: "Priya Sharma", e: "priya.sharma@email.com", ct: "Seattle", st: "WA", li: "linkedin.com/in/priyasharma", gh: "github.com/priyasharma",
    stxt: "Android developer with 4+ years of experience building native Android applications. Expertise in Kotlin, Jetpack Compose, and modern Android architecture. Passionate about creating smooth, intuitive mobile experiences.",
    j: [
      { r: "Android Developer", co: "TechMobile", p: "Jan 2021 - Present", b: ["Architected and built fitness tracking app with 1M+ downloads using Kotlin and Jetpack Compose", "Reduced ANR rates by 60% through coroutine-based async patterns", "Implemented offline caching with Room, reducing load times by 50%"] },
      { r: "Android Engineer", co: "AppFactory", p: "Mar 2019 - Dec 2020", b: ["Developed UI components and features for news aggregation app with 200K DAU", "Integrated REST APIs and WebSocket for real-time updates", "Wrote unit and UI tests achieving 85% code coverage"] }
    ],
    ed: { d: "B.Tech Computer Science", s: "University of Washington", p: "2015 - 2019" },
    sl: ["Languages: Kotlin, Java", "UI: Jetpack Compose, XML Layouts, Material Design", "Architecture: MVVM, MVI, Clean Architecture", "Libraries: Retrofit, Room, Dagger/Hilt, Coil"],
    t: ["Include Play Store links and download metrics", "Highlight Kotlin and Jetpack Compose expertise", "Mention architecture patterns and state management", "Showcase offline-first and performance optimization"]
  }),
  r({
    slug: "data-engineer", title: "Data Engineer", industry: "Tech", level: "Mid",
    summary: "A data engineer specializing in building scalable data pipelines and data warehouse solutions.",
    skills: ["Python", "SQL", "Apache Spark", "Airflow", "AWS", "Snowflake", "dbt", "Kafka", "PostgreSQL", "Data Warehousing"],
    n: "Daniel Kim", e: "daniel.kim@email.com", ct: "Denver", st: "CO", li: "linkedin.com/in/danielkim", gh: "github.com/danielkim",
    stxt: "Data engineer with 5+ years of experience designing and building data infrastructure. Skilled in ETL/ELT pipelines, data warehousing, and big data technologies. Proven track record of enabling data-driven decision making.",
    j: [
      { r: "Senior Data Engineer", co: "DataFlow Inc", p: "Mar 2021 - Present", b: ["Built streaming data pipeline processing 10M+ events daily using Kafka and Spark", "Designed and implemented Snowflake data warehouse reducing query times by 70%", "Orchestrated 50+ DAGs in Airflow, achieving 99.5% pipeline reliability"] },
      { r: "Data Engineer", co: "AnalyticsCo", p: "Jun 2019 - Feb 2021", b: ["Developed ETL pipelines transforming data from 20+ source systems", "Migrated legacy data warehouse to cloud-based solution on AWS Redshift", "Reduced data processing time from 6 hours to 45 minutes through optimization"] }
    ],
    ed: { d: "M.S. Data Science", s: "University of Colorado", p: "2017 - 2019", x: "B.S. Computer Science | 2013 - 2017" },
    sl: ["Languages: Python, SQL, Scala", "Big Data: Spark, Kafka, Airflow, dbt", "Cloud: AWS (S3, Redshift, EMR), Snowflake", "Databases: PostgreSQL, MongoDB, Cassandra"],
    t: ["Quantify data volume and pipeline performance metrics", "Highlight specific big data technologies", "Mention data quality and reliability improvements", "Showcase cloud data warehouse experience"]
  }),
  r({
    slug: "cloud-engineer", title: "Cloud Engineer", industry: "Tech", level: "Mid",
    summary: "A cloud engineer experienced in designing, deploying, and managing multi-cloud infrastructure.",
    skills: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "CI/CD", "Linux", "Python", "Cloud Security"],
    n: "Ryan Torres", e: "ryan.torres@email.com", ct: "Phoenix", st: "AZ", li: "linkedin.com/in/ryantorres", gh: "github.com/ryantorres",
    stxt: "Cloud engineer with 5+ years of experience architecting and managing cloud infrastructure. AWS Certified Solutions Architect with expertise in multi-cloud strategies, automation, and cost optimization.",
    j: [
      { r: "Cloud Engineer", co: "CloudScaleTech", p: "Jan 2021 - Present", b: ["Architected multi-region AWS infrastructure supporting 99.99% uptime SLA", "Reduced cloud costs by 35% ($200K/year) through right-sizing and reserved instances", "Automated infrastructure provisioning with Terraform, reducing deployment time by 80%"] },
      { r: "Junior Cloud Engineer", co: "HostingPro", p: "Aug 2019 - Dec 2020", b: ["Managed 50+ AWS EC2 instances and RDS databases", "Implemented monitoring and alerting with CloudWatch and PagerDuty", "Assisted in migrating on-premise workloads to AWS"] }
    ],
    ed: { d: "B.S. Information Technology", s: "Arizona State University", p: "2015 - 2019" },
    sl: ["Cloud: AWS, Azure, GCP", "IaC: Terraform, CloudFormation, Pulumi", "Container: Docker, Kubernetes, ECS, EKS", "DevOps: Jenkins, GitHub Actions, Helm, ArgoCD"],
    t: ["Include cloud certifications (AWS, Azure, GCP)", "Quantify cost savings and reliability improvements", "Highlight multi-cloud and migration experience", "Showcase automation and IaC expertise"]
  }),
  r({
    slug: "cybersecurity-analyst", title: "Cybersecurity Analyst", industry: "Tech", level: "Mid",
    summary: "A cybersecurity analyst focused on threat detection, incident response, and security infrastructure.",
    skills: ["SIEM", "Incident Response", "Penetration Testing", "Network Security", "Firewalls", "Python", "Wireshark", "Nmap", "CISSP", "Risk Assessment"],
    n: "Jasmine Reyes", e: "jasmine.reyes@email.com", ct: "Baltimore", st: "MD", li: "linkedin.com/in/jasminereyes",
    stxt: "Cybersecurity analyst with 4+ years of experience protecting enterprise networks and data. Skilled in threat hunting, incident response, and security tooling. CompTIA Security+ and CISSP certified.",
    j: [
      { r: "Security Analyst", co: "CyberDefend", p: "Mar 2021 - Present", b: ["Investigated 200+ security incidents annually, reducing mean time to respond from 4h to 45min", "Implemented SIEM solution correlating 1M+ log events daily, improving threat detection by 60%", "Conducted vulnerability assessments and penetration tests on 30+ internal systems"] },
      { r: "Junior Security Analyst", co: "NetSecure", p: "Jun 2019 - Feb 2021", b: ["Monitored security alerts across 500+ endpoints using Splunk", "Performed phishing simulations reducing click-through rates from 15% to 3%", "Assisted in SOC operations during 24/7 shift rotations"] }
    ],
    ed: { d: "B.S. Cybersecurity", s: "University of Maryland", p: "2015 - 2019" },
    sl: ["Security: SIEM, IDS/IPS, Firewalls, Endpoint Protection", "Tools: Splunk, Wireshark, Nmap, Metasploit, Burp Suite", "Certifications: Security+, CISSP", "Languages: Python, Bash, PowerShell"],
    t: ["Include security certifications prominently", "Quantify incident response metrics", "Highlight specific security tools and frameworks", "Mention compliance standards (NIST, ISO 27001)"]
  }),
  r({
    slug: "ml-engineer", title: "Machine Learning Engineer", industry: "Tech", level: "Senior",
    summary: "A senior machine learning engineer with deep expertise in deploying production ML systems at scale.",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Kubernetes", "AWS SageMaker", "Feature Engineering", "NLP", "Computer Vision", "Docker"],
    n: "Dr. Vikram Joshi", e: "vikram.joshi@email.com", ct: "San Francisco", st: "CA", li: "linkedin.com/in/vikramjoshi", gh: "github.com/vikjoshi",
    stxt: "Senior ML engineer with 8+ years of experience designing and deploying machine learning systems in production. PhD in Machine Learning with expertise in NLP, recommendation systems, and MLOps. Led ML teams delivering models serving 10M+ users.",
    j: [
      { r: "Senior ML Engineer", co: "AIPlatform", p: "Jan 2020 - Present", b: ["Architected ML platform serving 100+ models in production with 99.9% uptime", "Built real-time recommendation engine increasing user engagement by 35% impacting 10M+ users", "Reduced model deployment time from weeks to hours through MLOps automation"] },
      { r: "ML Engineer", co: "DataScience Co", p: "Jun 2017 - Dec 2019", b: ["Developed NLP pipeline for sentiment analysis processing 5M+ documents daily", "Built computer vision model for defect detection achieving 98.5% accuracy", "Optimized model inference latency from 200ms to 25ms using TensorRT and ONNX"] }
    ],
    ed: { d: "Ph.D. Machine Learning", s: "Carnegie Mellon University", p: "2013 - 2017", x: "M.S. Computer Science | Stanford | 2011 - 2013" },
    sl: ["ML/DL: TensorFlow, PyTorch, Hugging Face, XGBoost", "MLOps: MLflow, Kubeflow, TFX, SageMaker", "Infra: Kubernetes, Docker, AWS, GCP", "Domains: NLP, Computer Vision, Recommendation Systems"],
    t: ["Emphasize production ML experience and scale", "Quantify model performance and business impact", "Highlight MLOps and deployment pipeline expertise", "Include research publications and patents", "Showcase team leadership and mentoring"]
  }),
  r({
    slug: "technical-writer", title: "Technical Writer", industry: "Tech", level: "Mid",
    summary: "A technical writer skilled in creating clear documentation, API guides, and developer tutorials.",
    skills: ["Technical Writing", "API Documentation", "Markdown", "Git", "DITA", "MadCap Flare", "Content Strategy", "Information Architecture", "Screencasting", "HTML/CSS"],
    n: "Laura Bennett", e: "laura.bennett@email.com", ct: "Portland", st: "OR", li: "linkedin.com/in/laurabennett", ws: "laurabennett.docs",
    stxt: "Technical writer with 5+ years of experience creating developer documentation and user guides. Expertise in API documentation, information architecture, and content strategy. Passionate about making complex technical concepts accessible.",
    j: [
      { r: "Senior Technical Writer", co: "DevTools Inc", p: "Mar 2021 - Present", b: ["Authored API documentation for REST and GraphQL APIs used by 10K+ developers", "Reduced support tickets by 40% through improved onboarding documentation", "Established content style guide and documentation standards adopted company-wide"] },
      { r: "Technical Writer", co: "SoftwareCorp", p: "Jun 2019 - Feb 2021", b: ["Created and maintained user manuals for 5 software products", "Produced video tutorials increasing feature adoption by 25%", "Managed documentation migration from legacy wiki to modern docs-as-code platform"] }
    ],
    ed: { d: "B.A. English / Technical Communication", s: "University of Oregon", p: "2015 - 2019" },
    sl: ["Writing: API Docs, User Guides, Tutorials, Release Notes", "Tools: MadCap Flare, Confluence, ReadMe, Docusaurus", "Tech: Markdown, Git, HTML/CSS, Swagger/OpenAPI", "Methods: Docs-as-Code, Information Architecture, Content Strategy"],
    t: ["Include links to documentation samples or portfolio", "Quantify impact (support ticket reduction, feature adoption)", "Highlight API documentation experience", "Showcase tool and platform expertise"]
  }),
  r({
    slug: "it-support-specialist", title: "IT Support Specialist", industry: "Tech", level: "Entry",
    summary: "A motivated IT support professional with hands-on experience troubleshooting hardware, software, and network issues.",
    skills: ["Windows", "macOS", "Linux", "Networking", "Active Directory", "Office 365", "Help Desk", "Troubleshooting", "Customer Service", "Ticketing Systems"],
    n: "Carlos Mendez", e: "carlos.mendez@email.com", ct: "Miami", st: "FL", li: "linkedin.com/in/carlosmendez",
    stxt: "IT support specialist with 2+ years of experience providing technical support. Skilled in troubleshooting hardware and software issues, managing user accounts, and maintaining IT infrastructure. CompTIA A+ certified.",
    j: [
      { r: "IT Support Specialist", co: "MidSize Corp", p: "Jan 2023 - Present", b: ["Resolved 600+ support tickets annually with 95% first-call resolution rate", "Managed Active Directory for 200+ users, including account provisioning and access control", "Deployed and configured 100+ workstations, standardizing OS and software images"] },
      { r: "IT Intern", co: "TechHelp", p: "Jun 2022 - Dec 2022", b: ["Provided desktop support for 50+ end users", "Assisted in network cable runs and switch configuration", "Created knowledge base articles reducing repeat tickets by 20%"] }
    ],
    ed: { d: "A.S. Information Technology", s: "Miami Dade College", p: "2020 - 2022" },
    sl: ["OS: Windows 10/11, macOS, Ubuntu Linux", "Tools: Active Directory, Office 365, ServiceNow", "Hardware: PC/Mac Repair, Printer Troubleshooting", "Certifications: CompTIA A+, Network+"],
    t: ["Include certifications (A+, Network+, etc.)", "Quantify ticket resolution and satisfaction metrics", "Highlight customer service orientation", "List specific technologies and systems managed"]
  }),
  r({
    slug: "scrum-master", title: "Scrum Master", industry: "Tech", level: "Mid",
    summary: "A certified Scrum Master dedicated to enabling agile teams and driving continuous improvement.",
    skills: ["Scrum", "Agile", "Kanban", "JIRA", "Confluence", "Facilitation", "Coaching", "Conflict Resolution", "SAFe", "Retrospectives"],
    n: "Megan Foster", e: "megan.foster@email.com", ct: "Atlanta", st: "GA", li: "linkedin.com/in/meganfoster",
    stxt: "Certified Scrum Master with 5+ years of experience guiding agile teams. Skilled in facilitation, coaching, and removing impediments. Proven track record of improving team velocity and delivery predictability.",
    j: [
      { r: "Scrum Master", co: "AgileWorks", p: "Mar 2021 - Present", b: ["Coached 3 cross-functional teams (15 engineers) in Scrum, improving velocity by 35%", "Facilitated sprint ceremonies for 12+ concurrent product streams", "Reduced average cycle time from 14 to 8 days through process improvements"] },
      { r: "Junior Scrum Master", co: "TechSolutions", p: "Jun 2019 - Feb 2021", b: ["Supported 2 development teams in transitioning from Waterfall to Scrum", "Created team dashboards improving stakeholder visibility by 50%", "Led retrospectives that identified 30+ actionable process improvements"] }
    ],
    ed: { d: "Certified Scrum Master (CSM)", s: "Scrum Alliance", p: "2019", x: "B.A. Business Administration | University of Georgia | 2015 - 2019" },
    sl: ["Methodologies: Scrum, Kanban, SAFe, Lean", "Tools: JIRA, Confluence, Miro, Trello", "Skills: Facilitation, Coaching, Conflict Resolution, Metrics"],
    t: ["Include Scrum certifications (CSM, PSM, SAFe)", "Quantify team performance improvements", "Highlight coaching and mentoring experience", "Showcase agile transformation experience"]
  }),
  r({
    slug: "solutions-architect", title: "Solutions Architect", industry: "Tech", level: "Senior",
    summary: "A solutions architect who designs scalable systems and aligns technical strategy with business goals.",
    skills: ["System Design", "Microservices", "AWS", "Azure", "Kubernetes", "Architecture Patterns", "API Design", "Enterprise Integration", "Technical Leadership", "Cloud Migration"],
    n: "James Sullivan", e: "james.sullivan@email.com", ct: "Dallas", st: "TX", li: "linkedin.com/in/jamessullivan",
    stxt: "Solutions architect with 10+ years of experience designing enterprise systems. Expertise in microservices, cloud-native architecture, and digital transformation. Led architecture for platforms serving 10M+ users across multiple industries.",
    j: [
      { r: "Solutions Architect", co: "EnterpriseCloud", p: "Jan 2020 - Present", b: ["Architected cloud-native platform migrating 50+ legacy applications to AWS, saving $3M/year", "Designed event-driven microservices architecture handling 100K+ events per second", "Established architecture review board governing standards across 8 engineering teams"] },
      { r: "Lead Engineer", co: "TechCorp", p: "Mar 2016 - Dec 2019", b: ["Led architecture for SaaS platform supporting 500K+ enterprise users", "Designed multi-tenant database architecture reducing infrastructure costs by 40%", "Defined API strategy and standards adopted by 5 product teams"] }
    ],
    ed: { d: "M.S. Computer Science", s: "University of Texas at Dallas", p: "2012 - 2014", x: "B.S. Computer Engineering | 2008 - 2012" },
    sl: ["Architecture: Microservices, Event-Driven, Domain-Driven Design", "Cloud: AWS (Certified Solutions Architect), Azure", "Patterns: CQRS, Saga, Event Sourcing, API Gateway", "Leadership: Technical Strategy, Architecture Governance, Mentoring"],
    t: ["Emphasize architectural decision-making and tradeoffs", "Quantify scale, cost savings, and performance metrics", "Highlight cloud certification and migration experience", "Showcase cross-team and executive communication", "Include specific architecture patterns and methodologies"]
  }),
  r({
    slug: "systems-administrator", title: "Systems Administrator", industry: "Tech", level: "Mid",
    summary: "A systems administrator skilled in managing servers, networks, and ensuring reliable IT operations.",
    skills: ["Linux", "Windows Server", "Active Directory", "VMware", "Networking", "Bash", "Puppet", "Monitoring", "Backup", "Security Hardening"],
    n: "Kevin O'Brien", e: "kevin.obrien@email.com", ct: "Chicago", st: "IL", li: "linkedin.com/in/kevinobrien",
    stxt: "Systems administrator with 6+ years of experience managing on-premise and cloud infrastructure. Skilled in Linux and Windows server administration, automation, and disaster recovery. Focused on maintaining high availability and security.",
    j: [
      { r: "Senior Systems Admin", co: "DataCenter Inc", p: "Jan 2021 - Present", b: ["Managed 200+ Linux and Windows servers with 99.9% uptime over 3 years", "Automated server provisioning with Puppet, reducing setup time from 4h to 30min", "Implemented backup and disaster recovery plan reducing RTO from 24h to 4h"] },
      { r: "Systems Administrator", co: "MidWest IT", p: "Jun 2018 - Dec 2020", b: ["Administered VMWare vSphere environment with 50+ virtual machines", "Managed Active Directory, DNS, DHCP, and Group Policy for 500+ users", "Performed security patching and vulnerability remediation across server fleet"] }
    ],
    ed: { d: "B.S. Information Systems", s: "DePaul University", p: "2014 - 2018" },
    sl: ["OS: Linux (RHEL, Ubuntu), Windows Server 2019/2022", "Virtualization: VMware vSphere, Hyper-V", "Automation: Puppet, Ansible, Bash, PowerShell", "Tools: Nagios, Zabbix, Splunk, Veeam"],
    t: ["Quantify uptime and reliability metrics", "Highlight automation and scripting skills", "Include disaster recovery planning experience", "List specific technologies and versions managed"]
  }),
  r({
    slug: "network-engineer", title: "Network Engineer", industry: "Tech", level: "Mid",
    summary: "A network engineer experienced in designing, implementing, and securing enterprise networks.",
    skills: ["Cisco", "Routing", "Switching", "Firewalls", "BGP", "OSPF", "VLAN", "VPN", "Wireshark", "CCNA"],
    n: "Nina Patel", e: "nina.patel@email.com", ct: "Raleigh", st: "NC", li: "linkedin.com/in/ninapatel",
    stxt: "Network engineer with 5+ years of experience designing and maintaining enterprise networks. CCNA and CCNP certified with expertise in routing, switching, and network security. Proven ability to improve network performance and reliability.",
    j: [
      { r: "Network Engineer", co: "NetWorks", p: "Feb 2021 - Present", b: ["Designed and deployed campus network for 1,000+ users with Cisco Catalyst switches", "Implemented BGP/OSPF routing reducing network latency by 25%", "Configured firewall rules and VPN tunnels for 50+ remote sites"] },
      { r: "Junior Network Engineer", co: "ISPConnect", p: "Jul 2019 - Jan 2021", b: ["Monitored network performance across 200+ devices using SolarWinds", "Troubleshot network issues affecting 5,000+ customers with 98% SLA achievement", "Assisted in fiber optic network expansion project covering 50 new sites"] }
    ],
    ed: { d: "B.S. Network Engineering", s: "North Carolina State University", p: "2015 - 2019" },
    sl: ["Routing: BGP, OSPF, EIGRP", "Switching: VLAN, STP, EtherChannel, VXLAN", "Security: Firewalls, IPSec VPN, ACLs, 802.1X", "Tools: Wireshark, SolarWinds, Cisco DNA Center"],
    t: ["Include Cisco certifications (CCNA, CCNP)", "Quantify network size and performance metrics", "Highlight specific routing protocols and technologies", "Showcase network design and project experience"]
  }),
  r({
    slug: "database-administrator", title: "Database Administrator", industry: "Tech", level: "Mid",
    summary: "A database administrator focused on performance tuning, high availability, and data security.",
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Performance Tuning", "Backup", "Replication", "Linux", "Python", "Cloud Databases"],
    n: "Robert Chen", e: "robert.chen@email.com", ct: "Houston", st: "TX", li: "linkedin.com/in/robertchen",
    stxt: "Database administrator with 6+ years of experience managing relational and NoSQL databases. Skilled in performance tuning, backup and recovery, and database migration. Focused on ensuring data integrity and 24/7 availability.",
    j: [
      { r: "Senior DBA", co: "DataSafe Corp", p: "Mar 2021 - Present", b: ["Managed 50+ PostgreSQL and MySQL databases supporting mission-critical applications", "Improved average query performance by 60% through indexing and query optimization", "Implemented streaming replication achieving RPO of under 5 minutes"] },
      { r: "Database Administrator", co: "TechFinance", p: "Jun 2018 - Feb 2021", b: ["Administered Oracle RAC cluster with 99.95% uptime over 3 years", "Migrated 10+ databases from on-premise to AWS RDS with zero downtime", "Automated backup verification, reducing data loss incidents by 90%"] }
    ],
    ed: { d: "B.S. Computer Science", s: "University of Houston", p: "2014 - 2018" },
    sl: ["Relational: PostgreSQL, MySQL, Oracle, SQL Server", "NoSQL: MongoDB, Redis, Elasticsearch", "Cloud: AWS RDS, Aurora, DynamoDB", "Tools: pgAdmin, MySQL Workbench, Datadog, Percona"],
    t: ["Quantify performance improvements and uptime metrics", "Highlight migration and cloud experience", "Include backup and disaster recovery strategies", "List specific database technologies and versions"]
  }),
  r({
    slug: "site-reliability-engineer", title: "Site Reliability Engineer", industry: "Tech", level: "Senior",
    summary: "A senior SRE ensuring system reliability through automation, monitoring, and incident response.",
    skills: ["Kubernetes", "Prometheus", "Go", "Python", "Terraform", "AWS", "Linux", "Grafana", "Incident Response", "Distributed Systems"],
    n: "Alex Chang", e: "alex.chang@email.com", ct: "San Francisco", st: "CA", li: "linkedin.com/in/alexchang", gh: "github.com/alexchang",
    stxt: "Site reliability engineer with 8+ years of experience operating large-scale distributed systems. Expertise in Kubernetes, observability, and incident response. Built SRE practices for platforms serving 50M+ users with 99.99% availability.",
    j: [
      { r: "Staff SRE", co: "ScaleUp Inc", p: "Jan 2020 - Present", b: ["Built SRE team and practices for platform serving 50M+ daily active users", "Reduced P0 incident count by 70% through chaos engineering and reliability testing", "Designed multi-cluster Kubernetes architecture spanning 3 regions with automated failover"] },
      { r: "Senior SRE", co: "CloudNative Co", p: "Mar 2017 - Dec 2019", b: ["Managed Kubernetes clusters with 500+ microservices handling 100K requests/second", "Built observability stack (Prometheus, Grafana, Loki) reducing MTTR by 60%", "Automated incident response runbooks, achieving 40% of incidents resolved without human intervention"] }
    ],
    ed: { d: "B.S. Computer Science", s: "UC Berkeley", p: "2011 - 2015" },
    sl: ["Container: Kubernetes, Docker, Helm, Istio", "Observability: Prometheus, Grafana, Datadog, ELK", "Infra: Terraform, Ansible, Packer", "Languages: Go, Python, Bash"],
    t: ["Quantify reliability metrics (SLOs, SLIs, error budgets)", "Highlight incident response and post-mortem culture", "Showcase automation and toil reduction", "Include chaos engineering and resiliency testing", "Emphasize capacity planning and performance engineering"]
  }),
  r({
    slug: "product-designer", title: "Product Designer", industry: "Design", level: "Mid",
    summary: "A product designer creating intuitive digital experiences through user research and iterative design.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Usability Testing", "Interaction Design", "Visual Design", "Wireframing", "HTML/CSS", "Design Thinking"],
    n: "Sophia Andersson", e: "sophia.a@email.com", ct: "New York", st: "NY", li: "linkedin.com/in/sophiaandersson", ws: "sophiaandersson.design",
    stxt: "Product designer with 5+ years of experience designing digital products from concept to launch. Skilled in user research, interaction design, and design systems. Passionate about creating accessible, human-centered experiences.",
    j: [
      { r: "Product Designer", co: "FinTechCo", p: "Mar 2021 - Present", b: ["Redesigned core mobile banking app improving task completion rate by 45%", "Built and maintained design system used by 4 product teams across 2 platforms", "Conducted 40+ user interviews and usability tests informing product roadmap"] },
      { r: "UX/UI Designer", co: "Digital Agency", p: "Jun 2019 - Feb 2021", b: ["Designed web and mobile interfaces for 12 client projects across various industries", "Created interactive prototypes in Figma for stakeholder presentations", "Collaborated with developers to ensure design fidelity in production"] }
    ],
    ed: { d: "B.F.A. Interaction Design", s: "School of Visual Arts", p: "2015 - 2019" },
    sl: ["Design: Figma, Sketch, Principle, After Effects", "Research: User Interviews, Surveys, A/B Testing, Analytics", "Methods: Design Thinking, Lean UX, Agile", "Code: HTML, CSS, React (basics)"],
    t: ["Include portfolio link", "Quantify design impact with metrics", "Showcase end-to-end design process", "Highlight design system and collaboration work", "Mention accessibility (WCAG) practices"]
  }),
  r({
    slug: "ui-designer", title: "UI Designer", industry: "Design", level: "Mid",
    summary: "A UI designer specializing in pixel-perfect interfaces, visual design systems, and brand-aligned digital experiences.",
    skills: ["Figma", "Adobe XD", "Sketch", "Visual Design", "Typography", "Color Theory", "Design Systems", "Prototyping", "Iconography", "Responsive Design"],
    n: "Emma Wright", e: "emma.wright@email.com", ct: "Los Angeles", st: "CA", li: "linkedin.com/in/emmawright", ws: "emmawright.design",
    stxt: "UI designer with 4+ years of experience crafting beautiful, functional interfaces for web and mobile. Keen eye for typography, color, and layout. Experienced in building scalable design systems that ensure visual consistency across products.",
    j: [
      { r: "UI Designer", co: "DesignStudio", p: "Feb 2021 - Present", b: ["Designed UI for SaaS platform serving 100K+ users, achieving 96% positive usability feedback", "Built comprehensive design system with 200+ components, reducing design-to-dev handoff time by 40%", "Created responsive layouts and adaptive components for mobile, tablet, and desktop"] },
      { r: "Junior UI Designer", co: "CreativeLab", p: "Aug 2019 - Jan 2021", b: ["Produced pixel-perfect mockups and prototypes for 20+ client projects", "Developed brand-compliant icon sets and illustration libraries", "Collaborated with developers to ensure cross-browser consistency"] }
    ],
    ed: { d: "B.A. Graphic Design", s: "California State University", p: "2015 - 2019" },
    sl: ["Tools: Figma, Adobe XD, Sketch, Photoshop, Illustrator", "UI: Typography, Color Theory, Layout, Grid Systems", "Design Systems: Components, Tokens, Documentation", "Prototyping: Interactive Prototypes, Micro-interactions, Animations"],
    t: ["Include portfolio link with variety of projects", "Highlight design system and component library work", "Showcase responsive and adaptive design skills", "Mention collaboration with developers and brand teams"]
  }),
  r({
    slug: "motion-designer", title: "Motion Designer", industry: "Design", level: "Mid",
    summary: "A motion designer creating compelling animations and visual effects for digital products and brand content.",
    skills: ["After Effects", "Cinema 4D", "Premiere Pro", "Animation", "Motion Graphics", "Typography", "Storyboarding", "Lottie", "3D Animation", "Sound Design"],
    n: "Liam Gallagher", e: "liam.g@email.com", ct: "Chicago", st: "IL", li: "linkedin.com/in/liamgallagher", ws: "liamgallagher.motion",
    stxt: "Motion designer with 5+ years of experience creating animated content for brands and products. Expertise in 2D and 3D animation, motion graphics, and visual effects. Skilled in translating brand stories into compelling motion narratives.",
    j: [
      { r: "Senior Motion Designer", co: "MotionAgency", p: "Mar 2021 - Present", b: ["Created animated explainer videos for 15+ enterprise clients, reaching 5M+ combined views", "Built Lottie animation library for mobile app, improving user engagement by 25%", "Led motion design for product launch campaigns across social and digital channels"] },
      { r: "Motion Designer", co: "CreativeHouse", p: "Jun 2019 - Feb 2021", b: ["Produced 50+ motion graphics pieces for social media campaigns", "Designed animated logos and title sequences for brand identity projects", "Collaborated with creative directors to storyboard and animate video content"] }
    ],
    ed: { d: "B.F.A. Animation", s: "Columbia College Chicago", p: "2015 - 2019" },
    sl: ["2D: After Effects, Animate, Toon Boom", "3D: Cinema 4D, Blender, Redshift", "Video: Premiere Pro, Final Cut Pro", "UI Motion: Lottie, Rive, Principle"],
    t: ["Include demo reel link or portfolio", "Showcase variety of motion styles and techniques", "Highlight collaboration with creative and brand teams", "Mention Lottie and UI animation experience", "Quantify content reach and engagement metrics"]
  }),
  r({
    slug: "art-director", title: "Art Director", industry: "Design", level: "Senior",
    summary: "An art director with a visionary approach to visual storytelling and brand identity across all media.",
    skills: ["Creative Direction", "Brand Strategy", "Visual Design", "Art Direction", "Photography", "Typography", "Team Leadership", "Campaign Strategy", "Adobe Creative Suite", "Concept Development"],
    n: "Olivia Hart", e: "olivia.hart@email.com", ct: "New York", st: "NY", li: "linkedin.com/in/oliviahart", ws: "oliviahart.design",
    stxt: "Art director with 10+ years of experience leading creative vision for global brands. Expertise in brand strategy, visual identity, and campaign development. Proven track record of creating award-winning work that drives brand recognition and business results.",
    j: [
      { r: "Art Director", co: "GlobalBrand Agency", p: "Jan 2019 - Present", b: ["Led visual direction for Fortune 500 brand campaigns generating $50M+ in revenue", "Managed team of 8 designers, photographers, and illustrators across multiple projects", "Rebranded major product line resulting in 30% increase in brand recall"] },
      { r: "Senior Designer", co: "CreativeAgency", p: "Jun 2014 - Dec 2018", b: ["Developed creative concepts for 30+ national advertising campaigns", "Directed photoshoots and video productions for print, digital, and OOH media", "Won 5 industry awards including Cannes Lion and D&AD Pencil"] }
    ],
    ed: { d: "B.F.A. Graphic Design", s: "Rhode Island School of Design", p: "2008 - 2012" },
    sl: ["Creative: Art Direction, Brand Strategy, Concept Development", "Design: Typography, Photography, Layout, Color Theory", "Leadership: Team Management, Client Relations, Mentoring", "Tools: Adobe Creative Suite, Figma, Keynote"],
    t: ["Include portfolio and award highlights", "Quantify campaign reach and business impact", "Emphasize leadership and team management", "Showcase brand transformation case studies", "Mention industry awards and recognitions"]
  }),
  r({
    slug: "interior-designer", title: "Interior Designer", industry: "Design", level: "Mid",
    summary: "An interior designer creating functional, aesthetic spaces for residential and commercial clients.",
    skills: ["AutoCAD", "SketchUp", "Space Planning", "Color Theory", "Materials", "Furniture Design", "Lighting Design", "Project Management", "3D Rendering", "Client Consultation"],
    n: "Isabella Rossi", e: "isabella.rossi@email.com", ct: "Miami", st: "FL", li: "linkedin.com/in/isabellarossi", ws: "isabellarossi.design",
    stxt: "Interior designer with 5+ years of experience transforming residential and commercial spaces. Skilled in space planning, material selection, and project management. Passionate about creating environments that balance aesthetics with functionality.",
    j: [
      { r: "Interior Designer", co: "DesignSpace Studio", p: "Feb 2021 - Present", b: ["Designed interiors for 20+ residential projects with budgets up to $500K", "Led commercial office redesign for tech company, improving employee satisfaction by 35%", "Managed projects from concept through installation, delivering 100% on budget"] },
      { r: "Junior Interior Designer", co: "HomeStyle Inc", p: "Jul 2019 - Jan 2021", b: ["Created mood boards, material palettes, and 3D renderings for 30+ clients", "Coordinated with contractors and vendors for furniture and material procurement", "Assisted in award-winning hospitality project for boutique hotel chain"] }
    ],
    ed: { d: "B.F.A. Interior Design", s: "University of Florida", p: "2015 - 2019" },
    sl: ["Software: AutoCAD, SketchUp, Revit, 3ds Max", "Design: Space Planning, Color Theory, Lighting, Materials", "Visualization: V-Ray, Enscape, Photoshop", "Skills: Project Management, Budgeting, Vendor Coordination"],
    t: ["Include portfolio with before/after photos", "Quantify project scale and budget management", "Highlight specific styles and specializations", "Showcase client satisfaction and repeat business", "List relevant software proficiencies"]
  }),
  r({
    slug: "fashion-designer", title: "Fashion Designer", industry: "Design", level: "Mid",
    summary: "A fashion designer creating innovative apparel collections with a focus on sustainable materials and trends.",
    skills: ["Fashion Design", "Pattern Making", "Illustration", "Adobe Illustrator", "Textiles", "Garment Construction", "Trend Forecasting", "CAD", "Sustainable Fashion", "Collection Development"],
    n: "Chloe Dubois", e: "chloe.dubois@email.com", ct: "New York", st: "NY", li: "linkedin.com/in/chloedubois", ws: "chloedubois.fashion",
    stxt: "Fashion designer with 5+ years of experience developing ready-to-wear collections. Expertise in garment construction, pattern making, and sustainable textile sourcing. Passionate about creating fashion that is both beautiful and environmentally conscious.",
    j: [
      { r: "Fashion Designer", co: "Maison Luxe", p: "Mar 2021 - Present", b: ["Designed and launched 6 seasonal collections generating $8M in wholesale revenue", "Introduced sustainable fabric line reducing environmental impact by 40%", "Presented collection at New York Fashion Week receiving positive media coverage"] },
      { r: "Assistant Designer", co: "StyleHouse", p: "Jun 2019 - Feb 2021", b: ["Assisted in designing 4 collections per year for contemporary label", "Created technical flat sketches and spec sheets for overseas manufacturers", "Sourced fabrics and trims, negotiating costs to achieve margin targets"] }
    ],
    ed: { d: "B.F.A. Fashion Design", s: "Parsons School of Design", p: "2015 - 2019" },
    sl: ["Design: Illustration, Draping, Pattern Making, Garment Construction", "Software: Adobe Illustrator, Photoshop, CLO 3D", "Textiles: Fabric Sourcing, Sustainable Materials, Quality Control", "Process: Collection Development, Trend Research, Tech Packs"],
    t: ["Include portfolio with collection images", "Highlight sustainable design practices", "Quantify collection performance and revenue", "Mention Fashion Week and media features", "Showcase technical design skills (patterns, specs)"]
  }),
  r({
    slug: "social-media-manager", title: "Social Media Manager", industry: "Marketing", level: "Mid",
    summary: "A social media manager driving brand awareness and engagement through strategic content and community management.",
    skills: ["Social Media Strategy", "Content Creation", "Instagram", "TikTok", "LinkedIn", "Twitter", "Analytics", "Community Management", "Canva", "Hootsuite"],
    n: "Maya Singh", e: "maya.singh@email.com", ct: "Denver", st: "CO", li: "linkedin.com/in/mayasingh",
    stxt: "Social media manager with 4+ years of experience growing brand presence across platforms. Skilled in content strategy, community engagement, and analytics. Grew multiple brand accounts from zero to 100K+ followers.",
    j: [
      { r: "Social Media Manager", co: "BrandLift", p: "Jan 2021 - Present", b: ["Grew Instagram following from 5K to 150K in 18 months through organic strategy", "Managed social campaigns reaching 10M+ impressions with 5% average engagement rate", "Developed TikTok strategy generating 20M+ video views and 200K new followers"] },
      { r: "Social Media Coordinator", co: "MarketPro", p: "Jun 2019 - Dec 2020", b: ["Created and scheduled 500+ posts monthly across 4 brand accounts", "Grew LinkedIn presence by 300% through thought leadership content", "Reduced response time to customer inquiries from 24h to under 2h"] }
    ],
    ed: { d: "B.A. Communications", s: "University of Denver", p: "2015 - 2019" },
    sl: ["Platforms: Instagram, TikTok, LinkedIn, Twitter, Facebook", "Tools: Hootsuite, Canva, Later, Sprout Social", "Content: Photography, Video Editing, Copywriting, Storytelling", "Analytics: Google Analytics, Native Insights, Brandwatch"],
    t: ["Quantify follower growth and engagement metrics", "Showcase platform-specific content strategies", "Highlight community management and crisis response", "Include portfolio links to managed accounts", "Demonstrate data-driven content decisions"]
  }),
  r({
    slug: "content-writer", title: "Content Writer", industry: "Marketing", level: "Mid",
    summary: "A versatile content writer crafting engaging blog posts, articles, and marketing copy for diverse audiences.",
    skills: ["Copywriting", "Blog Writing", "SEO", "Content Strategy", "Research", "Editing", "WordPress", "AP Style", "Storytelling", "Social Media Copy"],
    n: "Nathan Drake", e: "nathan.drake@email.com", ct: "Austin", st: "TX", li: "linkedin.com/in/nathandrake", ws: "nathandrake.writes",
    stxt: "Content writer with 5+ years of experience producing engaging content for B2B and B2C brands. Skilled in SEO-optimized writing, content strategy, and brand storytelling. Published 500+ articles across various industries.",
    j: [
      { r: "Senior Content Writer", co: "ContentLab", p: "Mar 2021 - Present", b: ["Produced 120+ SEO-optimized blog posts annually, driving 200K+ monthly organic visitors", "Developed content strategy that increased lead generation by 60%", "Wrote and edited content for email campaigns with 25% average open rate"] },
      { r: "Content Writer", co: "DigitalPublish", p: "Jun 2019 - Feb 2021", b: ["Wrote 200+ articles covering tech, business, and lifestyle topics", "Optimized existing content improving average search ranking by 15 positions", "Interviewed subject matter experts for in-depth feature articles"] }
    ],
    ed: { d: "B.A. English Literature", s: "University of Texas", p: "2015 - 2019" },
    sl: ["Writing: Blog Posts, Articles, Copy, Newsletters, White Papers", "SEO: Keyword Research, On-Page SEO, Content Optimization", "Tools: WordPress, SEMrush, Grammarly, Google Analytics", "Style: AP Style, Chicago Manual, Brand Voice Development"],
    t: ["Include portfolio with published work samples", "Quantify content performance (traffic, engagement, leads)", "Highlight SEO expertise and keyword strategy", "Showcase versatility across topics and formats", "Mention editorial and proofreading skills"]
  }),
  r({
    slug: "seo-specialist", title: "SEO Specialist", industry: "Marketing", level: "Mid",
    summary: "An SEO specialist driving organic growth through technical optimization, content strategy, and link building.",
    skills: ["SEO", "Keyword Research", "Link Building", "Google Analytics", "Search Console", "Technical SEO", "Content Strategy", "Ahrefs", "SEMrush", "HTML/CSS"],
    n: "Ryan Mitchell", e: "ryan.mitchell@email.com", ct: "Seattle", st: "WA", li: "linkedin.com/in/ryanmitchell",
    stxt: "SEO specialist with 5+ years of experience driving organic growth. Expertise in technical SEO, content strategy, and link building. Consistently delivered 2x+ organic traffic growth for client websites across multiple industries.",
    j: [
      { r: "SEO Specialist", co: "VisibilityFirst", p: "Jan 2021 - Present", b: ["Increased organic traffic by 300% for SaaS client within 12 months", "Conducted technical SEO audits for 20+ websites, identifying and fixing 500+ issues", "Built high-quality backlinks from 50+ authoritative domains, improving domain authority by 25 points"] },
      { r: "Junior SEO Analyst", co: "MarketGrow", p: "Jun 2019 - Dec 2020", b: ["Performed keyword research identifying 200+ high-opportunity terms", "Optimized on-page elements for 100+ pages, improving average CTR by 18%", "Monitored rankings and traffic, providing monthly reports to stakeholders"] }
    ],
    ed: { d: "B.S. Marketing", s: "University of Washington", p: "2015 - 2019" },
    sl: ["Technical: Site Structure, Crawl Optimization, Schema, Core Web Vitals", "Content: Keyword Strategy, Topic Clusters, Content Gap Analysis", "Off-Page: Link Building, Digital PR, Outreach", "Tools: Ahrefs, SEMrush, Google Search Console, Screaming Frog"],
    t: ["Quantify traffic and ranking improvements", "Highlight technical SEO expertise", "Showcase link building successes and strategies", "Include before/after performance metrics", "List specific SEO tools and certifications"]
  }),
  r({
    slug: "email-marketing-specialist", title: "Email Marketing Specialist", industry: "Marketing", level: "Mid",
    summary: "An email marketing specialist driving engagement and conversions through data-driven campaigns.",
    skills: ["Email Marketing", "Mailchimp", "HubSpot", "A/B Testing", "Campaign Automation", "Segmentation", "HTML/CSS", "Analytics", "CRM", "Copywriting"],
    n: "Julia Park", e: "julia.park@email.com", ct: "Boston", st: "MA", li: "linkedin.com/in/juliapark",
    stxt: "Email marketing specialist with 4+ years of experience crafting high-performing campaigns. Expertise in automation, segmentation, and A/B testing. Consistently delivered above-industry-average open and click-through rates.",
    j: [
      { r: "Email Marketing Specialist", co: "GrowthHackers", p: "Mar 2021 - Present", b: ["Managed email campaigns reaching 500K+ subscribers with 28% average open rate", "Built automated nurture sequences that increased lead conversion by 45%", "Executed A/B tests on subject lines, CTAs, and designs, improving CTR by 22%"] },
      { r: "Marketing Coordinator", co: "BrandCo", p: "Jun 2019 - Feb 2021", b: ["Created and scheduled weekly newsletters for 50K+ subscriber base", "Segmented audiences based on behavior, increasing click rates by 30%", "Analyzed campaign performance and provided actionable optimization recommendations"] }
    ],
    ed: { d: "B.A. Marketing", s: "Boston University", p: "2015 - 2019" },
    sl: ["Platforms: Mailchimp, HubSpot, Klaviyo, Constant Contact", "Strategy: Automation, Segmentation, Drip Campaigns, Personalization", "Analytics: A/B Testing, ROI Analysis, Funnel Analysis", "Creative: Email Design, Copywriting, HTML Templates"],
    t: ["Quantify email performance metrics (open rate, CTR, conversion)", "Highlight automation and nurture sequence expertise", "Showcase A/B testing methodology and results", "Mention list growth and segmentation strategies", "Include email design and template skills"]
  }),
  r({
    slug: "pr-manager", title: "Public Relations Manager", industry: "Marketing", level: "Mid",
    summary: "A PR manager skilled in media relations, crisis communication, and building positive brand narratives.",
    skills: ["Media Relations", "Press Releases", "Crisis Communication", "Storytelling", "Media Monitoring", "Event Planning", "Brand Reputation", "Writing", "Social Media", "Spokesperson Training"],
    n: "Katherine Wells", e: "katherine.wells@email.com", ct: "Washington", st: "DC", li: "linkedin.com/in/katherinewells",
    stxt: "PR manager with 6+ years of experience securing media coverage and managing brand reputation. Skilled in crafting compelling narratives, building media relationships, and navigating crisis situations. Secured coverage in top-tier outlets including NYT, WSJ, and TechCrunch.",
    j: [
      { r: "PR Manager", co: "CommCore", p: "Jan 2021 - Present", b: ["Secured 200+ media placements annually across top-tier publications", "Managed crisis communication for product recall, maintaining positive brand sentiment", "Developed and executed PR strategy supporting 3 major product launches"] },
      { r: "PR Specialist", co: "PublicRelations Inc", p: "Jun 2018 - Dec 2020", b: ["Pitched stories resulting in 100+ earned media placements per year", "Prepared press materials and coached executives for media interviews", "Organized press events and product briefings for 50+ journalists"] }
    ],
    ed: { d: "B.A. Public Relations", s: "George Washington University", p: "2014 - 2018" },
    sl: ["Media: Press Releases, Media Lists, Pitches, Press Kits", "Tools: Cision, Muck Rack, Meltwater, CoverageBook", "Skills: Crisis Communication, Spokesperson Training, Storytelling", "Relationships: National, Trade, and Local Media"],
    t: ["Quantify media placements and reach", "Highlight crisis communication experience", "Include specific top-tier publications secured", "Showcase event planning and press conference management", "Mention spokesperson training experience"]
  }),
  r({
    slug: "brand-manager", title: "Brand Manager", industry: "Marketing", level: "Mid",
    summary: "A brand manager driving brand strategy, positioning, and growth across consumer markets.",
    skills: ["Brand Strategy", "Brand Positioning", "Market Research", "Campaign Management", "Consumer Insights", "Product Launch", "Budget Management", "Cross-functional Leadership", "Analytics", "Creative Development"],
    n: "Tyler Brooks", e: "tyler.brooks@email.com", ct: "Chicago", st: "IL", li: "linkedin.com/in/tylerbrooks",
    stxt: "Brand manager with 5+ years of experience building and growing consumer brands. Expertise in brand strategy, positioning, and integrated marketing campaigns. Successfully launched 10+ products and repositioned established brands for new audiences.",
    j: [
      { r: "Brand Manager", co: "ConsumerGoods Co", p: "Mar 2021 - Present", b: ["Led brand strategy for $50M product portfolio, achieving 15% YoY growth", "Launched 3 new product lines generating $12M in first-year revenue", "Repositioned heritage brand, increasing millennial market share by 25%"] },
      { r: "Assistant Brand Manager", co: "BrandCorp", p: "Jun 2019 - Feb 2021", b: ["Supported brand planning and execution for 4 product categories", "Conducted consumer research that informed product innovation pipeline", "Managed $5M marketing budget across digital, print, and in-store channels"] }
    ],
    ed: { d: "MBA Marketing", s: "Northwestern University", p: "2017 - 2019", x: "B.A. Economics | University of Michigan | 2013 - 2017" },
    sl: ["Strategy: Brand Positioning, Architecture, Portfolio Management", "Research: Consumer Insights, Competitive Analysis, Segmentation", "Marketing: Campaign Strategy, Media Planning, Creative Development", "Analytics: Brand Tracking, ROI Analysis, Market Share"],
    t: ["Quantify brand growth and market share metrics", "Highlight product launch and repositioning successes", "Showcase consumer research and insight application", "Mention budget management and P&L responsibility", "Include cross-functional leadership experience"]
  }),
  r({
    slug: "account-executive", title: "Account Executive", industry: "Sales", level: "Mid",
    summary: "A results-driven account executive consistently exceeding quotas in B2B SaaS sales.",
    skills: ["B2B Sales", "Enterprise Sales", "SaaS", "Salesforce", "Lead Generation", "Demos", "Negotiation", "Closing", "MEDDIC", "Forecasting"],
    n: "Brandon Hayes", e: "brandon.hayes@email.com", ct: "San Diego", st: "CA", li: "linkedin.com/in/brandonhayes",
    stxt: "Account executive with 5+ years of experience in B2B SaaS sales. Proven track record of exceeding quotas and closing enterprise deals. Skilled in consultative selling, pipeline management, and executive relationship building.",
    j: [
      { r: "Account Executive", co: "CloudSoftware Inc", p: "Jan 2021 - Present", b: ["Exceeded $2M annual quota by 130% in FY2023", "Closed 15 enterprise deals with average ACV of $150K", "Built pipeline of $5M through outbound prospecting and partner relationships"] },
      { r: "SDR turned AE", co: "GrowthTech", p: "Jun 2019 - Dec 2020", b: ["Promoted from SDR to AE within 18 months", "Consistently achieved 120%+ of monthly quota", "Managed 50+ enterprise accounts, growing revenue by 40% through expansion"] }
    ],
    ed: { d: "B.A. Business Administration", s: "San Diego State University", p: "2015 - 2019" },
    sl: ["Sales: B2B, Enterprise, SaaS, Solution Selling", "Methodology: MEDDIC, Challenger, SPIN", "Tools: Salesforce, Outreach, ZoomInfo, Gong", "Skills: Prospecting, Demos, Negotiation, Closing"],
    t: ["Quantify quota achievement and deal sizes", "Highlight specific sales methodology expertise", "Showcase both hunting and farming success", "Include promotion history and career progression", "Mention executive-level relationship building"]
  }),
  r({
    slug: "customer-success-manager", title: "Customer Success Manager", industry: "Sales", level: "Mid",
    summary: "A customer success manager driving retention, expansions, and advocacy through strategic account management.",
    skills: ["Customer Success", "Account Management", "Retention", "Upselling", "SaaS", "CRM", "Data Analysis", "Onboarding", "Customer Health", "QBR"],
    n: "Samantha Cruz", e: "samantha.cruz@email.com", ct: "Austin", st: "TX", li: "linkedin.com/in/samanthacruz",
    stxt: "Customer success manager with 4+ years of experience driving retention and growth for SaaS companies. Skilled in onboarding, health scoring, and strategic account planning. Achieved 95%+ retention rates across managed portfolios.",
    j: [
      { r: "Customer Success Manager", co: "SaaSPlatform", p: "Mar 2021 - Present", b: ["Managed 50+ enterprise accounts with 97% annual retention rate", "Grew portfolio revenue by 35% through upsells and expansions", "Implemented health scoring system reducing churn risk identification from 30 to 7 days"] },
      { r: "Onboarding Specialist", co: "TechStartup", p: "Jun 2019 - Feb 2021", b: ["Led onboarding for 200+ new customers, achieving 90% activation within 30 days", "Created knowledge base and training materials reducing support tickets by 40%", "Gathered product feedback leading to 15 feature improvements"] }
    ],
    ed: { d: "B.A. Communications", s: "University of Texas", p: "2015 - 2019" },
    sl: ["CS: Onboarding, Adoption, Health Scoring, QBRs, Advocacy", "Tools: Gainsight, Totango, Salesforce, Intercom", "Skills: Relationship Building, Data Analysis, Strategic Planning", "Metrics: NRR, Churn, NPS, Time-to-Value"],
    t: ["Quantify retention and expansion metrics", "Highlight health scoring and churn prevention", "Showcase onboarding and time-to-value improvements", "Include NPS and customer satisfaction data", "Demonstrate cross-functional collaboration with sales and product"]
  }),
  r({
    slug: "business-development-rep", title: "Business Development Representative", industry: "Sales", level: "Entry",
    summary: "An energetic BDR generating qualified leads and building pipeline through strategic outbound prospecting.",
    skills: ["Lead Generation", "Cold Calling", "Email Outreach", "Salesforce", "LinkedIn Sales Nav", "Prospecting", "Qualification", "Time Management", "Resilience", "Communication"],
    n: "Jordan Lee", e: "jordan.lee@email.com", ct: "Phoenix", st: "AZ", li: "linkedin.com/in/jordanlee",
    stxt: "Business development representative with 2+ years of experience generating pipeline for B2B SaaS companies. Top performer in outbound prospecting with consistent meeting-setting records. Eager to grow into a closing role.",
    j: [
      { r: "BDR", co: "TechSales Inc", p: "Jan 2023 - Present", b: ["Generated 200+ qualified leads per quarter, exceeding pipeline targets by 40%", "Booked 25+ meetings monthly for account executives, highest on team of 12", "Achieved 100% of quota for 6 consecutive months"] },
      { r: "Sales Intern", co: "StartupHub", p: "Jun 2022 - Dec 2022", b: ["Researched and prospected 500+ accounts using LinkedIn Sales Navigator", "Supported AEs with CRM data entry and lead enrichment", "Contributed to team exceeding quarterly pipeline goal by 20%"] }
    ],
    ed: { d: "B.A. Marketing", s: "Arizona State University", p: "2020 - 2022" },
    sl: ["Prospecting: Cold Calling, Email, LinkedIn, Social Selling", "Tools: Salesforce, Outreach, LinkedIn Sales Navigator, ZoomInfo", "Skills: Qualification, Active Listening, objection Handling, Time Management"],
    t: ["Quantify pipeline generation and meeting setting metrics", "Highlight activity metrics (calls, emails, accounts researched)", "Showcase promotion readiness and career ambition", "Include CRM proficiency and tech stack experience", "Emphasize resilience and coachability"]
  }),
  r({
    slug: "account-manager", title: "Account Manager", industry: "Sales", level: "Mid",
    summary: "An account manager building lasting client relationships and driving revenue growth through strategic account management.",
    skills: ["Account Management", "Client Relations", "Upselling", "Cross-selling", "Salesforce", "Contract Negotiation", "Revenue Growth", "Strategic Planning", "Presentation", "Problem Solving"],
    n: "Rebecca Torres", e: "rebecca.torres@email.com", ct: "Dallas", st: "TX", li: "linkedin.com/in/rebeccatorres",
    stxt: "Account manager with 5+ years of experience managing key accounts and driving revenue growth. Proven ability to build strong client relationships, identify expansion opportunities, and consistently exceed retention and growth targets.",
    j: [
      { r: "Senior Account Manager", co: "EnterpriseSoft", p: "Mar 2021 - Present", b: ["Managed portfolio of 20 key accounts worth $8M annual recurring revenue", "Grew account revenue by 45% through upsells and cross-sells", "Achieved 98% retention rate and 90+ NPS score across managed accounts"] },
      { r: "Account Manager", co: "BusinessServices Co", p: "Jun 2019 - Feb 2021", b: ["Managed 50+ accounts generating $3M annual revenue", "Renewed 95% of expiring contracts, exceeding retention targets", "Identified cross-sell opportunities resulting in $500K incremental revenue"] }
    ],
    ed: { d: "B.A. Business Administration", s: "Southern Methodist University", p: "2015 - 2019" },
    sl: ["Account Management: Strategic Planning, Relationship Building, Retention", "Growth: Upselling, Cross-selling, Contract Expansion", "Tools: Salesforce, Gainsight, Tableau", "Skills: Negotiation, Executive Presence, Problem Solving"],
    t: ["Quantify portfolio revenue and growth metrics", "Highlight retention and NPS achievements", "Showcase strategic account planning approach", "Include specific upsell and cross-sell examples", "Demonstrate executive relationship management"]
  }),
  r({
    slug: "investment-banker", title: "Investment Banker", industry: "Finance", level: "Mid",
    summary: "An investment banker executing M&A transactions, financings, and strategic advisory for corporate clients.",
    skills: ["Financial Modeling", "Valuation", "M&A", "DCF", "LBO", "Pitch Books", "Due Diligence", "Excel", "PowerPoint", "Bloomberg"],
    n: "Jonathan Park", e: "jonathan.park@email.com", ct: "New York", st: "NY", li: "linkedin.com/in/jonathanpark",
    stxt: "Investment banker with 4+ years of experience executing M&A and financing transactions at a bulge bracket bank. Expertise in financial modeling, valuation, and deal execution. Advised on transactions totaling $5B+ in value.",
    j: [
      { r: "Analyst", co: "Goldman Sachs", p: "Jul 2021 - Present", b: ["Executed 8 M&A transactions valued at $3B+ across technology and healthcare sectors", "Built complex financial models including DCF, LBO, and accretion/dilution analysis", "Created pitch books and marketing materials for 30+ client presentations"] },
      { r: "Summer Analyst", co: "Morgan Stanley", p: "Jun 2020 - Aug 2020", b: ["Supported senior bankers on 3 live M&A transactions totaling $1.5B", "Conducted industry and company research for business development efforts", "Assisted in due diligence processes for cross-border acquisitions"] }
    ],
    ed: { d: "B.S. Finance", s: "University of Pennsylvania (Wharton)", p: "2017 - 2021" },
    sl: ["Modeling: DCF, LBO, Merger Model, Comps, Accretion/Dilution", "Transactions: M&A, Debt Financing, Equity Offerings, Restructuring", "Tools: Excel, Bloomberg, Capital IQ, FactSet", "Coverage: Technology, Healthcare, Consumer"],
    t: ["Quantify transaction values and deal count", "Highlight specific modeling expertise", "Showcase sector coverage and specialization", "Include education pedigree and relevant certifications", "Mention Series 79/63 licenses if applicable"]
  }),
  r({
    slug: "bookkeeper", title: "Bookkeeper", industry: "Finance", level: "Mid",
    summary: "A meticulous bookkeeper managing financial records, reconciliations, and accounts for small to mid-sized businesses.",
    skills: ["QuickBooks", "Accounts Payable", "Accounts Receivable", "Bank Reconciliation", "Payroll", "Excel", "Financial Statements", "Data Entry", "Xero", "Attention to Detail"],
    n: "Martha Stewart", e: "martha.stewart@email.com", ct: "Charlotte", st: "NC", li: "linkedin.com/in/marthastewart",
    stxt: "Bookkeeper with 6+ years of experience managing full-cycle accounting for service-based businesses. Proficient in QuickBooks and Xero. Known for accuracy, reliability, and maintaining clean financial records for tax-ready reporting.",
    j: [
      { r: "Bookkeeper", co: "SmallBiz Accounting", p: "Jan 2021 - Present", b: ["Managed books for 30+ clients across various industries", "Reduced month-end close time from 10 to 3 days through process standardization", "Reconciled 100+ bank and credit card accounts monthly with 100% accuracy"] },
      { r: "Accounting Clerk", co: "Financial Services Inc", p: "Jun 2018 - Dec 2020", b: ["Processed 500+ invoices and payments monthly via AP/AR systems", "Maintained general ledger and prepared monthly financial reports", "Assisted with payroll processing for 200+ employees"] }
    ],
    ed: { d: "A.S. Accounting", s: "Central Piedmont Community College", p: "2016 - 2018" },
    sl: ["Software: QuickBooks Online/Desktop, Xero, Wave", "Skills: AP/AR, Bank Reconciliation, Payroll, Journal Entries", "Reports: P&L, Balance Sheet, Cash Flow, Trial Balance", "Tools: Excel, Google Sheets, Dext, Hubdoc"],
    t: ["Highlight software proficiency (QuickBooks, Xero)", "Quantify accuracy and efficiency improvements", "Showcase client volume and diversity", "Include payroll and tax preparation support experience", "Emphasize attention to detail and organizational skills"]
  }),
  r({
    slug: "tax-accountant", title: "Tax Accountant", industry: "Finance", level: "Mid",
    summary: "A tax accountant specializing in corporate and individual tax preparation, planning, and compliance.",
    skills: ["Tax Preparation", "Corporate Tax", "Individual Tax", "Tax Planning", "IRS Compliance", "CPA", "Tax Research", "QuickBooks", "Excel", "UltraTax"],
    n: "Derek Williams", e: "derek.williams@email.com", ct: "Cleveland", st: "OH", li: "linkedin.com/in/derekwilliams",
    stxt: "Tax accountant with 5+ years of experience preparing and reviewing tax returns for individuals and corporations. CPA with deep knowledge of federal and state tax codes. Focused on minimizing tax liability while ensuring full compliance.",
    j: [
      { r: "Senior Tax Accountant", co: "TaxAdvisors LLP", p: "Jan 2021 - Present", b: ["Prepared and reviewed 200+ corporate and individual tax returns annually", "Identified tax savings opportunities totaling $500K+ for clients through strategic planning", "Led tax research on complex multi-state and international tax issues"] },
      { r: "Tax Associate", co: "AccountingFirm", p: "Jun 2019 - Dec 2020", b: ["Prepared 150+ individual and business tax returns using UltraTax", "Assisted with IRS audit representation for 10+ clients", "Reconciled tax accounts and prepared adjusting journal entries"] }
    ],
    ed: { d: "CPA License", s: "Ohio State Board of Accountancy", p: "2020", x: "M.S. Taxation | University of Cincinnati | 2013 - 2015" },
    sl: ["Tax: Corporate, Partnership, Individual, Estate & Trust", "Compliance: Federal, State, Multi-State, International", "Software: UltraTax, QuickBooks, ProSystem fx", "Research: RIA Checkpoint, CCH IntelliConnect"],
    t: ["Include CPA license and EA certification", "Quantify returns prepared and savings achieved", "Highlight specific tax areas of expertise", "Showcase audit representation experience", "Mention tax research and planning capabilities"]
  }),
  r({
    slug: "auditor", title: "Auditor", industry: "Finance", level: "Mid",
    summary: "An auditor ensuring financial accuracy and regulatory compliance through systematic examination of records.",
    skills: ["Auditing", "GAAP", "IFRS", "Financial Analysis", "Risk Assessment", "Internal Controls", "SOX", "Excel", "Data Analytics", "CPA"],
    n: "Christina Lee", e: "christina.lee@email.com", ct: "Chicago", st: "IL", li: "linkedin.com/in/christinalee",
    stxt: "Auditor with 5+ years of experience conducting financial and operational audits. CPA with expertise in SOX compliance, internal controls, and risk assessment. Delivered actionable audit findings that improved client processes and controls.",
    j: [
      { r: "Senior Auditor", co: "BigFour LLP", p: "Jan 2021 - Present", b: ["Led audit engagements for 8 publicly traded clients with revenues up to $5B", "Identified $2M+ in control deficiencies and recommended remediation plans", "Reduced audit completion time by 20% through data analytics and process automation"] },
      { r: "Audit Associate", co: "RegionalFirm", p: "Jun 2019 - Dec 2020", b: ["Performed substantive testing and walkthroughs for 15+ audit clients", "Prepared financial statements and audit workpapers in compliance with GAAS", "Assisted in SOX compliance testing for internal controls over financial reporting"] }
    ],
    ed: { d: "CPA License", s: "Illinois State Board", p: "2021", x: "B.S. Accounting | University of Illinois | 2015 - 2019" },
    sl: ["Standards: GAAP, IFRS, GAAS, SOX", "Audit: Financial, Operational, Compliance, Internal Controls", "Tools: Excel, ACL, IDEA, Tableau", "Skills: Risk Assessment, Data Analysis, Report Writing"],
    t: ["Include CPA license and certifications (CIA, CISA)", "Quantify audit scope and efficiency improvements", "Highlight industry exposure and client types", "Showcase data analytics and technology skills", "Mention SOX and internal controls expertise"]
  }),
  r({
    slug: "financial-planner", title: "Financial Planner", industry: "Finance", level: "Mid",
    summary: "A CFP-certified financial planner helping clients achieve their financial goals through comprehensive planning.",
    skills: ["Financial Planning", "Retirement Planning", "Investment Management", "Estate Planning", "Tax Planning", "Risk Management", "CFP", "Client Advisory", "Wealth Management", "Insurance"],
    n: "Michael Torres", e: "michael.torres@email.com", ct: "San Antonio", st: "TX", li: "linkedin.com/in/michaeltorres",
    stxt: "Financial planner with 6+ years of experience providing comprehensive financial advice. CFP certified with expertise in retirement planning, investment management, and tax-efficient strategies. Managed $50M+ in client assets.",
    j: [
      { r: "Financial Planner", co: "WealthAdvisors Group", p: "Mar 2021 - Present", b: ["Advised 80+ high-net-worth clients with combined $50M in assets under management", "Developed comprehensive financial plans addressing retirement, education, and estate needs", "Grew client portfolio by 30% through referrals and relationship-based business development"] },
      { r: "Associate Planner", co: "FinancialServices Inc", p: "Jun 2018 - Feb 2021", b: ["Supported lead advisors in preparing financial plans for 100+ clients", "Conducted investment research and portfolio performance analysis", "Assisted in client meetings and maintained CRM records"] }
    ],
    ed: { d: "CFP Certification", s: "Certified Financial Planner Board", p: "2020", x: "B.S. Finance | Texas A&M | 2014 - 2018" },
    sl: ["Planning: Retirement, Estate, Tax, Education, Insurance", "Investments: Asset Allocation, Portfolio Management, Rebalancing", "Software: MoneyGuidePro, eMoney, Morningstar, Salesforce", "Certifications: CFP, Series 7, Series 66"],
    t: ["Include CFP certification and licenses", "Quantify AUM and client portfolio metrics", "Highlight comprehensive planning approach", "Showcase investment management philosophy", "Demonstrate client relationship and referral skills"]
  }),
  r({
    slug: "doctor-physician", title: "Physician", industry: "Healthcare", level: "Senior",
    summary: "A board-certified physician dedicated to providing exceptional patient care across diverse clinical settings.",
    skills: ["Diagnosis", "Treatment", "Patient Care", "EMR/EHR", "Surgery", "Clinical Research", "Team Leadership", "Medical Education", "Board Certified", "Prescribing"],
    n: "Dr. Elizabeth Harper", e: "elizabeth.harper@email.com", ct: "Boston", st: "MA", li: "linkedin.com/in/elizabethharper",
    stxt: "Board-certified internal medicine physician with 12+ years of clinical experience. Skilled in diagnosis, treatment, and preventive care. Published researcher with a focus on chronic disease management. Dedicated to patient-centered care and medical education.",
    j: [
      { r: "Attending Physician", co: "Massachusetts General Hospital", p: "Jul 2014 - Present", b: ["Provide comprehensive care to 2,000+ patients annually in outpatient internal medicine practice", "Supervise and train 15+ residents and medical students annually", "Led quality improvement initiative reducing hospital readmission rates by 25%"] },
      { r: "Resident Physician", co: "Beth Israel Deaconess Medical Center", p: "Jul 2011 - Jun 2014", b: ["Managed care for patients in internal medicine residency program", "Rotated through ICU, ER, and specialty clinics gaining broad clinical experience", "Conducted research on diabetes management published in Journal of General Internal Medicine"] }
    ],
    ed: { d: "M.D.", s: "Harvard Medical School", p: "2007 - 2011", x: "B.S. Biology | MIT | 2003 - 2007" },
    sl: ["Clinical: Internal Medicine, Chronic Disease Management, Preventive Care", "Procedures: Joint Aspiration, Central Line, Lumbar Puncture", "Research: Clinical Trials, Data Analysis, Peer-Reviewed Publications", "Certifications: Board Certified Internal Medicine, ACLS, BLS"],
    t: ["Include board certifications and licenses", "Quantify patient volume and clinical outcomes", "Highlight research publications and presentations", "Showcase teaching and mentoring experience", "Mention quality improvement and leadership initiatives"]
  }),
  r({
    slug: "medical-assistant", title: "Medical Assistant", industry: "Healthcare", level: "Entry",
    summary: "A certified medical assistant providing clinical and administrative support in fast-paced healthcare settings.",
    skills: ["Clinical Skills", "Vitals", "EMR/EHR", "Phlebotomy", "Injections", "Patient Check-in", "Scheduling", "Insurance Verification", "CPR", "Sterilization"],
    n: "Ashley Johnson", e: "ashley.johnson@email.com", ct: "Tampa", st: "FL", li: "linkedin.com/in/ashleyjohnson",
    stxt: "Certified Medical Assistant with 2+ years of experience in primary care settings. Skilled in patient preparation, clinical procedures, and administrative tasks. Compassionate and detail-oriented with strong communication skills.",
    j: [
      { r: "Medical Assistant", co: "Family Health Center", p: "Jan 2023 - Present", b: ["Assisted physicians with 30+ patient appointments daily, taking vitals and recording histories", "Performed phlebotomy, EKGs, and administered vaccinations to 100+ patients weekly", "Managed clinical supply inventory, reducing stockouts by 50%"] },
      { r: "Medical Assistant Intern", co: "Community Clinic", p: "Jun 2022 - Dec 2022", b: ["Roomed patients and obtained medical histories for 20+ patients per shift", "Sterilized instruments and prepared examination rooms", "Assisted with front desk duties including check-in and insurance verification"] }
    ],
    ed: { d: "Certified Medical Assistant (CMA)", s: "National Healthcareer Association", p: "2022", x: "A.S. Medical Assisting | Hillsborough Community College | 2020 - 2022" },
    sl: ["Clinical: Vitals, Phlebotomy, EKG, Injections, Wound Care", "Administrative: Scheduling, EMR, Insurance Verification, Billing", "Certifications: CMA, BLS/CPR", "Soft Skills: Communication, Empathy, Organization, Teamwork"],
    t: ["Include CMA certification clearly", "Quantify patient volume and procedures performed", "Highlight both clinical and administrative skills", "Showcase EMR/EHR proficiency", "Emphasize compassion and patient interaction"]
  }),
  r({
    slug: "dental-assistant", title: "Dental Assistant", industry: "Healthcare", level: "Entry",
    summary: "A skilled dental assistant supporting dentists in providing quality oral care through clinical and administrative tasks.",
    skills: ["Dental Procedures", "Sterilization", "X-rays", "Patient Care", "Charting", "Infection Control", "Dental Software", "Impressions", "Chairside Assisting", "Scheduling"],
    n: "Vanessa Garcia", e: "vanessa.garcia@email.com", ct: "Phoenix", st: "AZ", li: "linkedin.com/in/vanessagarcia",
    stxt: "Dental assistant with 2+ years of experience in general and cosmetic dentistry. Proficient in chairside assisting, sterilization, and digital radiography. Committed to patient comfort and clinical excellence.",
    j: [
      { r: "Dental Assistant", co: "SmileBright Dental", p: "Mar 2023 - Present", b: ["Assisted dentist in 20+ procedures daily, including fillings, crowns, root canals, and extractions", "Captured digital X-rays and intraoral scans for 100+ patients monthly", "Sterilized instruments and maintained infection control standards, 100% compliance on audits"] },
      { r: "Dental Assistant Trainee", co: "Community Dental Clinic", p: "Jul 2022 - Feb 2023", b: ["Prepared treatment rooms and assisted with basic dental procedures", "Educated patients on post-operative care and oral hygiene", "Managed appointment scheduling and insurance verification"] }
    ],
    ed: { d: "Dental Assistant Certificate", s: "Phoenix College", p: "2022" },
    sl: ["Clinical: Chairside Assisting, X-rays, Impressions, Sealants", "Sterilization: Autoclave, Disinfection, OSHA Standards", "Software: Dentrix, Eaglesoft, Open Dental", "Certifications: Radiology, CPR, Infection Control"],
    t: ["Include certifications (Radiology, CPR, Infection Control)", "Quantify procedures assisted and patients served", "Highlight specific dental software experience", "Showcase infection control and sterilization knowledge", "Emphasize patient care and communication skills"]
  }),
  r({
    slug: "physical-therapist", title: "Physical Therapist", industry: "Healthcare", level: "Mid",
    summary: "A physical therapist helping patients recover mobility and improve quality of life through evidence-based treatment.",
    skills: ["Patient Assessment", "Treatment Planning", "Manual Therapy", "Therapeutic Exercise", "Orthopedics", "Sports Medicine", "Neurological Rehab", "EMR", "Patient Education", "Rehabilitation"],
    n: "Dr. Ryan Murphy", e: "ryan.murphy@email.com", ct: "Seattle", st: "WA", li: "linkedin.com/in/ryanmurphy",
    stxt: "Physical therapist with 5+ years of experience treating orthopedic and sports-related injuries. DPT with expertise in manual therapy and exercise prescription. Dedicated to helping patients achieve optimal function and return to activity.",
    j: [
      { r: "Physical Therapist", co: "ProMove Rehab", p: "Feb 2021 - Present", b: ["Evaluated and treated 80+ patients per week in outpatient orthopedic clinic", "Achieved 90%+ patient satisfaction scores and 85% functional improvement rate", "Developed return-to-sport protocols for post-surgical athletes"] },
      { r: "Staff Physical Therapist", co: "RehabCare", p: "Jul 2019 - Jan 2021", b: ["Managed caseload of 60+ patients weekly across ortho and neuro populations", "Implemented manual therapy techniques reducing patient recovery time by 20%", "Created home exercise programs improving patient compliance by 35%"] }
    ],
    ed: { d: "DPT (Doctor of Physical Therapy)", s: "University of Washington", p: "2016 - 2019", x: "B.S. Kinesiology | 2012 - 2016" },
    sl: ["Treatment: Manual Therapy, Therapeutic Exercise, Modalities (US, E-stim, Iontophoresis)", "Specialties: Orthopedics, Sports Medicine, Post-Surgical Rehab", "Tools: EMR (EPIC, WebPT), Gait Analysis, Functional Testing", "Certifications: DPT, OCS, CSCS"],
    t: ["Include DPT degree and state license", "Quantify patient volume and outcomes", "Highlight manual therapy and specialization", "Showcase sports rehab and return-to-sport protocols", "Mention continuing education and certifications"]
  }),
  r({
    slug: "pharmacist", title: "Pharmacist", industry: "Healthcare", level: "Mid",
    summary: "A licensed pharmacist ensuring safe medication use through clinical expertise and patient counseling.",
    skills: ["Prescription Dispensing", "Medication Therapy Management", "Patient Counseling", "Immunizations", "Drug Interactions", "Pharmacy Systems", "Inventory Management", "Regulatory Compliance", "Clinical Review", "PharmD"],
    n: "Hannah Kim", e: "hannah.kim@email.com", ct: "Los Angeles", st: "CA", li: "linkedin.com/in/hannahkim",
    stxt: "Pharmacist with 5+ years of experience in retail and clinical settings. PharmD with expertise in medication therapy management, immunizations, and patient education. Committed to improving patient outcomes through safe and effective medication use.",
    j: [
      { r: "Clinical Pharmacist", co: "HealthFirst Pharmacy", p: "Mar 2021 - Present", b: ["Verified and dispensed 200+ prescriptions daily with 100% accuracy", "Provided MTM services for 100+ patients, identifying and resolving 300+ drug therapy problems", "Administered 1,000+ vaccinations annually, expanding clinic immunization services"] },
      { r: "Staff Pharmacist", co: "MediCare Pharmacy", p: "Jul 2019 - Feb 2021", b: ["Managed daily pharmacy operations and supervised 4 pharmacy technicians", "Counseled 50+ patients daily on medication usage and side effects", "Reduced medication errors by 30% through improved verification workflow"] }
    ],
    ed: { d: "PharmD", s: "University of Southern California", p: "2015 - 2019" },
    sl: ["Clinical: Drug Utilization Review, MTM, Immunizations, Health Screenings", "Systems: PioneerRx, QS/1, Epic Willow", "Compliance: HIPAA, DEA, State Board Regulations", "Certifications: RPh, Immunization, MTM"],
    t: ["Include PharmD degree and state license", "Quantify prescriptions and clinical interventions", "Highlight immunization and MTM services", "Showcase inventory management and operational skills", "Mention specific pharmacy systems used"]
  }),
  r({
    slug: "veterinarian", title: "Veterinarian", industry: "Healthcare", level: "Mid",
    summary: "A compassionate veterinarian providing medical care to companion animals and promoting pet wellness.",
    skills: ["Diagnosis", "Surgery", "Vaccinations", "Dentistry", "Radiology", "Anesthesia", "Animal Care", "Lab Analysis", "Client Education", "EMR"],
    n: "Dr. Sarah Mitchell", e: "sarah.mitchell@email.com", ct: "Portland", st: "OR", li: "linkedin.com/in/sarahmitchell",
    stxt: "Veterinarian with 5+ years of experience in small animal practice. DVM skilled in surgery, dentistry, and preventive care. Passionate about strengthening the human-animal bond through quality veterinary medicine.",
    j: [
      { r: "Associate Veterinarian", co: "Happy Paws Veterinary", p: "Jan 2021 - Present", b: ["Examine and treat 15+ patients daily, performing routine and emergency procedures", "Perform soft tissue surgeries (spay/neuter, mass removals) averaging 8 surgeries weekly", "Improved preventive care compliance by 30% through client education initiatives"] },
      { r: "Veterinary Intern", co: "Animal Medical Center", p: "Jul 2019 - Dec 2020", b: ["Assisted senior veterinarians with examinations, surgeries, and treatments", "Managed hospitalized patient care and monitored anesthesia during procedures", "Conducted wellness exams and administered vaccinations for 20+ pets daily"] }
    ],
    ed: { d: "DVM", s: "Oregon State University College of Veterinary Medicine", p: "2015 - 2019", x: "B.S. Animal Science | 2011 - 2015" },
    sl: ["Medical: Diagnosis, Surgery, Dentistry, Radiology, Anesthesia", "Preventive: Vaccinations, Parasite Control, Nutrition Counseling", "Tools: AVImark, Cornerstone, Idexx Lab Systems", "Specialties: Small Animal Medicine, Soft Tissue Surgery, Shelter Medicine"],
    t: ["Include DVM degree and state license", "Quantify patient volume and procedures", "Highlight surgical experience and specialties", "Showcase client communication and education", "Mention continuing education and professional memberships"]
  }),
  r({
    slug: "professor", title: "Professor", industry: "Education", level: "Senior",
    summary: "A tenured professor with extensive teaching, research, and academic leadership experience.",
    skills: ["Teaching", "Research", "Curriculum Design", "Grant Writing", "Student Mentoring", "Peer Review", "Academic Leadership", "Data Analysis", "Public Speaking", "Published Author"],
    n: "Dr. Jonathan Pierce", e: "jonathan.pierce@email.com", ct: "Ann Arbor", st: "MI", li: "linkedin.com/in/jonathanpierce",
    stxt: "Professor of Computer Science with 15+ years of experience in teaching and research. Published 60+ peer-reviewed papers and secured $8M+ in research funding. Expertise in machine learning, computer vision, and natural language processing.",
    j: [
      { r: "Professor of Computer Science", co: "University of Michigan", p: "Sep 2010 - Present", b: ["Teach undergraduate and graduate courses in ML, AI, and algorithms to 200+ students annually", "Supervise 8 PhD students and 12 master's thesis projects", "Secured $5M in NSF and DARPA research grants for AI and computer vision projects"] },
      { r: "Associate Professor", co: "University of California, Berkeley", p: "Sep 2005 - Aug 2010", b: ["Developed and taught 4 new graduate-level courses in machine learning", "Published 25+ papers in top-tier conferences (NeurIPS, CVPR, ICML)", "Served on program committees for 15+ international conferences"] }
    ],
    ed: { d: "Ph.D. Computer Science", s: "Stanford University", p: "2000 - 2005", x: "M.S. Computer Science | MIT | 1998 - 2000" },
    sl: ["Teaching: Course Design, Lecturing, Assessment, Mentoring", "Research: ML, Computer Vision, NLP, AI Ethics", "Funding: NSF, NIH, DARPA, Industry Grants", "Service: Department Leadership, Conference Committees, Editorial Boards"],
    t: ["Quantify publications, citations, and grant funding", "Highlight teaching evaluations and course impact", "Include academic service and leadership roles", "Showcase student mentoring outcomes (graduate placements)", "Mention industry collaborations and technology transfer"]
  }),
  r({
    slug: "substitute-teacher", title: "Substitute Teacher", industry: "Education", level: "Entry",
    summary: "A reliable substitute teacher maintaining classroom continuity and fostering positive learning environments.",
    skills: ["Classroom Management", "Lesson Implementation", "Student Engagement", "Adaptability", "Communication", "Organization", "Behavior Management", "Basic Instruction", "K-12", "First Aid"],
    n: "Kaitlyn Brooks", e: "kaitlyn.brooks@email.com", ct: "Denver", st: "CO", li: "linkedin.com/in/kaitlynbrooks",
    stxt: "Substitute teacher with 2+ years of experience across K-12 classrooms. Skilled in classroom management, lesson delivery, and maintaining productive learning environments. Passionate about education and supporting student success.",
    j: [
      { r: "Substitute Teacher", co: "Denver Public Schools", p: "Aug 2022 - Present", b: ["Lead instruction for 30+ classes across grades K-12, maintaining curriculum continuity", "Managed classrooms of 25-35 students, implementing effective behavior management strategies", "Received 90%+ positive feedback from full-time teachers for lesson execution"] },
      { r: "Teaching Assistant", co: "AfterSchool Program", p: "Jun 2022 - Aug 2022", b: ["Assisted lead teacher in summer program with 50+ elementary students", "Tutored students in reading and math, helping 80% improve by one grade level", "Supervised recreational activities and ensured student safety"] }
    ],
    ed: { d: "B.A. English", s: "University of Colorado Denver", p: "2020 - 2022" },
    sl: ["Teaching: Lesson Plans, Classroom Management, Instruction", "Subjects: English, Math, Science, Social Studies", "Skills: Adaptability, Patience, Communication, Organization", "Certifications: Substitute Teaching License, CPR/First Aid"],
    t: ["Include substitute teaching license", "Highlight adaptability across grades and subjects", "Quantify classroom management success", "Showcase communication with staff and students", "Mention long-term assignments and reliability"]
  }),
  r({
    slug: "school-counselor", title: "School Counselor", industry: "Education", level: "Mid",
    summary: "A dedicated school counselor supporting students' academic, social, and emotional development.",
    skills: ["Student Counseling", "Academic Advising", "Career Guidance", "Crisis Intervention", "Mental Health", "College Counseling", "Group Therapy", "Assessment", "Parent Communication", "IEP/504"],
    n: "Amanda Foster", e: "amanda.foster@email.com", ct: "Raleigh", st: "NC", li: "linkedin.com/in/amandafoster",
    stxt: "School counselor with 5+ years of experience supporting K-12 students. Skilled in academic advising, mental health support, and college/career counseling. Committed to creating inclusive environments where all students can thrive.",
    j: [
      { r: "School Counselor", co: "Wake County Public Schools", p: "Aug 2020 - Present", b: ["Provide individual and group counseling to 300+ students annually", "Developed college readiness program increasing 4-year college enrollment by 40%", "Implemented SEL curriculum reaching 1,000+ students, reducing disciplinary referrals by 25%"] },
      { r: "Graduate Intern", co: "Durham Middle School", p: "Jan 2020 - May 2020", b: ["Co-facilitated social skills groups for 20+ students", "Assisted with crisis intervention and student risk assessments", "Supported college and career exploration activities for 8th graders"] }
    ],
    ed: { d: "M.Ed. School Counseling", s: "North Carolina State University", p: "2018 - 2020", x: "B.A. Psychology | 2014 - 2018" },
    sl: ["Counseling: Individual, Group, Crisis Intervention, Mental Health", "Guidance: Academic Planning, Career Exploration, College Admissions", "Tools: Naviance, PowerSchool, Infinite Campus", "Certifications: School Counseling License, NCC, LPC"],
    t: ["Include state school counseling license", "Quantify student impact and program outcomes", "Highlight SEL and mental health expertise", "Showcase college and career readiness programs", "Mention crisis intervention and risk assessment"]
  }),
  r({
    slug: "civil-engineer", title: "Civil Engineer", industry: "Engineering", level: "Mid",
    summary: "A civil engineer designing infrastructure projects with a focus on sustainability and community impact.",
    skills: ["AutoCAD", "Civil 3D", "Structural Analysis", "Project Management", "Site Design", "Stormwater Management", "GIS", "Surveying", "Cost Estimation", "PE License"],
    n: "Brian Gallagher", e: "brian.gallagher@email.com", ct: "Minneapolis", st: "MN", li: "linkedin.com/in/briangallagher",
    stxt: "Civil engineer with 6+ years of experience in site development and infrastructure projects. PE licensed with expertise in stormwater management, grading, and utility design. Managed projects from concept through construction.",
    j: [
      { r: "Civil Engineer", co: "Infrastructure Design Group", p: "Jan 2021 - Present", b: ["Designed site plans for 15+ commercial and residential projects valued at $200M+", "Engineered stormwater management systems reducing runoff by 30% for 5 large developments", "Managed $10M road improvement project delivered on time and under budget"] },
      { r: "Junior Civil Engineer", co: "City Engineering Dept", p: "Jun 2018 - Dec 2020", b: ["Prepared grading, utility, and erosion control plans for 20+ projects", "Conducted site visits and inspections to ensure construction compliance", "Assisted in bridge inspection and load rating analysis"] }
    ],
    ed: { d: "B.S. Civil Engineering", s: "University of Minnesota", p: "2014 - 2018", x: "PE License | Minnesota | 2021" },
    sl: ["Software: AutoCAD Civil 3D, MicroStation, HEC-HMS, HEC-RAS", "Design: Grading, Drainage, Utilities, Roadway", "Management: Project Management, Cost Estimating, Permitting", "Certifications: PE License, OSHA 30"],
    t: ["Include PE license and state", "Quantify project values and infrastructure scope", "Highlight software proficiencies", "Showcase stormwater and sustainability focus", "Mention regulatory and permitting experience"]
  }),
  r({
    slug: "electrical-engineer", title: "Electrical Engineer", industry: "Engineering", level: "Mid",
    summary: "An electrical engineer designing power systems, control systems, and electronic circuits for industrial applications.",
    skills: ["Circuit Design", "Power Systems", "PLC", "AutoCAD Electrical", "MATLAB", "SCADA", "Control Systems", "Electrical Codes", "Project Management", "EIT/PE"],
    n: "Jessica Tran", e: "jessica.tran@email.com", ct: "Houston", st: "TX", li: "linkedin.com/in/jessicatran",
    stxt: "Electrical engineer with 5+ years of experience in power distribution and control systems. EIT certified with expertise in electrical design, PLC programming, and system commissioning. Delivered projects for industrial and commercial clients.",
    j: [
      { r: "Electrical Engineer", co: "PowerTech Engineering", p: "Feb 2021 - Present", b: ["Designed power distribution systems for 10+ industrial facilities up to 5MW capacity", "Programmed PLC and SCADA systems improving manufacturing efficiency by 25%", "Reviewed electrical drawings and ensured NEC compliance for 20+ projects"] },
      { r: "Junior Electrical Engineer", co: "Engineering Solutions", p: "Jul 2019 - Jan 2021", b: ["Created electrical schematics and panel layouts using AutoCAD Electrical", "Performed load calculations and transformer sizing for commercial buildings", "Assisted in commissioning and testing of electrical systems"] }
    ],
    ed: { d: "B.S. Electrical Engineering", s: "Texas A&M University", p: "2015 - 2019", x: "EIT Certification | NCEES | 2020" },
    sl: ["Design: Power Distribution, Lighting, Fire Alarm, Low Voltage", "Software: AutoCAD Electrical, ETAP, SKM PowerTools", "Automation: PLC (Allen Bradley, Siemens), SCADA, HMI", "Codes: NEC, NFPA, IEEE Standards"],
    t: ["Include EIT or PE certification", "Quantify system scale and efficiency improvements", "Highlight PLC and automation experience", "Showcase specific software and design tools", "Mention code and standards knowledge"]
  }),
  r({
    slug: "chemical-engineer", title: "Chemical Engineer", industry: "Engineering", level: "Mid",
    summary: "A chemical engineer optimizing industrial processes, managing production, and ensuring safety compliance.",
    skills: ["Process Design", "Chemical Kinetics", "Thermodynamics", "Aspen Plus", "Process Safety", "Six Sigma", "MATLAB", "Fluid Mechanics", "Heat Transfer", "Quality Control"],
    n: "Raj Patel", e: "raj.patel@email.com", ct: "Houston", st: "TX", li: "linkedin.com/in/rajpatel",
    stxt: "Chemical engineer with 5+ years of experience in process design and optimization. Skilled in simulation software, process safety, and quality improvement. Led projects that improved efficiency and reduced costs for chemical manufacturing plants.",
    j: [
      { r: "Process Engineer", co: "ChemCorp Industries", p: "Mar 2021 - Present", b: ["Optimized chemical processes reducing raw material costs by 15% ($2M annually)", "Designed and commissioned new distillation column increasing throughput by 20%", "Led process hazard analyses (PHA) for 5 major production units"] },
      { r: "Junior Process Engineer", co: "Refinery Solutions", p: "Jun 2019 - Feb 2021", b: ["Monitored process parameters and troubleshooted deviations in refining operations", "Developed mass and energy balances for process improvement projects", "Assisted in implementing Six Sigma projects reducing waste by 12%"] }
    ],
    ed: { d: "B.S. Chemical Engineering", s: "University of Texas at Austin", p: "2015 - 2019" },
    sl: ["Simulation: Aspen Plus, Aspen HYSYS, ChemCAD", "Process: Design, Optimization, Scale-up, Heat/Mass Transfer", "Safety: PHA, HAZOP, LOPA, PSM", "Quality: Six Sigma, SPC, Root Cause Analysis"],
    t: ["Quantify cost savings and efficiency improvements", "Highlight process simulation software skills", "Showcase safety and risk assessment experience", "Include Six Sigma or lean certifications", "Mention industry-specific experience (chemicals, refining, pharma)"]
  }),
  r({
    slug: "aerospace-engineer", title: "Aerospace Engineer", industry: "Engineering", level: "Senior",
    summary: "A senior aerospace engineer designing and analyzing aircraft and spacecraft systems with 12+ years of experience.",
    skills: ["Aerodynamics", "Propulsion", "Structural Analysis", "FEA", "CFD", "MATLAB", "CATIA", "Project Management", "Systems Engineering", "DO-178"],
    n: "David Nguyen", e: "david.nguyen@email.com", ct: "Seattle", st: "WA", li: "linkedin.com/in/davidnguyen",
    stxt: "Aerospace engineer with 12+ years of experience in aircraft design and analysis. Expertise in aerodynamics, propulsion, and structural analysis. Led multidisciplinary teams on programs from concept through certification.",
    j: [
      { r: "Senior Aerospace Engineer", co: "Boeing", p: "Jan 2016 - Present", b: ["Led aerodynamic design for next-generation commercial aircraft wing, improving fuel efficiency by 12%", "Managed cross-functional team of 15 engineers through critical design review", "Developed CFD analysis methodologies reducing simulation time by 40%"] },
      { r: "Aerospace Engineer", co: "Lockheed Martin", p: "Jun 2012 - Dec 2015", b: ["Performed structural analysis using FEA for satellite components and subsystems", "Designed and tested propulsion system components for space applications", "Supported flight test campaigns and post-flight data analysis"] }
    ],
    ed: { d: "M.S. Aerospace Engineering", s: "University of Michigan", p: "2010 - 2012", x: "B.S. Aerospace Engineering | Georgia Tech | 2006 - 2010" },
    sl: ["Aerodynamics: CFD, Wind Tunnel Testing, Performance Analysis", "Structures: FEA, Fatigue Analysis, Composite Materials", "Propulsion: Turbomachinery, Rocket Propulsion, Propellant Systems", "Methods: DO-178, Systems Engineering, Model-Based Systems Engineering"],
    t: ["Quantify performance improvements and program impact", "Highlight specific aircraft/spacecraft programs worked on", "Showcase multidisciplinary team leadership", "Include security clearance if applicable", "Mention DO-178 and certification experience"]
  }),
  r({
    slug: "industrial-engineer", title: "Industrial Engineer", industry: "Engineering", level: "Mid",
    summary: "An industrial engineer optimizing processes, reducing waste, and improving operational efficiency.",
    skills: ["Lean Manufacturing", "Six Sigma", "Process Improvement", "Supply Chain", "Simulation", "Statistical Analysis", "Work Measurement", "Facility Layout", "Project Management", "Green Belt"],
    n: "Michelle Park", e: "michelle.park@email.com", ct: "Detroit", st: "MI", li: "linkedin.com/in/michellepark",
    stxt: "Industrial engineer with 5+ years of experience optimizing manufacturing and operational processes. Six Sigma Green Belt with expertise in lean methodology, simulation, and data analysis. Delivered measurable efficiency and cost improvements.",
    j: [
      { r: "Industrial Engineer", co: "AutoParts Manufacturing", p: "Jan 2021 - Present", b: ["Reduced production cycle time by 30% through lean manufacturing implementation", "Designed new facility layout improving material flow and reducing travel distance by 40%", "Led Six Sigma projects generating $1.5M in annual cost savings"] },
      { r: "Process Engineer", co: "FactoryWorks", p: "Jun 2019 - Dec 2020", b: ["Conducted time studies and standardized work for 20+ production lines", "Implemented inventory management system reducing WIP by 25%", "Analyzed production data to identify bottlenecks and recommend improvements"] }
    ],
    ed: { d: "B.S. Industrial Engineering", s: "University of Michigan", p: "2015 - 2019" },
    sl: ["Methodologies: Lean, Six Sigma, Kaizen, 5S, Value Stream Mapping", "Simulation: Arena, Simio, AnyLogic", "Analytics: Excel, Minitab, Tableau, R", "Certifications: Six Sigma Green Belt"],
    t: ["Quantify efficiency improvements and cost savings", "Highlight Six Sigma and lean certifications", "Showcase simulation and modeling experience", "Include specific project examples with measurable outcomes", "Mention supply chain and logistics expertise"]
  }),
  r({
    slug: "recruiter", title: "Recruiter", industry: "HR", level: "Mid",
    summary: "A talent acquisition specialist connecting top talent with great opportunities across industries.",
    skills: ["Talent Acquisition", "Full-cycle Recruiting", "Sourcing", "Interviewing", "Offer Negotiation", "Applicant Tracking", "LinkedIn Recruiter", "Employer Branding", "Diversity Hiring", "HR Compliance"],
    n: "Taylor Washington", e: "taylor.washington@email.com", ct: "Atlanta", st: "GA", li: "linkedin.com/in/taylorwashington",
    stxt: "Recruiter with 4+ years of experience in full-cycle talent acquisition for tech and professional services. Proven track record of filling roles quickly while maintaining quality hires. Specialized in engineering and product recruitment.",
    j: [
      { r: "Technical Recruiter", co: "TechHire Solutions", p: "Mar 2021 - Present", b: ["Filled 80+ technical roles annually including software engineers, data scientists, and PMs", "Reduced average time-to-fill from 45 to 28 days through sourcing optimization", "Implemented diversity sourcing strategy increasing underrepresented candidate slates by 40%"] },
      { r: "Recruiting Coordinator", co: "HR Staffing", p: "Jun 2019 - Feb 2021", b: ["Coordinated interview schedules for 200+ candidates monthly across 5 hiring teams", "Managed offer process and onboarding for 50+ new hires", "Maintained ATS data integrity achieving 98% compliance rate"] }
    ],
    ed: { d: "B.A. Human Resources", s: "Georgia State University", p: "2015 - 2019" },
    sl: ["Recruiting: Sourcing, Screening, Interviewing, Offer Negotiation", "Tools: LinkedIn Recruiter, Greenhouse, Lever, Workday", "Specialties: Tech, Engineering, Product, Data", "Skills: Boolean Search, Employer Branding, Market Mapping"],
    t: ["Quantify fills, time-to-fill, and quality metrics", "Highlight sourcing and Boolean search expertise", "Showcase diversity hiring initiatives", "Include specific ATS proficiency", "Mention industry specialization and market knowledge"]
  }),
  r({
    slug: "payroll-specialist", title: "Payroll Specialist", industry: "HR", level: "Mid",
    summary: "A payroll specialist ensuring accurate and timely payroll processing while maintaining compliance.",
    skills: ["Payroll Processing", "ADP", "Workday", "Tax Compliance", "W-2", "Time Tracking", "Benefits Administration", "Excel", "Audit", "Labor Law"],
    n: "Diana Reyes", e: "diana.reyes@email.com", ct: "San Antonio", st: "TX", li: "linkedin.com/in/dianareyes",
    stxt: "Payroll specialist with 5+ years of experience processing payroll for organizations of 500-2,000 employees. Proficient in ADP Workforce Now and Workday. Known for accuracy, compliance, and process improvement.",
    j: [
      { r: "Payroll Specialist", co: "LargeCorp Inc", p: "Jan 2021 - Present", b: ["Processed bi-weekly payroll for 1,500+ employees with 99.9% accuracy", "Reduced payroll discrepancies by 60% through improved validation processes", "Managed year-end W-2 processing and quarterly tax filings for multi-state organization"] },
      { r: "Payroll Coordinator", co: "Business Services Co", p: "Jun 2019 - Dec 2020", b: ["Supported payroll processing for 800+ employees across 5 states", "Maintained employee time and attendance records in ADP", "Resolved 100+ payroll inquiries weekly with high satisfaction ratings"] }
    ],
    ed: { d: "B.S. Accounting", s: "University of Texas at San Antonio", p: "2015 - 2019" },
    sl: ["Systems: ADP Workforce Now, ADP Run, Workday, Paychex", "Compliance: Federal, State, and Local Tax, FLSA, Garnishments", "Reporting: GL, Reconciliation, Audit Support, Year-End", "Skills: Data Entry, Time Management, Confidentiality, Problem Solving"],
    t: ["Quantify accuracy and efficiency metrics", "Highlight specific payroll system expertise", "Showcase multi-state and multi-entity experience", "Include tax compliance and year-end processing", "Emphasize confidentiality and attention to detail"]
  }),
  r({
    slug: "training-coordinator", title: "Training Coordinator", industry: "HR", level: "Mid",
    summary: "A training coordinator developing and delivering learning programs that enhance employee skills and performance.",
    skills: ["Training Delivery", "Curriculum Design", "Learning Management", "Employee Development", "Needs Assessment", "Presentation", "E-Learning", "Instructional Design", "Workshop Facilitation", "Evaluation"],
    n: "Catherine Moore", e: "catherine.moore@email.com", ct: "Nashville", st: "TN", li: "linkedin.com/in/catherinemoore",
    stxt: "Training coordinator with 4+ years of experience designing and delivering employee development programs. Skilled in needs assessment, curriculum design, and learning evaluation. Passionate about fostering continuous learning cultures.",
    j: [
      { r: "Training Coordinator", co: "CorporateLearning Inc", p: "Feb 2021 - Present", b: ["Coordinated and delivered 100+ training sessions annually for 500+ employees", "Developed e-learning modules reducing in-person training time by 40%", "Created onboarding program that reduced new hire ramp-up time by 30%"] },
      { r: "Learning Specialist", co: "HR Solutions", p: "Jul 2019 - Jan 2021", b: ["Facilitated soft skills workshops for 200+ managers and team leads", "Administered LMS (Cornerstone) and tracked employee training completion", "Gathered post-training feedback achieving 4.6/5 average satisfaction rating"] }
    ],
    ed: { d: "B.A. Human Resources Development", s: "University of Tennessee", p: "2015 - 2019" },
    sl: ["Design: Curriculum Development, Instructional Design, Needs Analysis", "Delivery: Facilitation, Presentation, Virtual Training, Workshops", "Tools: Articulate 360, Camtasia, Cornerstone, Zoom", "Evaluation: Kirkpatrick Model, Surveys, Learning Metrics"],
    t: ["Quantify training reach and satisfaction metrics", "Highlight e-learning and instructional design skills", "Showcase LMS administration experience", "Include specific evaluation methodologies", "Mention onboarding and new hire programs"]
  }),
  r({
    slug: "paralegal", title: "Paralegal", industry: "Legal", level: "Entry",
    summary: "A detail-oriented paralegal supporting attorneys with legal research, document preparation, and case management.",
    skills: ["Legal Research", "Document Drafting", "Case Management", "E-filing", "Discovery", "Trial Preparation", "Westlaw", "LexisNexis", "Client Communication", "Organizational Skills"],
    n: "Maria Santos", e: "maria.santos@email.com", ct: "Miami", st: "FL", li: "linkedin.com/in/mariasantos",
    stxt: "Paralegal with 2+ years of experience in litigation and corporate law. Skilled in legal research, document preparation, and e-filing. Paralegal certificate holder with strong organizational and communication skills.",
    j: [
      { r: "Paralegal", co: "LawFirm LLP", p: "Jan 2023 - Present", b: ["Assist 3 attorneys in civil litigation practice, managing 50+ active cases", "Prepare and file legal documents in federal and state courts via e-filing systems", "Conduct legal research using Westlaw, supporting case strategy and motion practice"] },
      { r: "Legal Intern", co: "Public Defender's Office", p: "Jun 2022 - Dec 2022", b: ["Organized case files and evidence for 100+ criminal defense cases", "Drafted discovery requests and responses under attorney supervision", "Coordinated witness interviews and trial preparation"] }
    ],
    ed: { d: "Paralegal Certificate", s: "University of Miami (Online)", p: "2022", x: "B.A. Political Science | Florida International University | 2018 - 2022" },
    sl: ["Research: Westlaw, LexisNexis, PACER", "Documents: Pleadings, Discovery, Contracts, Subpoenas", "Software: Clio, MyCase, Microsoft Office", "Skills: Case Management, E-filing, Client Intake, Calendar Management"],
    t: ["Include paralegal certificate", "Highlight legal research and writing skills", "Quantify case volume and document management", "Showcase e-filing and case management software", "Emphasize organizational and communication skills"]
  }),
  r({
    slug: "legal-assistant", title: "Legal Assistant", industry: "Legal", level: "Entry",
    summary: "An organized legal assistant providing administrative support to attorneys and ensuring smooth office operations.",
    skills: ["Administrative Support", "Calendar Management", "Document Preparation", "Client Intake", "Scheduling", "File Management", "Billing", "Communication", "Confidentiality", "Microsoft Office"],
    n: "Jennifer Collins", e: "jennifer.collins@email.com", ct: "Philadelphia", st: "PA", li: "linkedin.com/in/jennifercollins",
    stxt: "Legal assistant with 2+ years of experience in a busy law firm environment. Proficient in document management, client communication, and calendar coordination. Known for reliability and maintaining strict confidentiality.",
    j: [
      { r: "Legal Assistant", co: "Associates Law Group", p: "Mar 2023 - Present", b: ["Support 4 attorneys with calendar management, travel arrangements, and expense reporting", "Prepare and format legal documents, correspondence, and presentation materials", "Manage client intake process, handling 30+ new client inquiries weekly"] },
      { r: "Administrative Assistant", co: "Corporate Legal Dept", p: "Jul 2022 - Feb 2023", b: ["Scheduled meetings and maintained attorney calendars across multiple time zones", "Filed documents with courts and managed case file organization", "Processed monthly billing and time entries for legal services"] }
    ],
    ed: { d: "A.S. Paralegal Studies", s: "Community College of Philadelphia", p: "2020 - 2022" },
    sl: ["Administrative: Calendar Management, Travel, Correspondence, Filing", "Software: Microsoft Office, Clio, Adobe Acrobat", "Legal: Document Formatting, E-filing, Case File Management", "Skills: Confidentiality, Multitasking, Organization, Communication"],
    t: ["Highlight organizational and multitasking skills", "Showcase legal document formatting experience", "Emphasize confidentiality and professionalism", "Quantify attorney support and office efficiency", "Include software proficiency and typing speed"]
  }),
  r({
    slug: "compliance-officer", title: "Compliance Officer", industry: "Legal", level: "Mid",
    summary: "A compliance officer ensuring organizational adherence to regulatory requirements and internal policies.",
    skills: ["Regulatory Compliance", "Risk Assessment", "Policy Development", "Auditing", "HIPAA", "GDPR", "SOX", "AML", "Investigations", "Training"],
    n: "Andrew Clarke", e: "andrew.clarke@email.com", ct: "Charlotte", st: "NC", li: "linkedin.com/in/andrewclarke",
    stxt: "Compliance officer with 5+ years of experience developing and implementing compliance programs. Expertise in regulatory risk assessment, policy development, and internal investigations. CCEP certified with deep knowledge of financial services regulations.",
    j: [
      { r: "Compliance Officer", co: "Financial Services Corp", p: "Mar 2021 - Present", b: ["Developed and implemented compliance program for $2B financial institution", "Conducted 40+ internal audits annually, identifying and remediating 100+ compliance gaps", "Delivered compliance training to 500+ employees, achieving 98% completion rate"] },
      { r: "Compliance Analyst", co: "Regulatory Solutions", p: "Jun 2019 - Feb 2021", b: ["Monitored transactions for AML compliance, flagging 200+ suspicious activities", "Assisted in regulatory examination preparation across 4 regulatory bodies", "Updated policies and procedures to reflect changing regulatory requirements"] }
    ],
    ed: { d: "J.D.", s: "University of North Carolina School of Law", p: "2016 - 2019", x: "B.A. Political Science | UNC Chapel Hill | 2012 - 2016" },
    sl: ["Regulations: SOX, AML, KYC, GDPR, HIPAA, FINRA", "Risk: Assessment, Mitigation, Monitoring, Reporting", "Audit: Internal Controls, Testing, Remediation, Reporting", "Certifications: CCEP, CAMS"],
    t: ["Include compliance certifications (CCEP, CAMS, CISA)", "Quantify audit and investigation outcomes", "Highlight regulatory exam experience", "Showcase policy development and training delivery", "Mention specific industry regulations expertise"]
  }),
  r({
    slug: "corporate-counsel", title: "Corporate Counsel", industry: "Legal", level: "Senior",
    summary: "A senior corporate counsel providing strategic legal advice on complex business transactions and regulatory matters.",
    skills: ["Corporate Law", "Contracts", "M&A", "Governance", "Compliance", "Risk Management", "Negotiation", "IP", "Employment Law", "Board Advisory"],
    n: "Christopher Bennett", e: "christopher.bennett@email.com", ct: "San Francisco", st: "CA", li: "linkedin.com/in/christopherbennett",
    stxt: "Corporate counsel with 10+ years of experience advising technology companies on complex legal matters. Expertise in M&A, corporate governance, and commercial contracts. Trusted strategic partner to executive leadership and boards of directors.",
    j: [
      { r: "Associate General Counsel", co: "TechScale Inc", p: "Jan 2018 - Present", b: ["Advise C-suite and board on corporate governance, securities, and strategic transactions", "Led legal aspects of 15+ M&A transactions totaling $3B in enterprise value", "Negotiated 200+ commercial contracts annually, including strategic partnerships and licensing"] },
      { r: "Corporate Attorney", co: "LawFirm LLP", p: "Sep 2013 - Dec 2017", b: ["Advised public and private companies on corporate governance and SEC compliance", "Managed due diligence for 20+ M&A transactions in technology sector", "Drafted and negotiated commercial agreements including SaaS, licensing, and distribution"] }
    ],
    ed: { d: "J.D.", s: "University of California, Berkeley (Boalt Hall)", p: "2008 - 2011", x: "B.A. Political Science | UCLA | 2004 - 2008" },
    sl: ["Corporate: Governance, Securities, M&A, Board Advisory", "Contracts: SaaS, Licensing, Partnerships, NDAs", "Risk: Litigation Management, IP Strategy, Compliance", "Admissions: State Bar of California"],
    t: ["Include bar admissions and practice areas", "Quantify transaction values and deal complexity", "Highlight board and executive advisory experience", "Showcase sector expertise (tech, SaaS, etc.)", "Mention in-house vs. law firm experience balance"]
  }),
  r({
    slug: "electrician", title: "Electrician", industry: "Trades", level: "Mid",
    summary: "A licensed electrician skilled in residential, commercial, and industrial electrical installation and repair.",
    skills: ["Electrical Installation", "Wiring", "Troubleshooting", "Blueprints", "NEC Code", "Panel Upgrades", "Lighting", "Safety Compliance", "Testing", "Journeyman"],
    n: "Mike Kowalski", e: "mike.kowalski@email.com", ct: "Cleveland", st: "OH", li: "linkedin.com/in/mikekowalski",
    stxt: "Licensed journeyman electrician with 8+ years of experience in residential and commercial electrical work. Skilled in installation, troubleshooting, and code compliance. Committed to safety and quality craftsmanship.",
    j: [
      { r: "Journeyman Electrician", co: "Bright Sparks Electrical", p: "Jan 2019 - Present", b: ["Installed wiring and electrical systems for 100+ residential and commercial projects", "Troubleshot and repaired complex electrical issues across 500+ service calls", "Upgraded electrical panels for 50+ homes, ensuring NEC code compliance"] },
      { r: "Apprentice Electrician", co: "PowerLine Electric", p: "Jun 2016 - Dec 2018", b: ["Assisted journeymen with rough-in and trim-out for new construction projects", "Pulled and terminated wiring for lighting, outlets, and equipment", "Learned blueprint reading and NEC code requirements"] }
    ],
    ed: { d: "Journeyman Electrician License", s: "Ohio Electrical Board", p: "2019", x: "Apprenticeship Completion | IBEW Local | 2016 - 2019" },
    sl: ["Installation: Wiring, Panels, Breakers, Lighting, Switches", "Service: Troubleshooting, Repairs, Upgrades, Inspections", "Code: NEC, Local Codes, Safety Standards", "Types: Residential, Commercial, Industrial"],
    t: ["Include journeyman or master license", "Quantify projects completed and service calls", "Highlight safety record and code compliance", "Showcase specialization areas (panel upgrades, lighting, etc.)", "Mention apprenticeship and continuing education"]
  }),
  r({
    slug: "plumber", title: "Plumber", industry: "Trades", level: "Mid",
    summary: "A licensed plumber providing expert installation, repair, and maintenance of plumbing systems.",
    skills: ["Pipe Installation", "Drainage", "Water Heaters", "Gas Lines", "Sewer Systems", "Blueprints", "Fixtures", "Soldering", "Inspection", "Journeyman"],
    n: "Frank Murphy", e: "frank.murphy@email.com", ct: "Chicago", st: "IL", li: "linkedin.com/in/frankmurphy",
    stxt: "Licensed journeyman plumber with 7+ years of experience in residential and commercial plumbing. Expert in pipe installation, drainage systems, and water heater services. Known for high-quality workmanship and reliable service.",
    j: [
      { r: "Journeyman Plumber", co: "DrainWorks Plumbing", p: "Mar 2019 - Present", b: ["Installed and repaired plumbing systems for 200+ residential and commercial properties", "Diagnosed and resolved complex drainage and sewer issues across 1,000+ service calls", "Installed 100+ water heaters including tankless systems"] },
      { r: "Apprentice Plumber", co: "BlueCollar Plumbing", p: "Jun 2016 - Feb 2019", b: ["Assisted with rough-in plumbing for new construction and renovation projects", "Learned pipe fitting, soldering, and PVC/ABS installation techniques", "Maintained tools and inventory, ensuring job site readiness"] }
    ],
    ed: { d: "Journeyman Plumber License", s: "Illinois Department of Public Health", p: "2019", x: "Apprenticeship | Plumbers Local 130 | 2016 - 2019" },
    sl: ["Installation: Pipes (Copper, PVC, PEX), Fixtures, Water Heaters", "Service: Drain Cleaning, Leak Repair, Sewer Line, Gas Lines", "Systems: Residential, Commercial, Industrial", "Certifications: Journeyman License, Backflow Prevention"],
    t: ["Include journeyman or master license", "Quantify service calls and projects completed", "Highlight specialized skills (tankless water heaters, sewer repair)", "Showcase safety and code compliance", "Mention customer service and reliability"]
  }),
  r({
    slug: "truck-driver", title: "Truck Driver", industry: "Transportation", level: "Mid",
    summary: "A CDL-licensed truck driver with a clean safety record and expertise in long-haul and regional routes.",
    skills: ["CDL Class A", "Long-haul Driving", "Route Planning", "Cargo Secure", "Pre-trip Inspection", "Logbook", "GPS", "Fuel Efficient Driving", "Customer Service", "Safety Compliance"],
    n: "Dale Henderson", e: "dale.henderson@email.com", ct: "Nashville", st: "TN", li: "linkedin.com/in/dalehenderson",
    stxt: "CDL Class A truck driver with 6+ years of experience in long-haul and regional operations. Clean driving record with zero accidents or violations. Expertise in refrigerated and dry van freight, on-time delivery, and logbook compliance.",
    j: [
      { r: "Over-the-Road Driver", co: "TransAmerica Freight", p: "Jan 2020 - Present", b: ["Logged 450K+ accident-free miles across 48 states delivering on time", "Achieved 98% on-time delivery rate across 2,000+ loads", "Reduced fuel costs by 12% through efficient route planning and driving techniques"] },
      { r: "Regional Driver", co: "MidSouth Logistics", p: "Mar 2019 - Dec 2019", b: ["Completed 150+ regional routes with 99% on-time delivery record", "Performed pre-trip and post-trip inspections, maintaining DOT compliance", "Provided exceptional customer service during delivery and pickup operations"] }
    ],
    ed: { d: "CDL Class A Training", s: "Truck Driving Academy", p: "2018" },
    sl: ["License: CDL Class A, Hazmat, Tanker Endorsements", "Trailers: Dry Van, Refrigerated, Flatbed", "Compliance: DOT, Hours of Service, ELD, Logbook", "Skills: Safe Driving, Route Planning, Cargo Securement"],
    t: ["Highlight safe driving record and mileage", "Quantify on-time delivery rate and loads", "Include CDL endorsements (hazmat, tanker, etc.)", "Showcase equipment experience (trailer types)", "Mention customer service and professionalism"]
  }),
  r({
    slug: "chef", title: "Chef", industry: "Hospitality", level: "Mid",
    summary: "A creative chef crafting exceptional menus and leading kitchen teams in fast-paced culinary environments.",
    skills: ["Menu Development", "Kitchen Management", "Food Safety", "Culinary Techniques", "Inventory Management", "Team Leadership", "Plating", "Cost Control", "Sous Chef", "Recipe Creation"],
    n: "Marco Bellini", e: "marco.bellini@email.com", ct: "New York", st: "NY", li: "linkedin.com/in/marcobellini",
    stxt: "Chef with 8+ years of experience in fine dining and high-volume restaurants. Skilled in menu development, kitchen management, and cost control. Passionate about seasonal ingredients and creating memorable dining experiences.",
    j: [
      { r: "Sous Chef", co: "Restaurant Luxe", p: "Mar 2020 - Present", b: ["Lead kitchen team of 12, producing 200+ covers nightly in fine dining setting", "Developed seasonal menus that increased monthly revenue by 20%", "Reduced food cost from 32% to 27% through supplier negotiation and waste reduction"] },
      { r: "Line Cook", co: "BistroCentrale", p: "Jun 2016 - Feb 2020", b: ["Prepared high-quality dishes for 150+ covers per shift in busy Italian kitchen", "Trained 10+ junior cooks on techniques, plating, and kitchen safety", "Assisted in opening new location, developing recipes and setup systems"] }
    ],
    ed: { d: "Associate Degree Culinary Arts", s: "Institute of Culinary Education", p: "2014 - 2016" },
    sl: ["Cuisine: Italian, French, American, Seasonal/Modern", "Kitchen: Station Management, Line Setup, Expediting, Inventory", "Leadership: Team Training, Scheduling, Menu Planning", "Safety: ServSafe Certified, HACCP, Sanitation"],
    t: ["Highlight culinary philosophy and cuisine specialties", "Quantify covers, revenue, and cost metrics", "Showcase menu development and seasonal cooking", "Include ServSafe and food safety certifications", "Mention team leadership and training experience"]
  }),
  r({
    slug: "police-officer", title: "Police Officer", industry: "Security", level: "Mid",
    summary: "A dedicated police officer serving the community through proactive patrol, crime prevention, and public safety.",
    skills: ["Patrol", "Criminal Investigation", "Report Writing", "Crisis Intervention", "Community Policing", "Firearms", "Defensive Tactics", "First Aid", "Traffic Enforcement", "De-escalation"],
    n: "James Rodriguez", e: "james.rodriguez@email.com", ct: "Houston", st: "TX", li: "linkedin.com/in/jamesrodriguez",
    stxt: "Police officer with 5+ years of experience serving a diverse urban community. Skilled in patrol, criminal investigation, and crisis intervention. Committed to building trust through community policing and professionalism.",
    j: [
      { r: "Police Officer", co: "Houston Police Department", p: "Jan 2019 - Present", b: ["Responded to 5,000+ calls for service, effectively de-escalating tense situations", "Conducted 200+ criminal investigations resulting in 150+ arrests", "Developed community policing initiatives that reduced neighborhood crime by 20%"] },
      { r: "Police Recruit", co: "Houston Police Academy", p: "Jul 2018 - Dec 2018", b: ["Completed 26-week police academy training with academic honors", "Trained in defensive tactics, firearms, emergency vehicle operations", "Certified in Crisis Intervention Team (CIT) techniques"] }
    ],
    ed: { d: "B.A. Criminal Justice", s: "University of Houston", p: "2014 - 2018" },
    sl: ["Operations: Patrol, Traffic Enforcement, Criminal Investigation", "Intervention: Crisis Intervention, De-escalation, Community Policing", "Certifications: TCOLE Peace Officer, CIT, First Aid/CPR", "Skills: Report Writing, Evidence Collection, Court Testimony"],
    t: ["Include peace officer certification and POST", "Quantify calls responded to and arrests made", "Highlight community policing and crisis intervention", "Showcase specialized training and certifications", "Mention awards and commendations"]
  }),
  r({
    slug: "firefighter", title: "Firefighter", industry: "Security", level: "Mid",
    summary: "A courageous firefighter dedicated to protecting lives and property through fire suppression and emergency response.",
    skills: ["Fire Suppression", "EMT", "Hazardous Materials", "Vehicle Extrication", "Fire Prevention", "Search and Rescue", "Equipment Maintenance", "Physical Fitness", "Teamwork", "Public Education"],
    n: "Daniel O'Connor", e: "daniel.oconnor@email.com", ct: "Boston", st: "MA", li: "linkedin.com/in/danieloconnor",
    stxt: "Firefighter with 6+ years of experience in urban fire rescue operations. EMT certified with expertise in fire suppression, hazardous materials response, and public fire safety education. Committed to serving the community with courage and professionalism.",
    j: [
      { r: "Firefighter/EMT", co: "Boston Fire Department", p: "Jan 2018 - Present", b: ["Responded to 2,000+ emergency calls annually including fires, medical emergencies, and rescues", "Led fire prevention programs reaching 5,000+ community members annually", "Maintained 100% readiness on apparatus and equipment during daily inspections"] },
      { r: "Fire Apparatus Operator", co: "Boston Fire Department", p: "Jan 2018 - Present", b: ["Operated fire engines and aerial apparatus in emergency and non-emergency responses", "Trained 10+ new firefighters on apparatus operation and pump calculations", "Reduced apparatus response time by 15% through route optimization knowledge"] }
    ],
    ed: { d: "Fire Science Certificate", s: "Massachusetts Firefighting Academy", p: "2017", x: "A.S. Fire Science | Bunker Hill Community College | 2015 - 2017" },
    sl: ["Suppression: Structure Fires, Wildland, Vehicle Fires", "Medical: EMT-B, CPR, AED, First Aid", "Specialty: Hazmat Operations, Rope Rescue, Vehicle Extrication", "Certifications: Firefighter I/II, EMT-B, Hazmat Ops, Pump Operator"],
    t: ["Include firefighter certifications and EMT license", "Quantify emergency response volume", "Highlight specialized rescue training (hazmat, high-angle, etc.)", "Showcase fire prevention and public education work", "Mention departmental awards and commendations"]
  }),
  r({
    slug: "carpenter", title: "Carpenter", industry: "Trades", level: "Mid",
    summary: "A skilled carpenter crafting custom woodwork, framing, and finish carpentry for residential and commercial projects.",
    skills: ["Framing", "Finish Carpentry", "Trim Work", "Cabinet Installation", "Blueprint Reading", "Power Tools", "Measuring", "Woodworking", "Drywall", "Safety"],
    n: "Scott Baker", e: "scott.baker@email.com", ct: "Denver", st: "CO", li: "linkedin.com/in/scottbaker",
    stxt: "Carpenter with 7+ years of experience in residential and commercial construction. Skilled in framing, finish carpentry, and custom woodworking. Known for precision, craftsmanship, and a strong work ethic.",
    j: [
      { r: "Lead Carpenter", co: "Custom Homes Construction", p: "Feb 2019 - Present", b: ["Led framing crews for 20+ custom homes, ensuring on-time and within-budget completion", "Installed custom cabinetry, trim, and millwork in 50+ high-end residential projects", "Reduced material waste by 15% through accurate takeoffs and efficient cutting practices"] },
      { r: "Apprentice Carpenter", co: "BuildRight Construction", p: "Jun 2016 - Jan 2019", b: ["Assisted with rough framing, sheathing, and roof truss installation on new home builds", "Learned finish carpentry techniques including baseboards, crown molding, and door installation", "Maintained tools and equipment, ensuring job site safety and organization"] }
    ],
    ed: { d: "Carpentry Apprenticeship Certificate", s: "Colorado Carpenters Union", p: "2016 - 2019" },
    sl: ["Structural: Framing, Roofing, Sheathing, Decking", "Finish: Trim, Cabinets, Millwork, Doors, Flooring", "Tools: Table Saw, Miter Saw, Router, Nail Gun, Planer", "Skills: Blueprint Reading, Estimating, Layout, Safety"],
    t: ["Highlight specific types of carpentry (rough, finish, custom)", "Quantify projects completed and team size led", "Showcase custom or specialty woodworking skills", "Include safety certifications (OSHA 10/30)", "Mention efficiency and material savings achievements"]
  }),
  r({
    slug: "hvac-technician", title: "HVAC Technician", industry: "Trades", level: "Mid",
    summary: "A certified HVAC technician installing, maintaining, and repairing heating, ventilation, and air conditioning systems.",
    skills: ["HVAC Installation", "Maintenance", "Repair", "Refrigeration", "Electrical", "EPA Universal", "NATE Certified", "Blueprints", "Customer Service", "Troubleshooting"],
    n: "Tommy Nguyen", e: "tommy.nguyen@email.com", ct: "Dallas", st: "TX", li: "linkedin.com/in/tommynguyen",
    stxt: "HVAC technician with 6+ years of experience in residential and commercial systems. EPA Universal certified with expertise in installation, maintenance, and diagnostics. Dedicated to energy efficiency and customer satisfaction.",
    j: [
      { r: "HVAC Technician", co: "Climate Control Services", p: "Jan 2020 - Present", b: ["Installed and serviced 300+ HVAC systems annually, achieving 98% customer satisfaction", "Diagnosed and repaired complex electrical and refrigeration issues across 1,000+ service calls", "Improved fleet fuel efficiency by 20% through optimized route planning"] },
      { r: "Apprentice HVAC Technician", co: "CoolAir Inc", p: "Jun 2017 - Dec 2019", b: ["Assisted senior technicians with installation and maintenance of residential systems", "Learned refrigerant handling, brazing, and electrical troubleshooting", "Completed EPA Universal certification and manufacturer-specific training"] }
    ],
    ed: { d: "HVAC Technology Diploma", s: "Dallas Technical Institute", p: "2015 - 2017", x: "EPA Universal Certification | 2017" },
    sl: ["Systems: Central Air, Heat Pumps, Furnaces, Mini-Splits", "Skills: Installation, Diagnostics, Repair, Preventive Maintenance", "Refrigeration: EPA Universal, Brazing, Recovery, Charging", "Certifications: EPA Universal, NATE, HVAC Excellence"],
    t: ["Include EPA and NATE certifications", "Quantify installations and service calls", "Highlight energy efficiency and customer satisfaction", "Showcase specialization in specific system types", "Mention safety record and continuing education"]
  }),
  r({
    slug: "welder", title: "Welder", industry: "Trades", level: "Mid",
    summary: "A certified welder proficient in MIG, TIG, and stick welding for structural and fabrication applications.",
    skills: ["MIG Welding", "TIG Welding", "Stick Welding", "Blueprint Reading", "Metal Fabrication", "Cutting", "Grinding", "Safety", "Inspection", "CWI"],
    n: "Gary Stevens", e: "gary.stevens@email.com", ct: "Pittsburgh", st: "PA", li: "linkedin.com/in/garystevens",
    stxt: "Certified welder with 8+ years of experience in structural and fabrication welding. Proficient in MIG, TIG, and stick processes across carbon steel, stainless, and aluminum. Committed to quality, safety, and code compliance.",
    j: [
      { r: "Welder", co: "SteelFab Industries", p: "Feb 2019 - Present", b: ["Welded structural steel components for 20+ commercial building projects up to 10 stories", "Achieved 99% pass rate on weld inspections and X-ray testing", "Fabricated custom metal components including railings, platforms, and supports"] },
      { r: "Fabricator/Welder", co: "Custom Metal Works", p: "Jun 2015 - Jan 2019", b: ["Performed MIG and TIG welding on carbon steel and aluminum fabrications", "Read blueprints and laid out parts for welding and assembly", "Maintained welding equipment and ensured compliance with safety protocols"] }
    ],
    ed: { d: "Welding Technology Certificate", s: "Pittsburgh Technical College", p: "2013 - 2015" },
    sl: ["Processes: MIG, TIG, Stick, Flux-Cored, Oxy-Fuel", "Materials: Carbon Steel, Stainless Steel, Aluminum", "Techniques: Flat, Horizontal, Vertical, Overhead, Pipe", "Certifications: AWS D1.1, CWI, OSHA 30"],
    t: ["Include welding certifications (AWS, ASME)", "Quantify weld inspection pass rates", "Highlight specific processes and materials expertise", "Showcase project types (structural, pipe, fabrication)", "Mention safety certifications and record"]
  }),
  r({
    slug: "construction-manager", title: "Construction Manager", industry: "Trades", level: "Mid",
    summary: "A construction manager overseeing project schedules, budgets, and teams to deliver quality built environments.",
    skills: ["Project Management", "Budgeting", "Scheduling", "Blueprints", "Contract Negotiation", "Site Safety", "Quality Control", "Subcontractor Management", "Estimating", "PMP"],
    n: "Patricia Adams", e: "patricia.adams@email.com", ct: "Nashville", st: "TN", li: "linkedin.com/in/patriciaadams",
    stxt: "Construction manager with 8+ years of experience managing commercial and residential projects. Skilled in budgeting, scheduling, and team leadership. Proven track record of delivering projects on time and within budget.",
    j: [
      { r: "Construction Manager", co: "BuildWell Construction", p: "Jan 2019 - Present", b: ["Managed 15+ commercial construction projects valued at $5M to $20M each", "Delivered 100% of projects on time and within budget over 5 years", "Reduced project costs by 10% through value engineering and vendor negotiations"] },
      { r: "Assistant Project Manager", co: "General Contractors Inc", p: "Jun 2015 - Dec 2018", b: ["Assisted in managing 8 residential and light commercial projects", "Coordinated subcontractor schedules and material deliveries", "Performed site inspections and ensured OSHA compliance"] }
    ],
    ed: { d: "B.S. Construction Management", s: "University of Tennessee", p: "2011 - 2015", x: "PMP Certification | PMI | 2018" },
    sl: ["Management: Project Planning, Scheduling, Budgeting, Risk", "Software: MS Project, Procore, Bluebeam, PlanGrid", "Safety: OSHA 30, EM 385, Site Safety Plans", "Certifications: PMP, OSHA 30, Lean Construction"],
    t: ["Quantify project values and delivery success rates", "Highlight budget and timeline achievements", "Showcase specific software proficiencies", "Include PMP and safety certifications", "Mention subcontractor and vendor management experience"]
  }),
  r({
    slug: "landscaper", title: "Landscaper", industry: "Trades", level: "Entry",
    summary: "A hardworking landscaper creating and maintaining beautiful outdoor environments for residential and commercial clients.",
    skills: ["Lawn Care", "Planting", "Pruning", "Hardscaping", "Irrigation", "Mowing", "Leaf Removal", "Snow Removal", "Customer Service", "Equipment Operation"],
    n: "Luis Hernandez", e: "luis.hernandez@email.com", ct: "Orlando", st: "FL", li: "linkedin.com/in/luishernandez",
    stxt: "Landscaper with 2+ years of experience in residential and commercial grounds maintenance. Skilled in lawn care, planting, irrigation, and hardscaping. Reliable, hardworking, and committed to creating beautiful outdoor spaces.",
    j: [
      { r: "Landscaper", co: "GreenScape Services", p: "Mar 2022 - Present", b: ["Maintained 30+ residential and commercial properties weekly, ensuring pristine curb appeal", "Installed sod, plants, and mulch for 20+ landscape renovation projects", "Operated zero-turn mowers, trimmers, and blowers safely and efficiently"] },
      { r: "Landscaping Laborer", co: "Outdoor Pros", p: "Jun 2021 - Feb 2022", b: ["Assisted with lawn mowing, edging, and trimming for 50+ properties", "Performed seasonal tasks including leaf cleanup and snow removal", "Learned irrigation repair and basic hardscape installation techniques"] }
    ],
    ed: { d: "High School Diploma", s: "Orlando High School", p: "2021" },
    sl: ["Maintenance: Mowing, Trimming, Edging, Fertilization", "Installation: Planting, Sod, Mulch, Hardscapes, Irrigation", "Equipment: Zero-Turn Mowers, Trimmers, Blowers, Chainsaws", "Seasonal: Leaf Removal, Snow Removal, Spring/Fall Cleanup"],
    t: ["Highlight equipment operating skills", "Quantify properties maintained and project sizes", "Showcase plant and material knowledge", "Emphasize reliability and work ethic", "Include pesticide or safety certifications if applicable"]
  }),
  r({
    slug: "auto-mechanic", title: "Auto Mechanic", industry: "Trades", level: "Mid",
    summary: "An ASE-certified auto mechanic diagnosing and repairing vehicles with expertise in engine, transmission, and electrical systems.",
    skills: ["Engine Repair", "Transmission", "Brakes", "Electrical Diagnostics", "Suspension", "AC Systems", "OBD-II", "ASE Certified", "Power Tools", "Customer Service"],
    n: "Steve Jackson", e: "steve.jackson@email.com", ct: "Indianapolis", st: "IN", li: "linkedin.com/in/stevejackson",
    stxt: "ASE-certified auto mechanic with 7+ years of experience diagnosing and repairing domestic and import vehicles. Skilled in engine, transmission, brake, and electrical systems. Committed to quality repairs and customer satisfaction.",
    j: [
      { r: "Master Technician", co: "AutoCare Plus", p: "Feb 2019 - Present", b: ["Diagnosed and repaired 500+ vehicles annually across all makes and models", "Achieved 95% first-time fix rate and 4.8/5 customer satisfaction score", "Specialized in engine and transmission overhauls, reducing comeback rate by 40%"] },
      { r: "Automotive Technician", co: "QuickLube & Repair", p: "Jun 2016 - Jan 2019", b: ["Performed routine maintenance including oil changes, brakes, and tires on 30+ vehicles daily", "Diagnosed check engine lights and performed electrical system repairs", "Completed ASE certifications and manufacturer-specific training programs"] }
    ],
    ed: { d: "Automotive Technology Diploma", s: "Ivy Tech Community College", p: "2014 - 2016" },
    sl: ["Systems: Engine, Transmission, Brakes, Suspension, Electrical, AC", "Diagnostics: OBD-II, Multimeter, Oscilloscope, Scan Tools", "Makes: Domestic (Ford, GM, Chrysler), Import (Toyota, Honda, BMW)", "Certifications: ASE Master Technician, A1-A8"],
    t: ["Include ASE certifications with specific series", "Quantify repair volume and first-time fix rates", "Highlight specialization in specific systems or makes", "Showcase diagnostic equipment proficiency", "Mention customer service and communication skills"]
  }),
  r({
    slug: "admin-assistant", title: "Administrative Assistant", industry: "Admin", level: "Entry",
    summary: "An organized administrative assistant providing essential office support and ensuring smooth daily operations.",
    skills: ["Calendar Management", "Microsoft Office", "Scheduling", "Data Entry", "Customer Service", "Filing", "Email Management", "Travel Booking", "Communication", "Time Management"],
    n: "Emily Watson", e: "emily.watson@email.com", ct: "Richmond", st: "VA", li: "linkedin.com/in/emilywatson",
    stxt: "Administrative assistant with 2+ years of experience supporting office operations. Skilled in scheduling, correspondence, and data management. Known for reliability, organization, and a positive attitude.",
    j: [
      { r: "Administrative Assistant", co: "Regional Business Services", p: "Jan 2023 - Present", b: ["Manage calendars and schedule meetings for 5 executives, coordinating across multiple time zones", "Process 50+ invoices and expense reports monthly with 100% accuracy", "Maintain filing systems and office supply inventory, reducing supply costs by 20%"] },
      { r: "Office Clerk", co: "Small Business Solutions", p: "Jun 2022 - Dec 2022", b: ["Answered phones and directed calls for 10-person office", "Assisted with data entry and database maintenance", "Prepared documents and correspondence for client communications"] }
    ],
    ed: { d: "A.S. Office Administration", s: "J. Sargeant Reynolds Community College", p: "2020 - 2022" },
    sl: ["Software: Microsoft Office (Word, Excel, Outlook, PowerPoint)", "Skills: Calendar Management, Scheduling, Data Entry, Filing", "Communication: Phone, Email, Correspondence, Customer Service", "Tools: Zoom, Teams, Google Workspace, ADP"],
    t: ["Quantify administrative support volume (calendars, invoices, etc.)", "Highlight software proficiency (especially Office Suite)", "Showcase organizational and multitasking abilities", "Emphasize reliability and attention to detail", "Include typing speed and language skills"]
  }),
  r({
    slug: "customer-service-rep", title: "Customer Service Representative", industry: "Admin", level: "Entry",
    summary: "A friendly customer service representative resolving inquiries and ensuring positive customer experiences.",
    skills: ["Customer Support", "Problem Solving", "Active Listening", "CRM", "Phone Etiquette", "Ticketing Systems", "Product Knowledge", "Conflict Resolution", "Multitasking", "Empathy"],
    n: "Brittany Taylor", e: "brittany.taylor@email.com", ct: "Orlando", st: "FL", li: "linkedin.com/in/brittanytaylor",
    stxt: "Customer service representative with 2+ years of experience in fast-paced call center environments. Skilled in handling inquiries, resolving complaints, and maintaining high customer satisfaction. Known for patience, empathy, and problem-solving.",
    j: [
      { r: "Customer Service Representative", co: "ServiceFirst Support", p: "Mar 2022 - Present", b: ["Handle 60+ customer inquiries daily via phone, email, and chat with 95% satisfaction rate", "Resolved 85% of issues on first contact, reducing repeat calls by 30%", "Cross-trained and mentored 5 new hires on systems and procedures"] },
      { r: "Customer Support Agent", co: "RetailHelp Desk", p: "Jul 2021 - Feb 2022", b: ["Assisted 40+ customers daily with order inquiries, returns, and product questions", "Maintained 4.8/5 quality score on monitored calls", "Created knowledge base articles reducing commonly asked questions by 20%"] }
    ],
    ed: { d: "High School Diploma", s: "Orlando High School", p: "2021" },
    sl: ["Channels: Phone, Email, Live Chat, Social Media", "Systems: Zendesk, Salesforce, Freshdesk, HubSpot", "Skills: Active Listening, Problem Solving, De-escalation", "Metrics: CSAT, FCR, AHT, NPS"],
    t: ["Quantify contact volume and satisfaction metrics", "Highlight first-call resolution and efficiency", "Showcase specific CRM and ticketing system experience", "Emphasize empathy and communication skills", "Include language skills if bilingual"]
  }),
  r({
    slug: "executive-assistant", title: "Executive Assistant", industry: "Admin", level: "Mid",
    summary: "A proactive executive assistant providing high-level administrative support to C-suite leadership.",
    skills: ["Executive Support", "Calendar Management", "Travel Planning", "Meeting Coordination", "Board Relations", "Confidentiality", "Project Coordination", "Vendor Management", "Expense Reporting", "Event Planning"],
    n: "Katherine Davies", e: "katherine.davies@email.com", ct: "San Francisco", st: "CA", li: "linkedin.com/in/katherinedavies",
    stxt: "Executive assistant with 6+ years of experience supporting C-suite executives. Skilled in calendar management, travel coordination, and board meeting preparation. Known for discretion, efficiency, and anticipating executive needs.",
    j: [
      { r: "Executive Assistant to CEO", co: "TechGrowth Inc", p: "Feb 2020 - Present", b: ["Manage complex calendar for CEO, coordinating 20+ meetings weekly across global time zones", "Arranged international travel for executive team, saving 25% through strategic booking", "Coordinated quarterly board meetings, preparing materials for 12 board members"] },
      { r: "Administrative Assistant to VP", co: "Corporate Services Ltd", p: "Jun 2017 - Jan 2020", b: ["Supported 3 VPs with scheduling, correspondence, and expense reporting", "Planned company events for 100+ employees, consistently under budget", "Managed office supply inventory and vendor relationships, reducing costs by 15%"] }
    ],
    ed: { d: "B.A. Business Administration", s: "San Francisco State University", p: "2013 - 2017" },
    sl: ["Support: Calendar, Travel, Correspondence, Board Relations", "Software: Microsoft Office, Google Workspace, Concur, Expensify", "Skills: Confidentiality, Organization, Communication, Problem Solving", "Events: Coordination, Planning, Vendor Management, Logistics"],
    t: ["Quantify executive support scope and efficiency improvements", "Highlight travel and event planning achievements", "Emphasize confidentiality and discretion", "Showcase project coordination and initiative", "Include languages and specialized software skills"]
  }),
  r({
    slug: "data-entry-clerk", title: "Data Entry Clerk", industry: "Admin", level: "Entry",
    summary: "An accurate data entry clerk proficient in processing large volumes of information with speed and precision.",
    skills: ["Data Entry", "Typing", "Microsoft Office", "Excel", "Database Management", "Attention to Detail", "Time Management", "Alphanumeric Data", "10-Key", "Accuracy"],
    n: "Samantha Green", e: "samantha.green@email.com", ct: "Kansas City", st: "MO", li: "linkedin.com/in/samanthagreen",
    stxt: "Data entry clerk with 2+ years of experience processing high volumes of data accurately. Typing speed of 75 WPM with 99% accuracy. Proficient in Excel and database management systems. Known for reliability and meeting deadlines.",
    j: [
      { r: "Data Entry Clerk", co: "DataSolutions Inc", p: "Jan 2023 - Present", b: ["Process 200+ data records daily with 99.5% accuracy rate", "Enter and verify customer information, invoices, and inventory data in company databases", "Reduced data backlog by 40% through efficient workflow organization"] },
      { r: "File Clerk", co: "Records Management Co", p: "Jun 2022 - Dec 2022", b: ["Scanned and indexed 500+ documents daily into digital filing system", "Performed quality checks on digitized records, achieving 98% accuracy", "Maintained organized filing system for easy document retrieval"] }
    ],
    ed: { d: "High School Diploma", s: "Kansas City High School", p: "2022" },
    sl: ["Software: Microsoft Excel, Google Sheets, QuickBase", "Skills: 75 WPM Typing, 99% Accuracy, 10-Key, Data Verification", "Systems: Salesforce, Oracle, SAP (data entry modules)", "Qualities: Attention to Detail, Speed, Reliability, Organization"],
    t: ["Include typing speed and accuracy metrics", "Quantify daily/weekly data processing volume", "Highlight specific software and database experience", "Emphasize attention to detail and error rate", "Showcase ability to meet deadlines and handle volume"]
  }),
  r({
    slug: "warehouse-worker", title: "Warehouse Worker", industry: "Admin", level: "Entry",
    summary: "A dependable warehouse worker experienced in order picking, packing, shipping, and inventory management.",
    skills: ["Order Picking", "Packing", "Shipping", "Receiving", "Inventory", "Forklift", "RF Scanner", "Safety", "Teamwork", "Physical Stamina"],
    n: "Marcus Williams", e: "marcus.williams@email.com", ct: "Memphis", st: "TN", li: "linkedin.com/in/marcuswilliams",
    stxt: "Warehouse worker with 2+ years of experience in high-volume distribution centers. Skilled in order picking, packing, and inventory management. Forklift certified with a strong safety record. Efficient and reliable team player.",
    j: [
      { r: "Warehouse Associate", co: "LogiCenter Distribution", p: "Mar 2022 - Present", b: ["Pick and pack 300+ orders daily with 99.8% accuracy in fast-paced warehouse", "Operate forklift and pallet jack safely, moving 5,000+ lbs of product daily", "Reduced order processing time by 15% through improved picking route organization"] },
      { r: "Order Filler", co: "Retail Distribution Co", p: "Jul 2021 - Feb 2022", b: ["Fulfilled 200+ orders per shift using RF scanning technology", "Assisted with truck unloading and put-away for 50+ deliveries weekly", "Maintained clean and organized work area, exceeding safety standards"] }
    ],
    ed: { d: "High School Diploma", s: "Memphis High School", p: "2021" },
    sl: ["Operations: Picking, Packing, Shipping, Receiving, Putaway", "Equipment: Forklift, Pallet Jack, Reach Truck, RF Scanner", "Systems: WMS, SAP, RF Scanning, Voice Picking", "Safety: Forklift Certified, OSHA, PPE Compliance"],
    t: ["Quantify order volume and accuracy metrics", "Include forklift certification and equipment experience", "Highlight safety record and compliance", "Showcase efficiency improvements and reliability", "Mention physical stamina and team collaboration"]
  }),
  r({
    slug: "retail-sales-associate", title: "Retail Sales Associate", industry: "Retail", level: "Entry",
    summary: "An enthusiastic retail sales associate delivering exceptional customer service and driving sales in fast-paced environments.",
    skills: ["Customer Service", "Sales", "Cash Handling", "Merchandising", "Product Knowledge", "Inventory", "POS Systems", "Visual Merchandising", "Communication", "Teamwork"],
    n: "Amanda Clark", e: "amanda.clark@email.com", ct: "Columbus", st: "OH", li: "linkedin.com/in/amandaclark",
    stxt: "Retail sales associate with 2+ years of experience in apparel and specialty retail. Skilled in customer engagement, merchandising, and POS operations. Known for exceeding sales targets and building customer loyalty.",
    j: [
      { r: "Sales Associate", co: "FashionHub Retail", p: "Nov 2022 - Present", b: ["Assist 100+ customers daily, achieving $50K+ in monthly sales and 5% conversion rate", "Top seller for 3 consecutive quarters, exceeding sales goals by 25%", "Maintained merchandise displays and ensured store cleanliness standards"] },
      { r: "Retail Associate", co: "Department Store Co", p: "Jun 2022 - Oct 2022", b: ["Operated POS system processing 50+ transactions per shift", "Stocked shelves and managed backroom inventory organization", "Assisted with store opening and closing procedures"] }
    ],
    ed: { d: "High School Diploma", s: "Columbus High School", p: "2022" },
    sl: ["Sales: Customer Engagement, Upselling, Product Knowledge", "Operations: POS, Cash Handling, Returns, Merchandising", "Inventory: Stocking, Replenishment, Cycle Counts", "Skills: Communication, Multitasking, Problem Solving"],
    t: ["Quantify sales volume and achievement against targets", "Highlight customer service and engagement skills", "Showcase product knowledge and merchandising ability", "Include POS and technology proficiency", "Mention flexibility with scheduling including weekends"]
  }),
  r({
    slug: "real-estate-agent", title: "Real Estate Agent", industry: "Real Estate", level: "Mid",
    summary: "A successful real estate agent helping clients buy, sell, and invest in residential properties with expert market knowledge.",
    skills: ["Property Sales", "Buyer Representation", "Market Analysis", "Negotiation", "Marketing", "CRM", "Contracts", "Open Houses", "Client Relationship", "Local Market Knowledge"],
    n: "Jennifer Lopez", e: "jennifer.lopez@email.com", ct: "Miami", st: "FL", li: "linkedin.com/in/jenniferlopez",
    stxt: "Real estate agent with 5+ years of experience in residential sales. Top 10% producer in market with $50M+ in career sales volume. Skilled in negotiation, marketing, and client relationship management. Known for exceptional service and market insight.",
    j: [
      { r: "Real Estate Agent", co: "Premier Properties Realty", p: "Jan 2020 - Present", b: ["Closed 40+ transactions annually totaling $15M+ in sales volume", "Ranked top 5% of agents company-wide for 3 consecutive years", "Grew client base by 60% through referrals and repeat business"] },
      { r: "Junior Agent", co: "HomeFinders Realty", p: "Jun 2019 - Dec 2019", b: ["Assisted lead agents with showings, open houses, and client communications", "Developed market analysis reports for 30+ property listings", "Built initial client database through networking and lead generation"] }
    ],
    ed: { d: "B.A. Business Marketing", s: "University of Miami", p: "2015 - 2019", x: "Florida Real Estate License | 2019" },
    sl: ["Sales: Buyer/Seller Representation, Negotiation, Contracts", "Marketing: Listing Presentations, Social Media, Photography", "Tools: MLS, Zillow, BoomTown, DocuSign", "Areas: Greater Miami, Coral Gables, Fort Lauderdale"],
    t: ["Quantify sales volume, transactions, and rankings", "Include real estate license and designations (GRI, CRS, ABR)", "Highlight market area expertise", "Showcase marketing and lead generation strategies", "Mention client testimonials and referral rates"]
  }),
  r({
    slug: "receptionist", title: "Receptionist", industry: "Admin", level: "Entry",
    summary: "A professional receptionist creating positive first impressions and managing front desk operations efficiently.",
    skills: ["Front Desk", "Phone Etiquette", "Scheduling", "Customer Service", "Microsoft Office", "Multitasking", "Organization", "Data Entry", "Visitor Management", "Communication"],
    n: "Olivia Martinez", e: "olivia.martinez@email.com", ct: "San Diego", st: "CA", li: "linkedin.com/in/oliviamartinez",
    stxt: "Receptionist with 2+ years of experience managing front desk operations. Skilled in phone handling, scheduling, and visitor management. Known for warm professionalism and keeping the office running smoothly.",
    j: [
      { r: "Receptionist", co: "Law Offices of Smith & Associates", p: "Feb 2023 - Present", b: ["Greet and check in 50+ visitors daily, maintaining professional front desk presence", "Manage multi-line phone system, handling 100+ calls daily with professional etiquette", "Coordinate meeting room scheduling and prepared conference spaces for client meetings"] },
      { r: "Front Desk Clerk", co: "Medical Center", p: "Jul 2022 - Jan 2023", b: ["Checked in 40+ patients daily and collected insurance information", "Processed copayments and maintained daily cash log", "Assisted with administrative tasks including filing and data entry"] }
    ],
    ed: { d: "High School Diploma", s: "San Diego High School", p: "2022" },
    sl: ["Front Desk: Greeting, Phone, Scheduling, Visitor Log", "Software: Microsoft Office, Google Workspace", "Systems: Multi-line Phone, VoIP, Door Access", "Skills: Professionalism, Multitasking, Organization, Communication"],
    t: ["Quantify visitor and call volume", "Highlight phone system and scheduling software experience", "Emphasize first-impression and professionalism", "Showcase multitasking in busy environments", "Include language skills if bilingual"]
  }),
  r({
    slug: "office-manager", title: "Office Manager", industry: "Admin", level: "Mid",
    summary: "An organized office manager ensuring efficient office operations, facility management, and team support.",
    skills: ["Office Administration", "Facility Management", "Vendor Management", "Budgeting", "HR Support", "Event Planning", "Procurement", "Team Coordination", "Policy Implementation", "Problem Solving"],
    n: "Rachel Adams", e: "rachel.adams@email.com", ct: "Seattle", st: "WA", li: "linkedin.com/in/racheladams",
    stxt: "Office manager with 5+ years of experience overseeing daily operations of growing companies. Skilled in facility management, vendor relations, and administrative process improvement. Known for creating efficient, positive work environments.",
    j: [
      { r: "Office Manager", co: "GrowthTech Startup", p: "Mar 2020 - Present", b: ["Managed office operations for 80-person company, overseeing expansion to 2 additional floors", "Reduced annual office expenses by 25% through vendor renegotiations and process improvements", "Coordinated company events and team building activities for 100+ employees"] },
      { r: "Administrative Coordinator", co: "Business Services Inc", p: "Jun 2018 - Feb 2020", b: ["Supported office operations for 50-person team", "Managed office supplies, equipment maintenance, and facility requests", "Assisted with onboarding for 30+ new hires annually"] }
    ],
    ed: { d: "B.A. Business Administration", s: "University of Washington", p: "2014 - 2018" },
    sl: ["Operations: Facilities, Vendors, Budget, Inventory", "HR Support: Onboarding, Payroll Support, Policy Enforcement", "Events: Planning, Coordination, Execution", "Software: Slack, Asana, Expensify, TriNet"],
    t: ["Quantify cost savings and efficiency improvements", "Highlight team size and scope managed", "Showcase event planning and culture initiatives", "Include HR and onboarding experience", "Mention scaling operations for growing companies"]
  }),
  r({
    slug: "front-desk-agent", title: "Front Desk Agent", industry: "Hospitality", level: "Entry",
    summary: "A welcoming front desk agent providing exceptional guest services and ensuring smooth hotel operations.",
    skills: ["Guest Services", "Reservations", "Check-in/out", "Phone Etiquette", "Hospitality", "POS Systems", "Problem Solving", "Communication", "Multitasking", "Cash Handling"],
    n: "Sophie Tremblay", e: "sophie.tremblay@email.com", ct: "New Orleans", st: "LA", li: "linkedin.com/in/sophietremblay",
    stxt: "Front desk agent with 2+ years of experience in boutique and full-service hotels. Skilled in guest check-in/out, reservation management, and concierge services. Passionate about delivering memorable guest experiences.",
    j: [
      { r: "Front Desk Agent", co: "Grand Hotel Boutique", p: "Mar 2023 - Present", b: ["Check in 80+ guests daily, processing reservations and special requests efficiently", "Achieved 95% guest satisfaction score through personalized service", "Upsold room upgrades and amenities, increasing average daily revenue by 15%"] },
      { r: "Guest Service Associate", co: "City Center Inn", p: "Jun 2022 - Feb 2023", b: ["Managed front desk operations during evening and weekend shifts", "Handled guest complaints and resolved issues with professionalism", "Processed payments and maintained accurate guest billing records"] }
    ],
    ed: { d: "A.S. Hospitality Management", s: "University of New Orleans", p: "2020 - 2022" },
    sl: ["Front Desk: Check-in/out, Reservations, Concierge, Switchboard", "Systems: Opera, RoomMaster, Booking.com Extranet", "Sales: Upselling, Revenue Management", "Skills: Guest Service, Communication, Problem Solving, Multitasking"],
    t: ["Quantify guest volume and satisfaction metrics", "Highlight PMS system expertise", "Showcase upselling and revenue contribution", "Emphasize language skills and cultural awareness", "Mention night audit or shift flexibility experience"]
  }),
  r({
    slug: "security-guard", title: "Security Guard", industry: "Security", level: "Entry",
    summary: "A vigilant security guard dedicated to maintaining safety and protecting property.",
    skills: ["Surveillance", "Access Control", "Patrol", "Incident Report", "Observation", "Communication", "First Aid", "Conflict Resolution", "CCTV", "Customer Service"],
    n: "David Thompson", e: "david.thompson@email.com", ct: "Atlanta", st: "GA", li: "linkedin.com/in/davidthompson",
    stxt: "Security guard with 2+ years of experience in commercial and residential settings. Skilled in access control, surveillance monitoring, and incident response. Licensed and vigilant with a strong commitment to safety and professionalism.",
    j: [
      { r: "Security Guard", co: "SecureSite Protection", p: "Feb 2023 - Present", b: ["Monitor CCTV and conduct hourly patrols for 20-story office building", "Screen 200+ visitors daily, enforcing access control protocols", "Wrote detailed incident reports for 50+ security events with 100% accuracy"] },
      { r: "Security Officer", co: "NightWatch Security", p: "Jul 2022 - Jan 2023", b: ["Secured warehouse facility during overnight shifts, conducting perimeter checks", "Responded to alarms and unauthorized access attempts promptly", "Maintained daily activity logs and communicated shift handoffs clearly"] }
    ],
    ed: { d: "Security Guard License", s: "Georgia Board of Private Detectives and Security", p: "2022" },
    sl: ["Operations: Patrol, Access Control, CCTV Monitoring, Incident Response", "Equipment: Radio, CCTV, Metal Detector, Flashlight", "Reports: Incident Reports, Daily Logs, Shift Reports", "Certifications: Security License, CPR/First Aid"],
    t: ["Include security guard license and state", "Quantify patrol scope and incident volume", "Highlight surveillance and access control experience", "Showcase report writing and communication skills", "Mention de-escalation and conflict resolution training"]
  }),
  r({
    slug: "tcs-fresher-resume", title: "TCS Fresher Resume", industry: "IT Services", level: "Entry",
    summary: "A motivated B.Tech graduate seeking a Software Engineer role at TCS with strong fundamentals in Java, SQL, and web development.",
    skills: ["Java", "SQL", "HTML/CSS", "JavaScript", "Python", "Data Structures", "Algorithms", "MySQL", "Git", "Communication"],
    n: "Arun Kumar", e: "arun.kumar@email.com", ct: "Chennai", st: "TN", li: "linkedin.com/in/arunkumar",
    stxt: "Recent B.Tech Computer Science graduate with strong academic record and internship experience. Completed TCS-specific training in Java, SQL, and web technologies. Eager to contribute to TCS's global delivery teams with strong problem-solving skills and a passion for software development.",
    j: [
      { r: "Software Development Intern", co: "TechSolutions India", p: "Jan 2024 - Jun 2024", b: ["Developed REST APIs using Java Spring Boot, handling 500+ requests per minute", "Built responsive web dashboards with React.js for internal team monitoring", "Wrote unit tests achieving 85% code coverage using JUnit and Mockito"] }
    ],
    ed: { d: "B.Tech Computer Science", s: "SRM Institute of Technology", p: "2020 - 2024", x: "12th CBSE | 92% | 2018 - 2020" },
    sl: ["Languages: Java, Python, JavaScript, SQL", "Web: HTML/CSS, React.js, Node.js", "Database: MySQL, MongoDB", "Tools: Git, Eclipse, Postman, Linux"],
    t: ["Quantify internship projects with specific metrics", "Include academic projects and final year project", "Mention TCS-specific training or certifications", "Highlight soft skills: teamwork, communication, adaptability", "List relevant coursework: DSA, DBMS, OS, Networking"]
  }),
  r({
    slug: "infosys-fresher-resume", title: "Infosys Fresher Resume", industry: "IT Services", level: "Entry",
    summary: "A detail-oriented engineering graduate with Infosys-specific training in full-stack development and strong analytical skills.",
    skills: ["Java", "Spring Boot", "React", "SQL", "Python", "AWS Basics", "Docker", "Kubernetes", "Agile", "Problem Solving"],
    n: "Priya Sharma", e: "priya.sharma@email.com", ct: "Bangalore", st: "KA", li: "linkedin.com/in/priyasharma-in",
    stxt: "B.E. Computer Science graduate with Infosys campus recruitment training. Completed Infosys Mysore training program in full-stack development. Strong foundation in Java, Spring Boot, and cloud technologies with excellent communication and team collaboration skills.",
    j: [
      { r: "Full Stack Intern", co: "WebWorks India", p: "Feb 2024 - Jul 2024", b: ["Built e-commerce product catalog with Java Spring Boot and React.js", "Designed MySQL database schema supporting 10+ product categories", "Implemented JWT-based authentication and role-based access control"] }
    ],
    ed: { d: "B.E. Computer Science", s: "R.V. College of Engineering", p: "2020 - 2024", x: "12th ISC | 95% | 2018 - 2020" },
    sl: ["Languages: Java, JavaScript, Python, SQL", "Frameworks: Spring Boot, React, Hibernate", "Cloud: AWS (EC2, S3 basics), Docker", "Tools: Git, Jenkins, JIRA, Postman"],
    t: ["Highlight Infosys Mysore training program completion", "Quantify internship deliverables with metrics", "Showcase full-stack project portfolio", "Mention Infosys-specific technologies (Spring, React)", "Include extracurricular achievements and leadership roles"]
  }),
  r({
    slug: "wipro-fresher-resume", title: "Wipro Fresher Resume", industry: "IT Services", level: "Entry",
    summary: "An aspiring IT professional with Wipro Turbo hiring program selection and strong programming fundamentals.",
    skills: ["C++", "Java", "Python", "SQL", "HTML/CSS", "JavaScript", "Data Structures", "Networking", "Linux", "Teamwork"],
    n: "Rahul Verma", e: "rahul.verma@email.com", ct: "Pune", st: "MH", li: "linkedin.com/in/rahulverma",
    stxt: "B.Tech graduate selected through Wipro Turbo hiring program. Strong programming skills in C++, Java, and Python. Completed Wipro's internal training modules in software engineering, database management, and professional communication.",
    j: [
      { r: "Engineering Intern", co: "SoftTech Solutions", p: "Mar 2024 - Aug 2024", b: ["Developed Python scripts automating data processing tasks, reducing manual effort by 60%", "Created interactive dashboards using HTML/CSS/JavaScript for data visualization", "Assisted in migrating legacy applications to cloud infrastructure"] }
    ],
    ed: { d: "B.Tech Information Technology", s: "MIT World Peace University", p: "2020 - 2024", x: "12th Maharashtra Board | 88% | 2018 - 2020" },
    sl: ["Languages: C++, Java, Python, SQL", "Web: HTML/CSS, JavaScript, Bootstrap", "Database: MySQL, Oracle Basics", "Tools: Linux, Git, VS Code, Eclipse"],
    t: ["Mention Wipro Turbo hiring program selection", "Quantify internship automation impact", "Include academic projects with tech stack details", "Highlight certifications (NPTEL, Coursera)", "Showcase communication and presentation skills"]
  }),
  r({
    slug: "google-swe-resume", title: "Google Software Engineer Resume", industry: "Tech", level: "Mid",
    summary: "A software engineer with strong DSA skills and system design knowledge targeting Google SDE roles.",
    skills: ["Data Structures", "Algorithms", "System Design", "Java", "Python", "Go", "Distributed Systems", "Kubernetes", "TensorFlow", "LeetCode"],
    n: "Vikram Patel", e: "vikram.patel@email.com", ct: "Bangalore", st: "KA", li: "linkedin.com/in/vikrampatel", gh: "github.com/vikrampatel",
    stxt: "Software engineer with 4+ years of experience building scalable distributed systems. Proficient in Java, Go, and Python with strong computer science fundamentals. Consistently solved 300+ LeetCode problems and participated in Google Kick Start and Code Jam.",
    j: [
      { r: "Senior Software Engineer", co: "Flipkart", p: "Jan 2022 - Present", b: ["Designed and built low-latency recommendation service handling 50K+ QPS using Java and Redis", "Reduced service latency by 40% through query optimization and caching strategies", "Led migration of monolith to microservices, improving deployment frequency by 5x"] },
      { r: "Software Engineer", co: "Paytm", p: "Jun 2020 - Dec 2021", b: ["Built payment processing pipeline handling ₹100Cr+ monthly transaction volume", "Designed idempotent API contracts ensuring exactly-once processing semantics", "Reduced P0 incidents by 60% through comprehensive monitoring and alerting"] }
    ],
    ed: { d: "B.Tech Computer Science", s: "IIT Bombay", p: "2016 - 2020" },
    sl: ["Languages: Java, Go, Python, C++", "System Design: Microservices, Distributed Systems, Kafka, Redis", "Cloud: GCP, Kubernetes, Docker, Pub/Sub", "DSA: Arrays, Graphs, DP, Trees, LeetCode 300+"],
    t: ["Include competitive programming achievements (Code Jam, Kick Start)", "Quantify system scale (QPS, latency, transaction volume)", "Highlight system design and distributed systems experience", "Showcase open source contributions on GitHub", "Mention Google-specific preparation (DSA, system design rounds)"]
  }),
  r({
    slug: "amazon-sde-resume", title: "Amazon SDE Resume", industry: "Tech", level: "Mid",
    summary: "A results-driven software engineer with experience building large-scale systems aligned with Amazon's leadership principles.",
    skills: ["Java", "AWS", "Distributed Systems", "Microservices", "DynamoDB", "Kafka", "System Design", "Algorithms", "CI/CD", "Leadership"],
    n: "Ananya Singh", e: "ananya.singh@email.com", ct: "Hyderabad", st: "TS", li: "linkedin.com/in/ananyasingh",
    stxt: "Software engineer with 5+ years building and operating large-scale distributed systems. Deep experience with AWS services and microservices architecture. Strong ownership mindset and bias for action aligned with Amazon's leadership principles.",
    j: [
      { r: "Software Development Engineer II", co: "Uber", p: "Mar 2021 - Present", b: ["Built real-time pricing engine processing 10K+ events/sec using Java and Apache Kafka", "Reduced service P99 latency from 200ms to 45ms through performance optimization", "Designed multi-region deployment strategy achieving 99.99% availability SLA"] },
      { r: "Software Development Engineer", co: "MakeMyTrip", p: "Jul 2019 - Feb 2021", b: ["Developed inventory management system serving 5M+ daily API requests", "Implemented caching layer with Redis reducing database load by 70%", "Led code reviews and mentored 3 junior engineers"] }
    ],
    ed: { d: "B.Tech Computer Science", s: "NIT Trichy", p: "2015 - 2019" },
    sl: ["Languages: Java, Python, SQL", "Cloud: AWS (EC2, SQS, DynamoDB, Lambda, S3)", "System Design: Microservices, Event-Driven, CQRS, Saga Pattern", "Leadership: Code Reviews, Mentoring, On-Call, Incident Management"],
    t: ["Align experience with Amazon leadership principles (Ownership, Deliver Results)", "Quantify system scale and business impact", "Highlight on-call and incident response experience", "Showcase bar-raising system design examples", "Include AWS certification if applicable"]
  }),
  r({
    slug: "microsoft-swe-resume", title: "Microsoft Software Engineer Resume", industry: "Tech", level: "Mid",
    summary: "A software engineer with expertise in C#, Azure, and enterprise-scale application development targeting Microsoft roles.",
    skills: ["C#", ".NET", "Azure", "TypeScript", "React", "SQL Server", "System Design", "Design Patterns", "Git", "Agile"],
    n: "Siddharth Rao", e: "siddharth.rao@email.com", ct: "Hyderabad", st: "TS", li: "linkedin.com/in/siddharthrao", gh: "github.com/siddharthrao",
    stxt: "Software engineer with 5+ years of experience building enterprise applications using the Microsoft stack. Expertise in C#, .NET Core, and Azure cloud services. Strong foundation in object-oriented design, design patterns, and clean architecture principles.",
    j: [
      { r: "Software Engineer II", co: "Zoho", p: "Feb 2021 - Present", b: ["Architected multi-tenant SaaS platform serving 10K+ business customers using .NET Core", "Migrated on-premise applications to Azure, reducing infrastructure costs by 35%", "Built real-time collaboration features using SignalR and WebSockets"] },
      { r: "Software Engineer", co: "Freshworks", p: "Aug 2019 - Jan 2021", b: ["Developed RESTful APIs in .NET Framework handling 1M+ daily requests", "Implemented SQL Server indexing strategy improving query performance by 50%", "Wrote comprehensive unit and integration tests with 90% code coverage"] }
    ],
    ed: { d: "B.E. Computer Science", s: "BITS Pilani", p: "2015 - 2019" },
    sl: ["Languages: C#, TypeScript, SQL, Python", "Frameworks: .NET Core, ASP.NET, Entity Framework, React", "Cloud: Azure (App Services, Functions, SQL DB, DevOps)", "Practices: Clean Architecture, DDD, TDD, CI/CD"],
    t: ["Highlight Microsoft technology stack proficiency", "Quantify system scale and migration impact", "Showcase Azure cloud experience with specific services", "Include design pattern and architecture knowledge", "Mention cross-team collaboration and documentation skills"]
  }),
  r({
    slug: "accenture-entry-level-resume", title: "Accenture Entry Level Resume", industry: "IT Services", level: "Entry",
    summary: "A motivated graduate with Accenture-specific training in cloud, DevOps, and application development.",
    skills: ["Java", "Python", "SQL", "AWS", "DevOps", "Docker", "Agile", "Communication", "Problem Solving", "Teamwork"],
    n: "Neha Gupta", e: "neha.gupta@email.com", ct: "Gurgaon", st: "HR", li: "linkedin.com/in/nehagupta",
    stxt: "Recent B.Tech graduate with Accenture campus placement. Completed Accenture's onboarding training in cloud computing, DevOps practices, and application development. Strong analytical and problem-solving skills with excellent communication abilities.",
    j: [
      { r: "Software Development Intern", co: "DigitalIndia Tech", p: "Jan 2024 - Jun 2024", b: ["Built RESTful web services using Java Spring Boot for internal tooling", "Created CI/CD pipelines using Jenkins and Docker reducing deployment time by 70%", "Developed automated test suites reducing regression testing effort by 40%"] }
    ],
    ed: { d: "B.Tech Computer Science", s: "VIT Vellore", p: "2020 - 2024", x: "12th CBSE | 90% | 2018 - 2020" },
    sl: ["Languages: Java, Python, SQL, JavaScript", "Web: Spring Boot, HTML/CSS, Bootstrap", "Cloud: AWS (EC2, S3, Lambda basics), Docker", "Tools: Git, Jenkins, JIRA, Postman, VS Code"],
    t: ["Highlight Accenture training program completion", "Quantify internship achievements with metrics", "Showcase cloud and DevOps foundational skills", "Mention communication and client-facing skills", "Include relevant certifications (AWS Cloud Practitioner)"]
  }),
  r({
    slug: "flipkart-sde-resume", title: "Flipkart SDE Resume", industry: "Tech", level: "Mid",
    summary: "A software engineer with deep experience in e-commerce systems, high-scale services, and problem-solving.",
    skills: ["Java", "Spring Boot", "Kafka", "Redis", "MySQL", "Elasticsearch", "System Design", "DSA", "Microservices", "Kubernetes"],
    n: "Amit Joshi", e: "amit.joshi@email.com", ct: "Bangalore", st: "KA", li: "linkedin.com/in/amitjoshi", gh: "github.com/amitjoshi",
    stxt: "Software engineer with 4+ years of experience building large-scale e-commerce systems. Deep expertise in Java, Spring Boot, and distributed data stores. Solved 400+ LeetCode problems with expertise in system design for high-traffic applications.",
    j: [
      { r: "SDE II", co: "Nykaa", p: "Jan 2022 - Present", b: ["Designed inventory management system handling 10M+ SKUs with sub-100ms query latency", "Built real-time pricing engine using Kafka streams processing 50K+ events per second", "Reduced cart abandonment by 15% through checkout flow optimization"] },
      { r: "Software Engineer", co: "Urban Company", p: "Jun 2020 - Dec 2021", b: ["Developed recommendation engine improving conversion rate by 22%", "Implemented Elasticsearch-based search with typo tolerance and faceted filters", "Migrated MySQL database to sharded architecture handling 5M+ daily transactions"] }
    ],
    ed: { d: "B.Tech Computer Science", s: "DTU Delhi", p: "2016 - 2020" },
    sl: ["Languages: Java, Python, SQL", "Storage: MySQL, Redis, Elasticsearch, MongoDB", "Messaging: Kafka, RabbitMQ, SQS", "Infra: Kubernetes, Docker, AWS, Terraform"],
    t: ["Quantify e-commerce domain metrics (transactions, latency, conversion)", "Highlight system design for high-traffic scenarios", "Showcase data store expertise with specific technologies", "Include competitive programming profile (CodeChef, LeetCode)", "Mention on-call and production incident experience"]
  }),
  r({
    slug: "deloitte-consultant-resume", title: "Deloitte Consultant Resume", industry: "Consulting", level: "Entry",
    summary: "An MBA graduate with strong analytical and consulting skills targeting Deloitte consultant roles.",
    skills: ["Business Analysis", "Market Research", "Data Analysis", "Excel", "PowerPoint", "SQL", "Python", "Client Management", "Presentation", "Strategy"],
    n: "Shreya Iyer", e: "shreya.iyer@email.com", ct: "Mumbai", st: "MH", li: "linkedin.com/in/shreyaiyer",
    stxt: "MBA graduate with internship experience in management consulting. Skilled in data analysis, market research, and client presentations. Strong analytical mindset with the ability to synthesize complex data into actionable business recommendations.",
    j: [
      { r: "Consulting Intern", co: "KPMG India", p: "Apr 2024 - Jul 2024", b: ["Conducted market sizing and competitive analysis for a Fortune 500 client in retail sector", "Built financial models in Excel to evaluate 3 potential acquisition targets", "Presented findings to senior partners, contributing to final recommendation"] },
      { r: "Business Analyst", co: "StartupIndia", p: "Jun 2022 - May 2023", b: ["Analyzed customer data to identify growth opportunities, increasing revenue by 18%", "Created dashboards in Python and Tableau for real-time business monitoring", "Collaborated with cross-functional teams to implement process improvements"] }
    ],
    ed: { d: "MBA Strategy", s: "IIM Ahmedabad", p: "2023 - 2025", x: "B.Com | Shri Ram College of Commerce | 2019 - 2022" },
    sl: ["Consulting: Market Research, Financial Analysis, Strategy Formulation", "Analytics: Excel, SQL, Python (Pandas, NumPy), Tableau", "Communication: Client Presentations, Report Writing, Stakeholder Management", "Industries: Retail, Tech, Financial Services"],
    t: ["Quantify consulting project impact with metrics", "Highlight analytical and financial modeling skills", "Showcase client-facing and presentation experience", "Include industry-specific knowledge and case study preparation", "Mention Deloitte-specific case interview preparation"]
  }),
  r({
    slug: "ibm-entry-level-resume", title: "IBM Entry Level Resume", industry: "Tech", level: "Entry",
    summary: "A technology graduate with skills in cloud, AI, and enterprise solutions targeting IBM's associate program.",
    skills: ["Python", "Java", "SQL", "Cloud Computing", "AI/ML Basics", "Linux", "Docker", "Agile", "Communication", "Problem Solving"],
    n: "Karthik Nair", e: "karthik.nair@email.com", ct: "Kochi", st: "KL", li: "linkedin.com/in/karthiknair",
    stxt: "B.Tech graduate with strong foundation in cloud computing, AI/ML, and enterprise software. Completed IBM SkillsBuild training program. Eager to join IBM's associate system engineer program and contribute to enterprise client solutions.",
    j: [
      { r: "Technology Intern", co: "InfoTech Solutions", p: "Feb 2024 - Jul 2024", b: ["Developed Python-based data processing pipelines handling 100K+ records daily", "Assisted in migrating client workloads to IBM Cloud infrastructure", "Created technical documentation and runbooks for operations team"] }
    ],
    ed: { d: "B.Tech Computer Science", s: "Amrita Vishwa Vidyapeetham", p: "2020 - 2024", x: "12th CBSE | 91% | 2018 - 2020" },
    sl: ["Languages: Python, Java, SQL, Shell Scripting", "Cloud: IBM Cloud, AWS basics, Docker", "AI/ML: Regression, Classification, Numpy, Pandas", "Tools: Linux, Git, Jenkins, VS Code"],
    t: ["Highlight IBM SkillsBuild training and certifications", "Quantify internship contributions with specific metrics", "Showcase cloud platform experience (IBM Cloud preferred)", "Mention open source contributions or hackathon participation", "Include IBM-specific certifications (IBM Cloud Essentials)"]
  }),
]
