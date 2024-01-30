import { Container } from "react-bootstrap";
import NavBar from "../../components/Navbar/NavBar";
import Header from "../../containers/Header/Header";
import Generator from "../../containers/Generator/Generator";
import Footer from "../../containers/Footer/Footer";

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
