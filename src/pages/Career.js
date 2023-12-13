import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { NavBar } from "../component/NavBar";
import { Footer } from "../component/Footer";
import { Loader } from "../component/loader";

export const Career = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const formInitialdetail = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    file: null, // Initialize file as null
  };

  const [formDetails, setFormDetails] = useState(formInitialdetail);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});
  const [selectedOption, setSelectedOption] = useState("Select Option");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFormUpdate("file", file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const formData = new FormData();
    formData.append("firstName", formDetails.firstName);
    formData.append("lastName", formDetails.lastName);
    formData.append("email", formDetails.email);
    formData.append("phone", formDetails.phone);
    formData.append("message", formDetails.message);
    formData.append("file", formDetails.file);

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      body: formData,
    });

    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialdetail);

    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
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
              <Row className="align-items-center">
                <h2 style={{ textAlign: "center" }}>Careers @ Techsa</h2>
                <Col md={6}>
                  <div>
                    <div style={{ textAlign: "center" }}>
                      <h4>Available Opportunities</h4>
                      <p>with requirements</p>
                    </div>
                    <br />
                    <br />
                    <div style={{ display: "flex", textAlign: "center" }}>
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
                        <input type="file" onChange={handleFileChange} />
                      </Col>
                      {/* Status message */}
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
