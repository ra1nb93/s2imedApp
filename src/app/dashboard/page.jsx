"use client";
import Timer from "../components/Timer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { store } from "../store";
import { Provider } from 'react-redux';
import { AudioProvider } from "../components/AudioContext";



export default function Page() {


  return (
    <Provider store={store}>
      <AudioProvider>
    <main className="flex flex-col min-h-screen bg-gray-100">
      <div>
          
        <Header />
        
      </div>
      <div className="flex flex-col items-center justify-center flex-grow p-8 md:p-24">
        <Timer />
      </div>

      <Footer />
    </main>
    </AudioProvider>
    </Provider>
  );
}
