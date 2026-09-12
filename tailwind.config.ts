import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0908",
        panel: "#121110",
        panel2: "#171614",
        bone: "#F5F2EA",
        bone2: "#B8B3A7",
        flame: "#FF4B2B",
        flame2: "#FF7A54",
        gold: "#C9A86A",
        line: "rgba(245,242,234,0.12)"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      fontSize: {
        "hero": ["clamp(3.2rem, 9vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.01em" }],
        "h2": ["clamp(2.2rem, 5vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.01em" }],
        "h3": ["clamp(1.5rem, 3vw, 2.4rem)", { lineHeight: "1.05" }]
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      backgroundImage: {
        "grain": "url('/grain.png')"
      }
    }
  },
  plugins: []
};

export default config;
