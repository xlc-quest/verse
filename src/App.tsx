import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Image, Col, Container, ListGroup, Modal, Nav, NavDropdown, Navbar, Offcanvas, Row, Spinner, Tab, Tabs, NavbarBrand, NavbarText, Toast, ToastContainer, DropdownButton, Dropdown, InputGroup, Badge, TabContent, FloatingLabel } from 'react-bootstrap';
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
            <div className="fixed-top p-1" style={{fontSize:"80%"}}>
              <small className="d-block"><span className="text-secondary">Connecting.. to the server..</span></small>
            </div>
            <div className="fixed-top p-1 px-2 text-end">
              <div className='text-end' style={{fontSize:"80%"}}><small className="text-primary">rate 1.84%/d</small></div>
              <h2 style={{fontSize:"180%"}} className="mb-0 text-end">x$165,239.47</h2>
              <small style={{fontSize:"80%"}} className="text-end text-secondary">est. total ~x$323,211.95</small>
            </div>
          </div>
          <Nav variant="tabs" className='mt-auto' defaultActiveKey="messages">
            <Nav.Item>
              <Nav.Link eventKey="messages" className="p-1 px-2"><Icon.ChatFill className="me-1" /><span style={{fontSize:"70%"}}>messages</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="market" className="p-1 px-2"><Icon.CurrencyExchange className="me-1" /><span style={{fontSize:"70%"}}>trade</span></Nav.Link>
            </Nav.Item>
            <Nav.Item className="me-auto">
              <Nav.Link eventKey="activities" className="p-1 px-2"><Icon.Activity className="me-1" /><span style={{fontSize:"70%"}}>activities</span></Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-2">
              <a href="#" onClick={handleShow}><span className="text-light">@versedev</span></a>
              <span style={{fontSize:"140%"}}>🧙‍♂️</span>
            </Nav.Item>
          </Nav>
        </div>
        <Tab.Content className="justify-content-start text-start" style={{marginTop:"110px", marginBottom:"40px"}}>
          <Tab.Pane eventKey="messages">
            <Container fluid>
              <ListGroup className="" style={{fontSize:"85%"}}>
                <ListGroup.Item className="m-0 p-0 border-0 mb-1">
                  <div className="d-flex" style={{maxWidth:"640px"}}>
                    <div className="me-auto" style={{fontSize:"80%"}}>
                      <span className="">@verse</span>
                      <span className="text-secondary"> →</span>
                      <span className=""> #verse at</span>
                      <span className="text-secondary"> 11/12/2023 21:49Z</span>
                    </div>
                  </div>
                  <p>
                    Welcome to the verse..welcome to the verse..welcome to the verse..
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="market">
            <Container className="text-end" fluid>
              <Row className="mb-2">
                <Col className="text-secondary" style={{fontSize:"65%"}}>List your item <span className="text-light">for sale</span> ↑</Col>
              </Row>
              <Row className="mb-1">
                <Col className="" xs></Col>
                <Col className="p-0" xs={3} md={2} xl={1}>
                  <Form.Select className="text-end" size="sm" style={{fontSize:"70%", height:"1.8rem"}}>
                    <option>All items</option>
                    <option>Zone Pass</option>
                    <option>Collectible</option>
                  </Form.Select>
                </Col>
                <Col className="p-0" xs={4} md={2} xl={1}>
                  <Form.Select className="text-end" size="sm" style={{fontSize:"70%", height:"1.8rem"}}>
                    <option>Sort by date</option>
                    <option>Sort by low price</option>
                    <option>Sort by high price</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col className="">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((key) => (
                  <Card className="position-relative ms-1 mb-1 d-inline-flex" style={{fontSize:"80%"}}>
                    <Card.Img variant="top" src="./verse-thumb.png" style={{maxWidth:"170px"}} />
                    <Card.Body className="text-end m-0 p-2" style={{maxWidth:"170px"}}>
                      <Card.Subtitle style={{fontSize:"90%"}}><small className="text-secondary">@verse</small></Card.Subtitle>
                      <Card.Title style={{fontSize:"90%"}} className="m-0 p-0">Verse Pass - 1 Day</Card.Title>
                      <Card.Text className="m-0 p-0">
                        <small>Required to enter the #verse, lasts for 24 hr</small>
                      </Card.Text>
                    </Card.Body>
                    <Button onClick={() => setModalShow(true)} variant="primary" className="btn-sm m-1 position-absolute top-0 end-0" style={{fontSize:"80%", opacity:.9}}>v$10.00 Buy</Button>
                  </Card>
                ))}
                </Col>
              </Row>
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="activities">
            <Container fluid>
              <ListGroup>
                <ListGroup.Item className="border-0">Some activity ...</ListGroup.Item>
                <ListGroup.Item className="border-0">Some activity ...</ListGroup.Item>
                <ListGroup.Item className="border-0">Some activity ...s</ListGroup.Item>
                <ListGroup.Item className="border-0">Some activity ...</ListGroup.Item>
                <ListGroup.Item className="border-0">Some activity ... at eros</ListGroup.Item>
              </ListGroup>
            </Container>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      <Navbar className="bg-body-tertiary m-0 p-1" fixed="bottom" style={{opacity:.95}}>
        <Container fluid>
          <Nav className="justify-content-start flex-grow-1" style={{fontSize:"80%"}}>
            <NavDropdown drop={"up"} title="#VERSE-DEV" id="basic-nav-dropdown" style={{fontSize:"80%"}}>
              <NavDropdown.Header><small>Accessible zones</small></NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1" style={{fontSize:"80%"}}><small>#Verse<Badge bg="dark" text="success" className='m-1'>expires in 23:32:32s</Badge></small></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{fontSize:"80%"}}><small>#Verse-dev</small><Badge bg="dark" text="info" className='m-1'>Free</Badge></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{fontSize:"80%"}}><small>#Market<Badge bg="dark" text="info" className='m-1'>Free</Badge></small></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{fontSize:"80%"}}>
                <small>#Discover<Badge bg="primary" className='m-1'>23</Badge></small>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse id="navbarScroll">
            <InputGroup className="">
              <Form.Control
                type="text"
                placeholder="Input for messages and filtering"
                className="me-1"
                aria-label="input"
                size='sm'
                style={{fontSize:"80%"}}
              />
              <Button size='sm' onClick={() => setModalShow(true)} variant="outline-success">Enter</Button>
            </InputGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement='end' style={{fontSize:"80%"}}>
        <Offcanvas.Header className="p-2"  closeButton>
          <Offcanvas.Title style={{fontSize:"120%"}}>
            <span className="text-secondary me-auto">profile of</span>
            <span className=""> @versedev</span><span style={{fontSize:"120%"}}>🧙‍♂️</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="py-0 px-2" style={{fontSize:"90%"}}>
          <div className='text-end'><small className="text-primary">rate 1.84%/d</small></div>
          <h2 style={{fontSize:"200%"}} className="mb-0 text-end">x$165,239.47</h2>
          <h6 style={{fontSize:"140%"}} className="text-end text-secondary"><small>est. total ~x$323,211.95</small></h6>
          <div className='mb-2 text-end' style={{fontSize:"120%"}}>
            <Icon.Globe className='m-1'></Icon.Globe>
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
          <p>This is where you can check your balance, set public bio, see items, contacts and set some preference settings.</p>
          <Tabs
            defaultActiveKey="inventory"
            id="uncontrolled-tab-example"
            className="mb-2"
          >
            <Tab eventKey="inventory" title="inventory">
              <Container>
                <Row>
                  <Col className="p-0">
                  {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((key) => (
                    <Card className="position-relative ms-1 mb-1 d-inline-flex" style={{fontSize:"80%"}}>
                      <Card.Img variant="top" src="./verse-thumb.png" style={{maxWidth:"170px"}} />
                      <Card.Body className="text-end m-0 p-2" style={{maxWidth:"170px"}}>
                        <Card.Subtitle style={{fontSize:"90%"}}><small className="text-secondary">@verse</small></Card.Subtitle>
                        <Card.Title style={{fontSize:"90%"}} className="m-0 p-0">Verse Pass - 1 Day</Card.Title>
                        <Card.Text className="m-0 p-0">
                          <small>Required to enter the #verse, lasts for 24 hr</small>
                        </Card.Text>
                      </Card.Body>
                      <Button onClick={() => setModalShow(true)} variant="warning" className="btn-sm m-1 position-absolute top-0 end-0" style={{fontSize:"80%", opacity:.9}}>Sell</Button>
                    </Card>
                  ))}
                  </Col>
                </Row>
              </Container>
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
