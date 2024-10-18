import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mastermind from "../../Assets/Projects/mastermind.png";
import talko from "../../Assets/Projects/talko.png";
import oasis from "../../Assets/Projects/oasis.png";
import theatio from "../../Assets/Projects/theatio.png";
import houseMarketplace from "../../Assets/Projects/house-marketplace.png";
import githubFinder from "../../Assets/Projects/github-finder.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talko}
              isBlog={false}
              title="Talko"
              description="Personal Chat Rooms or Workspace to share resources and hangout with friends build with Next.js, React, Zustand, Prisma, Clerk, PostgreSQL and Tailwind. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/heuzin/talko"
              demoLink="https://talko-production.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oasis}
              isBlog={false}
              title="Oasis"
              description="Online marketplace for short-and-long-term homestays and experiences in various countries and regions. Build with Next.js, React, Zustand, Prisma, NextAuth, MongoDB and Tailwind. Users are able to add their properties for reservations, create reservations and like or dislike listings."
              ghLink="https://github.com/heuzin/oasis"
              demoLink="https://oasis-sand.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mastermind}
              isBlog={false}
              title="Mastermind"
              description="State-of-the-art AI SaaS Platform with five AI tools. Build with Next.js, OpenAI, ReplicateAI Stripe, Crips, Prisma and Clerk. Chatbot, Image and Code generation with OpenAI, music and video generation with ReplicateAI. Stripe for simulating user payment on limit free tier."
              ghLink="https://github.com/heuzin/mastermind"
              demoLink="https://mastermind-production-c347.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theatio}
              isBlog={false}
              title="Theatio"
              description="Millions of movies and TV shows to discover. Build with Next.js, TypeScript, Tailwind and Themoviedb API. Find the latest and greatest movies and shows"
              ghLink="https://github.com/heuzin/theatio"
              demoLink="https://imdb-peach-iota.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houseMarketplace}
              isBlog={false}
              title="House Marketplace"
              description="Find great deals on Houses for Sale or Rent. Build with React, Typescript and Firebase. Best online real estate platform for selling, buying and rent a property, commercial, house, villa, home, apartment."
              ghLink="https://github.com/heuzin/house-marketplace"
              demoLink="https://house-marketplace-ten-khaki.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubFinder}
              isBlog={false}
              title="GitHub Finder"
              description="Search Github profiles, Read full users profile details. Links to users websites. Build with React, TypeScript, Tailwind and GitHub API."
              ghLink="https://github.com/heuzin/github-finder"
              demoLink="https://github-finder-nu-two.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
