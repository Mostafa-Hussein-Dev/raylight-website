"use client";

import { styled } from "@mui/material";

export const Card = styled("div")({
  maxWidth: "340px",
  width: "100%",
  display: "flex",
  flexDirection: "column",

  boxShadow:
    "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
  borderRadius: "8px",
  border: "1px solid var(--color-text-200)",
  backgroundColor: "var(--color-base)",
});
