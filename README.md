# ArnelasBeauty

ArnelasBeauty is a modern web application built with **Next.js** and **Tailwind CSS**, designed to deliver a seamless user experience for showcasing beauty services. This project demonstrates best practices in responsive design, optimized assets, and state-of-the-art web development techniques.

## Key Features
- **Dynamic Routing**: Leveraging [Next.js dynamic routes](https://nextjs.org/docs/routing/dynamic-routes) for flexible page management.
- **Responsive Design**: Built with [Tailwind CSS](https://tailwindcss.com/) to ensure cross-device compatibility.
- **Custom Fonts**: Utilizes the [Inter font](https://fonts.google.com/specimen/Inter) via the [next/font](https://nextjs.org/docs/basic-features/font-optimization) module for better typography.
- **Image Optimization**: Takes advantage of [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization) for faster load times.

## Project Structure
```plaintext
.
├── public/
│   ├── images/        # Static assets such as images used in the app
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Next.js pages for routing
│   ├── styles/        # Custom CSS and Tailwind configurations
│   ├── utils/         # Helper functions and utilities
├── .gitignore         # Git ignored files
├── jsconfig.json      # JavaScript configuration
├── next.config.mjs    # Next.js configuration file
├── package.json       # Project dependencies and scripts
├── postcss.config.mjs # PostCSS configuration for Tailwind CSS
├── tailwind.config.js # Tailwind CSS configuration
```

### Notable Directories
- **public/images/**: Contains all static images required for the application.
- **src/components/**: Houses modular components for building the UI.
- **src/pages/**: Defines the application's routing structure and main pages.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More
For more details, check out the following resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://nextjs.org/docs/deployment)
