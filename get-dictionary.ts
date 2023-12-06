import "server-only";
import type { Locale } from "./i18n-config";

interface IDictionary {
  "server-component": {
    welcome: string;
  };
  counter: {
    increment: string;
    decrement: string;
  };
}

interface IDictionaryMap {
  [locale: string]: () => Promise<IDictionary>;
}

// Declare and initialize the dictionaries. The import function returns a promise.
const dictionaries: IDictionaryMap = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  cs: () => import("./dictionaries/cs.json").then((module) => module.default),
};

// This function gets a dictionary, if the requested locale is not available,
//  it falls back to English dictionary
export const getDictionary = async (locale: Locale): Promise<IDictionary> => {
  return (dictionaries[locale] ?? dictionaries.en)();
};
