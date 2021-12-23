import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import { LandingPage } from "pages";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
