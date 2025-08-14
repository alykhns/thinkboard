import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
      rafa: {
        "primary": "#801518",
        "secondary": "#9B8174",
        "accent": "#F438B3",
        "neutral": "#002028",
        "base-100": "#0F0000",
        "base-200": "#301216",
        // tambahkan warna lain sesuai kebutuhan
      }
    },
    ]
  },
}