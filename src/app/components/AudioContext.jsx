// components/AudioContext.jsx
import React, { createContext, useContext, useRef, useEffect } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio('/zen-meditation.mp3');
      audioRef.current.loop = true;

    }
  }, []);

  useEffect(() => {
    return () => {
      // Non annulliamo audioRef.current qui per mantenerlo tra le pagine
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <AudioContext.Provider value={{ audioRef }}>
      {children}
    </AudioContext.Provider>
  );
};
