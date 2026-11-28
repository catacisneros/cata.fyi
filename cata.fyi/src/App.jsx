import { BrowserRouter, Routes, Route, Link } from "react-router";
import Nov23 from "./pages/nov23";
import Nov24 from "./pages/nov24";
import Nov24-2 from "./pages/nov24-2";
import Nov26 from "./pages/nov26";
import Nov27 from "./pages/nov27";

function Home() {
  return (
    <>
      <h1>Cata</h1>
      <p>Lo que pienso</p>
      <hr />
      <p><Link to="/nov23">que haria si el dinero no fuese un problema?</Link></p>
      <p><Link to="/nov24">tres escenarios de vida</Link></p>
      <p><Link to="/nov24-2">psicologia?</Link></p>
      <p><Link to="/nov26">thanksgiving</Link></p>
      <p><Link to="/nov27">soledad pt. 1</Link></p>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <main style={{ fontFamily: "system-ui", maxWidth: 640, margin: "80px auto", padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nov23" element={<Nov23 />} />
          <Route path="/nov24" element={<Nov24 />} />
          <Route path="/nov24-2" element={<Nov24-2 />} />
          <Route path="/nov26" element={<Nov26 />} />
          <Route path="/nov27" element={<Nov27 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;