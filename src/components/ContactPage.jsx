import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

export default function ContactPage() {
  const navigate = useNavigate();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setErrorMessage("Something went wrong. Please try again.");
          setIsSubmitting(false);
        },
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="contact-page">
      <div className="contact-page-inner">
        <span className="eyebrow-label">GET IN TOUCH</span>
        <h1 className="contact-page-headline">
          START A<br />
          PROJECT
        </h1>

        {/* Both elements stay in the DOM inside this relative container */}
        <div className="contact-animate-container">
          <form
            ref={formRef}
            className={`contact-page-form ${isSubmitted ? "state-hidden form-exit" : "state-visible"}`}
            onSubmit={handleSubmit}
          >
            {errorMessage && (
              <div
                style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}
              >
                {errorMessage}
              </div>
            )}
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
                placeholder="Tell us about your project..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="submit-form-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message →"}
            </button>
          </form>

          <div
            className={`form-success-wrapper ${isSubmitted ? "state-visible" : "state-hidden"}`}
          >
            <h2>MESSAGE SENT</h2>
            <p>
              Thank you! We will review your brief and follow up within 24
              hours.
            </p>
            <button
              onClick={() => {
                setFormData({ name: "", email: "", message: "" });
                setIsSubmitted(false);
              }}
              className="return-cta"
              style={{
                background: "none",
                border: "none",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
