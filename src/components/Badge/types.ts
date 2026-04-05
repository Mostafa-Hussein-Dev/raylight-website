import { SxProps } from "@mui/material";

export type BadgeSize = "sm" | "md" | "lg";
export type BadgeColor = "neutral" | "error" | "warning" | "success" | "brand";

export type BadgeSizes = Record<BadgeSize, SxProps>;
export type BadgeColors = Record<BadgeColor, SxProps>;

export type BadgeProps = {
  size?: BadgeSize;
  color?: BadgeColor;
  children?: React.ReactNode;
  [key: string]: any;
};
