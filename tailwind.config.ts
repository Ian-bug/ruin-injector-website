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
        'morph': 'morph 8s ease-in-out infinite',
        'drift': 'drift 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'border-rotate': 'borderRotate 4s linear infinite',
        'orb-float-1': 'orbFloat1 12s ease-in-out infinite',
        'orb-float-2': 'orbFloat2 15s ease-in-out infinite',
        'orb-float-3': 'orbFloat3 10s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'gradient-x': 'gradientX 6s ease infinite',
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
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(10px, -15px) scale(1.05)' },
          '50%': { transform: 'translate(-5px, 10px) scale(0.95)' },
          '75%': { transform: 'translate(-10px, -5px) scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderRotate: {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        orbFloat1: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '33%': { transform: 'translate(30px, -20px)' },
          '66%': { transform: 'translate(-20px, 15px)' },
        },
        orbFloat2: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '33%': { transform: 'translate(-25px, 18px)' },
          '66%': { transform: 'translate(15px, -12px)' },
        },
        orbFloat3: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(18px, -25px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
