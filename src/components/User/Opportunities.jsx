// Opportunities.js
import React from 'react';
import styled from 'styled-components';

const JobCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function Opportunities() {
  return (
    <div>
      <h2>Job Opportunities</h2>
      <JobCard>
        <h3>Software Developer Intern</h3>
        <p>Company: Tech Innovations Inc.</p>
        <p>Location: San Francisco, CA</p>
        <p>Apply by: August 1, 2024</p>
      </JobCard>
      <JobCard>
        <h3>Marketing Assistant</h3>
        <p>Company: Global Marketing Solutions</p>
        <p>Location: New York, NY</p>
        <p>Apply by: July 25, 2024</p>
      </JobCard>
    </div>
  );
}

export default Opportunities;