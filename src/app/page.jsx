'use client';

import Header from "./components/Header";
import Body from "./components/Home";
import Footer from "./components/Footer";
import Link from "next/link";
import { Provider } from 'react-redux';
import { store } from './store';
import { AudioProvider } from "./components/AudioContext";

export default function Main() {
  return (
    <Provider store={store}>
      <AudioProvider>
        <main className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <div className="flex flex-col items-center flex-grow p-0 ">
            <Body />
            <Link href="/dashboard">
              <button className="px-4 py-2 bg-[#A1C181] text-[#0D1B2A] rounded-lg hover:bg-[#89a564]">
                Timer
              </button>
            </Link>
          </div>
          <Footer />
        </main>
      </AudioProvider>
    </Provider>
  );
}
