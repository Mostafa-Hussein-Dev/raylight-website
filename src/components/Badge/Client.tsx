"use client";

import { styled } from "@mui/material";
import { BadgeColor, BadgeColors, BadgeSize, BadgeSizes } from "./types";

const badgeSizes: BadgeSizes = {
  sm: {
    padding: "2px 6px",
    fontSize: "0.75rem",
  },
  md: {
    padding: "2px 8px",
    fontSize: "0.875rem",
  },
  lg: {
    padding: "4px 10px",
    fontSize: "0.875rem",
  },
};

const badgeColors: BadgeColors = {
  neutral: {
    backgroundColor: "var(--bg-neutral-badge)",
    border: "1px solid var(--border-neutral-badge)",
    color: "var(--color-text-neutral-badge)",
  },
  error: {
    backgroundColor: "var(--bg-danger-badge)",
    border: "1px solid var(--border-danger-badge)",
    color: "var(--color-text-danger-badge)",
  },
  warning: {
    backgroundColor: "var(--bg-warning-badge)",
    border: "1px solid var(--border-warning-badge)",
    color: "var(--color-text-warning-badge)",
  },
  success: {
    backgroundColor: "var(--bg-success-badge)",
    border: "1px solid var(--border-success-badge)",
    color: "var(--color-text-success-badge)",
  },
  brand: {
    backgroundColor: "var(--bg-brand-badge)",
    border: "1px solid var(--border-brand-badge)",
    color: "var(--color-text-brand-badge)",
  },
};

export const Badge = styled("span", {
  shouldForwardProp: (prop) => prop !== "size" && prop !== "color",
})<{
  size: BadgeSize;
  color: BadgeColor;
}>(({ size, color }) => ({
  borderRadius: "9999px",
  textAlign: "center",

  ...(badgeColors[color] as any),
  ...(badgeSizes[size] as any),
}));
