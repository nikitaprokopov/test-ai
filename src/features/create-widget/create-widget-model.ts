import { GIRLS, type Girl } from "~/constants";
import { atom } from "@reatom/core";

export const TAGS_LIBRARY_TABS = {
  THEME: "THEME",
  IMAGE: "IMAGE",
  MODEL: "MODEL",
  HEAD: "HEAD",
  BODY: "BODY",
} as const;

export const getGirlData = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const girlKey = searchParams.get("girl");

  if (!girlKey) {
    return null;
  }

  return GIRLS[girlKey] ?? null;
};

export const initCreateWidgetModel = () => {
  const tagsLibraryActiveTabAtom = atom<keyof typeof TAGS_LIBRARY_TABS>(TAGS_LIBRARY_TABS.MODEL);
  const girlDataAtom = atom<Girl | null>(getGirlData());
  const textareaValueAtom = atom("");

  return {
    tagsLibraryActiveTabAtom,
    textareaValueAtom,
    girlDataAtom,
  };
};

export type CreateWidgetModel = ReturnType<typeof initCreateWidgetModel>;
