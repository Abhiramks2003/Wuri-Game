import React from "react";
import "./App.css";
function App() {
  document.body.style.backgroundColor = "#000033";
  return (
    <div className="text-white bg-[#000033]">
      <div className="flex justify-between items-center px-4 h-16 shadow-lg">
        <span className="text-2xl font-bold">Wuri</span>
        <span className="text-2xl font-semibold">Writing Assistant</span>
      </div>
      <div className="flex justify-around">
        <div className="mt-16 mx-5">
          <section>
            <div className="input-group">
              <input
                className="input"
                name="text"
                type="text"
                placeholder="Enter your App Name"
                required=""
              />
            </div>
          </section>
          <div className="col-md-12">
            <h1 className="animate-charcter mt-20 font-bold text-3xl">
              Upload Game Files:
            </h1>
          </div>
          <div className="container my-8">
            <div className="btn">
              <a href="##">CSV for Story</a>
            </div>
            <div className="btn">
              <a href="##">Game Assets</a>
            </div>
            <div className="btn">
              <a href="##">App Icon</a>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="download w-64 my-6">
              Download Sample Files
            </button>
            <button className="build w-80 my-12">Click to Build Game</button>
          </div>
        </div>
        <div className="mt-16">
          <span className="text-2xl">Check out the demo to get started</span>
          <iframe
            className="my-10"
            title="Tutorial"
            width="550"
            height="360"
            src="https://www.youtube.com/embed/1rTaNzjGOek"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col items-center mx-16 my-8 pb-12 border-b-2 border-b-white">
        <div className="progress-bar my-4">
          <div className="progress-fill"></div>
        </div>
        <span>02:00 minutes remaining</span>
      </div>
      <div className="flex justify-center">
        <h1 className="text-4xl">Games Created Using Wuri</h1>
      </div>
    </div>
  );
}

export default App;
