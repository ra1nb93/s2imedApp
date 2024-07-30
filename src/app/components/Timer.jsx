'use client';

import { useSelector, useDispatch, Provider } from 'react-redux';
import { store } from '../store';
import { stopTimer, tick, startCountdown } from '../store/timerSlice';
import { useState, useEffect } from 'react';

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const useTimer = (running, time, dispatch) => {
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [running, dispatch]);
};

const validateTimeInput = (value) => {
  return Math.max(0, Math.min(59, Number(value)));
};

const playAlarm = () => {
  const audio = new Audio('/gong.mp3');
  audio.play().then(() => {
    console.log('Audio playback started');
  }).catch(error => {
    console.error('Audio playback failed:', error);
  });
};

const TimerComponent = () => {
  const time = useSelector((state) => state.timer.time);
  const running = useSelector((state) => state.timer.running);
  const dispatch = useDispatch();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);

  useTimer(running, time, dispatch);

  useEffect(() => {
    if (time === 0 && remainingTime > 0) {
      console.log('Timer reached zero, stopping timer and playing alarm.');
      dispatch(stopTimer());
      playAlarm();
    }
  }, [time, remainingTime, dispatch]);

  const handleStartCountdown = () => {
    const totalSeconds = Number(minutes) * 60 + Number(seconds);
    if (totalSeconds > 0) {
      setRemainingTime(totalSeconds);
      dispatch(startCountdown(totalSeconds));
      console.log(`Countdown started with ${totalSeconds} seconds.`);
    }
  };

  const handleStopCountdown = () => {
    setRemainingTime(time); // Save the remaining time
    dispatch(stopTimer());
    console.log('Countdown stopped.');
  };

  const handleResumeCountdown = () => {
    if (!running && remainingTime > 0) {
      dispatch(startCountdown(remainingTime));
      console.log('Countdown resumed.');
    }
  };

  return (
    <div>
            <p className="mb-6 text-xl text-[#0D1B2A] font bold">
              Set your timer and enjoy a peaceful meditation session.
            </p>
   
  
    <div className="flex flex-col items-center gap-4 p- bg-[#0D1B2A]  rounded-lg shadow-lg max-w-md mx-auto">
      
      <div className="mt-4 text-xl font-bold mb-4 text-[#EAE0D5]">
        Countdown: {formatTime(time)}
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(validateTimeInput(e.target.value))}
          placeholder="Minuti"
          className="w-20 px-2 py-1 border rounded-lg text-center"
          aria-label="Minuti"
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(validateTimeInput(e.target.value))}
          placeholder="Secondi"
          className=" w-20 px-2 py-1 border rounded-lg text-center"
          aria-label="Secondi"
        />
        <button 
          onClick={handleStartCountdown} 
          disabled={running}
          className={`px-4 py-2 bg-[#A1C181] text-[#0D1B2A] rounded-lg ${running ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#89a564]'}`}
          aria-disabled={running}
        >
          Start
        </button>
        <button 
          onClick={handleStopCountdown} 
          disabled={!running}
          className={`px-4 py-2 bg-[#A1C181] text-[#0D1B2A] rounded-lg ${!running ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#89a564]'}`}
          aria-disabled={!running}
        >
          Stop
        </button>
        <button 
          onClick={handleResumeCountdown} 
          disabled={running || remainingTime === 0}
          className={`px-4 py-2 bg-[#A1C181] text-[#0D1B2A] rounded-lg ${running || remainingTime === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#89a564]'}`}
          aria-disabled={running || remainingTime === 0}
        >
          Resume
        </button>
      </div>
      <div className="mb-2 mt-2 text-lg font-medium text-center text-[#EAE0D5]">
        {running ? "Countdown running" : ""}
      </div>
    </div>
    </div>
  );
};

const Timer = () => (
  <Provider store={store}>
    <TimerComponent />
  </Provider>
);

export default Timer;
