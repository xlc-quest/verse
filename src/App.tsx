import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Image, Col, Container, ListGroup, Modal, Nav, NavDropdown, Navbar, Offcanvas, Row, Spinner, Tab, Tabs, NavbarBrand, NavbarText, Toast, ToastContainer, DropdownButton, Dropdown, InputGroup, Badge, TabContent } from 'react-bootstrap';
import { relative } from 'path';

import * as Icon from 'react-bootstrap-icons';

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
        <div className="fixed-top bg-body-tertiary" style={{opacity:.95}}>
          <div>
            <Image
                src="./verse-logo.png"
                width="64px"
                height="64px"
                className="d-block m-1"
                alt="Verse logo" />
          </div>
          <div className="" style={{fontSize:"90%"}}>
            <div className="fixed-top p-1" style={{fontSize:"85%"}}>
              <small className="d-block"><span className="text-secondary">Connecting.. to the server..</span></small>
            </div>
            <div className="fixed-top p-1 px-2 text-end">
              <small className="d-block"><span className="text-primary">rate 1.84%/d</span></small>
              <small className="d-block"><span className="text-info">x$123,232.03</span></small>
            </div>
          </div>
          <Nav variant="tabs" className='mt-auto' defaultActiveKey="messages" style={{fontSize:"80%"}}>
            <Nav.Item>
              <Nav.Link eventKey="messages" className="p-1 px-2">messages</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="market" className="p-1 px-2">market</Nav.Link>
            </Nav.Item>
            <Nav.Item className="me-auto">
              <Nav.Link eventKey="activities" className="p-1 px-2">activities</Nav.Link>
            </Nav.Item>
            <Nav.Item className="">
              <a href="#" onClick={handleShow}><span className="text-light">@versedev</span></a>
              <span style={{fontSize:"140%"}}>🧙‍♂️</span>
            </Nav.Item>
          </Nav>
        </div>
        <Tab.Content className="justify-content-start text-start p-2" style={{marginTop:"100px", marginBottom:"30px"}}>
          <Tab.Pane eventKey="messages">
            <ListGroup className="" style={{fontSize:"90%"}}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((key) => (
              <ListGroup.Item className="m-0 p-0 border-0 mb-1">
                <div className="d-flex">
                  <div>
                    <span className="text-info">@verse : </span>
                    <span className="me-auto">welcome to the welcome to the verse..welcome to the verse..welcome to the verse..welcome to the verse..</span>
                  </div>
                  <div className="text-end ps-2" style={{minWidth:"80px"}}>
                    <small className="text-secondary d-block">11/12/2023 21:49Z</small>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
            </ListGroup>
          </Tab.Pane>
          <Tab.Pane eventKey="market">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((key) => (
            <Card className="m-1 d-inline-flex" border="success" style={{}}>
              <Card.Img variant="top" src="./verse-thumb.png" />
              <Card.Body className="text-end">
                <Card.Subtitle><small className="text-muted">@username</small></Card.Subtitle>
                <Card.Title><small>Verse Pass - 1 Day</small></Card.Title>
                <Card.Text>
                  <small>Required to enter the #verse, lasts for 24 hr</small>
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

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className="text-secondary me-auto">profile of</span>
            <small className=""> @versedev</small><span style={{fontSize:"200%"}}>🧙‍♂️</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{fontSize:"90%"}}>
          <div className='text-end'><span className="text-primary">rate 1.84%/d</span></div>
          <h2 className="text-end">x$165,239.47</h2>
          <h6 className="text-end text-secondary"><small>est. total ~x$323,211.95</small></h6>
          <div className='mb-2 text-end'>
            <Icon.Instagram className='m-1'></Icon.Instagram>
            <Icon.Tiktok className='m-1'></Icon.Tiktok>
            <Icon.Linkedin className='m-1'></Icon.Linkedin>
            <Icon.Facebook className='m-1'></Icon.Facebook>
            <Icon.Whatsapp className='m-1'></Icon.Whatsapp>
            <Icon.Telegram className='m-1'></Icon.Telegram>
            <Icon.Line className='m-1'></Icon.Line>
            <Icon.Discord className='m-1'></Icon.Discord>
            <Icon.Twitter className='m-1'></Icon.Twitter>
            <Icon.Twitch className='m-1'></Icon.Twitch>
            <Icon.Behance className='m-1'></Icon.Behance>
            <Icon.Reddit className='m-1'></Icon.Reddit>
            <Icon.Snapchat className='m-1'></Icon.Snapchat>
            <Icon.Wechat className='m-1'></Icon.Wechat>
            <Icon.EnvelopeAt className='m-1'></Icon.EnvelopeAt>
          </div>
          <p>This is where you can check your balance, set public bio, see inventories, contacts and set some preference settings.</p>
          <Tabs
            defaultActiveKey="inventory"
            id="uncontrolled-tab-example"
            className="mb-2"
          >
            <Tab eventKey="inventory" title="inventory">
              Inventory
            </Tab>
            <Tab eventKey="contacts" title="contacts">
              contacts
            </Tab>
            <Tab eventKey="settings" title="settings">
              Settings
            </Tab>
        </Tabs>
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
