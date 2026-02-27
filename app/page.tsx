"use client";
import React from 'react';

const forcedStyles = `
  @keyframes mesh-flow {
    0% { transform: translate(0,0) scale(1); }
    33% { transform: translate(10%, -10%) scale(1.1); }
    66% { transform: translate(-10%, 15%) scale(0.9); }
    100% { transform: translate(0,0) scale(1); }
  }

  body { margin: 0; padding: 0; overflow: hidden; background-color: #083344; }

  .main-container {
    min-height: 100vh;
    display: flex; flex-direction: column; align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
  }

  .mesh-background {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    z-index: -1; background: #06b6d4;
    filter: blur(80px); opacity: 0.8;
  }
  .mesh-blob {
    position: absolute; width: 600px; height: 600px;
    background: #22d3ee; border-radius: 50%;
    animation: mesh-flow 15s ease-in-out infinite;
  }

  .cosmos-header {
    width: 100%; height: 280px;
    background-image: url('https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2000');
    background-size: cover; background-position: center;
    position: relative; z-index: 10;
    -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  }

  .content-card {
    margin-top: -90px; z-index: 20;
    width: 100%; max-width: 420px;
    display: flex; flex-direction: column; align-items: center;
    padding: 0 20px;
  }

  .profile-photo {
    width: 150px; height: 150px;
    border-radius: 50%; border: 4px solid white;
    background-color: white;
    box-shadow: 0 10px 50px rgba(0,0,0,0.4);
    overflow: hidden; margin-bottom: 25px;
  }

  .bubble-glass-button {
    display: block; width: 100%; padding: 20px 0; margin-bottom: 18px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    color: white; font-size: 18px; fontWeight: 600;
    text-align: center; text-decoration: none;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .bubble-glass-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.02);
    box-shadow: 0 0 30px rgba(34, 211, 238, 0.5);
  }
`;

export default function Home() {
  return (
    <main className="main-container">
      <style>{forcedStyles}</style>
      
      <div className="mesh-background">
        <div className="mesh-blob"></div>
      </div>
      
      <div className="cosmos-header"></div>

      <div className="content-card">
        {/* Foto de Perfil */}
        <div className="profile-photo">
          <img 
            src="/me.png" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=KR&background=083344&color=fff"; }}
          />
        </div>
        
        <h1 style={{fontSize: '32px', fontWeight: '800', color: 'white', margin: '0', textShadow: '0 4px 10px rgba(0,0,0,0.3)'}}>KR Studio</h1>
        <p style={{fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '35px'}}>Ingeniería & Contenido</p>
        
        <a href="https://www.twitch.tv/kroossby" target="_blank" rel="noopener noreferrer" className="bubble-glass-button">
          Twitch
        </a>
        
        <a href="#" className="bubble-glass-button">
          K R Studio
        </a>
        
        <a href="https://www.instagram.com/cahc.xxi/" target="_blank" rel="noopener noreferrer" className="bubble-glass-button">
          Instagram
        </a>
        
        {/* Bypass Web para el nuevo correo: kroossbyx@gmail.com */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kroossbyx@gmail.com&su=Contacto%20desde%20Linktree" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bubble-glass-button"
        >
          Contact me
        </a>
      </div>

      <footer style={{marginTop: 'auto', padding: '30px', fontSize: '10px', color: 'rgba(255,255,255,0.5)'}}>
        © 2026 KR STUDIO - SISTEMAS ALINEADOS
      </footer>
    </main>
  );
}
// KR Studio Update// Update KR Studio
/* Fix Engineer Cornejo */
