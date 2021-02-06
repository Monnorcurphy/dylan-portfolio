import React from "react";
import Dylan from '../assets/Dylan.jpg'
import {useMediaQuery} from './hooks';

const Content = ({ styles }) => {

  const isRowBased = useMediaQuery('(min-width: 500px)');
  
  const contentStyle = {
    paddingTop: styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.footerMenuHeight + 20,
    paddingLeft: 20,
  };

  const imageStyling={
    display: `${isRowBased ? 'flex' : 'block'}`
  }

  return (
    <div style={contentStyle}>
      <h2 id="aboutMe">About me</h2>
     <div style={imageStyling}>
      <img src={Dylan} style={{paddingRight: '10px'}}/>
      <div>My name is Dylan. I am a video editor who likes to play board games and redesign my kitchen</div>
      </div>
      <h2 id="businessStuff">Business stuff</h2>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <h2 id="funStuff">Fun stuff</h2>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <h2 id="otherStuff">Other stuff</h2>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
  );
};

export default Content;