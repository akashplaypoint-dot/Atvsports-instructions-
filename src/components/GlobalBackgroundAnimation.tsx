import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Video, Eye, EyeOff, Radio } from 'lucide-react';

export const GlobalBackgroundAnimation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Check user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }
  }, []);

  // Video play/pause effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying && isVisible) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback: keep muted and retry on interaction
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    } else {
      video.pause();
    }
  }, [isPlaying, isVisible]);

  // Procedural Canvas Animation: Stadium Searchlights, Particles & Horizon Glow
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system (stadium dust / motes)
    const particleCount = 40;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Sweeping Stadium Floodlight Beams
    const searchlights = [
      { baseAngle: -0.3, speed: 0.0008, swing: 0.25, color: 'rgba(229, 9, 20, 0.08)', length: 1.4 },
      { baseAngle: 0.2, speed: 0.0011, swing: 0.35, color: 'rgba(255, 255, 255, 0.06)', length: 1.5 },
      { baseAngle: -0.1, speed: 0.0006, swing: 0.2, color: 'rgba(239, 68, 68, 0.07)', length: 1.3 },
      { baseAngle: 0.4, speed: 0.0009, swing: 0.3, color: 'rgba(255, 255, 255, 0.05)', length: 1.6 },
    ];

    let time = 0;

    const render = () => {
      if (!isVisible) {
        ctx.clearRect(0, 0, width, height);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      if (isPlaying) {
        time += 1;
      }

      // 1. Draw Sweeping Volumetric Stadium Searchlights from Top
      searchlights.forEach((beam, idx) => {
        const angle = beam.baseAngle + Math.sin(time * beam.speed + idx * 1.5) * beam.swing;
        const originX = width * (0.2 + idx * 0.2);
        const originY = -50;
        const beamLength = height * beam.length;

        const targetX = originX + Math.sin(angle) * beamLength;
        const targetY = originY + Math.cos(angle) * beamLength;

        const spread = 90 + Math.sin(time * 0.01 + idx) * 20;

        const gradient = ctx.createRadialGradient(
          originX,
          originY,
          10,
          targetX,
          targetY,
          spread * 3
        );
        gradient.addColorStop(0, beam.color.replace(/0\.\d+\)/, '0.25)'));
        gradient.addColorStop(0.3, beam.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(targetX - spread, targetY);
        ctx.lineTo(targetX + spread, targetY);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      });

      // 2. Horizon stadium floodlight glow
      const horizonY = height * 0.45;
      const horizonGlow = ctx.createRadialGradient(
        width * 0.5,
        horizonY,
        50,
        width * 0.5,
        horizonY,
        width * 0.6
      );
      horizonGlow.addColorStop(0, 'rgba(229, 9, 20, 0.08)');
      horizonGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
      horizonGlow.addColorStop(1, 'rgba(7, 7, 9, 0)');
      ctx.fillStyle = horizonGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Floating Stadium Motes / Particle Animation
      particles.forEach((p) => {
        if (isPlaying) {
          p.y += p.speedY;
          p.x += p.speedX;
          p.pulse += 0.02;

          if (p.y < 0) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
        }

        const alpha = Math.max(0.05, p.alpha * (0.7 + 0.3 * Math.sin(p.pulse)));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowColor = 'rgba(229, 9, 20, 0.6)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 4. Subtle Digital Broadcast Scan Wave (Moving downwards)
      if (isPlaying) {
        const scanY = (time * 1.2) % height;
        const scanGrad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
        scanGrad.addColorStop(0, 'rgba(229, 9, 20, 0)');
        scanGrad.addColorStop(0.5, 'rgba(229, 9, 20, 0.04)');
        scanGrad.addColorStop(1, 'rgba(229, 9, 20, 0)');
        ctx.fillStyle = scanGrad;
        ctx.fillRect(0, scanY - 30, width, 60);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPlaying, isVisible]);

  return (
    <div
      id="global-background-container"
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none bg-[#070709]"
    >
      {/* 1. Real Stadium / Sports Loop Video Layer */}
      {!videoError && isVisible && (
        <video
          ref={videoRef}
          id="global-bg-video"
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            videoLoaded ? 'opacity-30' : 'opacity-0'
          }`}
          style={{
            filter: 'contrast(120%) brightness(75%) saturate(140%)',
          }}
        >
          <source
            src="https://upload.wikimedia.org/wikipedia/commons/transcoded/9/98/UNC_chapel_hill_kenan_football_stadium_aerial.webm/UNC_chapel_hill_kenan_football_stadium_aerial.webm.480p.vp9.webm"
            type="video/webm"
          />
        </video>
      )}

      {/* 2. Procedural Stadium Searchlight & Particles Canvas */}
      <canvas
        ref={canvasRef}
        id="global-bg-canvas"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 3. Red Sports Broadcast Glow Accents */}
      <div className="absolute -top-32 left-1/4 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* 4. Fine Broadcast Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* 5. CRT Broadcast Scanlines Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.4) 3px, rgba(0, 0, 0, 0.4) 4px)',
        }}
      />

      {/* 6. Dark Cinematic Vignette & Content Readability Mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(7,7,9,0.75)_80%,#070709_100%)] pointer-events-none" />

      {/* 7. Interactive Floating Video Animation Control Widget */}
      <div className="fixed bottom-4 right-4 z-40 pointer-events-auto flex items-center gap-2">
        <div
          id="bg-animation-controls"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0d14]/90 backdrop-blur-md border border-white/10 text-xs font-tech text-zinc-300 shadow-xl shadow-black/60 hover:border-red-500/40 transition-all"
        >
          {/* Pulsing REC / LIVE status */}
          <div className="flex items-center gap-1.5 pr-2 border-r border-white/10">
            <span
              className={`w-2 h-2 rounded-full ${
                isPlaying && isVisible
                  ? 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]'
                  : 'bg-zinc-600'
              }`}
            />
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-200">
              {isPlaying && isVisible ? 'LIVE BG' : 'BG PAUSED'}
            </span>
          </div>

          {/* Toggle Play / Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause background animation' : 'Play background animation'}
            className="p-1 rounded-md hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            title={isPlaying ? 'Pause video animation' : 'Play video animation'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          {/* Toggle Visibility */}
          <button
            onClick={() => setIsVisible(!isVisible)}
            aria-label={isVisible ? 'Hide background animation' : 'Show background animation'}
            className="p-1 rounded-md hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            title={isVisible ? 'Hide background video' : 'Show background video'}
          >
            {isVisible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
