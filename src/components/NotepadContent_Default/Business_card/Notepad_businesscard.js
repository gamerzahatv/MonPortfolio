import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Frame } from "@react95/core";
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactSocialMediaIcons} from 'react-social-media-icons';


function NotepadBusinessCard() {
  const [flip, setFlip] = useState(false);



  return (
    <div >
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
          <Frame
              bg="white"
              boxShadow="in"
              height="100%"
              padding={20}
              style={{
                  overflowY: "auto",
                  maxHeight: "60vh",
              }}
            onClick={() => setFlip(!flip)}
          >
            <div >
                <Stack >
                  <div className="p-2"  style={{ color: 'blue' }}>&lt;CARD&gt;</div>
                  <div className="ms-4"><span style={{ color: 'green' }}>&lt;NAME&gt;</span> Mongkol Namawrong <span style={{ color: 'green' }}>&lt;/NAME&gt;</span></div>
                  <div className="ms-4"><span style={{ color: 'green' }}>&lt;NICKNAME&gt;</span> Mon <span style={{ color: 'green' }}>&lt;/NICKNAME&gt;</span></div>
                  <div className="ms-4"><span style={{ color: 'green' }}>&lt;EMAIL&gt;</span> mon.mongkol.namawrong@gmail.com <span style={{ color: 'green' }}>&lt;/EMAIL&gt;</span></div>
                  <div className="ms-4"><span style={{ color: 'green' }}>&lt;MOBILE&gt;</span> 063-153-3040 <span style={{ color: 'green' }}>&lt;/MOBILE&gt;</span></div>
                  <div className="p-2" style={{ color: 'blue' }}>&lt;/CARD&gt;</div>
                </Stack>
            </div>
          </Frame>
          <Frame
            key="back"
            bg="white"
            boxShadow="in"
            height="100%"
            padding={20}
            style={{
              overflowY: "auto",
              maxHeight: "60vh",
            }}
            onClick={() => setFlip(!flip)}
          >
            <div >
                <Stack >
                  <div className="p-2 "style={{ color: 'blue' }}>&lt;SOCIAL&gt;</div>
                  <div className="p-1 ms-5"><ReactSocialMediaIcons icon="github"  borderColor	="#FFF" url="https://github.com/gamerzahatv" size="32" />      GITHUB</div>
                  <div className="p-1 ms-5"><ReactSocialMediaIcons  icon="instagram"  borderColor	="#FFF" url="https://www.instagram.com/mon_throwgame.t_t/" size="32" />      INSTAGRAM</div>
                  <div className="p-1 ms-5"><ReactSocialMediaIcons  icon="facebook"   borderColor	="#FFF" url="https://facebook.com/profile.php?id=100009453533541" size="32" />      FACEBOOK</div>
                  <div className="p-2 "style={{ color: 'blue' }}>&lt;SOCIAL&gt;</div>
                </Stack>
                
            </div>


          </Frame>
        </ReactCardFlip>
      {/* </Modal> */}
    </div>
  );
}

export default NotepadBusinessCard;
