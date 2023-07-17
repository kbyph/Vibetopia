import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import bannerLogo from "../assets/bannerlogo.png";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>
        <img src={bannerLogo} alt="" />
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <FontAwesomeIcon icon={faMusic} /> PLAYLISTS  
      </button>
    </nav>
  );
};

export default Nav;
