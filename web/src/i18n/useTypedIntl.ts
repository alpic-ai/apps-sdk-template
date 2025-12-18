import { useIntl } from "react-intl";
import type { PokemonTranslations } from "@/widgets/pokemon/translations/en";

type Translations = {
  pokemon: PokemonTranslations;
};

type FlattenKeys<T, Prefix extends string = ""> = T extends object
  ? {
      [K in keyof T]: FlattenKeys<T[K], Prefix extends "" ? K & string : `${Prefix}.${K & string}`>;
    }[keyof T]
  : Prefix;

export type TranslationKey = FlattenKeys<Translations>;

export const useTypedIntl() = {
  const intl = useIntl();
  return {
    t: (key: TranslationKey) => intl.formatMessage({ id: key }),
  };
}
