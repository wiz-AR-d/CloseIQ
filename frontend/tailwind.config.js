const colorVariables = [
  "on-error",
  "surface-container-high",
  "on-secondary-container",
  "secondary-dim",
  "primary-fixed-dim",
  "secondary",
  "on-tertiary-fixed-variant",
  "on-primary-fixed",
  "on-primary-container",
  "surface-container-lowest",
  "surface",
  "on-error-container",
  "primary-fixed",
  "surface-tint",
  "error-dim",
  "primary-container",
  "tertiary-fixed-dim",
  "on-secondary",
  "tertiary-dim",
  "on-primary-fixed-variant",
  "on-surface",
  "on-secondary-fixed",
  "surface-container-low",
  "secondary-fixed-dim",
  "tertiary-fixed",
  "background",
  "surface-container-highest",
  "surface-variant",
  "on-primary",
  "on-surface-variant",
  "outline",
  "surface-bright",
  "primary-dim",
  "tertiary",
  "on-tertiary-container",
  "outline-variant",
  "tertiary-container",
  "on-secondary-fixed-variant",
  "on-background",
  "primary",
  "error",
  "surface-container",
  "inverse-on-surface",
  "inverse-primary",
  "secondary-container",
  "surface-dim",
  "error-container",
  "secondary-fixed",
  "inverse-surface",
  "on-tertiary-fixed",
  "on-tertiary"
];

const colors = {};
colorVariables.forEach(color => {
  colors[color] = `rgb(var(--color-${color}) / <alpha-value>)`;
});

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors,
      fontFamily: {
        "headline": ["Space Grotesk"],
        "body": ["Inter"],
        "label": ["Inter"],
        "serif": ["Cormorant Garamond", "serif"]
      },
      borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "0px"},
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
