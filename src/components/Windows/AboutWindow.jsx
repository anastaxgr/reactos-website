import React, { useRef } from "react";

// custom hooks
import useTheme from "@hooks/useTheme";
import useWindow from "@hooks/useWindow";

// components
import DragableWindow from "../DragableWindow";

function AboutWindow() {
  const { darkTheme } = useTheme();
  const iRef = useRef(null);
  const theme = darkTheme ? "light" : "dark";
  const { open, close, isOpen } = useWindow();

  const handleClose = () => {
    close("profile");
  };

  if (!isOpen("profile")) {
    return null;
  }

  return (
    <DragableWindow nodeRef={iRef} title="My Profile" onClose={handleClose}>
      <main>
        <section>
          <div className="content">
            <div className="avatar"></div>

            <div className="greeting">
              <div className="intro">👋 Hi, my name is</div>
              <div className="name">Alexander Anastasiadis</div>
              <div className="job">Junior Front-end Developer</div>
            </div>

            <div className="socials">
              <a href="#" className="social linkedin"></a>
              <a href="#" className="social github"></a>
              <a href="#" className="social instagram"></a>
              <a href="#" className="social codepen"></a>
            </div>
          </div>
        </section>

        {/* familiarity with tools */}
        <section>
          <div className="content">
            <div className="headings">
              <div className="icon">
                <span className="lnr lnr-diamond"></span>
              </div>
              <div className="head1">Familiar with</div>
            </div>

            <img
              src={`https://skillicons.dev/icons?i=js,ts,sass,react,redux,graphql,electron,tailwind,jquery,alpinejs,jest,gulp,figma,php,wordpress,&perline=5&theme=${theme}`}
            />
          </div>
        </section>

        {/*  hobbies and interests */}
        <section>
          <div className="content">
            <div className="headings">
              <div className="icon">
                <i className="las la-laptop-code"></i>
              </div>
              <div className="head1">Hobbies</div>
              <div className="head2">Things who keeps me calm</div>
            </div>

            <div className="hobbies">
              <span title="Photography">
                <i className="las la-camera"></i>
              </span>

              <span title="Fishing">
                <i className="las la-fish"></i>
              </span>

              <span title="Gaming">
                <i className="las la-gamepad"></i>
              </span>

              <span title="Traveling">
                <i className="las la-globe"></i>
              </span>

              <span title="Wood Working">
                <i className="las la-tools"></i>
              </span>

              <span title="Playing Guitar">
                <i className="las la-guitar"></i>
              </span>
            </div>
          </div>
        </section>
    </main>
    </DragableWindow>
  );
}

export default AboutWindow;
