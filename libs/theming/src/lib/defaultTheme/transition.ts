const transition = {
  transitionProperty: {
    none: "none",
    all: "all",
    default: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  },
  ease: {
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  duration: {
    "75": "75ms",
    "100": "100ms",
    "150": "150ms",
    "200": "200ms",
    "300": "300ms",
    "500": "500ms",
    "700": "700ms",
    "1000": "1000ms",
  },
  delay: {
    "75": "75ms",
    "100": "100ms",
    "150": "150ms",
    "200": "200ms",
    "300": "300ms",
    "500": "500ms",
    "700": "700ms",
    "1000": "1000ms",
  },
  animation: {
    none: "none",
    spin: "1s linear infinite",
    ping: "1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "1s infinite",
    breathe: "breathing ease-in-out infinite alternate"
  },
  keyframes: {
    spin: `
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `,
    ping: `
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    `,
    pulse: `
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    `,
    bounce: `
      0%, 100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    `,
    breathe: `
      from {
        opacity: 0.25;
      }
      to {
        opacity: 1;
      }
    `
  },
}

export default transition
