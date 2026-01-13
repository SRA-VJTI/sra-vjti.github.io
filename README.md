# SRA VJTI Official Website

Official website for the Society of Robotics and Automation (SRA) at VJTI Mumbai.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sra-vjti.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
sra-vjti.github.io/
├── components/          # React components
│   ├── Achievements/    # Achievements section
│   ├── Activities/      # Activities section
│   ├── Blogs/           # Blog components
│   ├── ContactUs/       # Contact form
│   ├── CorporateSupport/# Corporate support section
│   ├── Footer/          # Footer component
│   ├── Hero/            # Hero section
│   ├── HomeAboutUs/     # Home page about section
│   ├── Navbar/          # Navigation bar
│   ├── Projects/         # Projects showcase
│   ├── Publications/     # Publications section
│   ├── Sponsors/         # Sponsors section
│   ├── Startups/         # Startups section
│   └── Teams/            # Team members
├── data/                # Data files (JSON/JS)
│   ├── aboutus.js
│   ├── blogs.js
│   ├── sponsors.js
│   └── ...
├── pages/               # Next.js pages
├── public/              # Static assets (images, etc.)
├── styles/              # Global styles
└── utils/               # Utility functions
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Build the production static export (alias for `npm run build` with `output: 'export'`)
- `npm run prettier` - Format code with Prettier

## 🎨 Tech Stack

- **Framework**: Next.js 14.2.32
- **React**: 18.2.0
- **Styling**: SCSS/Sass
- **Icons**: Font Awesome
- **Markdown**: markdown-to-jsx
- **Carousel**: react-responsive-carousel, react-owl-carousel

## 📝 Features

- Responsive design
- Dynamic content management through data files
- Blog system with markdown support
- Project showcase (Flagship, Ongoing, Eklavya)
- Team member profiles
- Publications and achievements
- Corporate support information
- Contact form integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Ensure the project compiles and works as expected without breaking any functionality
5. Run Prettier to format your code (`npm run prettier`)
6. Commit your changes with descriptive messages (`git commit -m 'Add amazing feature'`)
7. Push to your branch (`git push origin feature/amazing-feature`)
8. Create a Pull Request on the `contribute` branch of the upstream repository

### Important Notes

- **Pull requests without descriptions will be closed**
- Commits should be atomic and have descriptive messages
- Test your changes thoroughly before submitting
- Follow the existing code style and structure

## 📄 License

This project is private and unlicensed.

## 👥 Authors

SRA Team

## 🌐 Deployment

The site is deployed using GitHub Pages. The build process generates a static export that can be served directly.

For production builds:
```bash
npm run export
```

Running `npm run export` now executes `next build` and respects `next.config.js`'s `output: 'export'`, producing a static `out/` directory.

## 📧 Contact

For questions or support, please contact the SRA team through the website's contact form or reach out via the official channels.
