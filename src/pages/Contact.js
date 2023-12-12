import { useEffect, useState } from "react"
import { Container, Col, Row } from "react-bootstrap";
import { NavBar } from "../component/NavBar";
import { Footer } from "../component/Footer";
import { Loader } from "../component/loader";
import Map from "../component/Contact/Map";

export const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);
  
  const formInitialdetail = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formDetails, setFormDetails] = useState(formInitialdetail);
  const [buttonText, setButtonText] = useState('send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialdetail);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
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
        <h2 style={{textAlign:"center"}} >Get in Touch</h2>
          <Col md={6}>
            <form onSubmit={handleSubmit} >
              <Row>
                <Col sm={6} className="px-1" >
                  <input type="text" value={formDetails.firstName} placeholder="First Name"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1" >
                  <input type="text" value={formDetails.lastName} placeholder="Last Name"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1" >
                  <input type="text" value={formDetails.email} placeholder="Email"
                    onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1" >
                  <input type="text" value={formDetails.phone} placeholder="Mobile No."
                    onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col>
                  <textarea rows="6" value={formDetails.message} placeholder="Message"
                    onChange={(e) => onFormUpdate('message', e.target.value)} />
                  <button style={{marginBottom:"60px"}} type="submit"><span>{buttonText}</span> </button>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "success"} > {status.message}</p>
                  </Col>
                }
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
    </div> )} 
    </>
  )
}