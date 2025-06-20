import { useEffect, useState } from 'react';

// This component creates a starry background effect
// It uses the useState hook to manage the state of stars
// id, size, x, y, opacity, animatioDuration
// id, size, x, y, delay, animatioDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000); // You can change this to increase/decrease the number of stars

        const newStarts = []

        for (let i = 0; i < numberOfStars; i++) {
            newStarts.push({
                id: i,
                size: Math.random() * 3 + 1, // Random size between 1 and 3
                x: Math.random() * 100, // Random x position in percentage
                y: Math.random() * 100, // Random y position in percentage
                opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // Random animation duration between 5 and 10 seconds
            });
        }

        setStars(newStarts);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4; // You can change this to increase/decrease the number of stars

        const newMeteors = []

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Random size between 1 and 3
                x: Math.random() * 100, // Random x position in percentage
                y: Math.random() * 20, // Random y position in percentage
                delay: Math.random() * 15, // Random opacity between 0.5 and 1
                animationDuration: Math.random() * 3 + 3 // Random animation duration between 5 and 10 seconds
            });
        }

        setMeteors(newMeteors);
    };


    return <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map((star) => (
            <div key={star.id} className='star animate-pulse-subtle' style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity + "px",
                animationDuration: star.animationDuration + "s"
            }} />
        ))}

        {stars.map((star) => (
            <div key={star.id} className='star animate-pulse-subtle' style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity + "px",
                animationDuration: star.animationDuration + "s"
            }} />
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} className='meteor animate-meteor' style={{
                width: meteor.size * 50 + "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay,
                animationDuration: meteor.animationDuration + "s",
            }} />
        ))}
    </div>;
}