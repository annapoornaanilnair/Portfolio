import React from "react";
import "./Contact.css";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaDownload } from "react-icons/fa";
import resume from "../../assets/Annapoorna_Nair_SDE_VIT_2026.pdf";

const Contact = () =>
{
    return (
        <div id="contact" className="contact-section">
            <h2 className="title" >Contact Me</h2>
            <div className="contact-details">
                <a href="https://www.linkedin.com/in/annapoornaanil/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaLinkedin className="contact-icon" />
                    <span>LinkedIn</span>
                </a>
                <a href="mailto:annapoornaanilnair@gmail.com" className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>Email</span>
                </a>
                <a href="tel:+919778271677" className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <span>+91 97782 71677</span>
                </a>
            </div>
            <a href={ resume } download="Annapoorna_Nair_SDE_VIT_2026.pdf" className="resume-button">
                <FaDownload className="resume-icon" /> Download My Resume
            </a>
        </div>
    );
};

export default Contact;
