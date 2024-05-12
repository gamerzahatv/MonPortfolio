import { Frame } from "@react95/core";
import React from "react";
import { ReactSocialMediaIcons } from "react-social-media-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";


function About() {
  return (
    <div>
      <Frame
        bg="white"
        boxShadow="in"
        height="100%"
        padding={20}
        style={{
          overflowY: "auto",
          maxHeight: "80vh",
        }}
      >
        <h2>About</h2>
        <p>
          My name is Mon . I am a new Computer Science graduate looking for experience as a
          backend or API web developer. I am always ready to learn new things,
          experiment, customize, and apply my knowledge.
          <br></br>
        </p>

        <p>
          I'm interested in applying for a programming internship, equipped with
          skills in basic JavaScript, SQL , Docker, Proxmox VM management, PHP,
          and familiarity with Debian OS.
          <br />
          <br />
          Key Skills:
          <ul>
            <li>
              <b>Docker</b>: Familiar with containerization basics and eager to
              learn more about managing containerized applications.
            </li>
            <li>
              <b>JavaScript</b>: Have a basic understanding of javascript in
              managing APIs, connecting to databases, and socket programming.
            </li>
            <li>
              <b>Python</b>: Have a grasp of Python basics and eager to apply it
              to web development, and automation.
            </li>
            <li>
              <b>Php</b>: Practice doing some PHP projects, creating websites
              using the laravel framework and connecting the database with
              mariadb.
            </li>
          </ul>
          Additional Skills:
          <ul>
            <li> Basic understanding of version control systems like Git.</li>
            <li>
              {" "}
              Willingness to learn and adapt to new technologies and tools.
            </li>
            <li>
              {" "}
              Strong problem-solving skills and a desire to tackle challenges
              head-on.
            </li>
          </ul>
        </p>
        <h5>Contact</h5>
        <div>
          <Stack>
            <div className="p-1 ms-5">
              <ReactSocialMediaIcons
                icon="github"
                borderColor="#FFF"
                url="https://github.com/gamerzahatv"
                size="32"
              />{" "}
              GITHUB
            </div>
            <div className="p-1 ms-5">
              <ReactSocialMediaIcons
                icon="instagram"
                borderColor="#FFF"
                url="https://www.instagram.com/mon_throwgame.t_t/"
                size="32"
              />{" "}
              INSTAGRAM
            </div>
            <div className="p-1 ms-5">
              <ReactSocialMediaIcons
                icon="facebook"
                borderColor="#FFF"
                url="https://facebook.com/profile.php?id=100009453533541"
                size="32"
              />{" "}
              FACEBOOK
            </div>
            <div className="p-1 ms-5">
              <ReactSocialMediaIcons
                icon="mail"
                borderColor="#FFF"
                size="32"
                url=""
              />
              mon.mongkol.namawrong@gmail.com
            </div>
          </Stack>
        </div>
        {/* <div>
                <img
                    src={
                        process.env.PUBLIC_URL + "/mon.png"
                    }
                />
                <h5>Nice to meet you</h5>
                </div> */}

              <div className="text-center justify-content-center">
                <img src={process.env.PUBLIC_URL + "/mon.png"} alt="Me" />
                <h5 className="mt-3">Nice to meet you =w=</h5>
              </div>

      </Frame>
    </div>
  );
}

export default About;
