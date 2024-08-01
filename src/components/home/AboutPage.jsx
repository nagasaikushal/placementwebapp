import React from 'react';
import styled from 'styled-components';
import Navbar from './NavBar';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  color: #007bff;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
  &:before {
    content: "•";
    color: #007bff;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Container>
        <Title>About Our Campus Placement Portal</Title>

        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <Paragraph>
            At [Your Portal Name], we're dedicated to bridging the gap between talented students and leading employers. Our mission is to empower students with the tools and opportunities they need to launch successful careers while providing companies with access to a pool of exceptional candidates.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>What We Offer</SectionTitle>
          <List>
            <ListItem>Comprehensive job listings from top companies across various industries</ListItem>
            <ListItem>Career guidance and counseling to help students make informed decisions</ListItem>
            <ListItem>Resume building and interview preparation resources</ListItem>
            <ListItem>Direct communication channels with potential employers</ListItem>
            <ListItem>Updates on industry trends and job market insights</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Our Story</SectionTitle>
          <Paragraph>
            Founded in [year], [Your Portal Name] was born out of a vision to revolutionize the campus placement process. We recognized the challenges faced by both students and recruiters and set out to create a platform that would streamline the hiring process and open up new opportunities for everyone involved.
          </Paragraph>
          <Paragraph>
            Since our inception, we've helped thousands of students secure their dream jobs and assisted numerous companies in finding their ideal candidates. Our success is measured by the success stories of our users, and we're proud to be a part of their journey.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Our Team</SectionTitle>
          <Paragraph>
            Behind [Your Portal Name] is a dedicated team of professionals with backgrounds in technology, human resources, and education. We're passionate about what we do and are constantly working to improve our platform and services to better serve our users.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Join Us</SectionTitle>
          <Paragraph>
            Whether you're a student looking to kickstart your career or an employer seeking fresh talent, we invite you to join our community. Together, we can shape the future of campus placements and create meaningful connections that last a lifetime.
          </Paragraph>
        </Section>
      </Container>
    </div>
  );
}

export default AboutPage;