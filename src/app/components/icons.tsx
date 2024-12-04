// Icons.tsx
import React from "react";

// Icon 1 (example)
export const Icon1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    {/* Replace with your specific SVG code */}
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-13.5V10h2V4.5h-2z"
      clipRule="evenodd"
    />
  </svg>
);

// Icon 2 (example)
export const Icon2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    {/* Replace with your specific SVG code */}
    <path
      fillRule="evenodd"
      d="M12 2a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5h5zm1 5a1 1 0 00-1-1h-2a1 1 0 00-1 1v4h4V7z"
      clipRule="evenodd"
    />
  </svg>
);

// Icon 3 (example)
export const Wallet: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
        />
      </svg>
    }
    <path
      fillRule="evenodd"
      d="M5 4a3 3 0 116 0v12a3 3 0 11-6 0V4zm7-2a2 2 0 10-4 0v16a2 2 0 004 0V2z"
      clipRule="evenodd"
    />
  </svg>
);
