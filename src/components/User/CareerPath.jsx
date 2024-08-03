// JobExplorer.js
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

const JobTypeSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TypeButton = styled.button`
  background-color: ${props => props.active ? '#4caf50' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : 'black'};
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
`;

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
`;

const JobCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
`;

const JobTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 10px;
`;

const JobDetail = styled.p`
  margin: 5px 0;
  color: #34495e;
`;

const SkillTag = styled.span`
  background-color: #e0f2f1;
  color: #00796b;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9em;
  margin-right: 5px;
  margin-bottom: 5px;
  display: inline-block;
`;

const JobExplorer = () => {
  const [jobType, setJobType] = useState('tech');

  const jobs = {
    tech: [
      {
        title: 'Software Developer',
        experience: '2-5 years',
        salary: '₹5,00,000 - ₹15,00,000 per annum',
        skills: ['Java', 'Python', 'JavaScript', 'React'],
        companies: 'TCS, Infosys, Wipro',
        locations: 'Bangalore, Hyderabad, Pune',
        education: "Bachelor's in Computer Science or related field",
        growthProspects: 'High demand, potential for senior developer or architect roles',
        workCulture: 'Fast-paced, collaborative, often involves agile methodologies',
        jobDescription: 'Design, develop, and maintain software applications. Collaborate with cross-functional teams to define and develop new features.'
      },
      {
        title: 'Data Scientist',
        experience: '3-7 years',
        salary: '₹8,00,000 - ₹20,00,000 per annum',
        skills: ['Python', 'R', 'Machine Learning', 'SQL', 'Statistics'],
        companies: 'Amazon, Microsoft, IBM',
        locations: 'Bangalore, Mumbai, Gurgaon',
        education: "Master's or PhD in Data Science, Statistics, or related field",
        growthProspects: 'Rapidly growing field with opportunities in AI and advanced analytics',
        workCulture: 'Research-oriented, requires continuous learning',
        jobDescription: 'Analyze complex data sets to find patterns and insights. Develop predictive models and machine learning algorithms.'
      },
      {
        title: 'Cloud Architect',
        experience: '5-10 years',
        salary: '₹15,00,000 - ₹35,00,000 per annum',
        skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
        companies: 'Accenture, Deloitte, Capgemini',
        locations: 'Bangalore, Pune, Chennai',
        education: "Bachelor's or Master's in Computer Science with cloud certifications",
        growthProspects: 'High demand due to cloud adoption, potential for CTO roles',
        workCulture: 'Strategic thinking, often involves consulting and stakeholder management',
        jobDescription: 'Design and oversee the implementation of cloud infrastructure. Develop cloud adoption strategies and ensure scalability and security.'
      }
    ],
    nonTech: [
      {
        title: 'Marketing Manager',
        experience: '5-8 years',
        salary: '₹8,00,000 - ₹18,00,000 per annum',
        skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Social Media Management'],
        companies: 'Unilever, P&G, ITC',
        locations: 'Mumbai, Delhi, Bangalore',
        education: "Bachelor's or Master's in Marketing or Business Administration",
        growthProspects: 'Potential for CMO roles, opportunity to specialize in digital marketing',
        workCulture: 'Creative, data-driven, often involves managing multiple projects',
        jobDescription: 'Develop and implement marketing strategies. Analyze market trends and manage brand positioning.'
      },
      {
        title: 'HR Specialist',
        experience: '3-6 years',
        salary: '₹5,00,000 - ₹12,00,000 per annum',
        skills: ['Recruitment', 'Employee Relations', 'HRIS', 'Labor Laws'],
        companies: 'Mahindra, Tata, Reliance',
        locations: 'Mumbai, Pune, Chennai',
        education: "Bachelor's in Human Resources or related field",
        growthProspects: 'Opportunities for HR Manager or Director roles',
        workCulture: 'People-oriented, requires strong interpersonal skills',
        jobDescription: 'Manage recruitment processes, employee relations, and HR policies. Ensure compliance with labor laws and company policies.'
      },
      {
        title: 'Financial Analyst',
        experience: '2-5 years',
        salary: '₹6,00,000 - ₹15,00,000 per annum',
        skills: ['Financial Modeling', 'Excel', 'PowerBI', 'Accounting Principles'],
        companies: 'HDFC Bank, ICICI Bank, Ernst & Young',
        locations: 'Mumbai, Bangalore, Gurgaon',
        education: "Bachelor's in Finance, Accounting, or Economics",
        growthProspects: 'Potential for senior analyst or finance manager roles',
        workCulture: 'Detail-oriented, often involves working with tight deadlines',
        jobDescription: 'Analyze financial data, prepare reports, and provide insights to guide business decisions. Develop financial models and forecasts.'
      }
    ]
  };

  return (
    <div>
      <UserNavBar/>
      <Container>
      <Title>Job Explorer</Title>
      <JobTypeSelector>
        <TypeButton 
          active={jobType === 'tech'} 
          onClick={() => setJobType('tech')}
        >
          Tech Jobs
        </TypeButton>
        <TypeButton 
          active={jobType === 'nonTech'} 
          onClick={() => setJobType('nonTech')}
        >
          Non-Tech Jobs
        </TypeButton>
      </JobTypeSelector>
      <JobGrid>
        {jobs[jobType].map((job, index) => (
          <JobCard key={index}>
            <JobTitle>{job.title}</JobTitle>
            <JobDetail><strong>Experience:</strong> {job.experience}</JobDetail>
            <JobDetail><strong>Estimated Salary:</strong> {job.salary}</JobDetail>
            <JobDetail><strong>Skills Required:</strong></JobDetail>
            <div>
              {job.skills.map((skill, i) => (
                <SkillTag key={i}>{skill}</SkillTag>
              ))}
            </div>
            <JobDetail><strong>Top Companies:</strong> {job.companies}</JobDetail>
            <JobDetail><strong>Locations:</strong> {job.locations}</JobDetail>
            <JobDetail><strong>Education:</strong> {job.education}</JobDetail>
            <JobDetail><strong>Growth Prospects:</strong> {job.growthProspects}</JobDetail>
            <JobDetail><strong>Work Culture:</strong> {job.workCulture}</JobDetail>
            <JobDetail><strong>Job Description:</strong> {job.jobDescription}</JobDetail>
          </JobCard>
        ))}
      </JobGrid>
    </Container>
    </div>
  );
};

export default JobExplorer;