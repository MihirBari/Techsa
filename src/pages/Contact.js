import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { NavBar } from "../component/NavBar";
import { Footer } from "../component/Footer";
import { Loader } from "../component/loader";
import Map from "../component/Contact/Map";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


  export const Contact = () => {
    const [loading, setLoading] = useState(true);
    const [formDetails, setFormDetails] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      response: "", // Add reCAPTCHA response here
    });
    const [buttonText, setButtonText] = useState("send");
    const [status, setStatus] = useState({});
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
  
    const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonText("Sending...");
  
      try {
        const recaptchaResponse = await verifyHuman(formDetails.response);
  
        if (recaptchaResponse.success) {
          await pushMessage(
            formDetails.name,
            formDetails.email,
            formDetails.message,
            formDetails.phone
          );
          setButtonText("Send");
          setFormDetails({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            response: "",
          });
          setStatus({ success: true, message: "Message sent successfully" });
        } else {
          setStatus({ success: false, message: "Failed captcha verification" });
        }
      } catch (error) {
        console.error(error);
        setStatus({ success: false, message: "Something went wrong." });
      } finally {
        setButtonText("Send");
      }
    };
  
    const verifyHuman = async (recaptchaResponse) => {
      try {
        const recaptchaSecret = '6LcTvUUUAAAAAJoIV78vMg5cO6Th7E1ZEZfKjFSo';
        const response = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`,
          {
            method: 'POST',
          }
        );
    
        if (!response.ok) {
          throw new Error(`Failed to verify reCAPTCHA. Status: ${response.status}`);
        }
    
        return await response.json();
      } catch (error) {
        console.error('Error in verifyHuman:', error);
        throw error; // Re-throw the error to be caught in the calling function
      }
    };
    
    const pushMessage = async (name, email, message, phone = '000') => {
      const pushbulletAccessToken = 'o.rstVetu3DZE7HF7zVa05fmjdOlFJJ4jE';
      const messageType = 'contact'; // or 'career' based on your logic
  
      const messageBody = {
        title: `${messageType} Form (Website) - ${name}`,
        body: `Name: ${name}\nMessage: ${message}\nEmail: ${email}\nPhone: ${phone}`,
        type: 'note',
      };
  
      const response = await fetch('https://api.pushbullet.com/v2/pushes', {
        method: 'POST',
        headers: {
          'Access-Token': pushbulletAccessToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageBody),
      });
  
      if (!response.ok) {
        throw new Error('Pushbullet API request failed');
      }
    };
  

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <section className="contact" id="connect">
            <Container>
              <Row className="">
                <h2 style={{ textAlign: "center" }}>Get in Touch</h2>
                <Col md={6}>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.email}
                          placeholder="Email"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.phone}
                          placeholder="Mobile No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col>
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        />
                        <button
                          style={{ marginBottom: "60px" }}
                          type="submit"
                        >
                          <span>{buttonText}</span>{" "}
                        </button>
                        <Link to='https://in.linkedin.com/company/techsa-services-pvt-ltd'>
                        <FaLinkedin size={40} style={{marginLeft:'20px'}} className="productPrice" />
                        </Link>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {" "}
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </Col>
                <Col md={6}>
                  <Map />
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};
