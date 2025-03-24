import React from "react";
import "./Achievements.css";

const achievements = [
    {
        title: "RNR & General Enquiry Manager | Riviera 2025",
        description:
            "Managed 250+ participant registrations and payment issues, developed barcode-based tracking, and led a team of 10 coordinators and 20 volunteers.",
    },
    {
        title: "Events Coordinator | Gravitas 2023",
        description:
            "Organized and managed multiple large-scale events, collaborating with cross-functional teams to ensure smooth execution.",
    },
    {
        title: "State-Level Kerala School Sasthrolsavam (2020)",
        description:
            "A Grade in Math Fair event, showcasing strong analytical and problem-solving skills.",
    },
    {
        title: "Bharath Scout and Guide",
        description: "Successfully passed the Pre-Rashtrapati Test.",
    },
];

const Achievements = () =>
{
    return (
        <div id="achievements" className="achievements-section">
            <h2 className="achievements-title">Achievements</h2>
            <div className="achievements-list">
                { achievements.map( ( achievement, index ) => (
                    <div key={ index } className="achievement-card">
                        <h3 className="achievement-title">{ achievement.title }</h3>
                        <p className="achievement-description">{ achievement.description }</p>
                    </div>
                ) ) }
            </div>
        </div>
    );
};

export default Achievements;
