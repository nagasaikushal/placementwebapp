// Dashboard.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import UserNavbar from './UserNavBar';
import Workshops from './Workshops';
import Opportunities from './Opportunities';
import FeedBack from './FeedBack';
import CareerPath from './CareerPath';
import Profile from './Profile';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function Dashboard() {
  return (
    <div>
      <UserNavbar />
      <DashboardContainer>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/career-path" element={<CareerPath />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </DashboardContainer>
    </div>
  );
}

function DashboardHome() {
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <p>Here you can access various features to help with your campus placement journey.</p>
    </div>
  );
}

export default Dashboard;