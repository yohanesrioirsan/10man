import { Container } from "react-bootstrap";
import NavBar from "../../../src/components/NavBar/NavBar";
import Header from "../../../src/containers/Header/Header";
import Generator from "../../../src/containers/Generator/Generator";
import Footer from "../../../src/containers/Footer/Footer";

function Home() {
  return (
    <header>
      <Container>
        <NavBar />
        <Header />
        <Generator />
        <Footer />
      </Container>
    </header>
  );
}

export default Home;
