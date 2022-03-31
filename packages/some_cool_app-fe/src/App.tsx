import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function Navi() {
  return (
    <nav>
      <header>My site</header>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export function App() {
  return (
    <>
      <Navi />
      <Routes>
        <Route path="/" element={<h2 className="page-title">Home</h2>} />
        <Route path="/about" element={<h2 className="page-title">About</h2>} />
        <Route
          path="/contact"
          element={<h2 className="page-title">Contact</h2>}
        />
      </Routes>
    </>
  );
}
