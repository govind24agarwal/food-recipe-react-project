import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { links, social } from "./data";

const image = "https://img.icons8.com/ios-glyphs/452/react.png";
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef();

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <IoFastFood className="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks((oldState) => !oldState)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <a key={id} href={url} alt={`link to ${text}`}>
                  <li>{text}</li>
                </a>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <a key={id} href={url}>
                <li>{icon}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
