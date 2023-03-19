import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { Notes } from "./Notes";
import { Signup } from "./Signup";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
