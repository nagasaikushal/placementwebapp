import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './NavBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const Form = styled.form`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Step = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#007bff' : '#ccc'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal details
    fullName: '', preferredName: '', dob: '', personalEmail: '', phoneNumber: '',
    residencyAddress: '', guardianName: '', occupation: '', guardianContact: '',
    // Academic details
    universityName: '', universityAddress: '', universityId: '', yearOfStudy: '',
    branch: '', major: '', passoutBatch: '', specialization: '', universityEmail: '',
    // Resume/CV
    resume: null,
    // Job preference
    desiredRole: '', preferredIndustry: '', expectedSalary: '', preferredLocation: '',
    // Present Career Path
    currentJob: '', currentCompany: '', yearsOfExperience: '', careerGoals: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <>
            <Title>Personal Details</Title>
            <InputGroup>
              <InputWrapper>
                <Label>Full Name</Label>
                <Input name="fullName" value={formData.fullName} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Preferred Name</Label>
                <Input name="preferredName" value={formData.preferredName} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Date of Birth</Label>
                <Input type="date" name="dob" value={formData.dob} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Personal Email</Label>
                <Input type="email" name="personalEmail" value={formData.personalEmail} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Phone Number</Label>
                <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Residency Address</Label>
                <TextArea name="residencyAddress" value={formData.residencyAddress} onChange={handleChange} rows="3" />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Guardian/Parent Name</Label>
                <Input name="guardianName" value={formData.guardianName} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Occupation</Label>
                <Input name="occupation" value={formData.occupation} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputWrapper>
              <Label>Guardian/Parent Contact</Label>
              <Input type="tel" name="guardianContact" value={formData.guardianContact} onChange={handleChange} />
            </InputWrapper>
          </>
        );
      case 2:
        return (
          <>
            <Title>Academic Details</Title>
            <InputGroup>
              <InputWrapper>
                <Label>University Name</Label>
                <Input name="universityName" value={formData.universityName} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>University ID</Label>
                <Input name="universityId" value={formData.universityId} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputWrapper>
              <Label>University Address</Label>
              <TextArea name="universityAddress" value={formData.universityAddress} onChange={handleChange} rows="3" />
            </InputWrapper>
            <InputGroup>
              <InputWrapper>
                <Label>Year of Study</Label>
                <Input name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Branch</Label>
                <Input name="branch" value={formData.branch} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Major</Label>
                <Input name="major" value={formData.major} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Passout Batch</Label>
                <Input name="passoutBatch" value={formData.passoutBatch} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Specialization</Label>
                <Input name="specialization" value={formData.specialization} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>University Email</Label>
                <Input type="email" name="universityEmail" value={formData.universityEmail} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
          </>
        );
      case 3:
        return (
          <>
            <Title>Resume / CV Upload</Title>
            <InputWrapper>
              <Label>Upload your Resume/CV</Label>
              <Input type="file" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx" />
            </InputWrapper>
          </>
        );
      case 4:
        return (
          <>
            <Title>Job Preference</Title>
            <InputGroup>
              <InputWrapper>
                <Label>Desired Role</Label>
                <Input name="desiredRole" value={formData.desiredRole} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Preferred Industry</Label>
                <Select name="preferredIndustry" value={formData.preferredIndustry} onChange={handleChange}>
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
                <Input type="number" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Preferred Location</Label>
                <Input name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
          </>
        );
      case 5:
        return (
          <>
            <Title>Present Career Path</Title>
            <InputGroup>
              <InputWrapper>
                <Label>Current Job (if any)</Label>
                <Input name="currentJob" value={formData.currentJob} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Current Company</Label>
                <Input name="currentCompany" value={formData.currentCompany} onChange={handleChange} />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Years of Experience</Label>
                <Input type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} />
              </InputWrapper>
              <InputWrapper>
                <Label>Career Goals</Label>
                <TextArea name="careerGoals" value={formData.careerGoals} onChange={handleChange} rows="4" />
              </InputWrapper>
            </InputGroup>
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Form onSubmit={handleSubmit}>
          <StepIndicator>
            {[1, 2, 3, 4, 5].map(num => (
              <Step key={num} active={step === num}>{num}</Step>
            ))}
          </StepIndicator>
          {renderStep()}
          <ButtonGroup>
            {step > 1 && <Button type="button" onClick={prevStep}>Previous</Button>}
            {step < 5 ? (
              <Button type="button" onClick={nextStep}>Next</Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </ButtonGroup>
        </Form>
      </Container>
    </div>
  );
}

export default RegistrationForm;