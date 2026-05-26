//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'

import cover1 from './assets/cover1.png'
import cover2 from './assets/cover2.png'
import cover3 from './assets/cover3.png'

import { useEffect, useState } from "react"

function Urodziny() {

  // Data docelowa
  const targetDate: Date = new Date("2026-11-21T10:00:00");

  // State na czas
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {

    const updateCountdown = () => {

      const now: Date = new Date();

      const difference: number =
        targetDate.getTime() - now.getTime();

      // Sekundy pozostałe
      setTimeLeft(Math.floor(difference / 1000));
    };

    // Uruchom od razu
    updateCountdown();

    // Aktualizacja co sekundę
    const interval = setInterval(updateCountdown, 1000);

    // Czyszczenie intervala
    return () => clearInterval(interval);

  }, []);

  // Obliczenia czasu
  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft / (60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 60) % 60);
  const seconds = Math.floor(timeLeft % 60);

  return (
        <h3 className="float-left text-white text-lg text-center">
          Moje nastepne urodziny sa za: {days}d {hours}h {minutes}m {seconds}s (21.11.2026)
        </h3>
  )
}

function App() {
  const [page, setPage] = useState<"home" | "gallery">("home");

  const imgClass = "w-64 rounded-xl transition-all duration-1000 hover:brightness-75 hover:scale-105";
  const buttonClass = "px-6 py-4 w-[500px] text-xl rounded-full bg-[#888888] text-white hover:bg-gray-700 hover:text-gray-300 transition duration-500 ease-in-out";

  return (
    <div className='bg-[#aaaaaa] min-h-screen flex flex-col'>
        <header className='text-center py-6 text-white text-3xl font-bold'>
          <h1>Moja strona internetowa</h1>
        </header>

        <nav className='flex justify-evenly py-4'>
          <button onClick={() => setPage("gallery")} className={buttonClass}>Galeria</button>
          <button onClick={() => setPage("home")} className={buttonClass}>Glowna</button>
        </nav>

        <main className='flex-1 p-6'>
          {page === "gallery" && (
          <section id="galeriaBlok">
            <img src={image1} className={imgClass}></img>
            <img src={image2} className={imgClass}></img>
            <img src={image3} className={imgClass}></img>
            <img src={image4} className={imgClass}></img>
            <img src={image5} className={imgClass}></img>
            <img src={image6} className={imgClass}></img>
          </section>
          )}

          {page === "home" && (
          <section id="glownaBlok"  className="text-white">
            <h2 className="text-center text-xl mb-4">Czesc! witam na mojej stronie internetowej. Moje zainteresowania to muzyka, koszykowka i gry komputerowe.</h2>
            <h3 className="text-white text-lg mb-4 text-center">To sa moje ulubione albumy: </h3>
            <section id="okladkiBlok">
              <img src={cover1} className={imgClass}></img>
              <img src={cover2} className={imgClass}></img>
              <img src={cover3} className={imgClass}></img>
            </section>
            <div className='flex justify-center mt-6'>
              <Urodziny/>
            </div>
          </section>
          )}

        </main>
        <footer className='text-center'>
          <p>Autor strony: Filip Tarnowski</p>
        </footer>
    </div>
  )
}

export default App
