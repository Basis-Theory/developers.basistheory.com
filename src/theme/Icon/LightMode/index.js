import React from "react";
export default function IconLightMode({ hover, other }) {
  const colors = hover
    ? {
        primary: "#FB7C07",
      }
    : {
        primary: "#8086a0",
      };
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...other}>
      <path
        d="M18.6517 13.3483C20.1161 14.8128 20.1161 17.1872 18.6517 18.6517C17.1872 20.1161 14.8128 20.1161 13.3483 18.6517C11.8839 17.1872 11.8839 14.8128 13.3483 13.3483C14.8128 11.8839 17.1872 11.8839 18.6517 13.3483"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10V8.5"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 23.5V22"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.77 11.23L21.3025 10.6975"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6975 21.3025L11.23 20.77"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 16H23.5"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 16H10"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.77 20.77L21.3025 21.3025"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6975 10.6975L11.23 11.23"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
