"use client"

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {


  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      autoPlay: true,
      background: {
        color: {
          value: "#bab6e4",
        },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: "#fff",
          },
          opacity: { min: 0.3, max: 0.7 },
        },
        enable: false,
      },
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onDiv: {
            selectors: [],
            enable: false,
            mode: [],
            type: "circle",
          },
          onHover: {
            enable: true,
            mode: "trail",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          trail: {
            delay: 0.005,
            pauseOnStop: true,
            quantity: 5,
            particles: {
              color: {
                value: "#130f82",
                animation: {
                  enable: true,
                  speed: 200,
                  sync: true,
                },
              },
              collisions: {
                enable: false,
              },
              links: {
                enable: false,
              },
              move: {
                outModes: {
                  default: "destroy",
                },
                speed: 2,
              },
              size: {
                value: 5,
                animation: {
                  enable: true,
                  speed: 5,
                  minimumValue: 1,
                  sync: true,
                  startValue: "min",
                  destroy: "max",
                },
              },
            },
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: {
            distance: 200,
          },
          bubble: {
            distance: 200,
            duration: 0.4,
            mix: false,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5,
            },
            radius: 60,
          },
          grab: {
            distance: 100,
            links: {
              blink: false,
              consent: false,
              opacity: 1,
            },
          },
          push: {
            default: true,
            groups: [],
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
          slow: {
            factor: 3,
            radius: 200,
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#130f82",
                },
                stop: {
                  value: "#130f82",
                },
              },
              radius: 1000,
            },
            shadow: {
              color: {
                value: "#130f82",
              },
              length: 2000,
            },
          },
        },
      },
      manualParticles: [],
      particles: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        collisions: {
          absorb: {
            speed: 100,
          },
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          enable: false,
          maxSpeed: 50,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0,
          },
        },
        color: {
          value: "#000", /////color of lines?
          animation: {
            h: {
              count: 0,
              enable: false, //////////////////////////////
              offset: 0,
              speed: 10,
              delay: 0,
              decay: 0,
              sync: false,
            },
            s: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              delay: 0,
              decay: 0,
              sync: false,
            },
            l: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              delay: 0,
              decay: 0,
              sync: false,
            },
          },
        },
        groups: {},
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          attract: {
            distance: 100,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000,
            },
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0,
          },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
            },
            enable: false,
            options: {},
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: false,
          size: false,
          speed: 0.05, ///////////////////////////////////////Speed
          spin: {
            acceleration: 0,
            enable: false,
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fill: {},
          },
          vibrate: false,
          warp: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          limit: 0,
          value: 100,
        },
        opacity: {
          random: {
            enable: false,
            minimumValue: 1,
          },
          value: {
            min: 0.3,
            max: 0.8,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 0, ////////////////////
            decay: 0,
            delay: 0,
            sync: true,
            mode: "auto",
            startValue: "random",
            destroy: "splitAlterate",
            minimumValue: 0.3,
          },
        },
        reduceDuplicates: false,
        shadow: {
          blur: 100,
          color: {
            value: "#000",
          },
          enable: true, /////////////////////////////
          offset: {
            x: 100,
            y: 10000,
          },
        },
        shape: {
          close: true,
          fill: true,
          options: {},
          type: "", //"square" "circle"
        },
        size: {
          random: {
            enable: false,
            minimumValue: 10, /////////////////----------------------------
          },
          value: {
            min: 1,
            max: 3,
          },
          animation: {
            count: 0,
            enable: false,
            speed: 0,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
            minimumValue: 0,
          },
        },
        stroke: {
          width: -5, ///////////////////////
        },
        zIndex: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 3,
            },
            rate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: {
                min: 0,
                max: 0,
              },
            },
            sizeOffset: true,
            particles: {},
          },
        },
        roll: {
          darken: {
            enable: false,
            value: 0,
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0,
          },
          mode: "vertical",
          speed: 25,
        },
        tilt: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          enable: false,
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10,
          },
        },
        life: {
          count: 0,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            sync: false,
          },
          duration: {
            random: {
              enable: false,
              minimumValue: 0.0001,
            },
            value: 0,
            sync: false,
          },
        },
        rotate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          path: false,
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false,
          },
          enable: false,
          opacity: 1,
          rotation: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 45,
          },
          width: 1,
        },
        /////////////////////////

        links: {
          blink: false,
          color: {
            value: "#8d83bb", ////// color
          },
          consent: false,
          distance: 200, /////////////////////// quantity of lines/triangles
          enable: true, /////////////////////////
          frequency: 1, /////////////////////////it's kind of quantity of elements...
          opacity: 1, /////////////////////// opacity of all in general
          shadow: {
            blur: 10,
            color: {
              value: "#8d83bb",
            },
            enable: false,
          },
          triangles: {
            enable: true, ///////////////////////////// appear triangles amont the lines
            frequency: 1, ////////////////////////// cuantity
          },
          width: 1, ////////////////////////////////////lines appear or disappear & width
          warp: false,
        },
        repulse: {
          random: {
            enable: false,
            minimumValue: 100,
          },
          value: 0,
          enabled: true,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1,
        },
      },
      pauseOnBlur: false,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: true, ///////// I think it goes slower?
      style: {},
      themes: [],
      zLayers: 100,
      emitters: [],
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true,
        },
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />
};

export default ParticlesComponent;
