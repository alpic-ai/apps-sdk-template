export type TypeTheme = {
  gradient: string;
  surface: string;
  border: string;
  pill: string;
  pillText: string;
  accent: string;
  accentText: string;
};

const defaultTheme: TypeTheme = {
  gradient: "bg-gradient-to-br from-slate-100 via-white to-slate-50",
  surface: "bg-white/80",
  border: "border-white/60",
  pill: "bg-slate-200/80 border border-slate-300/70",
  pillText: "text-slate-900",
  accent: "bg-slate-800",
  accentText: "text-slate-700",
};

const typeThemeOverrides: Record<string, Partial<TypeTheme>> = {
  bug: {
    gradient: "bg-gradient-to-br from-lime-200 via-lime-100 to-lime-50",
    pill: "bg-lime-100/90 border border-lime-200/80",
    pillText: "text-lime-800",
    accent: "bg-lime-500",
    accentText: "text-lime-700",
  },
  dark: {
    gradient: "bg-gradient-to-br from-zinc-300 via-zinc-200 to-zinc-100",
    pill: "bg-zinc-200/90 border border-zinc-300/80",
    pillText: "text-zinc-800",
    accent: "bg-zinc-700",
    accentText: "text-zinc-700",
  },
  dragon: {
    gradient: "bg-gradient-to-br from-indigo-200 via-violet-100 to-sky-100",
    pill: "bg-indigo-100/90 border border-indigo-200/70",
    pillText: "text-indigo-800",
    accent: "bg-indigo-500",
    accentText: "text-indigo-700",
  },
  electric: {
    gradient: "bg-gradient-to-br from-yellow-200 via-amber-100 to-amber-50",
    pill: "bg-amber-100/90 border border-amber-200/80",
    pillText: "text-amber-800",
    accent: "bg-amber-500",
    accentText: "text-amber-700",
  },
  fairy: {
    gradient: "bg-gradient-to-br from-rose-200 via-pink-100 to-rose-50",
    pill: "bg-rose-100/90 border border-rose-200/70",
    pillText: "text-rose-800",
    accent: "bg-rose-400",
    accentText: "text-rose-700",
  },
  fighting: {
    gradient: "bg-gradient-to-br from-red-200 via-red-100 to-rose-50",
    pill: "bg-red-100/90 border border-red-200/70",
    pillText: "text-red-800",
    accent: "bg-red-500",
    accentText: "text-red-700",
  },
  fire: {
    gradient: "bg-gradient-to-br from-orange-200 via-orange-100 to-amber-50",
    pill: "bg-orange-100/90 border border-orange-200/70",
    pillText: "text-orange-800",
    accent: "bg-orange-500",
    accentText: "text-orange-700",
  },
  flying: {
    gradient: "bg-gradient-to-br from-sky-200 via-indigo-100 to-sky-50",
    pill: "bg-sky-100/90 border border-sky-200/70",
    pillText: "text-sky-800",
    accent: "bg-sky-500",
    accentText: "text-sky-700",
  },
  ghost: {
    gradient: "bg-gradient-to-br from-violet-200 via-purple-200 to-violet-100",
    pill: "bg-violet-100/90 border border-violet-200/70",
    pillText: "text-violet-800",
    accent: "bg-violet-500",
    accentText: "text-violet-700",
  },
  grass: {
    gradient: "bg-gradient-to-br from-emerald-200 via-green-100 to-emerald-50",
    pill: "bg-emerald-100/90 border border-emerald-200/70",
    pillText: "text-emerald-800",
    accent: "bg-emerald-500",
    accentText: "text-emerald-700",
  },
  ground: {
    gradient: "bg-gradient-to-br from-amber-300 via-amber-100 to-orange-50",
    pill: "bg-amber-100/90 border border-amber-200/70",
    pillText: "text-amber-900",
    accent: "bg-amber-600",
    accentText: "text-amber-700",
  },
  ice: {
    gradient: "bg-gradient-to-br from-cyan-200 via-sky-100 to-cyan-50",
    pill: "bg-cyan-100/90 border border-cyan-200/70",
    pillText: "text-cyan-800",
    accent: "bg-cyan-500",
    accentText: "text-cyan-700",
  },
  normal: {
    gradient: "bg-gradient-to-br from-stone-200 via-stone-100 to-stone-50",
    pill: "bg-stone-100/90 border border-stone-200/70",
    pillText: "text-stone-800",
    accent: "bg-stone-500",
    accentText: "text-stone-700",
  },
  poison: {
    gradient: "bg-gradient-to-br from-fuchsia-200 via-purple-100 to-fuchsia-50",
    pill: "bg-purple-100/90 border border-purple-200/70",
    pillText: "text-purple-800",
    accent: "bg-purple-500",
    accentText: "text-purple-700",
  },
  psychic: {
    gradient: "bg-gradient-to-br from-rose-200 via-pink-100 to-rose-50",
    pill: "bg-pink-100/90 border border-pink-200/70",
    pillText: "text-rose-800",
    accent: "bg-pink-500",
    accentText: "text-pink-700",
  },
  rock: {
    gradient: "bg-gradient-to-br from-amber-200 via-stone-200 to-stone-100",
    pill: "bg-stone-100/90 border border-stone-200/70",
    pillText: "text-stone-800",
    accent: "bg-amber-700",
    accentText: "text-amber-700",
  },
  steel: {
    gradient: "bg-gradient-to-br from-slate-200 via-gray-100 to-slate-50",
    pill: "bg-slate-100/90 border border-slate-200/70",
    pillText: "text-slate-800",
    accent: "bg-slate-600",
    accentText: "text-slate-700",
  },
  water: {
    gradient: "bg-gradient-to-br from-blue-200 via-sky-100 to-blue-50",
    pill: "bg-blue-100/90 border border-blue-200/70",
    pillText: "text-blue-800",
    accent: "bg-blue-500",
    accentText: "text-blue-700",
  },
};

export const getTypeTheme = (typeId: string): TypeTheme => ({
  ...defaultTheme,
  ...(typeThemeOverrides[typeId] ?? {}),
});

export const typesSvgs = {
  bug: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/bug.svg",
  dark: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/dark.svg",
  dragon: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/dragon.svg",
  electric: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/electric.svg",
  fairy: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/fairy.svg",
  fighting: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/fighting.svg",
  fire: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/fire.svg",
  flying: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/flying.svg",
  ghost: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/ghost.svg",
  grass: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/grass.svg",
  ground: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/ground.svg",
  ice: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/ice.svg",
  normal: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/normal.svg",
  poison: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/poison.svg",
  psychic: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/psychic.svg",
  rock: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/rock.svg",
  steel: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/steel.svg",
  water: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/water.svg",
} as const;

export type TypeId = keyof typeof typesSvgs;
