export const pokemonEn = {
  capture: "Capture Pokemon",
} as const

export type PokemonTranslations = { [K in keyof typeof pokemonEn]: string }
