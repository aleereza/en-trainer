import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
// import Court from "./Court";
// import SearchParams from "./SearchParams";
import Header from "./Components/Header";
// import Body from "./Components/Body";
import Footer from "./Components/Footer";

import Navigation from "./Components/Navigation";
import Theme from "./Components/Theme";
//pages
import Stats from "./Components/Stats";
import Review from "./Components/Review";
import Settings from "./Components/Settings";

const darkTheme = {
  bc: "grey"
};

const App = () => {
  return (
    <React.StrictMode>
      <Theme.Provider value={darkTheme}>
        <Header />
        <Navigation />
        <Router>
          <Stats path="/stats" />
          <Review path="/review" />
          <Settings path="/settings" />
        </Router>
        <Footer />
      </Theme.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
