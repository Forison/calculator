import React from 'react';
import Particles from 'react-particles-js';

const Particlewrap = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 850,
            density: {
              enable: true,
              value_area: 1803.4120608655228,
            },
          },
          color: {
            value: "#f05e23",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 2,
              color: 'green',
            },
            polygon: {
              nb_sides: 7,
            },
            image: {
              src: 'img/githb.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.4008530152163807,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 60,
            color: '#777',
            opacity: 0.3687847739990702,
            width: 0.6413648243462091,
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: false,
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  </div>
);
export default Particlewrap;
