# Ruin DLL Injector Website

Modern, responsive landing website for **Ruin DLL Injector** - a lightweight Windows DLL injection tool built with Rust and egui.

![Website Preview](https://img.shields.io/badge/status-production--success) ![Next.js](https://img.shields.io/badge/Next.js-14+-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)

## Overview

This is the official landing website for Ruin DLL Injector, showcasing the application's features, providing documentation, and supporting both English and Chinese audiences. The site is built with modern web technologies and optimized for performance.

## Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Bilingual Support** - Full English and Chinese (中文) localization
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Static site generation with Next.js 14 App Router
- **SEO Optimized** - Proper metadata and search engine optimization
- **Accessible** - WCAG AA compliant with proper contrast ratios

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS with custom theme
- **i18n**: next-intl for internationalization
- **Animations**: Framer Motion and react-intersection-observer
- **Icons**: Lucide React
- **UI Components**: Custom components with Ant Design integration

## Project Structure

```
injector-website/
├── app/[locale]/          # Internationalized routes
│   ├── layout.tsx         # Root layout with i18n provider
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer)
│   └── providers/       # Context providers (ThemeProvider)
├── lib/                  # Utilities and configurations
│   ├── i18n/            # Internationalization setup
│   └── data/            # Static data and features
├── messages/            # Translation files (en.json, zh.json)
└── public/              # Static assets (images, favicon)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ian-bug/ruin-injector-website.git
   cd injector-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

The site will automatically detect your browser language and display in English or Chinese accordingly.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding Content

**To update translations:**
- Edit `messages/en.json` for English content
- Edit `messages/zh.json` for Chinese content

**To modify sections:**
- Edit components in `components/sections/`
- Each section is self-contained with its own styling

**To update styling:**
- Modify `tailwind.config.ts` for theme changes
- Edit `app/[locale]/globals.css` for global styles

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy with one click

### Other Platforms

**Build the project:**
```bash
npm run build
```

The output will be in the `.next` directory, which can be deployed to any hosting service that supports Node.js.

### Environment Variables

No environment variables are required for basic deployment. Optional variables can be added for analytics or other services.

## Configuration

### Internationalization

The site uses `next-intl` for internationalization:

- **Supported locales**: English (`en`), Chinese (`zh`)
- **Default locale**: English
- **URL structure**: `/` (English), `/zh` (Chinese)

To add a new language:

1. Add locale to `lib/i18n/config.ts`
2. Create translation file in `messages/`
3. Update middleware to include the new locale

### Color Scheme

The site uses a custom dark theme optimized for developer tools:

- **Primary**: `#FF4444` (Red) - Accent color
- **Background**: `#0D0D0D` (Deep black) - Main background
- **Text**: `#E5E5E5` (Light gray) - Primary text
- **Border**: `#404040` (Gray) - Borders and dividers

Modify colors in `tailwind.config.ts` under `theme.extend.colors`.

## Performance

The site is optimized for performance:

- **Static Site Generation** - Pre-rendered at build time
- **Image Optimization** - Next.js Image component for automatic optimization
- **Code Splitting** - Automatic code splitting for faster initial load
- **Tree Shaking** - Unused code is automatically removed

Target metrics:
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Lighthouse Score: 90+ in all categories

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

When contributing:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Related Projects

- **[Ruin DLL Injector (Main Project)](https://github.com/Ian-bug/ruin-injector)** - The actual DLL injection tool
- **[rust-injector](https://github.com/Ian-bug/rust-injector)** - Rust implementation

## Support

For questions, issues, or feedback:
- Open an issue on GitHub
- Check the [documentation](https://github.com/Ian-bug/ruin-injector/wiki)
- Contact the maintainers

## License

This project is part of the Ruin DLL Injector project. See the main project repository for license information.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
