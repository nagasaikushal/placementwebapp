// UserNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBell, FaUser } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: #007bff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.5em;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  margin-left: 20px;
`;

const ProfileDropdown = styled.div`
  position: absolute;
  right: 20px;
  top: 60px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const DropdownLink = styled(Link)`
  display: block;
  color: #2b2b2b;
  text-decoration: none;
  padding: 5px 0;
  &:hover {
    text-decoration: underline;
  }
`;

function UserNavbar() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <Nav>
      <Logo to="/dashboard">Campus Portal</Logo>
      <NavLinks>
        <NavLink to="/workshops">Workshops</NavLink>
        <NavLink to="/opportunities">Opportunities</NavLink>
        <NavLink to="/career-path">Job Explorer</NavLink>
        <NavLink to="/feedback">Feedback</NavLink>
        <IconButton>
          <FaBell />
        </IconButton>
        <IconButton onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
          <FaUser />
        </IconButton>
        <ProfileDropdown show={showProfileDropdown}>
          <DropdownLink to="/dashboard/profile">View/Edit Profile</DropdownLink>
          <DropdownLink to="/logout">Log Out</DropdownLink>
        </ProfileDropdown>
      </NavLinks>
    </Nav>
  );
}

export default UserNavbar;