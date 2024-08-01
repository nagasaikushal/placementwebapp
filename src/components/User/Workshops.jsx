// Workshops.js
import React from 'react';
import styled from 'styled-components';

const WorkshopCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function Workshops() {
  return (
    <div>
      <h2>Upcoming Workshops</h2>
      <WorkshopCard>
        <h3>Resume Building Workshop</h3>
        <p>Date: July 15, 2024</p>
        <p>Learn how to create a standout resume that will catch employers' attention.</p>
      </WorkshopCard>
      <WorkshopCard>
        <h3>Interview Skills Masterclass</h3>
        <p>Date: July 22, 2024</p>
        <p>Prepare for your interviews with our comprehensive masterclass.</p>
      </WorkshopCard>
    </div>
  );
}

export default Workshops;





