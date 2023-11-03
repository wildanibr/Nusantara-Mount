import React from "react";
import {
  BrowserRouter,
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";

import { useEffect } from "react";
import LandingPage from "../pages/landing-page";
import Main from "../pages/main-content";
import Detail from "../pages/detail";
import Bookmark from "../pages/bookmark";
import OpenAI from "../pages/openai";
import KritikSaran from "../pages/saran";
import { setAxiosConfig } from "../utils/api/axiosWithConfig";
import Login from "../pages/login";
import { useToken } from "../utils/states/token";

export default function AppRouter() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("", "https://65256cd867cfb1e59ce742c4.mockapi.io/api/v1");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: token === "" ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/main",
      element: token === "" ? <Navigate to="/login" /> : <Main />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
    {
      path: "/bookmark",
      element: <Bookmark />,
    },
    {
      path: "/openai",
      element: <OpenAI />,
    },
    {
      path: "/saran",
      element: <KritikSaran />,
    },

  ]);
  return <RouterProvider router={router} />;
}
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/main" element= token === "" ? <Login /> : <Navigate to="/" />
//         <Route path="/login" element={<Login />} />
//         <Route path="/detail/:id" element={<Detail />} />
//         <Route path="/bookmark" element={<Bookmark />} />
//         <Route path="/openai" element={<OpenAI />} />
//         <Route path="/saran" element={<KritikSaran />} />
//       </Routes>
//     </Router>
//   );
// }
