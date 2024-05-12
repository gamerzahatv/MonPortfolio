import React from "react";
import { Frame } from "@react95/core";
import { ProjectData } from "./data_project";
import File from "../../Custom_notepad/Explorer/Item";
import styled from "styled-components";
const FilesWrapper = styled.div`
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
`;
function Project_explorer() {
  return (
    <Frame bg="white" boxShadow="in" height="100%">
      <FilesWrapper>
        {ProjectData.map((project, index) => (
        <File  key={index}
            name={project.name}
            icon={project.icon}
        ></File>
        ))}
      </FilesWrapper>
    </Frame>
  );
}

export default Project_explorer;
