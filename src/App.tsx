import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./screen/navbar/Navbar";
import Styles from "./App.module.css";
import HomeScreen from "./screen/home/HomeScreen";
import TaskScreen from "./screen/task/TaskScreen";
import Footer from "./screen/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <SpeedInsights />
      <Router>
        <Box className={Styles.main_container}>
          <Box className={Styles.nav_container}>
            <Navbar />
          </Box>
          <Box>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/taskScreen" element={<TaskScreen />} />
            </Routes>
          </Box>
          <Box className={Styles.footer_container}>
            <Footer />
          </Box>
        </Box>
      </Router>
    </>
  );
}

export default App;
