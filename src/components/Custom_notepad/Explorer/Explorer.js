import React from "react";
import styled from "styled-components";
import { Modal, Frame } from "@react95/core";
import { Explorer100 } from "@react95/icons";

import File from "./Item";
const FilesWrapper = styled.div`
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
`;

function Explorer({ items, closeExplorer, openNotepad, isMobile }) {
  return (
    <Modal
      icon="windows_explorer"
      title="Explorer - Insaf Khamzin"
      closeModal={closeExplorer}
      style={{
        left: isMobile ? "5%" : "15%",
        top: "30%",
        width: isMobile ? "90%" :400,
      }}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
        { name: "Help", list: [] },
      ]}
    >
      <Frame bg="white" boxShadow="in" height="100%">
        <FilesWrapper>
          <File 
          name="test"
          icon =  {<Explorer100 variant="32x32_4" className="pointer"/>}
          ></File>
                    <File 
          name="test"
          ></File>
                    <File 
          name="test"
          ></File>
                    <File 
          name="test"
          ></File>
                    <File 
          name="test"
          ></File>
        </FilesWrapper>
      </Frame>
    </Modal>
  );
}

export default Explorer;
