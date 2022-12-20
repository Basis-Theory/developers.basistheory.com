import React from "react";
export default function IconDarkMode({ hover, ...other }) {
  const colors = hover
    ? {
        primary: "#606376",
        highlight: "#F3D97D",
      }
    : {
        primary: "#8086A0",
        highlight: "#8086A0",
      };

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...other}>
      <path
        d="M17.5 11.5V10"
        stroke={colors.highlight}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.75 10.75H18.25"
        stroke={colors.highlight}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.25 12.25V15.25"
        stroke={colors.highlight}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.75 13.75H19.75"
        stroke={colors.highlight}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.05 19C18.175 19.6 16 19.225 14.5 17.725C12.625 15.85 12.475 12.85 13.975 10.75C10.9 11.05 8.5 13.6 8.5 16.75C8.5 20.05 11.2 22.75 14.5 22.75C16.975 22.75 19.15 21.175 20.05 19Z"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
