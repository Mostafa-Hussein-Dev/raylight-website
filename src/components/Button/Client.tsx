"use client";

import { styled, SxProps } from "@mui/material";
import { GeneralButton } from "./GeneralButton";

const disabledStyles: SxProps = {
  backgroundColor: "transparent",
  boxShadow: "none",
};

export const PrimaryButton = styled(GeneralButton)({
  backgroundColor: "var(--color-primary)",
  color: "var(--color-base)",

  "&:hover, &:focus": {
    backgroundColor: "var(--color-primary-light)",
  },
});

export const SecondaryButton = styled(GeneralButton)({
  borderColor: "var(--color-text-200)",
  backgroundColor: "var(--color-base)",
  color: "var(--color-dark-900)",

  "&:hover, &:focus": {
    backgroundColor: "var(--color-text-50)",
  },
});

export const TertiaryButton = styled(GeneralButton)({
  borderColor: "transparent",
  backgroundColor: "transparent",
  boxShadow: "none",
  color: "var(--color-primary)",

  "&:hover": {
    backgroundColor: "var(--color-text-50)",
    boxShadow: "none",
  },

  "&:focus": {
    backgroundColor: "var(--color-text-50)",
  },

  "&:focus:hover": {
    boxShadow: "0px 0px 0px 4px var(--box-shadow-focus)",
  },

  "&:disabled, &:disabled:hover": disabledStyles,
});

export const LinkButton = styled(TertiaryButton)({
  padding: 0,

  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const LinkGrayButton = styled(LinkButton)({
  color: "var(--color-text)",

  "&:hover, &:focus": {
    color: "var(--color-dark-900)",
  },
});

export const DestructiveButton = styled(PrimaryButton)({
  backgroundColor: "var(--color-danger)",

  "&:hover, &:focus": {
    backgroundColor: "var(--color-danger-100)",
  },

  "&:focus": {
    boxShadow:
      "0px 0px 0px 1px var(--color-danger-200), 0px 0px 0px 4px hsla(6, 74%, 46%, 0.12)",
  },

  "&:disabled, &:disabled:hover": disabledStyles,
});
