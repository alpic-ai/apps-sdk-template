import { Sparkles } from "lucide-react";
import { type Pokemon } from "../../types";
import { type TypeTheme } from "../../pokemonTheme";

type PokemonAbilitiesCardProps = {
  abilities: Pokemon["abilities"];
  theme: TypeTheme;
};

const PokemonAbilitiesCard = ({ abilities, theme }: PokemonAbilitiesCardProps) => {
  return (
    <div className={`rounded-3xl border ${theme.border} ${theme.surface} p-6 shadow-lg backdrop-blur`}>
      <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Abilities</h2>
      <div className="mt-4 space-y-4">
        {abilities.map((ability) => (
          <div
            key={ability.id}
            className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <Sparkles className={`h-4 w-4 ${theme.accentText}`} />
              <span className="text-sm font-semibold text-slate-800">{ability.name}</span>
            </div>
            {ability.description ? (
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{ability.description}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonAbilitiesCard;
