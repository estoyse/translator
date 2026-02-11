import { create } from "zustand";
import type { Translation } from "../types/translation";

interface TranslationStore {
  translations: Translation[];
  currentTranslation: Translation | null;
  addTranslation: (data: Translation) => void;
  updateTranslation: (id: string, translationText: string) => void;
  setCurrent: (id: string) => void;
}

export const useTranslationStore = create<TranslationStore>(set => ({
  translations: [],
  currentTranslation: null,
  addTranslation: data => {
    set(state => ({
      translations: [...state.translations, data],
    }));
  },
  updateTranslation: (id, translationText) => {
    set(state => {
      const updatedTranslations = state.translations.map(translation =>
        translation.id === id
          ? { ...translation, translation: translationText }
          : translation
      );
      // Also update currentTranslation if it matches the ID
      const currentTranslation =
        state.currentTranslation?.id === id
          ? { ...state.currentTranslation, translation: translationText }
          : state.currentTranslation;

      return {
        translations: updatedTranslations,
        currentTranslation: currentTranslation,
      };
    });
  },
  setCurrent: id => {
    set(state => {
      const currentTranslation = state.translations.find(
        translation => translation.id === id
      );
      return { currentTranslation: currentTranslation || null };
    });
  },
}));
