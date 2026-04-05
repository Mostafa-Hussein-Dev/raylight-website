"use client";

import Image from "next/image";
import { styled } from "@mui/material";
import { Card } from "../common/Card";

export const Wrapper = styled(Card)({
  overflow: "hidden",
});

export const ImageWrapper = styled("div")({
  width: "100%",
  height: "288px",
  position: "relative",
  overflow: "hidden",
});

export const Img = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px",
});

export const Title = styled("p")({
  color: "var(--color-dark-900)",
  fontWeight: "var(--font-semibold)",
  fontSize: "1.125rem",
  marginBottom: "12px",
});

export const Excerpt = styled("p")({
  marginBottom: "24px",
});
