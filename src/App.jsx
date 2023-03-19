import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
