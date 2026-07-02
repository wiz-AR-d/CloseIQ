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
        "sans": ["Inter", "sans-serif"],
      },
      borderRadius: {"DEFAULT": "0.5rem", "lg": "0.75rem", "xl": "1rem", "2xl": "1.5rem", "3xl": "2rem", "full": "9999px"},
      boxShadow: {
        'clay': '0 0 20px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'clay-sm': '0 0 10px rgba(255, 255, 255, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'clay-hover': '0 0 40px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
