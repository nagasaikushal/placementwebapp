// Feedback.js
import React, { useState } from 'react';
import styled from 'styled-components';
import UserNavBar from './UserNavBar';

const FeedbackContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const FeedbackForm = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const RatingButton = styled.button`
  padding: 10px;
  background-color: ${props => props.selected ? '#007bff' : '#f8f9fa'};
  color: ${props => props.selected ? 'white' : 'black'};
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

function Feedback() {
  const [feedback, setFeedback] = useState({
    category: '',
    problemArea: '',
    severity: '',
    impact: '',
    description: '',
    suggestion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleRatingChange = (name, value) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    // Here you would typically send the feedback to your server
    setFeedback({
      category: '',
      problemArea: '',
      severity: '',
      impact: '',
      description: '',
      suggestion: ''
    });
  };

  return (
    <div>
      <UserNavBar/>
      <FeedbackContainer>
        <h2>Provide Feedback</h2>
        <FeedbackForm onSubmit={handleSubmit}>
          <Section>
            <SectionTitle>Problem Category</SectionTitle>
            <Select name="category" value={feedback.category} onChange={handleChange}>
              <option value="">Select a category</option>
              <option value="academic">Academic</option>
              <option value="personal">Personal</option>
              <option value="career">Career</option>
              <option value="technical">Technical</option>
              <option value="other">Other</option>
            </Select>
          </Section>

          <Section>
            <SectionTitle>Specific Problem Area</SectionTitle>
            <Select name="problemArea" value={feedback.problemArea} onChange={handleChange}>
              <option value="">Select a problem area</option>
              <option value="coursework">Coursework Difficulty</option>
              <option value="timeManagement">Time Management</option>
              <option value="communication">Communication Skills</option>
              <option value="technicalSkills">Technical Skills</option>
              <option value="jobSearch">Job Search</option>
              <option value="mentalHealth">Mental Health</option>
              <option value="other">Other</option>
            </Select>
          </Section>

          <Section>
            <SectionTitle>Problem Severity</SectionTitle>
            <RatingContainer>
              {[1, 2, 3, 4, 5].map(rating => (
                <RatingButton
                  key={rating}
                  selected={feedback.severity === rating.toString()}
                  onClick={() => handleRatingChange('severity', rating.toString())}
                  type="button"
                >
                  {rating}
                </RatingButton>
              ))}
            </RatingContainer>
          </Section>

          <Section>
            <SectionTitle>Impact on Student</SectionTitle>
            <RatingContainer>
              {[1, 2, 3, 4, 5].map(rating => (
                <RatingButton
                  key={rating}
                  selected={feedback.impact === rating.toString()}
                  onClick={() => handleRatingChange('impact', rating.toString())}
                  type="button"
                >
                  {rating}
                </RatingButton>
              ))}
            </RatingContainer>
          </Section>

          <Section>
            <SectionTitle>Detailed Description</SectionTitle>
            <TextArea 
              name="description"
              value={feedback.description}
              onChange={handleChange}
              placeholder="Please provide a detailed description of the problem..."
              rows="5"
            />
          </Section>

          <Section>
            <SectionTitle>Suggested Solution or Support</SectionTitle>
            <TextArea 
              name="suggestion"
              value={feedback.suggestion}
              onChange={handleChange}
              placeholder="If you have any suggestions for addressing this problem, please share them here..."
              rows="3"
            />
          </Section>

          <SubmitButton type="submit">Submit Feedback</SubmitButton>
        </FeedbackForm>
      </FeedbackContainer>
    </div>
  );
}

export default Feedback;