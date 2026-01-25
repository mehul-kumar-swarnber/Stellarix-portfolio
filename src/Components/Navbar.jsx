import React, { useRef, useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import '../Styles/Navbar.css';

const Navbar = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSoundClick = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };
  const isMobile = window.innerWidth <= 768;
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (document.hidden && audio && !audio.paused) {
        audio.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100vw',
          padding: isMobile ? '0rem' : '0rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          color: 'white',
          zIndex: 9999,
        }}
      >
        {/* Logo */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          onClick={() => window.location.reload()}
        >
          <img
            src="/assets/LOGO/siteDeLogo.webp"
            alt="MS Logo"
            loading="lazy"
            style={{ height: '80px', width: '80px', objectFit: 'contain' }}
          />
        </div>

        {/* Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="https://github.com/mehul-kumar-swarnber"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.5rem' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mehul-kumar-swarnber"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.5rem' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            <FaLinkedin />
          </a>

          {/* Sound */}
          <button
            onClick={handleSoundClick}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>

          <audio ref={audioRef} src="/assets/sounds/site-sound.mp3" preload="auto" />
          {/* Resume */}
          <a
            href="/assets/Resume/Mehul_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '5px',
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'yellow';
              e.currentTarget.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
