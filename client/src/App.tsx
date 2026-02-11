import { useEffect } from "react";
import { socket } from "./services/socket";
import { useTranslationStore } from "./store/translationStore";
import type { Translation } from "./types/translation";
import TranslationForm from "./components/translationForm";
import TranslationsTable from "./components/translationsTable";

export default function App() {
  const updateTranslation = useTranslationStore(
    state => state.updateTranslation
  );
  useEffect(() => {
    socket.on("translation_result", (data: Translation) => {
      updateTranslation(data.id, data.translation);

      console.log(data);
    });
  }, [updateTranslation]);
  return (
    <div>
      <TranslationForm />
      <TranslationsTable />
    </div>
  );
}
