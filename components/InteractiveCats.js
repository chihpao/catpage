import React, { useState, useEffect, useRef } from 'react';
import p5 from 'p5';

const InteractiveCats = () => {
  const sketchRef = useRef();
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const Sketch = (p) => {
      let x = 100;
      let y = 100;
      let speed = 2;

      p.setup = () => {
        p.createCanvas(400, 400).parent(sketchRef.current);
      };

      p.draw = () => {
        p.background(220);
        drawCat(p, x, y);

        switch (direction) {
          case 'left':
            x -= speed;
            break;
          case 'right':
            x += speed;
            break;
          case 'up':
            y -= speed;
            break;
          case 'down':
            y += speed;
            break;
          default:
            break;
        }

        x = p.constrain(x, 0, p.width - 50);
        y = p.constrain(y, 0, p.height - 50);
      };

      const drawCat = (p, x, y) => {
        p.fill(200);
        p.ellipse(x, y, 50, 50); // Head
        p.fill(0);
        p.ellipse(x - 10, y - 10, 10, 10); // Left eye
        p.ellipse(x + 10, y - 10, 10, 10); // Right eye
        p.fill(255);
        p.ellipse(x, y + 5, 20, 10); // Nose
        p.stroke(0);
        p.line(x, y + 5, x, y + 15); // Mouth
        p.noFill();
        p.arc(x, y + 15, 20, 10, 0, Math.PI); // Smile
      };
    };

    new p5(Sketch);
  }, [direction]);

  return (
    <div>
      <div ref={sketchRef}></div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={() => setDirection('left')}>Left</button>
        <button onClick={() => setDirection('right')}>Right</button>
        <button onClick={() => setDirection('up')}>Up</button>
        <button onClick={() => setDirection('down')}>Down</button>
      </div>
    </div>
  );
};

export default InteractiveCats;