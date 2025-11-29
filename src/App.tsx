import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./container/HomePage";
import Client from "./container/Client";
import Contact from "./container/Contact";
import Service from "./container/Service";
import Benefits from "./container/Benefits";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/benefits" element={<Benefits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
