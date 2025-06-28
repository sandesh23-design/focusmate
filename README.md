# FocusMate - ADHD-Friendly Productivity App

A React-based productivity tool designed specifically for students with ADHD to help them stay focused and productive through micro-tasking, attention tracking, and gamified rewards.

## Features

- **Micro-Task Builder**: Break down large tasks into manageable chunks
- **Attention Tracking**: Monitor focus levels and identify distractions
- **Gamified Rewards**: Earn points and rewards for completing tasks
- **PDF Study Tools**: Enhanced study experience with PDF documents
- **Distraction Alerts**: Get notified when you're getting distracted
- **Modern UI/UX**: Beautiful, responsive design with smooth animations

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v5
- **Build Tool**: Create React App
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd FocusMate
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AttentionTracker/
│   ├── Dashboard/
│   ├── DistractionAlerts/
│   ├── MicroTaskBuilder/
│   ├── PDFStudy/
│   └── RewardSystem/
├── pages/              # Page components
├── contexts/           # React contexts for state management
├── services/           # API and external service integrations
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── styles/             # Global styles
```

## Deployment

This project is configured for deployment on Vercel. The build process creates a static site that can be served from any static hosting service.

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React app and configure the build settings
3. The app will be deployed automatically on every push to the main branch

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.