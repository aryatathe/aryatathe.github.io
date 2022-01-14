import * as React from "react";
import { useRef, useState, useEffect } from "react";

const MouseTrail = (): JSX.Element => {
  const [x, setX] = useState<number>(window.innerWidth / 2);
  const [y, setY] = useState<number>(window.innerHeight / 2);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    var rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = window.innerWidth;
    canvas.height = rect.height;

    var mouseMoving = false,
      mouseMoveChecker: any,
      cursorX: number,
      cursorY: number,
      mouseRelY: number,
      dots: Dot[] = [];

    class Dot {
      id: number;
      x: number;
      y: number;
      radius: number = Math.floor(Math.random() * 2) + 2;
      opacity: number = 0.5;
      color: string;
      linkColour: string;
      direction: number = Math.floor(Math.random() * 140) + 200;

      spawn: () => void = function () {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.radius * 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
      };

      join: () => void = function () {
        if (this.id == 0) return;
        var lastDot1 = getLastDot(this.id, 1);
        var lastDot2 = getLastDot(this.id, 2);
        var lastDot3 = getLastDot(this.id, 3);
        if (!lastDot1) return;
        ctx.strokeStyle = this.linkColour;
        ctx.moveTo(lastDot1.x, lastDot1.y);
        ctx.beginPath();
        ctx.lineTo(this.x, this.y);
        if (lastDot2 != false) ctx.lineTo(lastDot2.x, lastDot2.y);
        if (lastDot3 != false) ctx.lineTo(lastDot3.x, lastDot3.y);
        ctx.stroke();
        ctx.closePath();
      };

      move: () => void = function () {
        this.opacity -= 0.01;
        if (this.opacity <= 0) {
          dots[this.id] = null;
          delete dots[this.id];
          return;
        }
        this.color = "rgba(255,255,255," + this.opacity + ")";
        this.linkColour = "rgba(255,255,255," + this.opacity / 4 + ")";
        (this.x = this.x + Math.cos(this.direction * (Math.PI / 180)) * 0.5),
          (this.y = this.y + Math.sin(this.direction * (Math.PI / 180)) * 0.5);

        this.spawn();
        this.join();
      };

      constructor(id: number, x: number, y: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = "rgba(255,255,255," + this.opacity + ")";
        this.linkColour = "rgba(255,255,255," + this.opacity / 4 + ")";
      }
    }

    function getLastDot(id: number, stepback: number) {
      if (id == 0 || id - stepback < 0) return false;
      if (typeof dots[id - stepback] != "undefined") return dots[id - stepback];
      else return false;
    }

    ctx.strokeStyle = "#fab2ca";
    ctx.shadowColor = "#fab2ca";
    animate();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i in dots) {
        dots[i].move();
      }
      drawIfMouseMoving();
      requestAnimationFrame(animate);
    }

    window.onmousemove = function (e: MouseEvent) {
      mouseMoving = true;
      cursorX = e.pageX;
      cursorY = e.pageY;
      mouseRelY = e.clientY;
      clearInterval(mouseMoveChecker);
      mouseMoveChecker = setTimeout(function () {
        mouseMoving = false;
      }, 100);
    };

    window.onscroll = function (e: MouseEvent) {
      mouseMoving = true;
      cursorY = mouseRelY + window.scrollY;
      clearInterval(mouseMoveChecker);
      mouseMoveChecker = setTimeout(function () {
        mouseMoving = false;
      }, 100);
    };

    window.onresize = function () {
      var rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = window.innerWidth;
      canvas.height = rect.height;
    };

    function drawIfMouseMoving() {
      if (!mouseMoving) return;

      if (dots.length == 0) {
        dots[0] = new Dot(0, cursorX, cursorY);
        dots[0].spawn();
        return;
      }

      var lastDot: Dot | boolean = getLastDot(dots.length, 1);
      var lastX: number = lastDot === false ? 0 : lastDot.x;
      var lastY: number = lastDot === false ? 0 : lastDot.y;

      if (Math.abs(lastX - cursorX) < 2 || Math.abs(lastY - cursorY) < 2)
        return;

      var xVariation =
        (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * 10) + 1;
      var yVariation =
        (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * 10) + 1;
      dots[dots.length] = new Dot(
        dots.length,
        cursorX + xVariation,
        cursorY + yVariation
      );
      dots[dots.length - 1].spawn();
      dots[dots.length - 1].join();
    }
  });

  return <canvas style={{ position: "absolute" }} ref={canvasRef} />;
};

export default MouseTrail;
