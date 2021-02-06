import React, { Component } from "react";
import TopBar from "./Components/Topbar";
import FooterMenu from "./Components/Footer";
import Content from "./Components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50
    };

    
    const menuItems = [
      { url: `https://www.imdb.com/name/nm5416900/`, text: "IMDB", target: "_blank" },
      { url: `#aboutMe`, text: "About me", target: "" },
      { url: `#businessStuff`, text: "Business Stuff", target: "" },
      { url: `#funStuff`, text: "Fun Stuff", target: "" },
      { url: `#otherStuff`, text: "Other Stuff", target: "" }
    
    ];

    return (
      <div
        style={{
          backgroundColor: 'black',
          color: 'gray',
          minHeight: "100vh",
          position: "relative"
        }}
      >
        <TopBar styles={styles} />
        <Content styles={styles} />
        <FooterMenu menuItems={menuItems} styles={styles} />
      </div>
    );
  }
}

export default App;