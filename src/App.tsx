import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
