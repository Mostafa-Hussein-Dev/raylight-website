import { ButtonProps, Components, IconSizes } from "./types";
import {
  DestructiveButton,
  LinkButton,
  LinkGrayButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./Client";

const components: Components = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
  link: LinkButton,
  destructive: DestructiveButton,
  "link:gray": LinkGrayButton,
};

const iconSizes: IconSizes = {
  md: 18,
  lg: 18,
  xl: 18,
  "2xl": 20,
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconOnly = false,
  icon: Icon,
  children,
  ...delegated
}: ButtonProps) {
  const Component = components[variant];
  const iconSize = iconSizes[size];

  const render = () => {
    if (iconOnly && Icon) return <Icon size={iconSize} />;
    return (
      <>
        {LeftIcon && <LeftIcon size={iconSize} />}
        {children && <span>{children}</span>}
        {RightIcon && <RightIcon size={iconSize} />}
      </>
    );
  };

  return (
    <Component {...delegated} size={size} iconOnly={iconOnly}>
      {render()}
    </Component>
  );
}
