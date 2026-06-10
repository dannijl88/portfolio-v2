import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import "./ParticlesBackground.css";

const initParticles = async (engine: Parameters<typeof loadSlim>[0]) => {
  await loadSlim(engine);
};

export function ParticlesBackground() {
  const options = useMemo<ISourceOptions>(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "transparent",
        },
      },
      detectRetina: true,
      fpsLimit: 60,
      fullScreen: {
        enable: false,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 120,
            links: {
              opacity: 0.18,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#f5f5f5",
        },
        links: {
          color: "#7dd3fc",
          distance: 130,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.35,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 90,
        },
        opacity: {
          value: {
            min: 0.18,
            max: 0.65,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 0.8,
            max: 2.2,
          },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [],
  );

  return (
    <ParticlesProvider init={initParticles}>
      <Particles className="particles-background" id="particles-background" options={options} />
    </ParticlesProvider>
  );
}
