import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container className="mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
