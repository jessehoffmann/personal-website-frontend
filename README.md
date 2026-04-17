# Personal Website Frontend

This application was designed as my personal portfolio website. The project demonstrates modern frontend development with React, TypeScript, responsive design, and API integration for contact form submissions.

## Requirements

You need the following installed on your computer:
- Node.js (recommended current LTS)

### macOS 

On macOS, I recommend installing Node.js through `nvm` (Node Version Manager) using Homebrew:

```bash
brew install nvm
nvm install --lts
```

Direct download option: [https://nodejs.org/](https://nodejs.org/)


## Setup

From the `personal-website-frontend` directory, run:

```bash
# Install dependencies
npm install

# Start the local development server
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Development

This project uses:

- React 19
- TypeScript
- React Router
- Material UI (including MUI X Charts)
- Styled Components + Emotion
- Formspree + Google reCAPTCHA (for contact form protection)

Additional development commands:

```bash
# Run tests
npm test

# Build for production
npm run build

# Lint the project
npm run lint

# Auto-fix lint issues
npm run lint:fix

# Format files
npm run format
```

## Features

- Multi-page portfolio layout (`Home`, `About`, `Skills`, and `Contact`)
- Featured project cards with external links and project details
- Skills section with chart visualization and category filtering
- Responsive navigation with mobile menu behavior
- Contact form integration with Formspree and reCAPTCHA validation
- Custom styling and reusable UI components throughout the app

## Deployment

This frontend can be deployed to any static hosting provider. Automated deployments are currently configured with AWS Amplify.

Amplify configuration:
- Production branch: `master`
- Domain: [https://jessehoffmann.com](https://jessehoffmann.com)

### AWS Amplify build spec

To create a production build:

```bash
npm run build
```

This generates an optimized `build` directory ready for production deployment