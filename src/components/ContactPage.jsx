import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

export default function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Smooth scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="contact-page">
      {/* Top utility row to return home safely */}
      <div className="contact-page-nav">
      </div>

      <div className="contact-page-inner">
        <span className="eyebrow-label">GET IN TOUCH</span>

        <h1 className="contact-page-headline">
          START A<br />
          PROJECT
        </h1>

        {!isSubmitted ? (
          <form className="contact-page-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field-group">
                <label htmlFor="name">YOUR NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="email">YOUR EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="message">THE BRIEF</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your timeline, goals, and project scope..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-form-btn">
              Send Message →
            </button>
          </form>
        ) : (
          <div className="form-success-wrapper">
            <h2>MESSAGE SENT</h2>
            <p>
              Thank you for reaching out. A partner from Studio IX will review
              your brief and follow up within 24 hours.
            </p>
            <button
              onClick={() => navigate("/")}
              className="return-cta"
              style={{
                background: "none",
                border: "none",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Return Home
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
