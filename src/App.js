import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Login from "./components/Login/Login";
import SignupForm from "./components/Signup/Signup";

import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';


function App() {
  return (
    <EuiProvider colorMode="light">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
        <Footer />
      </Router>
      </EuiProvider>
  );
}
export default App;