import { IntlProvider } from "react-intl";
import { flatten } from "./utils/flatten";
import { useLocale } from "skybridge/web";
import { pokemonEn, type PokemonTranslations } from "@/widgets/pokemon/translations/en";
import { pokemonFr } from "@/widgets/pokemon/translations/fr";

type Translations = {
  pokemon: PokemonTranslations;
};

const translations = {
  en: { pokemon: pokemonEn },
  fr: { pokemon: pokemonFr },
} satisfies Record<string, Translations>;

type SupportedLocale = keyof typeof translations;
const DEFAULT_LOCALE: SupportedLocale = "en";

function getLocaleKey(locale: string): SupportedLocale {
  const lang = locale.split("-")[0];
  return lang in translations ? (lang as SupportedLocale) : DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale() ?? "en-US";
  const messages = translations[getLocaleKey(locale)];
  return (
    <IntlProvider locale={locale} messages={flatten(messages)}>
      {children}
    </IntlProvider>
  );
}
