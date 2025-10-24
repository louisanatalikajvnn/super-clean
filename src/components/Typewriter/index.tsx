import { useEffect, useState } from "react";
import "./style.css";
import { TypePhase, useTypeWriter } from "./useTypeWriter";
import React from "react";

type TypeWriterProps = {
  words: string[];
  className?: string;
};
const Typewriter = ({ words, className }: TypeWriterProps) => {
  const { typedWords, selectedWord, phase, resume } = useTypeWriter(words);

  return (
    <h2 onClick={resume} className={className}>
      <span
        className={`${phase !== TypePhase.Deleting ? "end-cursor" : ""} ${phase === TypePhase.Pausing && "blinking"
          }`}
        aria-label={selectedWord}
      >
        {typedWords}
      </span>
    </h2>
  );
};

export default Typewriter;
