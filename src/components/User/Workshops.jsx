// Workshops.js
import React, { useState } from 'react';
import styled from 'styled-components';
import UserNavBar from './UserNavBar';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
`;

const WorkshopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const WorkshopCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`;

const WorkshopTitle = styled.h3`
  color: #3498db;
  margin-bottom: 10px;
`;

const WorkshopDate = styled.p`
  color: #e74c3c;
  font-weight: bold;
  margin-bottom: 10px;
`;

const WorkshopDescription = styled.p`
  color: #34495e;
  margin-bottom: 15px;
`;

const RegisterButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
`;

const CloseButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  float: right;
`;

function Workshops() {
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const workshops = [
    {
      id: 1,
      title: "Resume Building Workshop",
      date: "July 15, 2024",
      description: "Learn how to create a standout resume that will catch employers' attention. This workshop covers formatting tips, content optimization, and tailoring your resume for specific job applications.",
      capacity: 30,
      registered: 25
    },
    {
      id: 2,
      title: "Interview Skills Masterclass",
      date: "July 22, 2024",
      description: "Prepare for your interviews with our comprehensive masterclass. Topics include common interview questions, body language tips, and strategies for showcasing your skills and experience.",
      capacity: 50,
      registered: 35
    },
    {
      id: 3,
      title: "Networking for Career Success",
      date: "August 5, 2024",
      description: "Discover the power of professional networking in this interactive workshop. Learn how to build and maintain professional relationships, use LinkedIn effectively, and leverage your network for career opportunities.",
      capacity: 40,
      registered: 20
    },
    {
      id: 4,
      title: "Personal Branding in the Digital Age",
      date: "August 12, 2024",
      description: "Develop your personal brand to stand out in the job market. This workshop covers online presence management, creating a compelling personal narrative, and using social media for professional growth.",
      capacity: 35,
      registered: 30
    }
  ];

  const handleRegister = (workshop) => {
    setSelectedWorkshop(workshop);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWorkshop(null);
  };

  return (
    <div>
      <UserNavBar />
      <Container>
        <Title>Upcoming Workshops</Title>
        <WorkshopGrid>
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id}>
              <WorkshopTitle>{workshop.title}</WorkshopTitle>
              <WorkshopDate>Date: {workshop.date}</WorkshopDate>
              <WorkshopDescription>{workshop.description}</WorkshopDescription>
              <p>Capacity: {workshop.registered}/{workshop.capacity}</p>
              <RegisterButton 
                onClick={() => handleRegister(workshop)}
                disabled={workshop.registered >= workshop.capacity}
              >
                {workshop.registered >= workshop.capacity ? 'Full' : 'Register'}
              </RegisterButton>
            </WorkshopCard>
          ))}
        </WorkshopGrid>
      </Container>
      {showModal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <h3>Register for {selectedWorkshop.title}</h3>
            <p>Date: {selectedWorkshop.date}</p>
            <p>Available Spots: {selectedWorkshop.capacity - selectedWorkshop.registered}</p>
            {/* Add registration form fields here */}
            <RegisterButton onClick={closeModal}>Confirm Registration</RegisterButton>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default Workshops;