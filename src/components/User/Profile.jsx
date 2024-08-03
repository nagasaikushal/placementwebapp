import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserNavBar from './UserNavBar';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ProfileForm = styled.form`
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
  color: #333;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Profile() {
  const [profile, setProfile] = useState({
    // Personal details
    fullName: '', preferredName: '', dob: '', personalEmail: '', phoneNumber: '',
    residencyAddress: '', guardianName: '', occupation: '', guardianContact: '',
    // Academic details
    educations: [{
      universityName: '', universityAddress: '', universityId: '', yearOfStudy: '',
      branch: '', major: '', passoutBatch: '', specialization: '', universityEmail: '',
    }],
    // Resume and CV
    resume: null,
    cv: null,
    // Job preference
    desiredRole: '', preferredIndustry: '', expectedSalary: '', preferredLocation: '',
    // Present Career Path
    currentJob: '', currentCompany: '', yearsOfExperience: '', careerGoals: '',
    // Profile Picture
    profilePicture: null
  });

  useEffect(() => {
    // Fetch user profile data from API
    // For now, we'll use mock data
    const mockProfileData = {
      fullName: 'John Doe',
      preferredName: 'Johnny',
      dob: '1995-05-15',
      personalEmail: 'john.doe@example.com',
      phoneNumber: '1234567890',
      residencyAddress: '123 Main St, City, Country',
      guardianName: 'Jane Doe',
      occupation: 'Engineer',
      guardianContact: '0987654321',
      educations: [{
        universityName: 'Example University',
        universityAddress: '456 University Ave, City, Country',
        universityId: 'EX12345',
        yearOfStudy: '3',
        branch: 'Engineering',
        major: 'Computer Science',
        passoutBatch: '2025',
        specialization: 'Machine Learning',
        universityEmail: 'john.doe@university.edu',
      }],
      desiredRole: 'Software Engineer',
      preferredIndustry: 'Technology',
      expectedSalary: '75000',
      preferredLocation: 'San Francisco',
      currentJob: 'Intern',
      currentCompany: 'Tech Startup',
      yearsOfExperience: '1',
      careerGoals: 'To become a lead developer in a cutting-edge tech company.',
    };

    setProfile(prevProfile => ({...prevProfile, ...mockProfileData}));
  }, []);

  const handleChange = (e, index = null) => {
    const { name, value, type, files } = e.target;
    
    if (index !== null) {
      // Handle education fields
      const newEducations = [...profile.educations];
      newEducations[index] = { ...newEducations[index], [name]: value };
      setProfile(prevProfile => ({...prevProfile, educations: newEducations}));
    } else if (type === 'file') {
      // Handle file inputs
      if (files[0]) {
        setProfile(prevProfile => ({
          ...prevProfile,
          [name]: files[0],
          [name + 'Name']: files[0].name,
          [name + 'Preview']: URL.createObjectURL(files[0])
        }));
      }
    } else {
      // Handle all other inputs
      setProfile(prevProfile => ({...prevProfile, [name]: value}));
    }
  };

  const handleFileDelete = (fileType) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [fileType]: null,
      [fileType + 'Name']: null,
      [fileType + 'Preview']: null
    }));
  };

  const addEducation = () => {
    setProfile(prevProfile => ({
      ...prevProfile,
      educations: [...prevProfile.educations, {
        universityName: '', universityAddress: '', universityId: '', yearOfStudy: '',
        branch: '', major: '', passoutBatch: '', specialization: '', universityEmail: '',
      }]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    // Here you would typically send the updated profile to your server
  };

  return (
    <div>
      <UserNavBar />
      <ProfileContainer>
        <h2>Your Profile</h2>
        <ProfileForm onSubmit={handleSubmit}>
          <Section>
            <SectionTitle>Profile Picture</SectionTitle>
            <ProfilePicture>
              {profile.profilePicturePreview && <img src={profile.profilePicturePreview} alt="Profile" />}
            </ProfilePicture>
            <Input 
              type="file" 
              name="profilePicture" 
              onChange={handleChange} 
              accept="image/*"
            />
          </Section>

          <Section>
            <SectionTitle>Personal Details</SectionTitle>
            <InputGroup>
              <InputWrapper>
                <Label>Full Name</Label>
                <Input name="fullName" value={profile.fullName} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Preferred Name</Label>
                <Input name="preferredName" value={profile.preferredName} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Date of Birth</Label>
                <Input type="date" name="dob" value={profile.dob} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Personal Email</Label>
                <Input type="email" name="personalEmail" value={profile.personalEmail} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Phone Number</Label>
                <Input type="tel" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Residency Address</Label>
                <TextArea name="residencyAddress" value={profile.residencyAddress} onChange={handleChange} rows="3" />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Guardian/Parent Name</Label>
                <Input name="guardianName" value={profile.guardianName} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Occupation</Label>
                <Input name="occupation" value={profile.occupation} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputWrapper>
              <Label>Guardian/Parent Contact</Label>
              <Input type="tel" name="guardianContact" value={profile.guardianContact} onChange={handleChange} />
            </InputWrapper>
          </Section>

          <Section>
            <SectionTitle>Academic Details</SectionTitle>
            {profile.educations.map((education, index) => (
              <div key={index}>
                <h4>Education {index + 1}</h4>
                <InputGroup>
                  <InputWrapper>
                    <Label>University Name</Label>
                    <Input name="universityName" value={education.universityName} onChange={(e) => handleChange(e, index)} />
                  </InputWrapper>
                  <InputWrapper>
                    <Label>University ID</Label>
                    <Input name="universityId" value={education.universityId} onChange={(e) => handleChange(e, index)} />
                  </InputWrapper>
                </InputGroup>
                <InputWrapper>
                  <Label>University Address</Label>
                  <TextArea name="universityAddress" value={education.universityAddress} onChange={(e) => handleChange(e, index)} rows="3" />
                </InputWrapper>
                <InputGroup>
                  <InputWrapper>
                    <Label>Year of Study</Label>
                    <Input name="yearOfStudy" value={education.yearOfStudy} onChange={(e) => handleChange(e, index)} />
                  </InputWrapper>
                  <InputWrapper>
                    <Label>Branch</Label>
                    <Input name="branch" value={education.branch} onChange={(e) => handleChange(e, index)} />
                  </InputWrapper>
                </InputGroup>
                <InputGroup>
                  <InputWrapper>
                    <Label>Major</Label>
                    <Input name="major" value={education.major} onChange={(e) => handleChange(e, index)} />
                  </InputWrapper>
                  <InputWrapper>
                    <Label>Passout Batch</Label>
                    <Input name="passoutBatch" value={education.passoutBatch} onChange={(e) => handleChange(e, index)} />
                  </InputWrapper>
                </InputGroup>
                <InputGroup>
                  <InputWrapper>
                    <Label>Specialization</Label>
                    <Input name="specialization" value={education.specialization} onChange={(e) => handleChange(e, index)} />
                  </InputWrapper>
                  <InputWrapper>
                    <Label>University Email</Label>
                    <Input type="email" name="universityEmail" value={education.universityEmail} onChange={(e) => handleChange(e, index)} />
                  </InputWrapper>
                </InputGroup>
              </div>
            ))}
            <Button type="button" onClick={addEducation}>Add Another Education</Button>
          </Section>

          <Section>
            <SectionTitle>Resume & CV</SectionTitle>
            <InputGroup>
              <InputWrapper>
                <Label>Upload your Resume</Label>
                <Input 
                  type="file" 
                  name="resume" 
                  onChange={handleChange} 
                  accept=".pdf,.doc,.docx"
                />
                {profile.resumeName && (
                  <div>
                    <p>Current file: {profile.resumeName}</p>
                    <Button type="button" onClick={() => handleFileDelete('resume')}>Remove</Button>
                  </div>
                )}
              </InputWrapper>
              <InputWrapper>
                <Label>Upload your CV</Label>
                <Input 
                  type="file" 
                  name="cv" 
                  onChange={handleChange} 
                  accept=".pdf,.doc,.docx"
                />
                {profile.cvName && (
                  <div>
                    <p>Current file: {profile.cvName}</p>
                    <Button type="button" onClick={() => handleFileDelete('cv')}>Remove</Button>
                  </div>
                )}
              </InputWrapper>
            </InputGroup>
          </Section>

          <Section>
            <SectionTitle>Job Preference</SectionTitle>
            <InputGroup>
              <InputWrapper>
                <Label>Desired Role</Label>
                <Input name="desiredRole" value={profile.desiredRole} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Preferred Industry</Label>
                <Select name="preferredIndustry" value={profile.preferredIndustry} onChange={handleChange}>
                  <option value="">Select an industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  {/* Add more options as needed */}
                </Select>
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Expected Salary</Label>
                <Input type="number" name="expectedSalary" value={profile.expectedSalary} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Preferred Location</Label>
                <Input name="preferredLocation" value={profile.preferredLocation} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
          </Section>

          <Section>
            <SectionTitle>Present Career Path</SectionTitle>
            <InputGroup>
              <InputWrapper>
                <Label>Current Job (if any)</Label>
                <Input name="currentJob" value={profile.currentJob} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Current Company</Label>
                <Input name="currentCompany" value={profile.currentCompany} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Years of Experience</Label>
                <Input type="number" name="yearsOfExperience" value={profile.yearsOfExperience} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Career Goals</Label>
                <TextArea name="careerGoals" value={profile.careerGoals} onChange={handleChange} rows="4" />
              </InputWrapper>
            </InputGroup>
          </Section>

          <Button type="submit">Save Changes</Button>
        </ProfileForm>
      </ProfileContainer>
    </div>
  );
}

export default Profile;