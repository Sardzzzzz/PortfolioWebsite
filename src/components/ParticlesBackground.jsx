import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ["#6366f1", "#a855f7", "#06b6d4"] },
          links: {
            color: "#8b5cf6",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            outModes: { default: "bounce" },
          },
          number: { value: 60, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
