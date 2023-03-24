import "./contact.scss";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <main className="contact">
      <div>
        <h1 className="center title">Get In Touch</h1>
        <p className="center contact-text">
          I am currently looking for new opportunities to be more productive, my
          inbox is always open. Whether you have a proposal, a question or just
          want to say hi, I’ll try my best to get back to you!
        </p>
        <div className="center">
          <a href="mailto:nelianogs@gmail.com" className="contactBtn btn">
            Lets Talk
          </a>
        </div>
        <div className="links">
          <a href="https://github.com/NellyEzeanya" target="_blank">
            <FiGithub />
          </a>
          <a href="https://twitter.com/NellyEzeanya" target="_blank">
            <FiTwitter />
          </a>
          <a href="https://instagram.com/NellyEzeanya" target="_blank">
            <FiInstagram />
          </a>
          <a href="https://www.linkedin.com/in/nelly-ezeanya/" target="_blank">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
