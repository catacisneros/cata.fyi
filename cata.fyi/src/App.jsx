import { BrowserRouter, Routes, Route, Link } from "react-router";
import Pensamientos from "./pages/pensamientos";

function Home() {
  return (
    <>
      <h1>Cata</h1>
      <p>Lo que pienso</p>
      <p><Link to="/pensamientos">Pensamientos</Link></p>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <main style={{ fontFamily: "system-ui", maxWidth: 640, margin: "80px auto", padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pensamientos" element={<Pensamientos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;