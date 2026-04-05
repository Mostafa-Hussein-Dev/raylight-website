import { RemixiconComponentType } from "@remixicon/react";

export type Size = "md" | "lg" | "xl" | "2xl";
export type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "link"
  | "destructive"
  | "link:gray";

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  leftIcon?: RemixiconComponentType;
  rightIcon?: RemixiconComponentType;
  iconOnly?: boolean;
  icon?: RemixiconComponentType;
  children?: React.ReactNode;
  [key: string]: any;
};

export type Components = Record<Variant, React.ComponentType<any>>;
export type IconSizes = Record<Size, number>;
