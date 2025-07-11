import React, { useEffect } from "react";
import Header from "./components/Header";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import Layout from "./routing/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Aos from "aos";
import "aos/dist/aos.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  useEffect(() => {
    Aos.init({
      // Optional: Global settings for AOS
      duration: 800, // Animation duration in milliseconds
    });
  }, []);

  return <RouterProvider router={router} />;
}
