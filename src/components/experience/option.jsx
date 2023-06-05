function checkCollision(ball1, ball2) {
    const dx = ball1.x - ball2.x;
    const dy = ball1.y - ball2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance = ball1.element.offsetWidth / 2 + ball2.element.offsetWidth / 2; // Suma de los radios de las bolas
    if (distance <= minDistance) {
      // Si hay colisión, se ajustan las posiciones para evitar que las bolas se queden pegadas
      const angle = Math.atan2(dy, dx);
      const sinAngle = Math.sin(angle);
      const cosAngle = Math.cos(angle);
  
      // Calcular las nuevas posiciones teniendo en cuenta los radios de las bolas
      const newBall1X = ball2.x + (ball2.element.offsetWidth / 2 + ball1.element.offsetWidth / 2) * cosAngle;
      const newBall1Y = ball2.y + (ball2.element.offsetHeight / 2 + ball1.element.offsetHeight / 2) * sinAngle;
      const newBall2X = ball1.x - (ball1.element.offsetWidth / 2 + ball2.element.offsetWidth / 2) * cosAngle;
      const newBall2Y = ball1.y - (ball1.element.offsetHeight / 2 + ball2.element.offsetHeight / 2) * sinAngle;
  
      // Actualizar las posiciones de las bolas
      ball1.x = newBall1X;
      ball1.y = newBall1Y;
      ball2.x = newBall2X;
      ball2.y = newBall2Y;
  
      return true; // Indicar que hubo colisión
    }
  
    return false; // No hay colisión
  }






  function moveBalls() {
    ballData.forEach((ball) => {
      ball.x += ballSpeed * ball.directionX;
      ball.y += ballSpeed * ball.directionY;
  
      if (ball.x <= 0 || ball.x + ball.element.offsetWidth >= containerWidth) {
        ball.directionX *= -1;
      }
  
      if (ball.y <= 0 || ball.y + ball.element.offsetHeight >= containerHeight) {
        ball.directionY *= -1;
      }
  
      // Limitar las posiciones dentro del contenedor
      ball.x = Math.max(0, Math.min(containerWidth - ball.element.offsetWidth, ball.x));
      ball.y = Math.max(0, Math.min(containerHeight - ball.element.offsetHeight, ball.y));
  
      ball.element.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
    });
  
    // Resto del código...
  }