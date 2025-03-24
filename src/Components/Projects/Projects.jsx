import React from "react";
import "./Projects.css";
import iotReport from "../../assets/iot based.pdf";
import cottonReport from "../../assets/cotton plant.pdf";

const Projects = () =>
{
    return (
        <section className="projects">

            <div className="projects-container">


                <div className="project">
                    <h2>IoT-Based Landslide and Flood Detection System</h2>
                    <ul>
                        <li>Developed a WSN-based real-time monitoring system for flood and landslide detection.</li>
                        <li>Integrated Blynk and ThingSpeak for remote data visualization and automated alerts.</li>
                        <li>Provided early warnings for rainfall, water levels, and landslides to enhance disaster preparedness.</li>
                    </ul>
                    <a href={ iotReport } className="download-btn" download>Download Report</a>
                </div>


                <div className="project">
                    <h2>Cotton Plant Disease Prediction System</h2>
                    <ul>
                        <li>Developed a deep learning-based Cotton Plant Disease Prediction System using VGG16, replacing ResNet50 for improved accuracy.</li>
                        <li>Designed a website interface that predicts diseases and suggests treatment options based on model predictions.</li>
                    </ul>
                    <a href={ cottonReport } className="download-btn" download>Download Report</a>
                </div>


                <div className="project">
                    <h2>Review-Based Response Generation System (Ongoing)</h2>
                    <ul>
                        <li>Developing an AI-powered system for automated sentiment-based response generation.</li>
                        <li>Utilizing RAG, OpenAI embeddings, ChromaDB, and LangChain for intelligent review retrieval.</li>
                        <li>Built with Flask, ensuring a scalable and interactive user experience.</li>
                    </ul>
                    <button className="download-btn disabled" disabled>Download Report (Ongoing)</button>
                </div>

            </div>
        </section>
    );
};

export default Projects;
