import NavigationButton from "../atoms/NavigationButton";
import MetricChip from "../atoms/MetricChip";
import { typesSvgs, getTypeTheme, type TypeTheme } from "../../pokemonTheme";
import { type Pokemon } from "../../types";
import { ChevronLeft, ChevronRight, Ruler, Weight } from "lucide-react";

type PokemonHeroCardProps = {
  pokemon: Pokemon;
  theme: TypeTheme;
  isNavigating: boolean;
  onNavigate: (step: number) => void;
};

const PokemonHeroCard = ({ pokemon, theme, isNavigating, onNavigate }: PokemonHeroCardProps) => {
  const heightMeters = `${pokemon.heightInMeters.toFixed(1)} m`;
  const weightKilograms = `${pokemon.weightInKilograms.toFixed(1)} kg`;

  return (
    <div
      className={`relative flex flex-1 flex-col gap-6 rounded-3xl border ${theme.border} ${theme.surface} p-6 shadow-lg backdrop-blur`}
    >
      <div className="flex flex-col-reverse gap-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {pokemon.types.map(({ id, name }) => {
              const typeTheme = getTypeTheme(id);
              return (
                <span
                  key={id}
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${typeTheme.pill} ${typeTheme.pillText}`}
                >
                  <img src={typesSvgs[id as keyof typeof typesSvgs]} alt={name} className="h-4 w-4" />
                  {name}
                </span>
              );
            })}
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900">{pokemon.name}</h1>
          <p className="text-sm leading-relaxed text-slate-600">{pokemon.description}</p>
          <div className="flex flex-wrap gap-4">
            <MetricChip icon={Ruler} label="Height" value={heightMeters} accentTextClass={theme.accentText} />
            <MetricChip icon={Weight} label="Weight" value={weightKilograms} accentTextClass={theme.accentText} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <NavigationButton
            icon={<ChevronLeft className="h-5 w-5" />}
            label="Previous Pokémon"
            onClick={() => {
              onNavigate(-1);
            }}
            disabled={isNavigating}
            accentTextClass={theme.accentText}
            className="shadow-md"
          />
          <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
            <div className={`absolute h-44 w-44 rounded-full ${theme.accent} opacity-25 blur-3xl`} />
            <div className="absolute h-48 w-48 rounded-full bg-white/70 shadow-inner" />
            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
              className="relative z-10 h-48 w-48 object-contain drop-shadow-[0_22px_45px_rgba(0,0,0,0.35)]"
            />
          </div>
          <NavigationButton
            icon={<ChevronRight className="h-5 w-5" />}
            label="Next Pokémon"
            onClick={() => {
              onNavigate(1);
            }}
            disabled={isNavigating}
            accentTextClass={theme.accentText}
            className="shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonHeroCard;
