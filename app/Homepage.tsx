import React, { useState } from 'react';

const Homepage = () => {
  const [response, setResponse] = useState('');
  const [noButtonClicks, setNoButtonClicks] = useState(0);

  const dialogues = ["Are you sure?", "Please don't say no", "You are breaking my heart", "Accept my love please!", "Please Please Please!"];

  const handleNoClick = () => {
    setResponse(dialogues[noButtonClicks]);
    setNoButtonClicks(noButtonClicks + 1);
  };

  const handleYesClick = () => {
    setResponse("I love you too, Babe! Happy Valentine's Day!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      <h1 className=" text-red-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Will you be my Valentine?</h1>
      <div className="flex gap-4">
        <button
          onClick={handleNoClick}
          className={`py-2 px-4 md:py-3 md:px-6 rounded-lg bg-red-600 text-white font-semibold ${response && 'text-sm'}`}
          style={{ transform: `scale(${1 - noButtonClicks * 0.2})` }}
        >
          No
        </button>
        <button
          onClick={handleYesClick}
          className="py-2 px-4 md:py-3 md:px-6 rounded-lg bg-green-500 text-white font-semibold"
          style={{ transform: `scale(${1+ noButtonClicks * 0.2})` }}
        >
          Yes
        </button>
      </div>
      <p className="text-lg mt-8 text-red-600">{response}</p>
    </div>
  );
};

export default Homepage;
