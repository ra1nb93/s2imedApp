'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAudio } from '../components/AudioContext';
import { playAudio, pauseAudio, toggleAudio } from '../store/audioSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state) => state.audio);
  const { audioRef } = useAudio();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

  const handlePlayPause = () => {
    dispatch(toggleAudio());
  };
  return (
    <header className="w-full py-4 px-6 bg-[#0D1B2A] text-[#EAE0D5] flex justify-between items-center">
      <Link href="/" className="flex items-center text-2xl font-bold">
        <div className="relative w-10 h-10 mr-2">
          <Image
            src="/hLogo.png"
            alt="Meditation Logo"
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            priority
          />
        </div>
        <span>MeditApp</span>
      </Link>
      <div className="flex space-x-4">
        <button onClick={handlePlayPause} className="bg-[#A1C181] text-[#0D1B2A] p-2 rounded-full">
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-solid fa-volume-high'}`}></i>
        </button>
        <Link href="/dashboard/whatis">
          <button className="px-4 py-2 bg-[#A1C181] text-[#0D1B2A] rounded-lg hover:bg-[#89a564]">
            <i className={`fa-solid fa-plus`}></i>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
