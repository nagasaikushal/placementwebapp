
// Feedback.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FeedbackForm = styled.form`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
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
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    // Here you would typically send the feedback to your server
    setFeedback('');
  };

  return (
    <div>
      <h2>Provide Feedback</h2>
      <FeedbackForm onSubmit={handleSubmit}>
        <TextArea 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
          rows="5"
        />
        <SubmitButton type="submit">Submit Feedback</SubmitButton>
      </FeedbackForm>
    </div>
  );
}

export default Feedback;