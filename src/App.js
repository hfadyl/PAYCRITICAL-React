import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Notfound />} /> */}
    </Routes>
  );
}

export default App;

