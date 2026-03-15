import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0D0D0D',
          secondary: '#1A1A1A',
          tertiary: '#262626',
          elevated: '#333333',
        },
        text: {
          primary: '#E5E5E5',
          secondary: '#A3A3A3',
          tertiary: '#737373',
          muted: '#525252',
        },
        accent: {
          primary: '#FF4444',
          primaryHover: '#CC0000',
          secondary: '#FF6B35',
          secondaryHover: '#E85D27',
          danger: '#DC2626',
          warning: '#F59E0B',
        },
        border: {
          default: '#404040',
          hover: '#525252',
          accent: '#FF4444',
        },
        glow: {
          primary: 'rgba(255, 68, 68, 0.2)',
          secondary: 'rgba(255, 107, 53, 0.15)',
          danger: 'rgba(220, 38, 38, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
