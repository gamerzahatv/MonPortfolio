import React from "react";
import styled from "styled-components";
// import { Desktop } from '@react95/icons';
// import { ProjectData } from "../../NotepadContent_Default/Project_github/data_project";
import { Explorer100 } from "@react95/icons";
const StyledItem = styled.div`
  display: flex;
  justify-content: center; /* Changed to center for better alignment */
  align-items: center;
  flex-direction: column;
  text-align: center;
  width:25%;
  padding: 10px 0;
`;

const StyledSpan = styled.span`
  margin-top: 5px;
`;

function File({ name, icon }) {
  return (
    <>
	<StyledItem >
	{icon}
	<StyledSpan>{name}</StyledSpan>
	</StyledItem>
    </>
  );
}

export default File;
