import { useRef, useState } from "react";
import { socket } from "../services/socket";
import { useTranslationStore } from "../store/translationStore";

export function useSpeechRecognition() {
  const [isRecording, setIsRecording] = useState(false);
  const addTranslation = useTranslationStore(state => state.addTranslation);
  const setCurrent = useTranslationStore(state => state.setCurrent);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startRecording = () => {
    const SpeechRecognitionApi =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionApi) {
      alert("Speech recognition is not available in your browser");
      return;
    }

    recognitionRef.current = new SpeechRecognitionApi();

    recognitionRef.current.lang = "en-US";
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onstart = () => {
      setIsRecording(true);
    };

    recognitionRef.current.onresult = event => {
      const results = event.results;
      const lastResultIndex = results.length - 1;

      const transcript = results[lastResultIndex][0].transcript;

      const translationObj = {
        original: transcript,
        id: generateId(),
        translation: "Translating...",
      };

      socket.emit("translate", translationObj);

      addTranslation(translationObj);
      setCurrent(translationObj.id);
    };

    recognitionRef.current.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      setIsRecording(false);
      recognitionRef.current.stop();
    }
  };

  return { isRecording, startRecording, stopRecording };
}

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}
