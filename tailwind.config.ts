import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#06060A',
          secondary: '#0C0C12',
          tertiary: '#12121A',
          elevated: '#1A1A24',
        },
        txt: {
          DEFAULT: '#E8E8EC',
          secondary: '#8888A0',
          tertiary: '#555568',
          muted: '#333340',
        },
        accent: {
          DEFAULT: '#00E5FF',
          hover: '#00B8CC',
          soft: 'rgba(0, 229, 255, 0.08)',
          glow: 'rgba(0, 229, 255, 0.15)',
        },
        coral: {
          DEFAULT: '#FF4D6D',
          hover: '#E63E5A',
          soft: 'rgba(255, 77, 109, 0.08)',
        },
        border: {
          DEFAULT: '#1E1E2A',
          hover: '#2E2E3E',
          accent: '#00E5FF',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['IBM Plex Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'typing': 'typing 3s steps(30) infinite',
        'grid-fade': 'gridFade 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.3)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        gridFade: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
