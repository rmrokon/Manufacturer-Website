module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': 'url("/src/assets/images/banner-img.png")',
        'card-bg': 'url("/src/assets/images/card-bg.png")',
        'parts-img': 'url("/src/assets/images/parts (1).jpg")',
        'drill-bg': 'url("/src/assets/images/drill-bg.jpg")',
        'no-found-bg': 'url("/src/assets/images/drill-bg.jpg")',
      }
    },
  },
  daisyui: {
    themes: [
      {
        smartDrilltheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
