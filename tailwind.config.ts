import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spark: {
          pink: "#FF6B9D",
          purple: "#C084FC",
          blue: "#60A5FA",
          cyan: "#22D3EE",
          green: "#4ADE80",
          yellow: "#FACC15",
          orange: "#FB923C",
          red: "#F87171",
        },
        dream: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
        surface: {
          dark: "#0F0A1A",
          card: "#1A1128",
          elevated: "#251C3A",
          border: "#362B4D",
        },
      },
      backgroundImage: {
        "gradient-spark":
          "linear-gradient(135deg, #FF6B9D 0%, #C084FC 50%, #60A5FA 100%)",
        "gradient-dream":
          "linear-gradient(135deg, #FB923C 0%, #F97316 50%, #EA580C 100%)",
        "gradient-cosmic":
          "linear-gradient(135deg, #0F0A1A 0%, #1A1128 50%, #251C3A 100%)",
        "gradient-fun":
          "linear-gradient(135deg, #22D3EE 0%, #C084FC 50%, #FF6B9D 100%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
