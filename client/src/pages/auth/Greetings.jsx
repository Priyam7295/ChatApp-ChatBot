import React, { useState, useEffect } from 'react';

const AnimatedGreetings = () => {
  const languages = {
    english: 'Hello',
    japanese: 'こんにちは',
    hindi: 'नमस्ते',
    spanish: 'Hola',
    french: 'Bonjour',
    german: 'Hallo',
    italian: 'Ciao',
    russian: 'Привет',
    chinese: '你好',
    arabic: 'مرحبا',
  };

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F06292', '#AED581', '#FFD54F', '#4DB6AC', '#7986CB'];

  const [greetings, setGreetings] = useState([]);

  useEffect(() => {
    const addGreeting = () => {
      setGreetings(prevGreetings => {
        const newGreetings = [...prevGreetings, createGreeting()];
        if (newGreetings.length > 15) {
          setTimeout(() => {
            setGreetings(current => current.slice(1));
          }, 5000); // Remove after 5 seconds
        }
        return newGreetings;
      });
    };

    const intervalId = setInterval(addGreeting, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const createGreeting = () => {
    const language = Object.keys(languages)[Math.floor(Math.random() * Object.keys(languages).length)];
    return {
      id: Date.now(),
      text: languages[language],
      x: Math.random() * 80 + 10, // 10-90% of width
      y: Math.random() * 80 + 10, // 10-90% of height
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: Math.random() * 0.7 + 0.8, // 0.8-1.5 scale
      rotation: Math.random() * 40 - 20, // -20 to 20 degrees
    };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {greetings.map((greeting) => (
        <div
          key={greeting.id}
          className="absolute text-2xl font-bold animate-greeting"
          style={{
            left: `${greeting.x}%`,
            top: `${greeting.y}%`,
            color: greeting.color,
            transform: `scale(${greeting.scale}) rotate(${greeting.rotation}deg)`,
            animation: 'greeting 5s ease-in-out forwards',
          }}
        >
          {greeting.text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedGreetings;
