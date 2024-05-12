import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import RightNav from "./RightNav";
import "./HeaderNav.css";

function HeaderNav() {
  const offConvasArray = [false]; //options: false, "sm", "md", "lg", "xl", "xxl"
  return (
    <>
      {offConvasArray.map((expand) => (
        <Navbar id="navbar" key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Brand href="#"> PhlBet</Navbar.Brand>
            </div>

            <RightNav className="desktop" platform="desktop" />
          </Container>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                PhlBet
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <RightNav className="mobile" platform="mobile" />
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                <NavDropdown
                  title="Personal Center"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Accounts"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action2">Agent</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">Player</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Sub Accounts
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Data Export History
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action6">
                    Modify Logs
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action7">
                    Login Logs
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action8">
                    Inbox Records
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Game Reports"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#">Win-Loss</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Win Lose By Product
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Transaction History
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Unfinished Trading
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Funds Transfer"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#">Fund In/Out</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Transfer Records</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Cashh Management"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#">Bank Transfer</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    ThirdParty Payment
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
}

export default HeaderNav;
