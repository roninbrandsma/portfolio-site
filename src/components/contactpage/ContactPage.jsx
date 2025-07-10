import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../contactpage/ContactPage.scss";

const ContactPage = () => {
  return (
    <>
      <div className="contact">
        <div className="contactFormDiv">
          <div className="titleAndForm">
            <h2 className="title">Contact Me</h2>
            <Form className="contactForm">
              <Form.Group className="name">
                <FloatingLabel
                  controlId="exampleForm.ControlInput1"
                  label="Name"
                >
                  <Form.Control type="name" placeholder="Name" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="email">
                <FloatingLabel controlId="formBasicEmail" label="Email">
                  <Form.Control type="email" placeholder="Enter email" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <FloatingLabel label="Enter Your Message Here">
                  <Form.Control
                    className="message"
                    as="textarea"
                    rows={3}
                    placeholder="Enter Your Message Here"
                  />
                </FloatingLabel>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="contactInfoDiv">
          <div className="titleAndForm">
            <h2 className="title">Contact Details</h2>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label
                  className="square border-bottom"
                  column
                  sm="2"
                  style={{ color: "white" }}
                >
                  Me
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    className="square border-bottom"
                    plaintext
                    readOnly
                    defaultValue="Ronin Brandsma"
                    style={{ color: "white" }}
                  />
                </Col>

                <Form.Label
                  className="square border-bottom"
                  column
                  sm="2"
                  style={{ color: "white" }}
                >
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    className="square border-bottom"
                    plaintext
                    readOnly
                    defaultValue="brandsmaronin57@gmail.com"
                    style={{ color: "white" }}
                  />
                </Col>

                <Form.Label
                  className="square border-bottom"
                  column
                  sm="2"
                  style={{ color: "white" }}
                >
                  Phone Number
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    className="square border-bottom"
                    plaintext
                    readOnly
                    defaultValue="07493 134227"
                    style={{ color: "white" }}
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
