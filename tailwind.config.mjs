/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#60A5FB',
        },
        // Deep navy used for dark "feature" sections (not pure black)
        ink: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          soft: '#334155',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 12px 32px -8px rgba(15, 23, 42, 0.16)',
      },
    },
  },
  plugins: [],
};
