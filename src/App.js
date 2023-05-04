import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRotas from "./AppRoutes";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {

  return (
    <Router>
      <Header />
      <Navbar />
      <AppRotas />
    </Router>
  );
}

export default App;
