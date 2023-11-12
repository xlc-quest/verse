import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, ListGroup, Nav, NavDropdown, Navbar, Offcanvas, Row, Spinner, Tab, Tabs } from 'react-bootstrap';
import { relative } from 'path';

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Tabs
        defaultActiveKey="messages"
        id="uncontrolled-tab-example"
        className="mb-3 sticky-top bg-dark"
        style={{opacity:.9}}
      >
        <Tab eventKey="messages" title="messages">
          <div className="text-start" style={{ padding: "0 10px", marginBottom: "80px"}}>
            <p>Join the first 100 settler community now (42 left)</p>
            <p>
              <small>@username :</small>
              <small>Helllo world!llo world!llo world!llo world!lo world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hellollo world!llo world!llo wollo world!rld! world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Helllo world!llo world!llo world!lo world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>llo world!Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>llo world!llo world!llo world!llo world!Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello wollo world!llo world!llo world!llo world!llo world!llo world!rld!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>llo world!llo world!llo world!llo world!llo world!llo world!Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>llo world!llo world!Hellolo world!Hellolo world!Hellolo world!Hellolo world!Hellolo world!Hellolo world!Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>llo world!llo world!Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>llo world!llo world!llo world!llo world!llo world!llo world!llo world!llo world!llo world!Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello world!llo world!llo world!llo world!llo world!llo world!llo world!llo world!llo world!llo world!llo world!llo world!llo world!llo world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello woHello woHello woHello woHello woHello woHello world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello worllo worllo worllo worllo worllo worllo worllo worllo worllo worllo worllo worllo worllo worllo world!!</small>
            </p>
            <p>
              <small>@username :</small>
              <small>Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!Hello world!!</small>
            </p>
          </div>
        </Tab>
        <Tab eventKey="trade" title="trade">
          trade
        </Tab>
        <Tab eventKey="preference" title="preference" >
          preference
        </Tab>
      </Tabs>
      <Navbar expand="sm" className="bg-body-tertiary" fixed="bottom" style={{opacity:.9}}>
        <Container fluid>
          <Navbar.Brand href="#">V</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" onClick={handleShow}>Profile</Nav.Link>
              <Nav.Link href="#action2">Inventory</Nav.Link>
              <NavDropdown title="Zones" id="navbarScrollingDropdown" drop={"up"}>
                <NavDropdown.Item href="#action3">#VERSE</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  #VERSE-TEST
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Discover
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="message"
                className="me-2"
                aria-label="message"
              />
              <Button variant="outline-success">Send</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default App;
