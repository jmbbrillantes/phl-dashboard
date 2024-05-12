// import "./App.css";

//Header
import HeaderNav from "./components/Header/HeaderNav";

//Content
import AboutMe from "./components/Content/AboutMe";
import Actions from "./components/Content/Actions";

import Statistic from "./components/Content/Statistic";

//Footer
import Footer from "./components/Footer/Footer";

// React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <HeaderNav />

      <section id="content">
        <Container fluid>
          <Row>
            <Col md={6}>
              {/* About Me Section */}
              <AboutMe />
            </Col>
            <Col md={6}>
              {/* Actions Section */}
              <Actions />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          {/* Statistic Section */}
          <Statistic />
        </Container>
      </section>

      <section id="footer">
        <Container fluid>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </section>

      <br />
    </Container>
  );
}

export default App;
