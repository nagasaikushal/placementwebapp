
// Profile.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileForm = styled.form`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SaveButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

function Profile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    major: 'Computer Science',
    graduationYear: '2025',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    // Here you would typically send the updated profile to your server
  };

  return (
    <div>
      <h2>Your Profile</h2>
      <ProfileForm onSubmit={handleSubmit}>
        <Input 
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <Input 
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
        />
        <Input 
          name="major"
          value={profile.major}
          onChange={handleChange}
          placeholder="Major"
        />
        <Input 
          name="graduationYear"
          value={profile.graduationYear}
          onChange={handleChange}
          placeholder="Graduation Year"
        />
        <SaveButton type="submit">Save Changes</SaveButton>
      </ProfileForm>
    </div>
  );
}

export default Profile;