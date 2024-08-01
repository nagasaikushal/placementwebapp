// CareerPath.js
import React from 'react';
import styled from 'styled-components';

const PathStep = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function CareerPath() {
  return (
    <div>
      <h2>Your Career Path</h2>
      <PathStep>
        <h3>Step 1: Self-Assessment</h3>
        <p>Identify your skills, interests, and values to guide your career choices.</p>
      </PathStep>
      <PathStep>
        <h3>Step 2: Explore Career Options</h3>
        <p>Research different career paths that align with your self-assessment results.</p>
      </PathStep>
      <PathStep>
        <h3>Step 3: Set Career Goals</h3>
        <p>Define short-term and long-term career goals based on your exploration.</p>
      </PathStep>
      <PathStep>
        <h3>Step 4: Develop Skills</h3>
        <p>Identify skills needed for your chosen career path and create a plan to acquire them.</p>
      </PathStep>
    </div>
  );
}

export default CareerPath;