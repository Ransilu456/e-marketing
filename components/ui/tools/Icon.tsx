import * as Lucide from 'lucide-react';

type LucideIconComponent = React.ComponentType<{
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}>;

interface IconProps {
  name: keyof typeof Lucide;
  size?: number;
  className?: string;
}

export const Icon = ({ name, size = 20, className, ...props }: IconProps) => {
  const LucideIcon = Lucide[name] as LucideIconComponent;

  if (!LucideIcon) return null;

  return <LucideIcon size={size} className={className} {...props} />;
};