/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        titles: ['Playfair Display', 'serif'],
        text: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: {
            DEFAULT: '#8257E5',
            medium: '#996DFF',
          },
          secondary: {
            100: '#F2F2FA',
            200: '#E1E1E6',
            300: '#A8A8B3',
            700: '#29292E',
            800: '#202024',
            900: '#121214',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
