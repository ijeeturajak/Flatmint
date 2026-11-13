/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#F2FCF8',
          100: '#E1FAF0',
          200: '#B7F7DE', // Secondary brand tint
          300: '#7FEEC4',
          400: '#46E4AC',
          500: '#27D9A3', // Primary brand color
          600: '#1EB889',
          700: '#17916C',
          800: '#146E53',
          900: '#172A27', // Dark brand charcoal
          950: '#0C1715',
        },
        charcoal: {
          50: '#F7FAF9',
          100: '#EBF0EE',
          200: '#D5DFDC',
          300: '#B0C2BD',
          400: '#879E98',
          500: '#647D77',
          600: '#4E625D',
          700: '#3D4D49',
          800: '#2A3633',
          900: '#172A27',
          950: '#0F1C1A',
        },
        peach: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FFB86B', // Accent warm color
          500: '#F97316',
          600: '#EA580C',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'mint-sm': '0 2px 8px -2px rgba(39, 217, 163, 0.25)',
        'mint': '0 8px 24px -4px rgba(39, 217, 163, 0.3)',
        'mint-lg': '0 16px 36px -6px rgba(39, 217, 163, 0.35)',
        'glass': '0 8px 32px 0 rgba(23, 42, 39, 0.08)',
        'card': '0 4px 20px -2px rgba(23, 42, 39, 0.06), 0 2px 6px -1px rgba(23, 42, 39, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(23, 42, 39, 0.12), 0 4px 12px -2px rgba(39, 217, 163, 0.15)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

