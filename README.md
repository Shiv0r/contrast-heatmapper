# Contrast Heatmapper

An accessibility tool for comparing UI components and validating color contrast through pixel-based analysis and visual heatmaps.

## Features

- **Pixel-Based Comparison**: Analyzes components at the pixel level to identify contrast issues
- **Heatmap Visualization**: Generates visual heatmaps for easy validation of contrast ratios
- **Contrast Validation**: Ensures components meet accessibility standards and WCAG guidelines
- **Color Deficiency Support**: Simulates color blindness (Protanopia, Deuteranopia, Tritanopia) through luminance-based pixel comparison to validate accessibility for users with color vision deficiencies
- **Component Analysis**: Validates complex components including images and styled elements

## Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **GPU Rendering**: WebGPU with WGSL shaders for heatmap generation
- **Web Scraping**: Crawlee for HTML and image extraction
- **Styling**: PostCSS with Tailwind CSS v4
- **Development**: TypeScript, Prettier, ESLint

## Folder Structure

```
contrast-heatmapper/
├── app/
│   ├── webgpu/           # WebGPU initialization and GPU utilities
│   │   └── init.ts       # GPU device & canvas context setup
│   ├── components/
│   │   └── hooks/
│   │       └── useWebgpu.tsx # React hook for WebGPU
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── shaders/              # WGSL shader files
├── next.config.ts        # Next.js configuration with webpack WGSL loader
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
├── .prettierrc.json      # Prettier formatting rules
├── .vscode/settings.json # VS Code workspace settings
└── README.md             # This file
```
