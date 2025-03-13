// Squares.ts: Este programa dibuja 50 cuadrados dentro de otros
class Squares {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;
  
    constructor() {
      this.canvas = document.createElement("canvas");
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
  
      if (this.ctx) {
        this.canvas.width = 600;
        this.canvas.height = 400;
  
        this.drawSquares();
      }
    }
  
    private drawSquares() {
      const width = this.canvas.width;
      const height = this.canvas.height;
      const minMaxXY = Math.min(width, height);
      const xCenter = width / 2;
      const yCenter = height / 2;
  
      let side = 0.95 * minMaxXY; // Tamaño inicial del cuadrado
      let sideHalf = 0.5 * side;  // Mitad del lado del cuadrado
  
      const q = 0.05;  // Factor de reducción
      const p = 1 - q;  // Factor de escala
  
      // Coordenadas iniciales del cuadrado
      let xA = xCenter - sideHalf;
      let yA = yCenter - sideHalf;
      let xB = xCenter + sideHalf;
      let yB = yCenter - sideHalf;
      let xC = xCenter + sideHalf;
      let yC = yCenter + sideHalf;
      let xD = xCenter - sideHalf;
      let yD = yCenter + sideHalf;
  
      // Dibuja los 50 cuadrados dentro de otros
      for (let i = 0; i < 50; i++) {
        if (this.ctx) {
          // Dibuja el cuadrado actual
          this.ctx.beginPath();
          this.ctx.moveTo(xA, yA);
          this.ctx.lineTo(xB, yB); // Lado superior
          this.ctx.lineTo(xC, yC); // Lado derecho
          this.ctx.lineTo(xD, yD); // Lado inferior
          this.ctx.lineTo(xA, yA); // Lado izquierdo
          this.ctx.closePath();
          this.ctx.stroke();
  
          // Calcula las nuevas coordenadas para el siguiente cuadrado más pequeño
          const xA1 = p * xA + q * xB;
          const yA1 = p * yA + q * yB;
          const xB1 = p * xB + q * xC;
          const yB1 = p * yB + q * yC;
          const xC1 = p * xC + q * xD;
          const yC1 = p * yC + q * yD;
          const xD1 = p * xD + q * xA;
          const yD1 = p * yD + q * yA;
  
          // Actualiza las coordenadas para el siguiente cuadrado
          xA = xA1;
          yA = yA1;
          xB = xB1;
          yB = yB1;
          xC = xC1;
          yC = yC1;
          xD = xD1;
          yD = yD1;
        }
      }
    }
  }
  
  // Ejecutar el programa
  window.onload = () => {
    new Squares();
  };
  