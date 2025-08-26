import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../contactpage/ContactPage.scss';

const ContactPage = () => {
  return (
    <>
      <div className="contact">
        <div className="contactFormDiv">
          <Form className="titleAndForm">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <FloatingLabel label="Enter Name" className="floatingInput">
                <Form.Control type="text" placeholder="Name" className="floatingInput" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <FloatingLabel label="Enter Email">
                <Form.Control type="email" placeholder="name@example.com" className="floatingInput" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <FloatingLabel label="Enter Message">
                <Form.Control as="textarea" placeholder="Message" className="floatingInput" />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
