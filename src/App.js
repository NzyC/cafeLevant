import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Drinks from "./pages/Drinks";
import Breakfast from "./pages/Breakfast"
import Lunch from "./pages/Lunch";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
