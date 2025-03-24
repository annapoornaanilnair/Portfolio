import React from "react";
import "./AboutMe.css";
import profileImg from "../../assets/main.jpg";

const AboutMe = () =>
{
    return (
        <section className="about-me">
            <div className="about-container">

                <div className="about-image">
                    <img src={ profileImg } alt="Profile" />
                </div>


                <div className="about-text">
                    <h2>Hey There!!</h2>
                    <p>
                        I am a third-year software engineering student at Vellore Institute of Technology, Vellore. I am incredibly enthusiastic about emerging technologies and how they are shaping the world around us.
                    </p>
                    <p>
                        For me, learning is not just about acquiring knowledge, but also about exploring new ideas and pushing the boundaries of what is possible. I am always on the lookout for ways to challenge myself and expand my skill set, knowing that the more I learn, the better equipped I will be to tackle complex real-world problems.
                    </p>
                    <p>
                        If given the opportunity, I am confident that I can make valuable contributions to any organization, leveraging my creativity, technical knowledge, and passion for innovation to achieve success.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
