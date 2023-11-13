import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Image, Col, Container, ListGroup, Modal, Nav, NavDropdown, Navbar, Offcanvas, Row, Spinner, Tab, Tabs, NavbarBrand, NavbarText, Toast, ToastContainer, DropdownButton, Dropdown, InputGroup, Badge, TabContent } from 'react-bootstrap';
import { relative } from 'path';

function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Transaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Buying 'Verse Pass - 1 Day'</h4>
        <Form style={{ fontSize:"80%"}}>
          <Row className="mb-3">
            <p>
            You're purchasing 'Verse Pass - 1 Day' from @username for v$10.00.
            Please confirm.
            </p>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control size="sm" as="textarea" rows={2} placeholder="Message (Optional)" />
            </Form.Group>
          </Row>
          {/* <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control size="sm" type="password" placeholder="Password" />
            </Form.Group>
          </Row> */}

          {/* <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control size="sm" placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control size="sm" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select size="sm" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control size="sm" />
            </Form.Group>
          </Row> */}

          {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Don't ask again ('Enter' to send message)" />
          </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button size="sm" onClick={props.onHide}>Confirm</Button>
        <Button size="sm" variant="secondary" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}


function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalShow, setModalShow] = React.useState(false);

  const [showToast, setShowToast] = useState(false);

  return (
    <div className="App" style={{fontSize:"90%"}}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="messages">
        <Nav className="fixed-top bg-body-tertiary" style={{opacity:.95}}>
          <div className="fixed-top text-start ps-2 p-1" style={{fontSize:"85%"}}>
            <small><span className="text-secondary">Welcome to VERSE...</span></small>
          </div>
          <Nav variant="tabs" className='mt-auto me-auto' defaultActiveKey="messages">
            <Nav.Item>
              <Nav.Link eventKey="messages">messages</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="market">market</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="activities">activities</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav style={{ width: "200px"}}>
            <Image
                src="./verse-logo.png"
                width="64px"
                height="64px"
                className="d-inline-block m-1"
                alt="Verse logo"
              />
            <p><small>123,232.00</small></p>
          </Nav>
        </Nav>
        <Tab.Content className="justify-content-start text-start p-2" style={{marginTop:"70px", marginBottom:"30px"}}>
          <Tab.Pane eventKey="messages">
            <ListGroup className="" style={{fontSize:"90%"}}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((key) => (
              <ListGroup.Item className="m-0 p-0 border-0">
                <div className="d-flex">
                  <div>
                    <span className="text-info">@verse : </span>
                    <span className="me-auto">welcome to the welcome to the verse..welcome to the verse..welcome to the verse..welcome to the verse..</span>
                  </div>
                  <div className="text-end ps-2" style={{minWidth:"80px"}}>
                    <small className="text-secondary d-block">11/12/2023 21:49Z #VERSE 127.0.0.1 KR</small>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
            </ListGroup>
          </Tab.Pane>
          <Tab.Pane eventKey="market">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((key) => (
            <Card className="m-1" border="success" style={{ width: '14rem', display:"inline-block" }}>
              <Card.Img variant="top" src="./verse-thumb.png" />
              <Card.Body className="text-end">
                <Card.Subtitle><small className="text-muted">@username</small></Card.Subtitle>
                <Card.Title>Verse Pass - 1 Day</Card.Title>
                <Card.Text>
                  Required to enter the #verse, lasts for 24 hr
                </Card.Text>
                <Button onClick={() => setModalShow(true)} variant="primary" className="btn-sm">v$10.00 Buy</Button>
              </Card.Body>
            </Card>
          ))}
          </Tab.Pane>
          <Tab.Pane eventKey="activities">
          <ListGroup>
            <ListGroup.Item className="border-0">Some activity ...</ListGroup.Item>
            <ListGroup.Item className="border-0">Some activity ...</ListGroup.Item>
            <ListGroup.Item className="border-0">Some activity ...s</ListGroup.Item>
            <ListGroup.Item className="border-0">Some activity ...</ListGroup.Item>
            <ListGroup.Item className="border-0">Some activity ... at eros</ListGroup.Item>
          </ListGroup>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
        
      <Navbar className="bg-body-tertiary m-0 p-0" fixed="bottom" style={{opacity:.95}}>
        <Container fluid>
          <Nav className="justify-content-start flex-grow-1">
            <NavDropdown drop={"up"} title="#VERSE-DEV" id="basic-nav-dropdown">
              <NavDropdown.Header><small>Accessible zones</small></NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1"><small>#Verse<Badge bg="dark" text="success" className='m-1'>expires in 23:32:32s</Badge></small></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><small>#Verse-dev</small><Badge bg="dark" text="info" className='m-1'>Free</Badge></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><small>#Market<Badge bg="dark" text="info" className='m-1'>Free</Badge></small></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <small>#Discover<Badge bg="primary" className='m-1'>23</Badge></small>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse id="navbarScroll">

            <InputGroup className="">
              <Form.Control
                type="text"
                placeholder="message"
                className="me-1"
                aria-label="message"
                size='sm'
              />
              <Button size='sm' onClick={() => setModalShow(true)} variant="outline-success">Send</Button>
            </InputGroup>
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

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
