import React, { useEffect } from 'react';
import p5 from 'p5';

const CatLogo = () => {
  const Sketch = (p) => {
    let expression = 0;

    p.setup = () => {
      p.createCanvas(100, 100);
      p.frameRate(1); // 每秒更新一次
    };

    p.draw = () => {
      p.background(255);
      expression = (expression + 1) % 4;
      drawCatLogo(p, expression);
    };

    const drawCatLogo = (p, expression) => {
      p.clear();
      // Draw cat face
      p.fill(255);
      p.stroke(0);
      p.ellipse(50, 50, 80, 80); // Face
      // Adjusted ears to be more cat-like
      p.triangle(30, 40, 50, 20, 40, 50); // Left ear
      p.triangle(70, 40, 50, 20, 60, 50); // Right ear

      // Draw eyes more cat-like
      p.fill(0);
      p.ellipse(40, 50, 12, 20); // Left eye
      p.ellipse(60, 50, 12, 20); // Right eye

      // Draw mouth based on expression
      p.strokeWeight(2);
      switch (expression) {
        case 0: // Happy
          p.arc(50, 60, 30, 20, 0, p.PI);
          break;
        case 1: // Angry
          p.line(40, 70, 60, 70);
          p.arc(40, 60, 10, 20, p.PI, 0);
          p.arc(60, 60, 10, 20, p.PI, 0);
          break;
        case 2: // Sad
          p.arc(50, 70, 30, 20, p.PI, 0);
          break;
        case 3: // Joyful
          p.arc(50, 60, 30, 20, 0, p.PI);
          p.line(40, 60, 60, 60);
          break;
      }
    };
  };

  useEffect(() => {
    // Ensure only one instance is created
    const container = document.getElementById('cat-logo');
    if (!container.hasChildNodes()) {
      new p5(Sketch, container);
    }
  }, []);

  return <div id="cat-logo"></div>;
};

export default CatLogo;