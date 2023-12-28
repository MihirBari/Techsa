import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { NavBar } from "../component/NavBar";
import { Footer } from "../component/Footer";
import { Loader } from "../component/loader";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

export const Career = () => {
  const [loading, setLoading] = useState(true);
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");
  const [selectedOption, setSelectedOption] = useState("");

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

    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email  || !selectedOption) {
      toast.error("Please Fill all the feild")
      return;
    }

    setButtonText("Sending...");

    try {
      await pushMessage(
        `${formDetails.firstName} ${formDetails.lastName}`,
        formDetails.email,
        formDetails.message,
        formDetails.phone,
      );

      setButtonText("Send");
      setFormDetails({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedOption("");
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
            <title>Career | Techsa Services Pvt Ltd.</title>
            <meta name="description" content="Description of your About Us page" />
          </Helmet>
          <NavBar />
          <section className="contact" id="connect">
            <Container>
              <Row className="align-items-center">
                <h2 style={{ textAlign: "center", color: 'red' }}>Careers <span style={{ color: '#476930' }}>@ Techsa</span></h2>
                <Col md={6}>
                  <div>
                    <div style={{ textAlign: "center" }}>
                      <h4>Available Opportunities</h4>
                      <p>with requirements</p>
                    </div>
                    <br />
                    <br />
                    <div style={{ display: "flex",flexDirection:'row-reverse' }}>
                      <div>
                        <p>Business Development Managers</p>
                        <br />
                        <p>
                          Engineering graduates with keenness to pursue IT Sales
                          Careers Corporate Sales of IT Solutions & Services
                          Presentable with good Communication and articulation
                          skills
                        </p>
                      </div>
                      <br />
                      <br />
                      <div>
                        <p>Technical Engineers</p>
                        <br />
                        <p>
                          Engineering graduates with understanding of Desktop
                          Operating Systems and knowledge of Networking Concepts
                          Desire to implement software solutions Good
                          Communication skills
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
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
                      <Col sm={6} className="px-1">
                        <select
                          value={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          style={{ borderRadius: "10px" }}
                        >
                          <option value="Select Option" disabled>
                            Select Option
                          </option>
                          <option value="Technical Engineers">
                            Technical Engineers
                          </option>
                          <option value="Business Development Managers">
                            Business Development Managers
                          </option>
                        </select>
                      </Col>
                      <Col sm={6} className="px-1">
                        <button style={{ marginBottom: "60px" }} type="submit">
                          <span>{buttonText}</span>{" "}
                        </button>
                      </Col>
                    </Row>
                  </form>
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