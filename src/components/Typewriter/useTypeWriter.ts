/**
 * https://www.youtube.com/watch?v=N4899I-tAW4
 * https://github.com/jmagrippis/eri/blob/main/src/components/Home/useTypedSuperpower.tsx
 */
import { useCallback, useEffect, useState } from "react";

export enum TypePhase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL_MIN = 80;
const TYPING_INTERVAL_MAX = 150;
const TYPING_PAUSE_MS = 2000;
const DELETING_INTERVAL = 50;
const DELETING_PAUSE_MS = 500;

const getRandomTypingInterval = () =>
  Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) +
  TYPING_INTERVAL_MIN;

export const useTypeWriter = (
  words: string[]
): {
  typedWords: string;
  selectedWord: string;
  phase: TypePhase;
  resume: () => void;
} => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(TypePhase.Typing);
  const [typedWords, setTypedWords] = useState("");
  const resume = useCallback(() => {
    if (phase !== TypePhase.Pausing) return;
    setPhase(TypePhase.Deleting);
  }, [phase]);

  useEffect(() => {
    /**
     * Phase:
     * 1. Typing
     * 2. After a word is finished typed, it will enter PAUSING
     * 3. DELETING
     * 4. Go to next word
     */
    switch (phase) {
      case TypePhase.Typing: {
        const nextTypedWords = words[selectedIndex].slice(
          0,
          typedWords.length + 1
        );

        // If a word is already finished typed, it will enter "Pausing" phase
        if (nextTypedWords === typedWords) {
          setPhase(TypePhase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedWords(nextTypedWords);
        }, getRandomTypingInterval());

        return () => clearTimeout(timeout);
      }
      case TypePhase.Deleting: {
        // After finished deleting (typeWords is already empty string),
        // ready to type next words by increasing the selected index
        if (!typedWords) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1;
            setSelectedIndex(words[nextIndex] ? nextIndex : 0);
            setPhase(TypePhase.Typing);
          }, DELETING_PAUSE_MS);
          return () => clearTimeout(timeout);
        }

        const nextRemaining = words[selectedIndex].slice(
          0,
          typedWords.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedWords(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case TypePhase.Pausing:
      default:
        // After "Pausing" phase, it will enter deleting phase
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting);
        }, TYPING_PAUSE_MS);

        return () => clearTimeout(timeout);
    }
  }, [words, typedWords, selectedIndex, phase]);

  return {
    typedWords,
    phase,
    resume,
    selectedWord: words[selectedIndex],
  };
};
