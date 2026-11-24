import { BrowserRouter, Routes, Route, Link } from "react-router";
import Pensamientos from "./pages/nov23";

function Home() {
  return (
    <>
      <h1>Cata</h1>
      <p>Lo que pienso</p>
      <hr />
      <p><Link to="/nov23">que haria si el dinero no fuese un problema?</Link></p>
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