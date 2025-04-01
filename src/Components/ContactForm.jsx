import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://portfolio-server-qh4m.onrender.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <div className="container-fluid py-5" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e, #16213e)', color: 'white' }} id="contact">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Contact</h1>
          <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form text-center">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="control-group col-sm-6">
                    <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group col-sm-6">
                    <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea className="form-control py-3 px-4" rows={5} id="message" placeholder="Message" required value={formData.message} onChange={handleChange} />
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button className="btn btn-outline-primary" style={{ marginTop: "30px" }} type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
