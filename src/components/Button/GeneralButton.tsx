"use client";

import { styled, SxProps } from "@mui/material";
import { Size } from "./types";

const mdStyles = (iconOnly: boolean): SxProps => {
  return {
    padding: iconOnly ? "10px" : "10px 14px",
    fontSize: "0.875rem",
    gap: "4px",
  };
};

const lgStyles = (iconOnly: boolean): SxProps => {
  return {
    padding: iconOnly ? "12px" : "10px 16px",
    fontSize: "1rem",
    gap: "6px",
  };
};

const xlStyles = (iconOnly: boolean): SxProps => {
  return {
    padding: iconOnly ? "14px" : "12px 20px",
    fontSize: "1rem",
    gap: "6px",
  };
};

const xl2Styles = (iconOnly: boolean): SxProps => {
  return {
    padding: iconOnly ? "16px" : "16px 24px",
    fontSize: "1.125rem",
    gap: "10px",
  };
};

export const GeneralButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "size" && prop !== "iconOnly",
})<{ size: Size; iconOnly: boolean }>(({ size, iconOnly }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  boxShadow:
    "0px 1px 3px 0px hsla(0, 0%, 0%, 0.10), 0px 1px 2px 0px hsla(0, 0%, 0%, 0.06)",
  cursor: "pointer",
  border: "1px solid transparent",
  transition: "background-color 0.3s, box-shadow 0.3s, color 0.3s",
  fontWeight: "var(--font-medium)",
  textDecoration: "none",

  ...(size === "md" && (mdStyles(iconOnly) as any)),
  ...(size === "lg" && (lgStyles(iconOnly) as any)),
  ...(size === "xl" && (xlStyles(iconOnly) as any)),
  ...(size === "2xl" && (xl2Styles(iconOnly) as any)),

  "&:hover": {
    boxShadow:
      "0px 1px 3px 0px hsla(0, 0%, 0%, 0.1), 0px 1px 2px 0px hsla(0, 0%, 0%, 0.06)",
  },

  "&:focus": {
    boxShadow: "0px 0px 0px 4px var(--box-shadow-focus)",
  },

  "&:disabled, &:disabled:hover": {
    backgroundColor: "var(--color-disabled)",
    color: "var(--color-text-disabled)",
    cursor: "not-allowed",
  },
}));
