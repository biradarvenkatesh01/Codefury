import React, { useEffect, useRef } from 'react';

// TypeScript declarations for prototype extensions used in original game code
declare global {
  interface Array<T> {
    last(): T;
  }
  interface Math {
    sinus(degree: number): number;
  }
}

const Game: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scoreRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const perfectRef = useRef<HTMLDivElement>(null);
  const restartRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Define prototype extensions as in game.md
    if (!Array.prototype.last) {
      Array.prototype.last = function () {
        return this[this.length - 1];
      };
    }

    if (!Math.sinus) {
      Math.sinus = function (degree) {
        return Math.sin((degree / 180) * Math.PI);
      };
    }

    // Retrieve DOM elements via React Refs
    const introductionElement = introRef.current;
    const perfectElement = perfectRef.current;
    const restartButton = restartRef.current;
    const scoreElement = scoreRef.current;

    if (!introductionElement || !perfectElement || !restartButton || !scoreElement) return;

    // Game data (Exact variables from game.md)
    let phase: 'waiting' | 'stretching' | 'turning' | 'walking' | 'transitioning' | 'falling' = "waiting"; 
    let lastTimestamp: number | undefined; 

    let heroX: number; 
    let heroY: number; 
    let sceneOffset: number; 

    let platforms: Array<{ x: number; w: number }> = [];
    let sticks: Array<{ x: number; length: number; rotation: number }> = [];
    let trees: Array<{ x: number; color: string }> = [];

    let score = 0;

    // Configuration
    const canvasWidth = 375;
    const canvasHeight = 375;
    const platformHeight = 100;
    const heroDistanceFromEdge = 10; 
    const paddingX = 100; 
    const perfectAreaSize = 10;

    // The background moves slower than the hero
    const backgroundSpeedMultiplier = 0.2;

    const hill1BaseHeight = 100;
    const hill1Amplitude = 10;
    const hill1Stretch = 1;
    const hill2BaseHeight = 70;
    const hill2Amplitude = 20;
    const hill2Stretch = 0.5;

    const stretchingSpeed = 4; 
    const turningSpeed = 4; 
    const walkingSpeed = 4;
    const transitioningSpeed = 2;
    const fallingSpeed = 2;

    const heroWidth = 17; 
    const heroHeight = 30; 

    // Helper functions defined before resizeCanvas and resetGame are executed
    function generateTree() {
      const minimumGap = 30;
      const maximumGap = 150;

      const lastTree = trees[trees.length - 1];
      let furthestX = lastTree ? lastTree.x : 0;

      const x = furthestX + minimumGap + Math.floor(Math.random() * (maximumGap - minimumGap));
      const treeColors = ["#6D8821", "#8FAC34", "#98B333"];
      const color = treeColors[Math.floor(Math.random() * 3)];

      trees.push({ x, color });
    }

    function generatePlatform() {
      const minimumGap = 40;
      const maximumGap = 200;
      const minimumWidth = 20;
      const maximumWidth = 100;

      const lastPlatform = platforms[platforms.length - 1];
      let furthestX = lastPlatform.x + lastPlatform.w;

      const x = furthestX + minimumGap + Math.floor(Math.random() * (maximumGap - minimumGap));
      const w = minimumWidth + Math.floor(Math.random() * (maximumWidth - minimumWidth));

      platforms.push({ x, w });
    }

    function thePlatformTheStickHits(): [typeof platforms[0] | undefined, boolean] {
      if (sticks.last().rotation != 90)
        throw Error(`Stick is ${sticks.last().rotation}°`);
      const stickFarX = sticks.last().x + sticks.last().length;

      const platformTheStickHits = platforms.find(
        (platform) => platform.x < stickFarX && stickFarX < platform.x + platform.w
      );

      if (
        platformTheStickHits &&
        platformTheStickHits.x + platformTheStickHits.w / 2 - perfectAreaSize / 2 < stickFarX &&
        stickFarX < platformTheStickHits.x + platformTheStickHits.w / 2 + perfectAreaSize / 2
      )
        return [platformTheStickHits, true];

      return [platformTheStickHits, false];
    }

    function getHillY(windowX: number, baseHeight: number, amplitude: number, stretch: number) {
      const sineBaseY = canvas.height - baseHeight;
      return (
        Math.sinus((sceneOffset * backgroundSpeedMultiplier + windowX) * stretch) *
          amplitude +
        sineBaseY
      );
    }

    function getTreeY(x: number, baseHeight: number, amplitude: number) {
      const sineBaseY = canvas.height - baseHeight;
      return Math.sinus(x) * amplitude + sineBaseY;
    }

    function drawHill(baseHeight: number, amplitude: number, stretch: number, color: string) {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      ctx.lineTo(0, getHillY(0, baseHeight, amplitude, stretch));
      for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, getHillY(i, baseHeight, amplitude, stretch));
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.fillStyle = color;
      ctx.fill();
    }

    function drawTree(x: number, color: string) {
      ctx.save();
      ctx.translate(
        (-sceneOffset * backgroundSpeedMultiplier + x) * hill1Stretch,
        getTreeY(x, hill1BaseHeight, hill1Amplitude)
      );

      const treeTrunkHeight = 5;
      const treeTrunkWidth = 2;
      const treeCrownHeight = 25;
      const treeCrownWidth = 10;

      ctx.fillStyle = "#7D833C";
      ctx.fillRect(
        -treeTrunkWidth / 2,
        -treeTrunkHeight,
        treeTrunkWidth,
        treeTrunkHeight
      );

      ctx.beginPath();
      ctx.moveTo(-treeCrownWidth / 2, -treeTrunkHeight);
      ctx.lineTo(0, -(treeTrunkHeight + treeCrownHeight));
      ctx.lineTo(treeCrownWidth / 2, -treeTrunkHeight);
      ctx.fillStyle = color;
      ctx.fill();

      ctx.restore();
    }

    function drawBackground() {
      // Draw sky
      var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#BBD691");
      gradient.addColorStop(1, "#FEF1E1");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw hills
      drawHill(hill1BaseHeight, hill1Amplitude, hill1Stretch, "#95C629");
      drawHill(hill2BaseHeight, hill2Amplitude, hill2Stretch, "#659F1C");

      // Draw trees
      trees.forEach((tree) => drawTree(tree.x, tree.color));
    }

    function drawRoundedRect(x: number, y: number, width: number, height: number, radius: number) {
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y + height - radius);
      ctx.arcTo(x, y + height, x + radius, y + height, radius);
      ctx.lineTo(x + width - radius, y + height);
      ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
      ctx.lineTo(x + width, y + radius);
      ctx.arcTo(x + width, y, x + width - radius, y, radius);
      ctx.lineTo(x + radius, y);
      ctx.arcTo(x, y, x, y + radius, radius);
      ctx.fill();
    }

    function drawPlatforms() {
      platforms.forEach(({ x, w }) => {
        ctx.fillStyle = "black";
        ctx.fillRect(
          x,
          canvasHeight - platformHeight,
          w,
          platformHeight + (canvas.height - canvasHeight) / 2
        );

        if (sticks.last().x < x) {
          ctx.fillStyle = "red";
          ctx.fillRect(
            x + w / 2 - perfectAreaSize / 2,
            canvasHeight - platformHeight,
            perfectAreaSize,
            perfectAreaSize
          );
        }
      });
    }

    function drawHero() {
      ctx.save();
      ctx.fillStyle = "black";
      ctx.translate(
        heroX - heroWidth / 2,
        heroY + canvasHeight - platformHeight - heroHeight / 2
      );

      // Body
      drawRoundedRect(
        -heroWidth / 2,
        -heroHeight / 2,
        heroWidth,
        heroHeight - 4,
        5
      );

      // Legs
      const legDistance = 5;
      ctx.beginPath();
      ctx.arc(legDistance, 11.5, 3, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(-legDistance, 11.5, 3, 0, Math.PI * 2, false);
      ctx.fill();

      // Eye
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(5, -7, 3, 0, Math.PI * 2, false);
      ctx.fill();

      // Band
      ctx.fillStyle = "red";
      ctx.fillRect(-heroWidth / 2 - 1, -12, heroWidth + 2, 4.5);
      ctx.beginPath();
      ctx.moveTo(-9, -14.5);
      ctx.lineTo(-17, -18.5);
      ctx.lineTo(-14, -8.5);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-10, -10.5);
      ctx.lineTo(-15, -3.5);
      ctx.lineTo(-5, -7);
      ctx.fill();

      ctx.restore();
    }

    function drawSticks() {
      sticks.forEach((stick) => {
        ctx.save();
        ctx.translate(stick.x, canvasHeight - platformHeight);
        ctx.rotate((Math.PI / 180) * stick.rotation);

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -stick.length);
        ctx.stroke();

        ctx.restore();
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBackground();

      // Center main canvas area to the middle of the screen
      ctx.translate(
        (canvas.width - canvasWidth) / 2 - sceneOffset,
        (canvas.height - canvasHeight) / 2
      );

      // Draw scene
      drawPlatforms();
      drawHero();
      drawSticks();

      ctx.restore();
    }

    // Resets game variables and layouts
    function resetGame() {
      phase = "waiting";
      lastTimestamp = undefined;
      sceneOffset = 0;
      score = 0;

      if (introductionElement) introductionElement.style.opacity = "1";
      if (perfectElement) perfectElement.style.opacity = "0";
      if (restartButton) restartButton.style.display = "none";
      if (scoreElement) scoreElement.innerText = String(score);

      platforms = [{ x: 50, w: 50 }];
      generatePlatform();
      generatePlatform();
      generatePlatform();
      generatePlatform();

      sticks = [{ x: platforms[0].x + platforms[0].w, length: 0, rotation: 0 }];

      trees = [];
      generateTree();
      generateTree();
      generateTree();
      generateTree();
      generateTree();
      generateTree();
      generateTree();
      generateTree();
      generateTree();
      generateTree();

      heroX = platforms[0].x + platforms[0].w - heroDistanceFromEdge;
      heroY = 0;

      draw();
    }

    let animationFrameId: number;

    // The main game loop
    function animate(timestamp: number) {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
        animationFrameId = window.requestAnimationFrame(animate);
        return;
      }

      const lastStick = sticks[sticks.length - 1];

      switch (phase) {
        case "waiting":
          return; // Stop loop
        case "stretching": {
          lastStick.length += (timestamp - lastTimestamp) / stretchingSpeed;
          break;
        }
        case "turning": {
          lastStick.rotation += (timestamp - lastTimestamp) / turningSpeed;

          if (lastStick.rotation > 90) {
            lastStick.rotation = 90;

            const [nextPlatform, perfectHit] = thePlatformTheStickHits();
            if (nextPlatform) {
              score += perfectHit ? 2 : 1;
              if (scoreElement) scoreElement.innerText = String(score);

              if (perfectHit) {
                if (perfectElement) perfectElement.style.opacity = "1";
                setTimeout(() => {
                  if (perfectElement) perfectElement.style.opacity = "0";
                }, 1000);
              }

              generatePlatform();
              generateTree();
              generateTree();
            }

            phase = "walking";
          }
          break;
        }
        case "walking": {
          heroX += (timestamp - lastTimestamp) / walkingSpeed;

          const [nextPlatform] = thePlatformTheStickHits();
          if (nextPlatform) {
            const maxHeroX = nextPlatform.x + nextPlatform.w - heroDistanceFromEdge;
            if (heroX > maxHeroX) {
              heroX = maxHeroX;
              phase = "transitioning";
            }
          } else {
            const maxHeroX = sticks.last().x + sticks.last().length + heroWidth;
            if (heroX > maxHeroX) {
              heroX = maxHeroX;
              phase = "falling";
            }
          }
          break;
        }
        case "transitioning": {
          sceneOffset += (timestamp - lastTimestamp) / transitioningSpeed;

          const [nextPlatform] = thePlatformTheStickHits();
          if (nextPlatform && sceneOffset > nextPlatform.x + nextPlatform.w - paddingX) {
            sticks.push({
              x: nextPlatform.x + nextPlatform.w,
              length: 0,
              rotation: 0
            });
            phase = "waiting";
          }
          break;
        }
        case "falling": {
          if (sticks.last().rotation < 180)
            sticks.last().rotation += (timestamp - lastTimestamp) / turningSpeed;

          heroY += (timestamp - lastTimestamp) / fallingSpeed;
          const maxHeroY = platformHeight + 100 + (canvas.height - canvasHeight) / 2;
          if (heroY > maxHeroY) {
            if (restartButton) restartButton.style.display = "block";
            return;
          }
          break;
        }
        default:
          throw Error("Wrong phase");
      }

      draw();
      animationFrameId = window.requestAnimationFrame(animate);
      lastTimestamp = timestamp;
    }

    // Set up canvas dimensions to fit container and trigger initial draw
    const resizeCanvas = () => {
      if (container && canvas) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        draw();
      }
    };
    
    // Add window resize listener
    window.addEventListener("resize", resizeCanvas);

    // Initialize game state and do first draw
    resetGame();
    resizeCanvas();

    // Keyboard controls
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key == " ") {
        event.preventDefault();
        resetGame();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Click/Touch controls bound to canvas to prevent global event leakage
    const handlePointerDown = () => {
      if (phase == "waiting") {
        lastTimestamp = undefined;
        if (introductionElement) introductionElement.style.opacity = "0";
        phase = "stretching";
        window.requestAnimationFrame(animate);
      }
    };

    const handlePointerUp = () => {
      if (phase == "stretching") {
        phase = "turning";
      }
    };

    canvas.addEventListener("mousedown", handlePointerDown);
    canvas.addEventListener("mouseup", handlePointerUp);
    canvas.addEventListener("touchstart", handlePointerDown);
    canvas.addEventListener("touchend", handlePointerUp);

    // Restart button click
    const handleRestartClick = (event: MouseEvent) => {
      event.preventDefault();
      resetGame();
      if (restartButton) restartButton.style.display = "none";
    };
    restartButton.addEventListener("click", handleRestartClick);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(animationFrameId);
      if (canvas) {
        canvas.removeEventListener("mousedown", handlePointerDown);
        canvas.removeEventListener("mouseup", handlePointerUp);
        canvas.removeEventListener("touchstart", handlePointerDown);
        canvas.removeEventListener("touchend", handlePointerUp);
      }
      if (restartButton) {
        restartButton.removeEventListener("click", handleRestartClick);
      }
    };
  }, []);

  return (
    <section id="game">
      <div className="container" style={{ maxWidth: '850px' }}>
        <div className="section-header">
          <h2>Mini Game</h2>
        </div>

        <p 
          style={{ 
            textAlign: 'center', 
            marginTop: '-1rem', 
            marginBottom: '3rem',
            fontSize: '1.1rem',
            color: 'var(--gainsboro)'
          }}
        >
          Test your skills in the <span style={{ color: 'var(--accent-turquoise)' }}>Stick Hero Dev Challenge</span>!
        </p>

        {/* Cabinet with rounded pixel style border */}
        <div 
          className="pixel-box"
          style={{
            maxWidth: '650px',
            margin: '0 auto',
            padding: '1.5rem',
            backgroundColor: '#1c1c1c',
            border: '6px solid var(--border-color)',
            boxShadow: '10px 10px 0px var(--accent-slate)',
            borderRadius: '16px',
            position: 'relative'
          }}
        >
          {/* Game Window Container */}
          <div 
            ref={containerRef}
            style={{
              position: 'relative',
              backgroundColor: '#FEF1E1',
              border: '4px solid var(--border-color)',
              overflow: 'hidden',
              height: '450px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            {/* Canvas */}
            <canvas 
              ref={canvasRef} 
              style={{ display: 'block', width: '100%', height: '100%' }}
            />

            {/* Score Display (Exact original layout style) */}
            <div 
              ref={scoreRef}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                fontSize: '2rem',
                fontWeight: 900,
                color: '#000',
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                pointerEvents: 'none',
                userSelect: 'none'
              }}
            >
              0
            </div>

            {/* Introduction Overlay (Exact original layout style) */}
            <div 
              ref={introRef}
              style={{
                width: '200px',
                height: '150px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -80%)',
                fontWeight: 600,
                fontSize: '0.8rem',
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                textAlign: 'center',
                color: '#000',
                transition: 'opacity 2s',
                pointerEvents: 'none',
                userSelect: 'none'
              }}
            >
              Hold down the mouse to stretch out a stick
            </div>

            {/* Double Score perfect text overlay (Exact original layout style) */}
            <div 
              ref={perfectRef}
              style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                fontWeight: 'bold',
                color: 'red',
                opacity: 0,
                transition: 'opacity 2s',
                pointerEvents: 'none',
                userSelect: 'none'
              }}
            >
              DOUBLE SCORE
            </div>

            {/* Restart Button (Exact original layout style) */}
            <button 
              ref={restartRef}
              style={{
                width: '120px',
                height: '120px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                color: 'white',
                backgroundColor: 'red',
                border: 'none',
                fontWeight: 700,
                fontSize: '1.2rem',
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                display: 'none',
                cursor: 'pointer',
                boxShadow: '3px 3px 6px rgba(0,0,0,0.3)'
              }}
            >
              RESTART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
