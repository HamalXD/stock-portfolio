import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router";
import Portfolio from "./pages/portfolio/Portfolio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
