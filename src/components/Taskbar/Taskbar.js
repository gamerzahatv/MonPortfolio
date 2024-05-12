import { List, TaskBar } from "@react95/core";
import {
  FolderExe,
  Progman34,
  CdMusic,
  Progman37,
  Wintrust103
} from "@react95/icons";
import { EventEmitter } from "../EventEmitter";
// import { useContext } from "react";
import socialMedia from "./data_taskbar";
export default function WebsiteTaskbar(props) {
  const handleClick = (x) => {
    switch (x) {
      case "terrabit":
        window.open("https://terrabit.idealabs.network");
        break;
      default:
        EventEmitter.dispatch(x, true);
        break;
    }
  };

  return (
    // <TaskBar list={<List>
    //     <List.Item icon={<FolderExe/>}>
    //       <span onClick={() => handleClick('programs')}>Programs</span>
    //       <List>
    //         <List.Item icon={<Network3 />} onClick={() => handleClick('etf')}>
    //           <span>ETF Network</span>
    //         </List.Item>
    //         <List.Item icon={<Explore />} onClick={() => handleClick('terrabit')}>
    //           TerraBit
    //         </List.Item>
    //       </List>
    //     </List.Item>
    //     <List.Item icon={<FolderFile/>} >
    //       <span onClick={() => handleClick('docs')}>Socials</span>
    //       <List>
    //         <List.Item>
    //           ETF Network Tech Docs
    //         </List.Item>
    //         <List.Item>
    //           Whitepaper
    //         </List.Item>
    //         <List.Item>
    //           Roadmap
    //         </List.Item>
    //       </List>
    //     </List.Item>
    //     <List.Item icon={<HelpBook />}>
    //       Settings
    //       <List>
    //         <List.Item onClick={() => handleClick('randomness')}>
    //           Randomness
    //         </List.Item>
    //         <List.Item onClick={() => handleClick('timelock')}>
    //           Timelock Encryption
    //         </List.Item>
    //         <List.Item onClick={() => handleClick('dtxs')}>
    //           Delayed Transactions
    //         </List.Item>
    //       </List>
    //     </List.Item>
    //     <List.Divider />
    //     <List.Item icon={<HelpBook/>} onClick={() => handleClick('about')}>
    //       <span>About</span>
    //     </List.Item>
    //   </List>} />
    <TaskBar
      list={
        <List>
          {/* <List.Item icon={<FolderExe variant="32x32_4" />}>
            Programs
            <List>
              <List.Item
                // onClick={handleOpenVaporwaveModal1}
                icon={<CdMusic variant="16x16_4" />}
              >
                Game
              </List.Item>
            
            
              <List.Item
                // onClick={handleOpenVaporwaveModal1}
                icon={<CdMusic variant="16x16_4" />}
              >
                Internet Tools
              </List.Item>
            </List>
          </List.Item> */}

          <List.Item icon={<Progman34 variant="32x32_4" />}>
            Socials
            <List>
              {socialMedia.map(({ icon, name, url }) => (
                <List.Item
                  as="a"
                  href={url}
                  icon={icon}
                  key={name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {name}
                </List.Item>
              ))}
            </List>
          </List.Item>
          {/* <List.Item icon={<CdMusic variant="32x32_4" />}>
            Tunes
            <List>
              <List.Item
                // onClick={handleOpenVaporwaveModal1}
                icon={<CdMusic variant="32x32_4" />}
              >
                Janne's Vaporwave Story from 2018
              </List.Item>
            </List>
          </List.Item> */}
          <List.Item
            icon={<Wintrust103 variant="32x32_4" />}
            onClick={() => handleClick("card")}
          >
            Cardbusiness
          </List.Item>
          <List.Divider />
          <List.Item
            icon={<Progman37 variant="32x32_4" />}
            onClick={() => handleClick("about")}
          >
            About
          </List.Item>
        </List>
      }
    />
  );
}
