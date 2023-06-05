import React, {useRef, useEffect} from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaAngular} from 'react-icons/fa'
import {TbBrandMongodb} from 'react-icons/tb'
import {GrReactjs} from 'react-icons/gr'
import {FaNodeJs} from 'react-icons/fa'
import {ImHtmlFive} from 'react-icons/im'
import {SiJavascript} from 'react-icons/si'
import {SiCsswizardry} from 'react-icons/si'


function checkCollision(ball1, ball2) {
  const dx = ball1.x - ball2.x;
  const dy = ball1.y - ball2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const minDistance = ball1.element.offsetWidth; // Distancia mínima considerada para la colisión
  if (distance <= minDistance) {
    // Si hay colisión, se ajustan las posiciones para evitar que las bolas se queden pegadas
    const angle = Math.atan2(dy, dx);
    

    const sinAngle = Math.sin(angle);
    const cosAngle = Math.cos(angle);

    return true; // Indicar que hubo colisión
  }

  return false; // No hay colisión
}

function swapDirections(ball1, ball2) {
  const tempDirX = ball1.directionX;
  const tempDirY = ball1.directionY;
  ball1.directionX = ball2.directionX;
  ball1.directionY = ball2.directionY;
  ball2.directionX = tempDirX;
  ball2.directionY = tempDirY;
}

