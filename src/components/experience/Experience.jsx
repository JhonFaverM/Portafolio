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
    const ballSpeed = 0.8;

    const ballData = [
      {
        element: balls[0],
        x: getRandomPosition(containerWidth, balls[0].offsetWidth),
        y: getRandomPosition(containerHeight, balls[0].offsetHeight),
        directionX: 1,
        directionY: 1,
      },
      {
        element: balls[1],
        x: getRandomPosition(containerWidth, balls[1].offsetWidth),
        y: getRandomPosition(containerHeight, balls[1].offsetHeight),
        directionX: 1,
        directionY: -1,
      },
      {
        element: balls[2],
        x: getRandomPosition(containerWidth, balls[2].offsetWidth),
        y: getRandomPosition(containerHeight, balls[2].offsetHeight),
        directionX: -1,
        directionY: 1,
      },
      {
        element: balls[3],
        x: getRandomPosition(containerWidth, balls[3].offsetWidth),
        y: getRandomPosition(containerHeight, balls[3].offsetHeight),
        directionX: -1,
        directionY: -1,
      },
      {
        element: balls[4],
        x: getRandomPosition(containerWidth, balls[4].offsetWidth),
        y: getRandomPosition(containerHeight, balls[4].offsetHeight),
        directionX: 1,
        directionY: 1,
      },
      {
        element: balls[5],
        x: getRandomPosition(containerWidth, balls[5].offsetWidth),
        y: getRandomPosition(containerHeight, balls[5].offsetHeight),
        directionX: -1,
        directionY: -1,
      },
      {
        element: balls[6],
        x: getRandomPosition(containerWidth, balls[6].offsetWidth),
        y: getRandomPosition(containerHeight, balls[6].offsetHeight),
        directionX: 1,
        directionY: -1,
      },
      // ... add more ball data objects here
    ];

    ballData.forEach((ball) => {
      ball.x = getRandomPosition(containerWidth, ball.element.offsetWidth);
      ball.y = getRandomPosition(containerHeight, ball.element.offsetHeight);
    });

    function getRandomPosition(containerSize, ballSize) {
      return Math.random() * (containerSize - ballSize);
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

      for (let i = 0; i < ballData.length; i++) {
        const ball1 = ballData[i];

        for (let j = i + 1; j < ballData.length; j++) {
          const ball2 = ballData[j];

          if (checkCollision(ball1, ball2)) {
            swapDirections(ball1, ball2);
          }
        }
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
                <h4>NodeJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
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
          <div className='experience__content' ref={containerRef}>
            <div class="container1" >

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


