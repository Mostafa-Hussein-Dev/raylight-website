import { Badge } from "./Client";
import { BadgeProps } from "./types";

export type { BadgeColor } from "./types";
export { Badge };

export function AppBadge({
  size = "md",
  color = "neutral",
  ...delegated
}: BadgeProps) {
  return <Badge {...delegated} size={size} color={color} />;
}
