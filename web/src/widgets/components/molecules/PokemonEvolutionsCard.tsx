import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { type Pokemon } from "../../types";
import { type TypeTheme } from "../../pokemonTheme";

type PokemonEvolutionsCardProps = {
  evolutions: Pokemon["evolutions"];
  theme: TypeTheme;
  onSelect: (name: string) => void;
};

const PokemonEvolutionsCard = ({ evolutions, theme, onSelect }: PokemonEvolutionsCardProps) => {
  return (
    <div className={`rounded-3xl border ${theme.border} ${theme.surface} p-6 shadow-lg backdrop-blur`}>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Evolutions</h2>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {evolutions.length > 0 ? (
          evolutions.map(({ id, name, imageUrl, order }) => (
            <Tooltip key={id}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() => {
                    onSelect(name);
                  }}
                  className="group relative flex w-32 flex-col items-center gap-2 rounded-2xl border border-white/50 bg-white/60 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                >
                  <div className="relative h-24 w-24">
                    <div className={`absolute inset-0 rounded-full ${theme.accent} opacity-20 blur-xl`} />
                    <img
                      src={imageUrl}
                      alt={name}
                      className="relative h-full w-full object-contain drop-shadow-md transition group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                    #{String(order).padStart(3, "0")}
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View {name.charAt(0).toUpperCase() + name.slice(1)}</p>
              </TooltipContent>
            </Tooltip>
          ))
        ) : (
          <p className="text-sm text-slate-600">This Pokémon does not evolve further.</p>
        )}
      </div>
    </div>
  );
};

export default PokemonEvolutionsCard;
