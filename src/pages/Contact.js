import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { NavBar } from "../component/NavBar";
import { Footer } from "../component/Footer";
import { Loader } from "../component/loader";
import Map from "../component/Contact/Map";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";


  export const Contact = () => {
    const [loading, setLoading] = useState(true);
    const [formDetails, setFormDetails] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    const [buttonText, setButtonText] = useState("Send");

  
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
  
      // Client-side form validation
      if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.message) {
        toast.error("Please Fill all the field")
        return;
      }

  
      setButtonText("Sending...");
  
      try {
        // Send data to Pushbullet and your API
        await pushMessage(
          `${formDetails.firstName} ${formDetails.lastName}`,
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
        });
       toast.success("Delivered")
      } catch (error) {
        console.error(error);
       toast.error("Please switch of your ad blocker")
      } finally {
        setButtonText("Send");
      }
    };
  
    const pushMessage = async (name, email, message, phone = "000") => {
      const messageType = "contact"; 
      const messageBody = {
        title: `${messageType} Form (Website) - ${name}`,
        body: `Name: ${name}\nMessage: ${message}\nEmail: ${email}\nPhone: ${phone}`,
        type: "note",
      };
  
      // Send data to Pushbullet
      const pushbulletResponse = await fetch(
        "https://api.pushbullet.com/v2/pushes",
        {
          method: "POST",
          headers: {
            "Access-Token": "o.5i7m1y7IULdmnfNMDFdexsWTZidy1D6K",
            "Content-Type": "application/json",
            "Connection" : "keep-alive",
            "cache-control": "no-cache",
          },
          body: JSON.stringify(messageBody),
        }
      );
  
      if (!pushbulletResponse.ok) {
        throw new Error("Pushbullet API request failed");
      }
     
    };
    
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Helmet>
              <title>Contact | Techsa Services Pvt Ltd.</title>
              <meta name="description" content="Description of your About Us page" />
            </Helmet>
            <NavBar />
            <section className="contact" id="connect">
              <Container>
                <Row className="">
                  <h2 style={{ textAlign: "center", color: "red" }}>Get in Touch</h2>
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
                            type="email"
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
                            maxLength={10}
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
                          <button style={{ marginBottom: "60px" }} type="submit">
                            <span>{buttonText}</span>{" "}
                          </button>
                          <Link to="https://in.linkedin.com/company/techsa-services-pvt-ltd">
                            <FaLinkedin
                              size={40}
                              style={{ marginLeft: "20px" }}
                              className="productPrice"
                            />
                          </Link>
                        </Col>
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
  