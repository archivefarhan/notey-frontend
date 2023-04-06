import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Login } from "./Login";
import { Notes } from "./Notes";
import { Signup } from "./Signup";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
