module.exports = {
  
  content: ['./src/**/*.tsx', './docs/**/*.mdx','./docs/**/*.tsx',"./docs/components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },},
  },
  plugins: [require("tailwindcss-animate")],
};