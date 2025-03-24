import React, { useEffect, useRef } from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () =>
{
    const canvasRef = useRef( null );

    useEffect( () =>
    {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext( "2d" );

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const hexagons = Array.from( { length: 40 }, () => ( {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 8 + 3, // Smaller hexagons
            dx: Math.random() * 0.5 - 0.25, // Slower movement
            dy: Math.random() * 0.5 - 0.25,
        } ) );

        const drawHexagon = ( x, y, size ) =>
        {
            ctx.beginPath();
            for ( let i = 0; i < 6; i++ )
            {
                const angle = ( Math.PI / 3 ) * i;
                const hx = x + size * Math.cos( angle );
                const hy = y + size * Math.sin( angle );
                ctx.lineTo( hx, hy );
            }
            ctx.closePath();
            ctx.fillStyle = "rgba(255, 204, 0, 0.38)"; // Soft yellow hexagons
            ctx.shadowColor = "rgba(255, 204, 0, 0.66)";
            ctx.shadowBlur = 8;
            ctx.fill();
        };

        const animate = () =>
        {
            ctx.clearRect( 0, 0, canvas.width, canvas.height );

            // Background gradient effect
            const gradient = ctx.createLinearGradient( 0, 0, canvas.width, canvas.height );
            gradient.addColorStop( 0, "#111" );
            gradient.addColorStop( 1, "#222" );
            ctx.fillStyle = gradient;
            ctx.fillRect( 0, 0, canvas.width, canvas.height );

            hexagons.forEach( ( hex ) =>
            {
                hex.x += hex.dx;
                hex.y += hex.dy;

                // Bounce from edges
                if ( hex.x < 0 || hex.x > canvas.width ) hex.dx *= -1;
                if ( hex.y < 0 || hex.y > canvas.height ) hex.dy *= -1;

                drawHexagon( hex.x, hex.y, hex.size );
            } );

            requestAnimationFrame( animate );
        };

        animate();

        // Resize handling
        const handleResize = () =>
        {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener( "resize", handleResize );

        return () =>
        {
            window.removeEventListener( "resize", handleResize );
        };
    }, [] );

    return <canvas ref={ canvasRef } className="animated-bg"></canvas>;
};

export default BackgroundAnimation;
