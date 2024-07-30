"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Provider } from 'react-redux';
import { store } from '../../store';
import { AudioProvider } from "../../components/AudioContext";

export default function Meditation() {
  return (
    <Provider store={store}>
      <AudioProvider>
    <main className="flex flex-col min-h-screen bg-gray-100">
      <Header/>
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 text-center">
        Meditation Guide: Zen, Mindfulness, and Yoga
        </h1>
        <p className="text-lg md:text-xl text-[#0D1B2A] mb-8 text-center">
        Discover the differences between the main meditation practices: Zen, Mindfulness, and Yoga. Learn how each can enrich your life and well-being.        </p>
        
        <div className="flex flex-col md:flex-row md:space-x-4 w-full md:w-4/5">
          <section className="flex-1 bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-[#0D1B2A] mb-4">Meditazione Zen</h2>
            <p className="text-lg text-[#0D1B2A]">
            Zen meditation, or Zazen, is a traditional practice of Zen Buddhism. It focuses on sitting in silence and observing one's thoughts and sensations without attachment. This practice helps achieve inner tranquility and awareness of the present moment.            </p>
          </section>
          
          <section className="flex-1 bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-[#0D1B2A] mb-4">Mindfulness</h2>
            <p className="text-lg text-[#0D1B2A]">
            Mindfulness is a practice based on the attentive and non-judgmental observation of one's thoughts, emotions, and bodily sensations. Mindfulness is often used to reduce stress and improve mental and physical health.            </p>
          </section>
          
          <section className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#0D1B2A] mb-4">Yoga</h2>
            <p className="text-lg text-[#0D1B2A]">
            Yoga is a practice that combines physical exercises, breathing, and meditation. The goal is to achieve a balance between body, mind, and spirit. There are different forms of Yoga, each with a different focus, but all aim to promote overall well-being.            </p>
          </section>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row md:space-x-4">
          <Link href="/" passHref>
            <button className="px-4 py-2 w-full md:w-auto bg-[#A1C181] text-[#0D1B2A] rounded-lg hover:bg-[#89a564]">
              Torna alla Home
            </button>
          </Link>
          <Link href="/dashboard" passHref>
            <button className="px-4 py-2 w-full md:w-auto bg-[#A1C181] text-[#0D1B2A] rounded-lg hover:bg-[#89a564]">
              Vai al Timer
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
   </AudioProvider>
    </Provider>
  );
}
