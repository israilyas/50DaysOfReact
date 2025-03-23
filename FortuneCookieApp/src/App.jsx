import React, { useState } from "react";

const fortunes = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A lifetime of happiness lies ahead of you.",
  "A faithful friend is a strong defense.",
  "An exciting opportunity will come your way soon.",
  "Your talents will be recognized and rewarded.",
  "Happiness begins with facing life with a smile and a positive attitude.",
  "Now is the time to try something new.",
  "You will soon receive good news.",
  "Your kindness will lead you to success.",
  "The universe is working in your favor.",
  "Good things come to those who wait.",
  "Your dreams are closer than you think.",
  "Adventure awaits you in unexpected places.",
  "You will make a difference in someone's life today.",
  "Believe in yourself, and great things will happen.",
  "A small act of kindness will bring joy to many.",
  "Your intuition will lead you to success.",
  "You are on the right path to achieving your goals.",
  "Something wonderful is about to happen.",
  "Success is within your reach—keep going!",
];

const App = () => {
  const [fortune, setFortune] = useState("Click the button to reveal your fortune!");

  const getRandomFortune = () => {
    const fortuneIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[fortuneIndex]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-orange-600">🥠 Fortune Cookie 🥠</h2>
        <div className="bg-gray-100 p-4 rounded-md mt-4">
          <p className="text-lg text-gray-700">{fortune}</p>
        </div>
        <button
          onClick={getRandomFortune}
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
        >
          Crack Open Cookie
        </button>
      </div>
    </div>
  );
};

export default App;