const Experience = () => {
  const containerRef = useRef(null);
  const ballsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const balls = ballsRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const ballSpeed = 1;

    const ball1 = {
      element: balls[0],
      x: getRandomPosition(containerWidth, balls[0].offsetWidth),
      y: getRandomPosition(containerHeight, balls[0].offsetHeight),
      directionX: 1,
      directionY: 1,
    };

    const ball2 = {
      element: balls[1],
      x: getRandomPosition(containerWidth, balls[1].offsetWidth),
      y: getRandomPosition(containerHeight, balls[1].offsetHeight),
      directionX: 1,
      directionY: -1,
    };

    const ball3 = {
      element: balls[2],
      x: getRandomPosition(containerWidth, balls[2].offsetWidth),
      y: getRandomPosition(containerHeight, balls[2].offsetHeight),
      directionX: -1,
      directionY: 1,
    };

    const ball4 = {
      element: balls[3],
      x: getRandomPosition(containerWidth, balls[3].offsetWidth),
      y: getRandomPosition(containerHeight, balls[3].offsetHeight),
      directionX: -1,
      directionY: -1,
    };

    const ball5 = {
      element: balls[4],
      x: getRandomPosition(containerWidth, balls[4].offsetWidth),
      y: getRandomPosition(containerHeight, balls[4].offsetHeight),
      directionX: 1,
      directionY: 1,
    };

    const ball6 = {
      element: balls[5],
      x: getRandomPosition(containerWidth, balls[5].offsetWidth),
      y: getRandomPosition(containerHeight, balls[5].offsetHeight),
      directionX: -1,
      directionY: -1,
    };

    const ball7 = {
      element: balls[6],
      x: getRandomPosition(containerWidth, balls[6].offsetWidth),
      y: getRandomPosition(containerHeight, balls[6].offsetHeight),
      directionX: 1,
      directionY: -1,
    };

    function getRandomPosition(containerSize, ballSize) {
      return Math.random() * (containerSize - ballSize);
    }

    function moveBalls() {
      
      ball1.x += ballSpeed * ball1.directionX;
      ball1.y += ballSpeed * ball1.directionY;

      ball2.x += ballSpeed * ball2.directionX;
      ball2.y += ballSpeed * ball2.directionY;

      ball3.x += ballSpeed * ball3.directionX;
      ball3.y += ballSpeed * ball3.directionY;

      ball4.x += ballSpeed * ball4.directionX;
      ball4.y += ballSpeed * ball4.directionY;

      ball5.x += ballSpeed * ball5.directionX;
      ball5.y += ballSpeed * ball5.directionY;

      ball6.x += ballSpeed * ball6.directionX;
      ball6.y += ballSpeed * ball6.directionY;

      ball7.x += ballSpeed * ball7.directionX;
      ball7.y += ballSpeed * ball7.directionY;

  
      //ball1
      if (
        ball1.x <= 0 ||
        ball1.x + ball1.element.offsetWidth >= containerWidth
      ) {
        ball1.directionX *= -1;
      }

      if (
        ball1.y <= 0 ||
        ball1.y + ball1.element.offsetHeight >= containerHeight
      ) {
        ball1.directionY *= -1;
      }
      //ball2
      if (
        ball2.x <= 0 ||
        ball2.x + ball2.element.offsetWidth >= containerWidth
      ) {
        ball2.directionX *= -1;
      }

      if (
        ball2.y <= 0 ||
        ball2.y + ball2.element.offsetHeight >= containerHeight
      ) {
        ball2.directionY *= -1
      }
      //ball3
      if (
        ball3.x <= 0 ||
        ball3.x + ball3.element.offsetWidth >= containerWidth
      ) {
        ball3.directionX *= -1;
      }

      if (
        ball3.y <= 0 ||
        ball3.y + ball3.element.offsetHeight >= containerHeight
      ) {
        ball3.directionY *= -1;
      }

      if (
        ball4.x <= 0 ||
        ball4.x + ball4.element.offsetWidth >= containerWidth
      ) {
        ball4.directionX *= -1;
      }

      if (
        ball4.y <= 0 ||
        ball4.y + ball4.element.offsetHeight >= containerHeight
      ) {
        ball4.directionY *= -1;
      }

      if (
        ball5.x <= 0 ||
        ball5.x + ball5.element.offsetWidth >= containerWidth
      ) {
        ball5.directionX *= -1;
      }

      if (
        ball5.y <= 0 ||
        ball5.y + ball5.element.offsetHeight >= containerHeight
      ) {
        ball5.directionY *= -1;
      }

      if (
        ball6.x <= 0 ||
        ball6.x + ball6.element.offsetWidth >= containerWidth
      ) {
        ball6.directionX *= -1;
      }

      if (
        ball6.y <= 0 ||
        ball6.y + ball6.element.offsetHeight >= containerHeight
      ) {
        ball6.directionY *= -1;
      }


      if (
        ball7.x <= 0 ||
        ball7.x + ball7.element.offsetWidth >= containerWidth
      ) {
        ball7.directionX *= -1;
      }

      if (
        ball7.y <= 0 ||
        ball7.y + ball7.element.offsetHeight >= containerHeight
      ) {
        ball7.directionY *= -1;
      }


      ball1.element.style.transform = `translate(${ball1.x}px, ${ball1.y}px)`;
      ball2.element.style.transform = `translate(${ball2.x}px, ${ball2.y}px)`;
      ball3.element.style.transform = `translate(${ball3.x}px, ${ball3.y}px)`;
      ball4.element.style.transform = `translate(${ball4.x}px, ${ball4.y}px)`;
      ball5.element.style.transform = `translate(${ball5.x}px, ${ball5.y}px)`;
      ball6.element.style.transform = `translate(${ball6.x}px, ${ball6.y}px)`;
      ball7.element.style.transform = `translate(${ball7.x}px, ${ball7.y}px)`;


      // Cambiar de dirección al encontrarse
      if (checkCollision(ball1, ball2)) {
        swapDirections(ball1, ball2);
      }
      
      if (checkCollision(ball1, ball3)) {
        swapDirections(ball1, ball3);
      }
      
      if (checkCollision(ball1, ball4)) {
        swapDirections(ball1, ball4);
      }
      
      if (checkCollision(ball1, ball5)) {
        swapDirections(ball1, ball5);
      }
      
      if (checkCollision(ball1, ball6)) {
        swapDirections(ball1, ball6);
      }
      if (checkCollision(ball1, ball7)) {
        swapDirections(ball1, ball7);
      }
      //Ball 2
      if (checkCollision(ball2, ball3)) {
        swapDirections(ball2, ball3);
      }

      if (checkCollision(ball2, ball4)) {
        swapDirections(ball2, ball4);
      }

      if (checkCollision(ball2, ball5)) {
        swapDirections(ball2, ball5);
      }

      if (checkCollision(ball2, ball6)) {
        swapDirections(ball2, ball6);
      }

      if (checkCollision(ball2, ball7)) {
        swapDirections(ball2, ball7);
      }
      //Ball 3
      if (checkCollision(ball3, ball4)) {
        swapDirections(ball3, ball4);
      }

      if (checkCollision(ball3, ball5)) {
        swapDirections(ball3, ball5);
      }

      if (checkCollision(ball3, ball6)) {
        swapDirections(ball3, ball6);
      }

      if (checkCollision(ball3, ball7)) {
        swapDirections(ball3, ball7);
      }
      //Ball 4
      if (checkCollision(ball4, ball5)) {
        swapDirections(ball4, ball5);
      }

      if (checkCollision(ball4, ball6)) {
        swapDirections(ball4, ball6);
      }

      if (checkCollision(ball4, ball7)) {
        swapDirections(ball4, ball7);
      }
      //Ball 5
      if (checkCollision(ball5, ball6)) {
        swapDirections(ball5, ball6);
      }

      if (checkCollision(ball5, ball7)) {
        swapDirections(ball5, ball7);
      }
      //Ball 6
      if (checkCollision(ball6, ball7)) {
        swapDirections(ball6, ball7);
      }

      requestAnimationFrame(moveBalls);
    }

    moveBalls();
  }, []);


  return (
    <section id='experience'>
      <h2>What Skills I Have</h2>

      <div className='container experience__container'>
      <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>   
        <div className='experience__backend'>
          <div className='experience__content'>
            <div class="container1" ref={containerRef}>

              <div className="ball1" ref={el => (ballsRef.current[0] = el)}>
                <TbBrandMongodb />
              </div>
              <div className="ball2" ref={el => (ballsRef.current[1] = el)}>
                <GrReactjs />
              </div>
              <div className="ball3" ref={el => (ballsRef.current[2] = el)}>
                <FaNodeJs />
              </div>
              <div className="ball4" ref={el => (ballsRef.current[3] = el)}>
                <FaAngular />
              </div>
              <div className="ball5" ref={el => (ballsRef.current[4] = el)}>
                <ImHtmlFive />
              </div>
              <div className="ball6" ref={el => (ballsRef.current[5] = el)}>
                <SiJavascript />
              </div>
              <div className="ball7" ref={el => (ballsRef.current[6] = el)}>
                <SiCsswizardry />
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  )
}

export default Experience

