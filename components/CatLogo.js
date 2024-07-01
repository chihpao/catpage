'use client';

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
      p.ellipse(50, 50, 80, 80); // 更圓潤的臉部
    
      // Adjusted ears to be more cat-like
      p.triangle(30, 45, 50, 5, 40, 50); // Left ear
      p.triangle(70, 45, 50, 5, 60, 50); // Right ear
    
      // Draw eyes more cat-like
      p.fill(0);
      if (expression === 1) { // Angry
        p.ellipse(40, 50, 8, 20); // Left eye
        p.ellipse(60, 50, 8, 20); // Right eye
      } else {
        p.ellipse(40, 50, 12, 20); // Left eye
        p.ellipse(60, 50, 12, 20); // Right eye
      }
    
      // Draw mouth based on expression
      p.strokeWeight(2);
      switch (expression) {
        case 0: // Happy
          p.arc(50, 60, 30, 20, 0, p.PI);
          break;
        case 1: // Angry
          p.line(40, 70, 60, 70);
          break;
        case 2: // Sad
          p.arc(50, 70, 30, 20, p.PI, 0);
          break;
        case 3: // Joyful
          p.arc(50, 60, 30, 20, 0, p.PI);
          p.line(40, 60, 60, 60);
          break;
      }
    
      // Adding whiskers and a nose for more detail
      p.line(30, 50, 20, 50); // Left whisker
      p.line(70, 50, 80, 50); // Right whisker
      p.ellipse(50, 50, 5, 5); // Nose
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