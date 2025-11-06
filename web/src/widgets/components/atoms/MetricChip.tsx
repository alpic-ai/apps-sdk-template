import { type LucideIcon } from "lucide-react";

type MetricChipProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  accentTextClass?: string;
};

const MetricChip = ({ icon: Icon, label, value, accentTextClass = "" }: MetricChipProps) => {
  return (
    <div className="flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
      <Icon className={`h-4 w-4 ${accentTextClass}`} />
      <div className="flex flex-col leading-tight">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">{label}</span>
        <span className="text-sm font-semibold text-slate-800">{value}</span>
      </div>
    </div>
  );
};

export default MetricChip;
