import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import "@/index.css";
import { Maximize2Icon, Minimize2Icon } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { mountWidget, useOpenAiGlobal, useToolOutput } from "skybridge/web";

import PokemonHeroCard from "./components/molecules/PokemonHeroCard";
import PokemonStatsCard from "./components/molecules/PokemonStatsCard";
import PokemonAbilitiesCard from "./components/molecules/PokemonAbilitiesCard";
import PokemonEvolutionsCard from "./components/molecules/PokemonEvolutionsCard";
import { getTypeTheme } from "./pokemonTheme";
import type { Pokemon } from "./types";
import { useWidgetState } from "@/utils";

function PokemonWidget() {
  const fetchedPokemon = useToolOutput() as Pokemon;
  const [{ currentPokemon }, setWidgetState] = useWidgetState<{ currentPokemon: Pokemon }>({
    currentPokemon: fetchedPokemon,
  });
  useEffect(() => {
    if (currentPokemon === null && fetchedPokemon !== null) {
      setWidgetState({ currentPokemon: fetchedPokemon });
    }
  }, [fetchedPokemon, currentPokemon, setWidgetState]);
  const [isNavigating, setIsNavigating] = useState(false);

  const displayMode = useOpenAiGlobal("displayMode");
  const isFullscreen = displayMode === "fullscreen";
  const toggleDisplayMode = useCallback(() => {
    window.openai?.requestDisplayMode({ mode: isFullscreen ? "inline" : "fullscreen" });
  }, [isFullscreen]);

  const handleEvolutionClick = useCallback(
    async (name: string) => {
      try {
        setIsNavigating(true);
        const newPokemon = (await window.openai?.callTool("pokemon", { name })) as unknown as {
          structuredContent?: Pokemon;
        };
        if (newPokemon?.structuredContent) {
          setWidgetState({
            currentPokemon: newPokemon.structuredContent,
          });
        }
      } catch (error) {
        console.error("Failed to load evolution", error);
      } finally {
        setIsNavigating(false);
      }
    },
    [setWidgetState],
  );

  const handleNavigate = useCallback(
    async (step: number) => {
      if (!currentPokemon || isNavigating) {
        return;
      }

      const nextOrder = currentPokemon.id + step;
      if (nextOrder < 1) {
        return;
      }

      try {
        setIsNavigating(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nextOrder}`);
        if (!response.ok) {
          throw new Error(`Unable to find pokemon with id ${nextOrder}`);
        }

        const data = (await response.json()) as { name: string };
        const result = (await window.openai?.callTool("pokemon", { name: data.name })) as unknown as {
          structuredContent?: Pokemon;
        };

        if (result?.structuredContent) {
          setWidgetState({ currentPokemon: result.structuredContent });
        }
      } catch (error) {
        console.error("Failed to navigate to pokemon", error);
      } finally {
        setIsNavigating(false);
      }
    },
    [currentPokemon, isNavigating, setWidgetState],
  );

  const primaryType = currentPokemon?.types?.[0]?.id ?? "normal";
  const theme = useMemo(() => getTypeTheme(primaryType), [primaryType]);

  if (!currentPokemon) {
    return (
      <div className="flex h-50 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const formattedOrder = `#${String(currentPokemon.order).padStart(3, "0")}`;
  const evolutions = currentPokemon.evolutions.filter((evolution) => !evolution.isCurrent);

  return (
    <div className={`relative w-full rounded-3xl ${theme.gradient} shadow-2xl`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_70%)]" />
      {isNavigating ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/60 backdrop-blur-sm">
          <Spinner />
        </div>
      ) : null}
      <div className="relative flex flex-col gap-6 p-6 lg:p-8">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
              Pokemon
            </span>
            <span className="text-lg font-bold text-slate-800">{formattedOrder}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDisplayMode}
            className="rounded-full bg-white/70 shadow-sm"
          >
            {isFullscreen ? <Minimize2Icon /> : <Maximize2Icon />}
          </Button>
        </div>

        <PokemonHeroCard
          pokemon={currentPokemon}
          theme={theme}
          isNavigating={isNavigating}
          onNavigate={(step) => {
            void handleNavigate(step);
          }}
        />

        <div className="grid gap-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <PokemonStatsCard stats={currentPokemon.stats} theme={theme} />
          </div>
          <div className="lg:col-span-2">
            <PokemonAbilitiesCard abilities={currentPokemon.abilities} theme={theme} />
          </div>
        </div>

        <PokemonEvolutionsCard
          evolutions={evolutions}
          theme={theme}
          onSelect={(name) => {
            void handleEvolutionClick(name);
          }}
        />
      </div>
    </div>
  );
}

export default PokemonWidget;

mountWidget(<PokemonWidget />);
