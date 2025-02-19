import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./server";

import Layout from "./components/Layout";
import AuthRequired from "./components/AuthRequired";

import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";

import Vans from "./views/Vans/Vans";
import VanDetail from "./views/Vans/VanDetail";

// import Host from './views/Host/Host'
import HostLayout from "./views/Host/Host";
import HostDashboard from "./views/Host/Dashboard";
import HostIncome from "./views/Host/Income";
import HostVans from "./views/Host/HostVans";
import HostVanDetail from "./views/Host/HostVanDetail";
import HostVanDescription from "./views/Host/HostVanDescription";
import HostVanPricing from "./views/Host/HostVanPricing";
import HostVanPhotos from "./views/Host/HostVanPhotos";
import HostReviews from "./views/Host/Reviews";

import NotFound from "./views/NotFound";

import "./styles/Index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="login" element={<Login />} />

          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<HostDashboard />} />
              <Route path="income" element={<HostIncome />} />
              <Route path="reviews" element={<HostReviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanDescription />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
