// ITCareerPath.js
import React, { useState } from 'react';
import styled from 'styled-components';
import UserNavBar from './UserNavBar';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const CategorySelector = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button`
  background-color: ${props => props.active ? '#4caf50' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : 'black'};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
`;

const CareerPathContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
`;

const PathStep = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  border-left: 5px solid #3498db;
`;

const StepTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 15px;
`;

const SectionTitle = styled.h4`
  color: #34495e;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  position: relative;
  &:before {
    content: "•";
    color: #3498db;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const ResourceLink = styled.a`
  color: #3498db;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CertificationBadge = styled.span`
  background-color: #e74c3c;
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  margin-left: 10px;
`;

const Salary = styled.p`
  font-weight: bold;
  color: #27ae60;
`;

const ITCareerPath = () => {
  const [selectedCategory, setSelectedCategory] = useState('webDevelopment');

  const categories = {
    webDevelopment: "Web Development",
    dataScience: "Data Science",
    cloudComputing: "Cloud Computing",
    cybersecurity: "Cybersecurity",
    aiMl: "AI and Machine Learning"
  };

  const careerPaths = {
    webDevelopment: [
      {
        title: "Entry Level: Junior Web Developer",
        description: "Start your career by building and maintaining websites, focusing on front-end technologies.",
        skills: ["HTML", "CSS", "JavaScript", "Basic version control (Git)", "Responsive design"],
        averageSalary: "₹3,00,000 - ₹5,00,000 per annum",
        jobResponsibilities: [
          "Implement website designs using HTML, CSS, and JavaScript",
          "Fix bugs and improve website performance",
          "Collaborate with designers and back-end developers"
        ],
        certifications: ["AWS Certified Developer - Associate", "Microsoft Certified: Azure Developer Associate"],
        resources: [
          { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
          { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
          { name: "Codecademy Web Development Path", url: "https://www.codecademy.com/learn/paths/web-development" }
        ],
        growthOpportunities: "Can progress to Full Stack Developer or specialize in front-end frameworks"
      },
      {
        title: "Mid Level: Full Stack Developer",
        description: "Expand your skills to cover both front-end and back-end development, working on complete web applications.",
        skills: ["React/Angular/Vue", "Node.js", "SQL/NoSQL databases", "RESTful APIs", "DevOps basics"],
        averageSalary: "₹6,00,000 - ₹12,00,000 per annum",
        jobResponsibilities: [
          "Design and implement full-stack web applications",
          "Optimize applications for performance and scalability",
          "Integrate various services and APIs"
        ],
        certifications: ["MongoDB Certified Developer", "Oracle Certified Professional, Java SE 11 Developer"],
        resources: [
          { name: "The Odin Project", url: "https://www.theodinproject.com/" },
          { name: "Full Stack Open", url: "https://fullstackopen.com/en/" },
          { name: "Docker for Developers", url: "https://www.docker.com/blog/docker-for-developers/" }
        ],
        growthOpportunities: "Can move into specialized roles like DevOps Engineer or progress to Lead Developer"
      },
      {
        title: "Senior Level: Lead Developer / Architect",
        description: "Lead development teams and design large-scale web applications, focusing on system architecture and best practices.",
        skills: ["System design", "Scalability", "Team leadership", "Advanced framework knowledge", "Cloud architecture"],
        averageSalary: "₹15,00,000 - ₹30,00,000 per annum",
        jobResponsibilities: [
          "Design and oversee implementation of complex web applications",
          "Mentor junior developers and lead technical discussions",
          "Make high-level technical decisions and set coding standards"
        ],
        certifications: ["AWS Certified Solutions Architect - Professional", "Google Cloud Certified - Professional Cloud Architect"],
        resources: [
          { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
          { name: "Tech Lead Handbook", url: "https://github.com/apptension/tech-lead-handbook" },
          { name: "Designing Data-Intensive Applications (Book)", url: "https://dataintensive.net/" }
        ],
        growthOpportunities: "Can progress to CTO or start own tech consultancy"
      }
    ],
    dataScience: [
      {
        title: "Entry Level: Junior Data Analyst",
        description: "Begin your data science career by analyzing data sets and creating basic visualizations.",
        skills: ["Python", "SQL", "Basic statistics", "Data visualization (e.g., Matplotlib, Seaborn)", "Excel"],
        averageSalary: "₹3,50,000 - ₹6,00,000 per annum",
        jobResponsibilities: [
          "Collect and clean data from various sources",
          "Perform basic statistical analyses",
          "Create data visualizations and reports"
        ],
        certifications: ["IBM Data Science Professional Certificate", "Google Data Analytics Professional Certificate"],
        resources: [
          { name: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
          { name: "DataCamp", url: "https://www.datacamp.com/" },
          { name: "Statistics and Probability in Data Science using Python", url: "https://www.edx.org/course/statistics-and-probability-in-data-science-using-python" }
        ],
        growthOpportunities: "Can progress to Data Scientist or specialize in data engineering"
      },
      {
        title: "Mid Level: Data Scientist",
        description: "Apply advanced analytics and machine learning techniques to extract insights from complex data sets.",
        skills: ["Machine Learning", "R", "Advanced statistics", "Big Data technologies (e.g., Hadoop, Spark)", "Data mining"],
        averageSalary: "₹8,00,000 - ₹16,00,000 per annum",
        jobResponsibilities: [
          "Develop predictive models using machine learning algorithms",
          "Conduct complex data analyses to solve business problems",
          "Communicate findings to non-technical stakeholders"
        ],
        certifications: ["Certified Analytics Professional (CAP)", "SAS Certified Data Scientist"],
        resources: [
          { name: "Coursera - Data Science Specialization", url: "https://www.coursera.org/specializations/jhu-data-science" },
          { name: "Fast.ai", url: "https://www.fast.ai/" },
          { name: "Elements of Statistical Learning (Book)", url: "https://web.stanford.edu/~hastie/ElemStatLearn/" }
        ],
        growthOpportunities: "Can move into specialized roles like Machine Learning Engineer or progress to Lead Data Scientist"
      },
      {
        title: "Senior Level: Lead Data Scientist / ML Engineer",
        description: "Lead data science teams, design advanced ML systems, and drive data-driven decision making across the organization.",
        skills: ["Deep Learning", "MLOps", "Research skills", "Advanced ML frameworks (e.g., TensorFlow, PyTorch)", "Cloud ML platforms"],
        averageSalary: "₹18,00,000 - ₹35,00,000 per annum",
        jobResponsibilities: [
          "Design and implement large-scale machine learning systems",
          "Lead research initiatives and stay updated with latest ML advancements",
          "Develop data science strategy aligned with business goals"
        ],
        certifications: ["Google Cloud Certified - Professional Machine Learning Engineer", "Microsoft Certified: Azure AI Engineer Associate"],
        resources: [
          { name: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
          { name: "Papers With Code", url: "https://paperswithcode.com/" },
          { name: "Dive into Deep Learning (Book)", url: "https://d2l.ai/" }
        ],
        growthOpportunities: "Can progress to Chief Data Officer or start an AI consultancy"
      }
    ],
    cloudComputing: [
      {
        title: "Entry Level: Cloud Support Associate",
        description: "Start your cloud computing career by providing technical support for cloud services and infrastructure.",
        skills: ["Basic networking", "Linux fundamentals", "Intro to AWS/Azure/GCP", "Virtualization basics", "Ticketing systems"],
        averageSalary: "₹3,00,000 - ₹5,00,000 per annum",
        jobResponsibilities: [
          "Respond to customer inquiries about cloud services",
          "Troubleshoot basic cloud infrastructure issues",
          "Assist with cloud resource provisioning and management"
        ],
        certifications: ["AWS Certified Cloud Practitioner", "Microsoft Certified: Azure Fundamentals"],
        resources: [
          { name: "AWS Training", url: "https://aws.amazon.com/training/" },
          { name: "Microsoft Learn", url: "https://docs.microsoft.com/en-us/learn/" },
          { name: "Google Cloud Training", url: "https://cloud.google.com/training" }
        ],
        growthOpportunities: "Can progress to Cloud Administrator or specialize in specific cloud services"
      },
      {
        title: "Mid Level: Cloud Administrator",
        description: "Manage and optimize cloud infrastructure, focusing on scalability, security, and cost-effectiveness.",
        skills: ["Advanced cloud services", "Infrastructure as Code (e.g., Terraform, CloudFormation)", "Cloud security", "Monitoring and logging", "Containerization (e.g., Docker, Kubernetes)"],
        averageSalary: "₹7,00,000 - ₹14,00,000 per annum",
        jobResponsibilities: [
          "Design and implement cloud infrastructure solutions",
          "Manage cloud resources and optimize for performance and cost",
          "Implement security best practices and ensure compliance"
        ],
        certifications: ["AWS Certified Solutions Architect - Associate", "Microsoft Certified: Azure Administrator Associate"],
        resources: [
          { name: "A Cloud Guru", url: "https://acloudguru.com/" },
          { name: "Terraform Tutorial", url: "https://learn.hashicorp.com/terraform" },
          { name: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/" }
        ],
        growthOpportunities: "Can move into Cloud Architecture or specialize in DevOps"
      },
      {
        title: "Senior Level: Cloud Architect",
        description: "Design and oversee implementation of complex, multi-cloud and hybrid cloud solutions for enterprises.",
        skills: ["Multi-cloud strategies", "Enterprise architecture", "Cloud optimization", "Disaster recovery planning", "Cloud governance"],
        averageSalary: "₹18,00,000 - ₹35,00,000 per annum",
        jobResponsibilities: [
          "Design scalable and resilient cloud architectures",
          "Develop cloud adoption strategies for organizations",
          "Lead cloud transformation initiatives and mentor teams"
        ],
        certifications: ["AWS Certified Solutions Architect - Professional", "Google Cloud Certified - Professional Cloud Architect"],
        resources: [
          { name: "AWS Architecture Center", url: "https://aws.amazon.com/architecture/" },
          { name: "Google Cloud Architecture Center", url: "https://cloud.google.com/architecture" },
          { name: "The Open Group Architecture Framework (TOGAF)", url: "https://www.opengroup.org/togaf" }
        ],
        growthOpportunities: "Can progress to Chief Cloud Officer or start a cloud consultancy firm"
      }
    ],
    cybersecurity: [
      {
        title: "Entry Level: Security Analyst",
        description: "Begin your cybersecurity career by monitoring systems for security threats and implementing basic security measures.",
        skills: ["Network security", "Basic cryptography", "Security tools (e.g., Wireshark, Nmap)", "Firewall configuration", "Incident response basics"],
        averageSalary: "₹3,50,000 - ₹6,00,000 per annum",
        jobResponsibilities: [
          "Monitor security systems and logs for potential threats",
          "Conduct vulnerability scans and assist in patch management",
          "Respond to and document security incidents"
        ],
        certifications: ["CompTIA Security+", "EC-Council Certified Ethical Hacker (CEH)"],
        resources: [
          { name: "Cybrary", url: "https://www.cybrary.it/" },
          { name: "TryHackMe", url: "https://tryhackme.com/" },
          { name: "SANS Cyber Aces Online", url: "https://www.sans.org/cyberaces/" }
        ],
        growthOpportunities: "Can progress to Security Engineer or specialize in specific areas like network security or application security"
      },
      {
        title: "Mid Level: Penetration Tester",
        description: "Conduct authorized simulated cyberattacks to identify and fix security vulnerabilities in systems and networks.",
        skills: ["Ethical hacking", "Vulnerability assessment", "Scripting for security (e.g., Python, Bash)", "Web application security", "Social engineering"],
        averageSalary: "₹8,00,000 - ₹15,00,000 per annum",
        jobResponsibilities: [
          "Plan and execute penetration tests on networks, applications, and systems",
          "Develop custom tools and scripts for testing",
          "Provide detailed reports on findings and recommendations for mitigation"
        ],
        certifications: ["Offensive Security Certified Professional (OSCP)", "GIAC Penetration Tester (GPEN)"],
        // ... (continuing from the previous message)

        resources: [
          { name: "HackTheBox", url: "https://www.hackthebox.eu/" },
          { name: "OWASP", url: "https://owasp.org/" },
          { name: "Metasploit Unleashed", url: "https://www.offensive-security.com/metasploit-unleashed/" }
        ],
        growthOpportunities: "Can progress to Senior Security Consultant or specialize in Red Team operations"
      },
      {
        title: "Senior Level: Information Security Manager",
        description: "Lead the organization's cybersecurity efforts, developing security strategies and managing security teams.",
        skills: ["Risk management", "Security policies and compliance", "Incident response planning", "Security awareness training", "Vendor management"],
        averageSalary: "₹18,00,000 - ₹35,00,000 per annum",
        jobResponsibilities: [
          "Develop and implement organization-wide security policies and procedures",
          "Manage security teams and coordinate incident response",
          "Conduct risk assessments and ensure compliance with regulations"
        ],
        certifications: ["Certified Information Systems Security Professional (CISSP)", "Certified Information Security Manager (CISM)"],
        resources: [
          { name: "SANS Institute", url: "https://www.sans.org/" },
          { name: "ISC2 (CISSP certification)", url: "https://www.isc2.org/Certifications/CISSP" },
          { name: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" }
        ],
        growthOpportunities: "Can progress to Chief Information Security Officer (CISO) or start a cybersecurity consultancy"
      }
    ],
    aiMl: [
      {
        title: "Entry Level: Junior ML Engineer",
        description: "Begin your AI/ML career by assisting in the development and implementation of machine learning models.",
        skills: ["Python", "Basic ML algorithms", "Data preprocessing", "Intro to TensorFlow/PyTorch", "Version control (Git)"],
        averageSalary: "₹4,00,000 - ₹7,00,000 per annum",
        jobResponsibilities: [
          "Assist in data collection and preprocessing for ML models",
          "Implement and test basic machine learning algorithms",
          "Help maintain and update existing ML models"
        ],
        certifications: ["Google TensorFlow Developer Certificate", "AWS Certified Machine Learning - Specialty"],
        resources: [
          { name: "Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
          { name: "Kaggle Intro to Machine Learning", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
          { name: "Fast.ai Practical Deep Learning", url: "https://course.fast.ai/" }
        ],
        growthOpportunities: "Can progress to ML Engineer or specialize in specific domains like NLP or Computer Vision"
      },
      {
        title: "Mid Level: AI Developer",
        description: "Design and implement more complex AI systems, working on advanced machine learning and deep learning projects.",
        skills: ["Advanced ML algorithms", "Deep Learning", "Natural Language Processing", "Computer Vision", "MLOps basics"],
        averageSalary: "₹10,00,000 - ₹20,00,000 per annum",
        jobResponsibilities: [
          "Design and implement complex machine learning and deep learning models",
          "Optimize AI models for performance and scalability",
          "Collaborate with data scientists and product teams to develop AI-driven solutions"
        ],
        certifications: ["Microsoft Certified: Azure AI Engineer Associate", "IBM AI Engineering Professional Certificate"],
        resources: [
          { name: "Deep Learning Specialization", url: "https://www.coursera.org/specializations/deep-learning" },
          { name: "Hugging Face Transformers", url: "https://huggingface.co/transformers/" },
          { name: "OpenCV Tutorials", url: "https://docs.opencv.org/master/d9/df8/tutorial_root.html" }
        ],
        growthOpportunities: "Can move into specialized AI research roles or progress to AI Architect"
      },
      {
        title: "Senior Level: AI Researcher / Architect",
        description: "Lead cutting-edge AI research initiatives and design large-scale AI systems for complex problems.",
        skills: ["State-of-the-art AI models", "Research paper implementation", "AI ethics and governance", "System design for AI", "Advanced mathematics"],
        averageSalary: "₹25,00,000 - ₹50,00,000 per annum",
        jobResponsibilities: [
          "Conduct original research in AI and machine learning",
          "Design and oversee implementation of large-scale AI systems",
          "Provide technical leadership and mentorship to AI teams"
        ],
        certifications: ["No standard certifications at this level, focus on research contributions and patents"],
        resources: [
          { name: "arXiv", url: "https://arxiv.org/list/cs.AI/recent" },
          { name: "MIT AI Ethics Course", url: "https://www.media.mit.edu/courses/the-ethics-and-governance-of-artificial-intelligence/" },
          { name: "NeurIPS Conference", url: "https://nips.cc/" }
        ],
        growthOpportunities: "Can progress to Chief AI Officer, lead research labs, or start an AI-focused company"
      }
    ]
  };

  return (
    <div>
      <UserNavBar/>
    <Container>
      <Title>IT Career Paths</Title>
      <CategorySelector>
        {Object.entries(categories).map(([key, value]) => (
          <CategoryButton
            key={key}
            active={selectedCategory === key}
            onClick={() => setSelectedCategory(key)}
          >
            {value}
          </CategoryButton>
        ))}
      </CategorySelector>
      <CareerPathContainer>
        <h2>{categories[selectedCategory]} Career Path</h2>
        {careerPaths[selectedCategory].map((step, index) => (
          <PathStep key={index}>
            <StepTitle>{step.title}</StepTitle>
            <p>{step.description}</p>
            <Salary>Average Salary: {step.averageSalary}</Salary>
            
            <SectionTitle>Key Skills:</SectionTitle>
            <List>
              {step.skills.map((skill, i) => (
                <ListItem key={i}>{skill}</ListItem>
              ))}
            </List>

            <SectionTitle>Job Responsibilities:</SectionTitle>
            <List>
              {step.jobResponsibilities.map((resp, i) => (
                <ListItem key={i}>{resp}</ListItem>
              ))}
            </List>

            <SectionTitle>Recommended Certifications:</SectionTitle>
            <List>
              {step.certifications.map((cert, i) => (
                <ListItem key={i}>{cert} <CertificationBadge>Certification</CertificationBadge></ListItem>
              ))}
            </List>

            <SectionTitle>Learning Resources:</SectionTitle>
            <List>
              {step.resources.map((resource, i) => (
                <ListItem key={i}>
                  <ResourceLink href={resource.url} target="_blank" rel="noopener noreferrer">
                    {resource.name}
                  </ResourceLink>
                </ListItem>
              ))}
            </List>

            <SectionTitle>Growth Opportunities:</SectionTitle>
            <p>{step.growthOpportunities}</p>
          </PathStep>
        ))}
      </CareerPathContainer>
    </Container>
    </div>
  );
};

export default ITCareerPath;