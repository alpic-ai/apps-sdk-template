import { Button } from "@/components/ui/button";
import { type ReactNode } from "react";

type NavigationButtonProps = {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  accentTextClass?: string;
  className?: string;
};

const NavigationButton = ({
  icon,
  label,
  onClick,
  disabled,
  accentTextClass = "",
  className = "",
}: NavigationButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`h-12 w-12 rounded-full border border-white/70 bg-white/80 text-lg shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg ${accentTextClass} ${className}`}
    >
      {icon}
    </Button>
  );
};

export default NavigationButton;
