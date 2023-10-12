import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PROJECTS } from "../copy/projects";
import { Body, BodyBold, Heading4 } from "../styles";

const Work: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Heading4>
        I&apos;m a builder at heart and love to learn and explore. Here is some
        of the stuff I&apos;ve built.
      </Heading4>
      <br />
      {/* <Heading4 style={{ color: "gray" }}>highlights </Heading4>
      <Heading4>Mind Speech SSVEP Interface</Heading4>
      <Heading4>CompuTetris</Heading4> */}
      <Heading4 style={{ color: "gray" }}>all projects </Heading4>

      {/* TODO: add filter someday */}

      <ProjectsContainer>
        {PROJECTS.map((project) => {
          if (project.content) {
            return (
              <ProjectItem
                key={PROJECTS.indexOf(project)}
                onClick={() => {
                  navigate(project.to);
                }}
              >
                <BodyBold>{project.name}</BodyBold>
                <Body style={{ marginTop: "4px" }}>{project.description}</Body>
              </ProjectItem>
            );
          } else {
            return (
              <ProjectItem
                key={PROJECTS.indexOf(project)}
                href={project.github}
                target="_blank"
              >
                <BodyBold>{project.name}</BodyBold>
                <Body style={{ marginTop: "4px" }}>{project.description}</Body>
              </ProjectItem>
            );
          }
        })}
      </ProjectsContainer>
    </div>
  );
};

export default Work;

const ProjectsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const ProjectItem = styled.a`
  width: 50%;
  // background: red;
  min-height: 80px;
  box-sizing: border-box;
  margin-top: 8px;
  padding: 16px 32px 16px 16px;
  border-radius: 8px;
  cursor: pointer;

  text-decoration: none;
  color: white;

  &:hover {
    background: #333333;
  }
`;
