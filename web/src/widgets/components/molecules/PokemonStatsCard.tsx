import { type Pokemon } from "../../types";
import { type TypeTheme } from "../../pokemonTheme";

type PokemonStatsCardProps = {
  stats: Pokemon["stats"];
  theme: TypeTheme;
};

const PokemonStatsCard = ({ stats, theme }: PokemonStatsCardProps) => {
  return (
    <div className={`rounded-3xl border ${theme.border} ${theme.surface} p-6 shadow-lg backdrop-blur`}>
      <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Stats</h2>
      <div className="mt-4 space-y-3">
        {stats.map((stat) => {
          const statValue = Math.min(stat.value, 180);
          const statWidth = `${Math.round((statValue / 180) * 100)}%`;

          return (
            <div key={stat.name} className="flex items-center gap-3">
              <span className="w-24 text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.name}</span>
              <div className="h-2 flex-1 rounded-full bg-white/70">
                <div className={`h-2 rounded-full ${theme.accent}`} style={{ width: statWidth }} />
              </div>
              <span className="w-10 text-right text-sm font-semibold text-slate-700">{stat.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonStatsCard;
