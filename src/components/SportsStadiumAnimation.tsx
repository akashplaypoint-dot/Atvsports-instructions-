import React, { useEffect, useRef } from 'react';

export const SportsStadiumAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          width = canvas.width = Math.floor(entry.contentRect.width);
          height = canvas.height = Math.floor(entry.contentRect.height);
        }
      }
    });
    resizeObserver.observe(container);

    // Mouse parallax tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      mouseRef.current.targetX = relX * 30;
      mouseRef.current.targetY = relY * 20;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Stadium dust/floodlight particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      speedY: -Math.random() * 0.5 - 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI,
    }));

    // Ball physics trajectory state
    let ballProgress = 0; // 0 to 1
    const ballDuration = 180; // frames per kick cycle (~3s)
    let frameCount = 0;

    const render = () => {
      frameCount++;
      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const pX = mouseRef.current.x;
      const pY = mouseRef.current.y;

      ctx.clearRect(0, 0, width, height);

      // 1. Stadium Atmosphere Dark Sky
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#06060a');
      skyGrad.addColorStop(0.35, '#0c0c16');
      skyGrad.addColorStop(0.65, '#081410');
      skyGrad.addColorStop(1, '#050c08');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Sweeping Stadium Floodlight Beams
      const beamTime = frameCount * 0.015;
      const beam1Angle = Math.sin(beamTime) * 0.25 - 0.2;
      const beam2Angle = Math.cos(beamTime * 0.8) * 0.25 + 0.2;

      // Floodlight 1 (Left top)
      ctx.save();
      ctx.translate(width * 0.15 + pX * 0.3, 0);
      ctx.rotate(beam1Angle);
      const beam1Grad = ctx.createRadialGradient(0, 0, 10, 0, height * 0.9, width * 0.45);
      beam1Grad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      beam1Grad.addColorStop(0.2, 'rgba(230, 240, 255, 0.15)');
      beam1Grad.addColorStop(0.5, 'rgba(229, 9, 20, 0.08)');
      beam1Grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = beam1Grad;
      ctx.beginPath();
      ctx.moveTo(-15, 0);
      ctx.lineTo(15, 0);
      ctx.lineTo(width * 0.4, height * 1.1);
      ctx.lineTo(-width * 0.2, height * 1.1);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Floodlight 2 (Right top)
      ctx.save();
      ctx.translate(width * 0.85 + pX * 0.3, 0);
      ctx.rotate(beam2Angle);
      const beam2Grad = ctx.createRadialGradient(0, 0, 10, 0, height * 0.9, width * 0.45);
      beam2Grad.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
      beam2Grad.addColorStop(0.25, 'rgba(220, 235, 255, 0.12)');
      beam2Grad.addColorStop(0.5, 'rgba(229, 9, 20, 0.06)');
      beam2Grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = beam2Grad;
      ctx.beginPath();
      ctx.moveTo(-15, 0);
      ctx.lineTo(15, 0);
      ctx.lineTo(width * 0.3, height * 1.1);
      ctx.lineTo(-width * 0.35, height * 1.1);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 3. Background Stadium Structure & Crowd Silhouette
      const horizonY = height * 0.48 + pY * 0.5;

      // Stadium Upper Stands Roof Arc
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(width * 0.5 + pX * 0.4, horizonY - 40, width * 0.65, 90, 0, Math.PI, 0);
      ctx.stroke();

      // Crowd Tier Silhouettes with subtle cheering flash
      ctx.fillStyle = '#0a0a14';
      ctx.beginPath();
      ctx.moveTo(0, horizonY);
      for (let x = 0; x < width; x += 12) {
        const jitter = Math.sin(x * 0.1 + frameCount * 0.05) * 2;
        ctx.lineTo(x, horizonY - 14 + jitter);
      }
      ctx.lineTo(width, horizonY);
      ctx.lineTo(width, horizonY + 20);
      ctx.lineTo(0, horizonY + 20);
      ctx.closePath();
      ctx.fill();

      // Stadium floodlight towers (left & right)
      ctx.fillStyle = '#1e1e2d';
      ctx.fillRect(width * 0.08 + pX * 0.2, horizonY - 90, 8, 90);
      ctx.fillRect(width * 0.90 + pX * 0.2, horizonY - 90, 8, 90);

      // Glowing light rigs
      const rigGlow = Math.sin(frameCount * 0.05) * 0.1 + 0.9;
      ctx.fillStyle = `rgba(255, 255, 255, ${0.85 * rigGlow})`;
      ctx.beginPath();
      ctx.arc(width * 0.08 + 4 + pX * 0.2, horizonY - 90, 10, 0, Math.PI * 2);
      ctx.arc(width * 0.90 + 4 + pX * 0.2, horizonY - 90, 10, 0, Math.PI * 2);
      ctx.fill();

      // 4. Perspective Football Pitch
      const pitchStartY = horizonY + 5;
      const pitchGrad = ctx.createLinearGradient(0, pitchStartY, 0, height);
      pitchGrad.addColorStop(0, '#06170e');
      pitchGrad.addColorStop(0.3, '#0b2617');
      pitchGrad.addColorStop(0.7, '#0f331f');
      pitchGrad.addColorStop(1, '#07180e');

      ctx.fillStyle = pitchGrad;
      ctx.beginPath();
      ctx.moveTo(width * 0.15 + pX * 0.8, pitchStartY);
      ctx.lineTo(width * 0.85 + pX * 0.8, pitchStartY);
      ctx.lineTo(width * 1.15, height);
      ctx.lineTo(-width * 0.15, height);
      ctx.closePath();
      ctx.fill();

      // Pitch Grass Striping (Perspective mown turf)
      for (let i = 0; i < 6; i++) {
        const t1 = i / 6;
        const t2 = (i + 0.5) / 6;
        const y1 = pitchStartY + Math.pow(t1, 1.4) * (height - pitchStartY);
        const y2 = pitchStartY + Math.pow(t2, 1.4) * (height - pitchStartY);

        ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.15)';
        ctx.beginPath();
        ctx.rect(-width * 0.2, y1, width * 1.4, y2 - y1);
        ctx.fill();
      }

      // 5. Pitch Lines & Goal Box in Perspective
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1.5;

      // Touchlines (Left & Right)
      ctx.beginPath();
      ctx.moveTo(width * 0.18 + pX * 0.7, pitchStartY);
      ctx.lineTo(-width * 0.05, height * 0.98);
      ctx.moveTo(width * 0.82 + pX * 0.7, pitchStartY);
      ctx.lineTo(width * 1.05, height * 0.98);
      ctx.stroke();

      // Center Line
      const centerLineY = pitchStartY + (height - pitchStartY) * 0.38;
      ctx.beginPath();
      ctx.moveTo(width * 0.1 + pX * 0.5, centerLineY);
      ctx.lineTo(width * 0.9 + pX * 0.5, centerLineY);
      ctx.stroke();

      // Center Circle in perspective
      ctx.beginPath();
      ctx.ellipse(width * 0.5 + pX * 0.6, centerLineY, width * 0.24, 28, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Center Spot
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(width * 0.5 + pX * 0.6, centerLineY, 3, 0, Math.PI * 2);
      ctx.fill();

      // Penalty Box at Foreground
      const boxStartY = pitchStartY + (height - pitchStartY) * 0.65;
      ctx.beginPath();
      ctx.moveTo(width * 0.22, height * 0.98);
      ctx.lineTo(width * 0.28, boxStartY);
      ctx.lineTo(width * 0.72, boxStartY);
      ctx.lineTo(width * 0.78, height * 0.98);
      ctx.stroke();

      // Penalty Spot
      const penSpotY = pitchStartY + (height - pitchStartY) * 0.82;
      ctx.beginPath();
      ctx.arc(width * 0.5 + pX * 0.3, penSpotY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // 6. Players (Dynamic Stylized Silhouettes)
      // Striker (Main Kicking Player - Left Center)
      const strikerBaseX = width * 0.34 + pX * 0.4;
      const strikerBaseY = height * 0.76 + pY * 0.2;

      // Subtle animation cycle for player running/kicking
      const kickCycle = (frameCount % 180) / 180;
      let legAngle = 0;
      let torsoTilt = -0.15;
      if (kickCycle < 0.25) {
        // Run-up
        legAngle = Math.sin(kickCycle * Math.PI * 8) * 0.4;
        torsoTilt = -0.25;
      } else if (kickCycle < 0.4) {
        // Wind-up & strike
        legAngle = -0.8 + (kickCycle - 0.25) * 8;
        torsoTilt = -0.1;
      } else {
        // Follow through and recovery
        legAngle = 0.5 - (kickCycle - 0.4) * 0.8;
        torsoTilt = -0.15;
      }

      // Player 1 Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.beginPath();
      ctx.ellipse(strikerBaseX, strikerBaseY + 5, 24, 7, 0, 0, Math.PI * 2);
      ctx.fill();

      // Draw Striker Stylized Figure
      ctx.save();
      ctx.translate(strikerBaseX, strikerBaseY);

      // Glow outline
      ctx.shadowColor = 'rgba(229, 9, 20, 0.5)';
      ctx.shadowBlur = 14;

      // Legs
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';

      // Left leg (plant leg)
      ctx.beginPath();
      ctx.moveTo(-4, -18);
      ctx.lineTo(-8, -4);
      ctx.lineTo(-12, 0);
      ctx.stroke();

      // Right leg (kicking leg with angle)
      ctx.strokeStyle = '#e50914';
      ctx.beginPath();
      ctx.moveTo(4, -18);
      ctx.lineTo(8 + legAngle * 18, -6);
      ctx.lineTo(16 + legAngle * 28, -legAngle * 10);
      ctx.stroke();

      // Torso with dynamic tilt & kit colors
      ctx.fillStyle = '#ffffff';
      ctx.save();
      ctx.rotate(torsoTilt);
      ctx.fillRect(-6, -45, 14, 28);
      // Red kit sash
      ctx.fillStyle = '#e50914';
      ctx.fillRect(-2, -45, 6, 28);
      ctx.restore();

      // Head
      ctx.fillStyle = '#f3f4f6';
      ctx.beginPath();
      ctx.arc(0, -52, 7, 0, Math.PI * 2);
      ctx.fill();

      // Arms in athletic motion
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-4, -40);
      ctx.lineTo(-18, -32);
      ctx.lineTo(-24, -42);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(6, -40);
      ctx.lineTo(18, -30);
      ctx.lineTo(24, -20);
      ctx.stroke();

      ctx.restore();

      // Player 2 (Midfielder / Defender in backdrop)
      const defX = width * 0.62 + pX * 0.5;
      const defY = height * 0.62 + pY * 0.3;

      // Def shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
      ctx.beginPath();
      ctx.ellipse(defX, defY + 3, 16, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Def figure (smaller scale)
      ctx.save();
      ctx.translate(defX, defY);
      ctx.scale(0.7, 0.7);

      ctx.strokeStyle = '#9ca3af';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(-4, -18);
      ctx.lineTo(-6, 0);
      ctx.moveTo(4, -18);
      ctx.lineTo(8, 0);
      ctx.stroke();

      ctx.fillStyle = '#1f2937';
      ctx.fillRect(-6, -42, 12, 25);
      ctx.fillStyle = '#e5e7eb';
      ctx.beginPath();
      ctx.arc(0, -48, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Goalkeeper Silhouette (Far Goal Line)
      const gkX = width * 0.5 + Math.sin(frameCount * 0.04) * 20 + pX * 0.3;
      const gkY = pitchStartY + 12;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.beginPath();
      ctx.ellipse(gkX, gkY + 2, 10, 3, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.translate(gkX, gkY);
      ctx.scale(0.45, 0.45);
      ctx.fillStyle = '#fbbf24'; // Yellow goalkeeper jersey
      ctx.fillRect(-5, -30, 10, 20);
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, -35, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-4, -26);
      ctx.lineTo(-14, -36);
      ctx.moveTo(4, -26);
      ctx.lineTo(14, -36);
      ctx.stroke();
      ctx.restore();

      // 7. Dynamic Football Movement with Parabolic Physics & Spin
      if (!prefersReducedMotion) {
        ballProgress = (frameCount % ballDuration) / ballDuration;
      } else {
        ballProgress = 0.5;
      }

      // Ball Trajectory: Starts near striker foot (x: 0.38, y: 0.76)
      // Arcs towards goal (x: 0.72, y: 0.42), then resets smoothly
      const startBallX = width * 0.39;
      const startBallY = height * 0.77;
      const targetBallX = width * 0.74;
      const targetBallY = height * 0.45;

      const currentBallX = startBallX + (targetBallX - startBallX) * ballProgress;
      // Parabolic altitude arc
      const altitude = Math.sin(ballProgress * Math.PI) * (height * 0.26);
      const groundBallY = startBallY + (targetBallY - startBallY) * ballProgress;
      const currentBallY = groundBallY - altitude;

      // Ground Shadow (scales with altitude)
      const shadowScale = Math.max(0.3, 1 - altitude / (height * 0.28));
      ctx.fillStyle = `rgba(0, 0, 0, ${0.45 * shadowScale})`;
      ctx.beginPath();
      ctx.ellipse(
        currentBallX,
        groundBallY + 4,
        14 * shadowScale,
        5 * shadowScale,
        0,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Motion Trail / Particle Tail
      if (altitude > 10) {
        for (let t = 1; t <= 5; t++) {
          const trailT = Math.max(0, ballProgress - t * 0.02);
          const tX = startBallX + (targetBallX - startBallX) * trailT;
          const tAlt = Math.sin(trailT * Math.PI) * (height * 0.26);
          const tY = startBallY + (targetBallY - startBallY) * trailT - tAlt;

          ctx.fillStyle = `rgba(229, 9, 20, ${0.35 / t})`;
          ctx.beginPath();
          ctx.arc(tX, tY, 8 - t, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Football Body
      const ballRadius = 10;
      ctx.save();
      ctx.translate(currentBallX, currentBallY);
      // Rotation spin
      ctx.rotate(frameCount * 0.08);

      // Ball Outer Glow
      ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
      ctx.shadowBlur = 12;

      // White Sphere Base
      const ballGrad = ctx.createRadialGradient(
        -ballRadius * 0.3,
        -ballRadius * 0.3,
        ballRadius * 0.2,
        0,
        0,
        ballRadius
      );
      ballGrad.addColorStop(0, '#ffffff');
      ballGrad.addColorStop(0.7, '#e2e8f0');
      ballGrad.addColorStop(1, '#64748b');
      ctx.fillStyle = ballGrad;
      ctx.beginPath();
      ctx.arc(0, 0, ballRadius, 0, Math.PI * 2);
      ctx.fill();

      // Classic Soccer Ball Pentagons / Seams (Red & Dark Charcoal accents)
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#0f172a';
      // Center pentagon
      ctx.beginPath();
      for (let p = 0; p < 5; p++) {
        const ang = (p * Math.PI * 2) / 5 - Math.PI / 2;
        const rad = ballRadius * 0.42;
        const px = Math.cos(ang) * rad;
        const py = Math.sin(ang) * rad;
        if (p === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();

      // Outer seam patches
      ctx.strokeStyle = '#e50914';
      ctx.lineWidth = 1.2;
      for (let p = 0; p < 5; p++) {
        const ang = (p * Math.PI * 2) / 5 - Math.PI / 2;
        const rad = ballRadius * 0.42;
        const px = Math.cos(ang) * rad;
        const py = Math.sin(ang) * rad;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(Math.cos(ang) * ballRadius * 0.95, Math.sin(ang) * ballRadius * 0.95);
        ctx.stroke();
      }

      ctx.restore();

      // 8. Atmospheric Floating Stadium Particles (Floodlight motes)
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += 0.03;

        if (p.y < 0) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Loop animation
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="sports-stadium-stage"
      className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-[#050508] shadow-2xl shadow-black/80 group"
      aria-label="Interactive dynamic stadium and football animation"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
        title="ATV Sports Stadium Animation"
      />

      {/* Futuristic HUD overlay lines */}
      <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-red-600" />
        <span className="text-[11px] font-tech font-bold uppercase tracking-widest text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
          STADIUM BROADCAST • 4K ULTRA
        </span>
      </div>

      <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:flex items-center gap-2">
        <span className="text-[10px] font-tech uppercase tracking-wider text-zinc-400 bg-black/70 px-2.5 py-1 rounded border border-white/10">
          PRECISION 60FPS MOTION
        </span>
      </div>

      {/* Ambient Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-transparent to-black/60" />
    </div>
  );
};
