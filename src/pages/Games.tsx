import React, { useState } from "react";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      name: "Guided Breathing",
      file: "breathing.html",
      description: "Relax your mind with deep breathing exercises."
    },
    {
      name: "Bubble Pop",
      file: "bubbles.html",
      description: "Pop bubbles to relieve quick stress."
    },
    {
      name: "Mindful Coloring",
      file: "coloring.html",
      description: "Calm drawing space to express emotions."
    },
    {
      name: "Mandala Mirror",
      file: "mandala.html",
      description: "Draw symmetric mandalas for relaxation."
    }
  ];

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Relaxing Games</h1>
      <p className="text-gray-600 mb-6">
        Choose any game to reduce stress and improve emotional wellness.
      </p>

      {/* GAME CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game) => (
          <div key={game.name} className="card p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-semibold">{game.name}</h2>
            <p className="text-sm text-gray-600">{game.description}</p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setSelectedGame(game.file)}
                className="px-3 py-1 bg-blue-600 text-white rounded shadow"
              >
                Open Inside App
              </button>

              <a
                href={`/games/${game.file}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 border rounded shadow inline-flex items-center"
              >
                Open New Tab
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* EMBEDDED GAME PLAYER */}
      {selectedGame && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Playing: {selectedGame.replace('.html','')}</h3>
          <iframe
            src={`/games/${selectedGame}`}
            title="Embedded Game"
            className="w-full h-[600px] rounded-lg border shadow"
          ></iframe>

          <div className="mt-4">
            <button
              onClick={() => setSelectedGame(null)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Close Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}