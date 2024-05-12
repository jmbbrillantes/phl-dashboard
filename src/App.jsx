// import "./App.css";

//Header
import HeaderNav from "./components/Header/HeaderNav";

//Content
import AboutMe from "./components/Content/AboutMe";
import Actions from "./components/Content/Actions";

import Statistic from "./components/Content/Statistic";

//Footer
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container fluid>
      <section id="header">
        <HeaderNav />
      </section>

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
    </Container>
  );
}

export default App;
