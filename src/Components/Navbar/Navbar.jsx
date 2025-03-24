import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () =>
{
    const [ menuOpen, setMenuOpen ] = useState( false );
    const navigate = useNavigate(); // For programmatic navigation

    // Function to handle scrolling
    const handleScroll = ( id ) =>
    {
        setMenuOpen( false );

        // If already on the home page, scroll smoothly
        if ( window.location.pathname === "/" )
        {
            const element = document.getElementById( id );
            if ( element )
            {
                element.scrollIntoView( { behavior: "smooth", block: "start" } );
            }
        } else
        {
            // Navigate to home page first, then scroll
            navigate( "/" );
            setTimeout( () =>
            {
                const element = document.getElementById( id );
                if ( element )
                {
                    element.scrollIntoView( { behavior: "smooth", block: "start" } );
                }
            }, 100 ); // Delay to ensure the page loads first
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <h1>ANNAPOORNA</h1>
                </div>

                <ul className={ `nav-links ${ menuOpen ? "active" : "" }` }>
                    <li><a href="/" onClick={ () => handleScroll( "home" ) }>HOME</a></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                    <li><a href="#achievements" onClick={ () => handleScroll( "achievements" ) }>ACHIEVEMENTS</a></li>
                    <li><a href="#contact" onClick={ () => handleScroll( "contact" ) }>CONTACT</a></li>
                </ul>

                <div className="menu-icon" onClick={ () => setMenuOpen( !menuOpen ) }>
                    { menuOpen ? <FiX /> : <FiMenu /> }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
