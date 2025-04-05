"use client";
import { useState, useRef } from "react";
import domtoimage from "dom-to-image";

export default function Page() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const cardRef = useRef(null);

  const templates = [
    `Eid Mubarak, ${name}! May your Eid be filled with joy and sweetness. 
    ঈদ মোবারক, ${name}! তোমার ঈদ হোক আনন্দ ও মিষ্টিমুখে ভরা।`,

    `Happy Eid, ${name}! May Allah accept all your prayers. 
    শুভ ঈদ, ${name}! আল্লাহ তোমার সব দোয়া কবুল করুক।`,

    `${name}, I send you endless love and best wishes on this joyful day of Eid! 
    ${name}, ঈদের এই আনন্দঘন দিনে তোমায় জানাই অফুরন্ত ভালোবাসা ও শুভেচ্ছা!`,

    `Eid Mubarak ${name}! May happiness and peace be in your life. 
    ঈদ মোবারক ${name}! খুশি আর শান্তি বর্ষিত হোক তোমার জীবনে।`,
  ];

  const handleGenerateGreeting = () => {
    if (!name) return;
    const message = templates[Math.floor(Math.random() * templates.length)];
    setGreeting(message);
  };



  return (
    <main className=" bg-gradient-to-t from-[#ece1e9] to-[#FCCAF2] min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-6 text-green-800">🎉 Eid Greetings Generator 🎉</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded w-64 text-center mb-4"
      />
      <button
        onClick={handleGenerateGreeting}
        className="bg-[#FFA8EE]  cursor-pointer px-4 py-2 rounded transition"
      >
        Create greetings
      </button>

      {greeting && (
        <>
          <div ref={cardRef} className="mt-6 bg-white border-2 border-green-200 rounded p-4 shadow-md text-center text-xl text-green-800 w-full max-w-md">
            <img src="https://i.ibb.co.com/7FsKWt6/downloadasdf.jpg" alt="Eid Moon" className="w-16 mx-auto mb-4 rounded-xl" />
            {greeting.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <button
              
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Copy
            </button>
            <button
              
              className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
            >
              Download
            </button>
            <button
              
              className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
            >
              Share
            </button>
          </div>
        </>
      )}

    </main>
  );
}
