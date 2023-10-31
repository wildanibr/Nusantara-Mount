import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useEffect } from "react";
import LandingPage from "../pages/landing-page";
import Main from "../pages/main-content";
import Detail from "../pages/detail";
import Bookmark from "../pages/bookmark";
import OpenAI from "../pages/openai";
import KritikSaran from "../pages/saran";
import { setAxiosConfig } from "../utils/api/axiosWithConfig";

export default function AppRouter() {

  useEffect(() => {
    setAxiosConfig("", "https://65256cd867cfb1e59ce742c4.mockapi.io/api/v1");
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/openai" element={<OpenAI />} />
        <Route path="/saran" element={<KritikSaran />} />
      </Routes>
    </Router>
  );
}
