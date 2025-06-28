export type Locale = "en" | "fr" | "pl" | "ja";

export async function getTranslation(locale: Locale) {
  switch (locale) {
    case "fr":
      return (await import("../../locales/fr.json")).default;
    case "pl":
      return (await import("../../locales/pl.json")).default;
    case "ja":
      return (await import("../../locales/ja.json")).default;
    case "en":
    default:
      return (await import("../../locales/en.json")).default;
  }
}
