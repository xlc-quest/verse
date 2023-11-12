import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Image, Col, Container, ListGroup, Modal, Nav, NavDropdown, Navbar, Offcanvas, Row, Spinner, Tab, Tabs, NavbarBrand, NavbarText, Toast, ToastContainer, DropdownButton, Dropdown } from 'react-bootstrap';
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
      <Tabs
        defaultActiveKey="messages"
        id="uncontrolled-tab-example"
        className="mb-3 fixed-top bg-dark"
        style={{opacity:.9}}
      >
        <Tab eventKey="messages" title="messages">
          <div className="text-start" style={{ padding: "10px", marginTop:"40px", marginBottom: "80px"}}>
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
          <div className="text-start" style={{ padding: "10px", marginTop:"40px", marginBottom: "80px", fontSize:"80%"}}>
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
          </div>
        </Tab>
        <Tab eventKey="preference" title="preference" >
          <div className="text-start" style={{ padding: "10px", marginTop:"40px", marginBottom: "80px"}}>
            preference
          </div>
        </Tab>
      </Tabs>
      <Navbar className="bg-body-tertiary" fixed="bottom" style={{opacity:.9}}>
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src="./verse-logo.png" alt="" width="40" />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '80px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" onClick={handleShow}>Profile</Nav.Link>
              <Nav.Link href="#action2" onClick={handleShow}>Contacts</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <DropdownButton variant="success" size="sm" style={{fontSize:'80%'}}
                title="#VERSE" id="navbarScrollingDropdown" drop={"up"}>
                <Dropdown.Item href="#action3"><small>#VERSE</small></Dropdown.Item>
                <Dropdown.Item href="#action4">
                  <small>#VERSE-TEST</small>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action5">
                  <small>Discover</small>
                </Dropdown.Item>
              </DropdownButton>
              <Form.Control
                type="text"
                placeholder="message"
                className="me-6"
                aria-label="message"
                size='sm'
              />
              <Button size='sm' onClick={() => setModalShow(true)} variant="outline-success">Send</Button>
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

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
