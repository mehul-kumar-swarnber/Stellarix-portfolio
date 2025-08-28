import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const meteorsRef = useRef([]);
    const containerRef = useRef();

    const smallMeteorPaths = [
        '/assets/meteorE/meteor1.webp',
        '/assets/meteorE/meteor2.webp',
        '/assets/meteorE/meteor3.webp',
        '/assets/meteorE/meteor4.webp',
        '/assets/meteorE/meteor5.webp',
        '/assets/meteorE/meteor6.webp',
    ];

    const denseMeteorArray = Array.from({ length: 50 }, (_, i) => ({
        src: smallMeteorPaths[i % smallMeteorPaths.length],
        top: Math.random() * 80 + 10,
        left: Math.random() * 80 + 10,
        direction: i % 2 === 0 ? -1 : 1,
    }));

    useEffect(() => {
        meteorsRef.current.forEach((meteor, idx) => {
            const { direction } = denseMeteorArray[idx];

            gsap.fromTo(
                meteor,
                {
                    x: `${300 * direction}px`,
                    y: '100%',
                    opacity: 0,
                    rotate: Math.random() * 60 - 30,
                    scale: 0.5 + Math.random() * 0.5,
                },
                {
                    x: `${-300 * direction}px`,
                    y: '-100%',
                    opacity: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                    ease: 'none',
                }
            );
        });
    }, []);
const isMobile = window.innerWidth <= 768;
    return (
        <div
            ref={containerRef}
            className="relative w-full h-[120vh] bg-none overflow-hidden"
        >
            <img
                src="/assets/meteorE/meteor8.webp"
                alt="central meteor"
                loading="lazy"
                className="absolute center-meteor top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_0_40px_rgba(0,200,255,0.8)] animate-pulse"
                style={{
                    width: isMobile ? '20rem' : '50rem',
                    height: isMobile ? '20rem' : '50rem',
                }}
            />
            <div className="hologram">
                <h2>💡 About Me</h2>
                <p>
                    I’m a tech enthusiast and B.Tech student at Government Engineering College Raipur, passionate about blending technology with creativity to build impactful solutions. I completed my schooling at Krishna Public School, Dunda, and am currently focused on web development.


                </p>
                <p style={{
                    fontSize: '0.75rem',
                    color: '#bbbbbb',
                    marginTop: '1rem'
                }}>
                    Asteroid illustration adapted from{' '}
                    <a href="https://pngimg.com/image/105504" target="_blank" rel="noopener noreferrer" style={{ color: '#bbbbbb' }}>
                        pngimg.com
                    </a>, used under{' '}
                    <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer" style={{ color: '#bbbbbb' }}>
                        CC BY-NC 4.0
                    </a>.
                </p>
            </div>

            {denseMeteorArray.map((meteor, idx) => (
                <img
                    key={idx}
                    src={meteor.src}
                    alt={`meteor ${idx}`}
                    loading="lazy"
                    ref={(el) => (meteorsRef.current[idx] = el)}
                    className="absolute w-10 h-10 opacity-80"
                    style={{
                        top: `${meteor.top}%`,
                        left: `${meteor.left}%`,
                    }}
                />
            ))}
        </div>
    );
};

export default About;
