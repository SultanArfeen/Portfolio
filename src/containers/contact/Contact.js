import React, { useContext, useState } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import { getAnimationDuration } from "../../utils";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const newErrors = {
      name: formData.name === "",
      email: formData.email === "" || !isValidEmail(formData.email),
      message: formData.message === ""
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    setSending(true);

    // Simulate sending
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  return (
    <Fade bottom duration={getAnimationDuration()} distance="20px">
      <div id="contact" className="items-container">
        <div className={`contact_wrapper ${isDark ? 'dark' : ''}`}>
          <h1>Contact Me</h1>
          <p className="contact-subtitle">Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-flex">
              <div className={`form-group ${errors.name ? 'error' : ''}`}>
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What's your name?"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-text">Please enter your name</span>}
              </div>

              <div className={`form-group ${errors.email ? 'error' : ''}`}>
                <label htmlFor="email">Email / Phone *</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="How can I reach you?"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-text">Please enter a valid email address</span>}
              </div>
            </div>

            <div className={`form-group body-form ${errors.message ? 'error' : ''}`}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Send me any inquiries or questions"
                rows="10"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="error-text">Please enter the message</span>}
            </div>

            <button type="submit" className="send-btn" disabled={sending}>
              {sending ? "Sending..." : sent ? "Sent ✓" : "Send"}
              {!sending && !sent && (
                <svg viewBox="0 0 24 24" fill="currentColor" className="send-icon">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              )}
            </button>
          </form>

          <div className="contact-social">
            <SocialMedia />
          </div>
        </div>

        <div className="contact-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={email} />
          ) : (
            <img
              alt="Contact"
              src={require("../../assets/images/contactMailDark.svg")}
            />
          )}
        </div>
      </div>
    </Fade>
  );
}
