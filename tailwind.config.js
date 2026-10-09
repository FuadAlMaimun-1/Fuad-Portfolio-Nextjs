/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f1419',
        'dark-card': '#1a1f2e',
        'dark-border': '#2d3748',
        'accent-blue': '#3b82f6',
        'accent-blue-dark': '#1e40af',
        'accent-orange': '#f97316',
        'accent-orange-dark': '#c2410c',
        'text-primary': '#f0f4f8',
        'text-secondary': '#a0aec0',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
        preahvihear: ['Preahvihear', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '48px' }],
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-left))',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 4px 24px 0 rgba(0, 0, 0, 0.3)',
        'hover': '0 8px 32px 0 rgba(59, 130, 246, 0.2)',
      },
      backdropBlur: {
        'glass': '4px',
      },
    },
  },
  plugins: [],
}