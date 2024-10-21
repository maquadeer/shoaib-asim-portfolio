"use client"; 

import "./globals.css";
import { ThemeProvider, useTheme } from './ThemeContext'; 
import { metadata } from './metadata'; 
import Navbar from './components/Navbar';


// Create a BackgroundColor component to handle body background color based on theme
const BackgroundColor = () => {
  const { theme } = useTheme();

  return (
    <style jsx global>{`
      body {
        background-color: ${theme === 'dark' ? '#1F2937' : '#FFFFFF'}; /* bg-gray-950 is #1F2937 and white is #FFFFFF */
        transition: background-color 0.3s ease; /* Smooth transition */
      }
    `}</style>
  );
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body>
          {/* Include the BackgroundColor component to set body background */}
          <BackgroundColor />
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
