'use client';

import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const InteractiveCats = ({ direction }) => {
  const sketchRef = useRef();

  const Sketch = (p) => {
    let cats = [];

    p.setup = () => {
      p.createCanvas(400, 400);
      for (let i = 0; i < 10; i++) {
        cats.push(new Cat(p, p.random(p.width), p.random(p.height)));
      }
    };

    p.draw = () => {
      p.background(220);
      cats.forEach(cat => {
        cat.move();
        cat.display();
      });
    };

    p.updateDirection = (dir) => {
      cats.forEach(cat => cat.changeDirection(dir));
    };

    class Cat {
      constructor(p, x, y) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.xSpeed = p.random(-2, 2);
        this.ySpeed = p.random(-2, 2);
      }

      move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > p.width || this.x < 0) {
          this.xSpeed *= -1;
        }
        if (this.y > p.height || this.y < 0) {
          this.ySpeed *= -1;
        }
      }

      display() {
        p.fill(150);
        p.ellipse(this.x, this.y, 20, 20);
      }

      changeDirection(direction) {
        switch (direction) {
          case 'up':
            this.ySpeed = -2;
            break;
          case 'down':
            this.ySpeed = 2;
            break;
          case 'left':
            this.xSpeed = -2;
            break;
          case 'right':
            this.xSpeed = 2;
            break;
        }
      }
    }
  };

  useEffect(() => {
    sketchRef.current = new p5(Sketch, document.getElementById('interactive-cats'));
    return () => {
      sketchRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (sketchRef.current) {
      sketchRef.current.updateDirection(direction);
    }
  }, [direction]);

  return <div id="interactive-cats"></div>;
};

export default InteractiveCats;
