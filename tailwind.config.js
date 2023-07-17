/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '1280px'
    },
    colors: {
      pf: {
        1: "#AD1FEA",
        2: "#4661E6",
        3: "#373F68",
        4: "#FFFFFF",
        5: "#F2F4FF",
        6: "#F7F8FD",
        7: "#3A4374",
        8: "#647196",
        9: "#F49F85",
        10: "#62BCFA",
        11: "#D73737"
      },
    },
    fontSize: {
      p1: ['1rem', {
        lineHeight: '1.4375rem',
        fontWeight: 400
      }],
      p2: ['.9375rem', {
        lineHeight: '1.375rem',
        fontWeight: 400
      }],
      p3: ['.8125rem', {
        lineHeight: '1.1875rem',
        fontWeight: 500
      }],
      h1: ['1.5rem', {
        lineHeight: '2.1875rem',
        fontWeight: 700
      }],
      h2: ['1.25rem', {
        lineHeight: '1.8125rem',
        fontWeight: 700
      }],
      h3: ['1.125rem', {
        lineHeight: '1.625rem',
        fontWeight: 700
      }],
      h4: ['.875rem', {
        lineHeight: '1.25rem',
        fontWeight: 700
      }],
      ...defaultTheme.fontSize
    },
    extend: {
      fontFamily: {
        joboto: ["Jost var, sans-serif"]
      }
    },
  },
  plugins: [],
}