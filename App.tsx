import React, { useState, useCallback, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { toPng } from 'html-to-image';
import { Download } from 'lucide-react';
import Field from './components/Field';
import PlayerToken from './components/PlayerToken';
import { formations } from './data/formations';
import { players, substitutes } from './data/players';
import { Player } from './types';

function App() {
  const [selectedFormation, setSelectedFormation] = useState(formations[0]);
  const [fieldPlayers, setFieldPlayers] = useState<Player[]>([]);
  const [showPlayerList, setShowPlayerList] = useState(false); // State for showing player list
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null); // Position of field click
  const fieldRef = useRef<HTMLDivElement>(null);

  const handlePlayerDrop = useCallback((playerId: number, position: { x: number; y: number }) => {
    setFieldPlayers(prev => {
      const player = [...players, ...substitutes].find(p => p.id === playerId);
      if (!player) return prev;

      const newPlayers = prev.filter(p => p.id !== playerId);
      return [...newPlayers, { ...player, position }];
    });
  }, []);

  const handleDownload = useCallback(async () => {
    if (!fieldRef.current) return;

    try {
      const dataUrl = await toPng(fieldRef.current, {
        quality: 0.8,
        width: 1080,
        height: 1920,
      });

      const link = document.createElement('a');
      link.download = 'formation-timnas-dt.jpg';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image:', err);
    }
  }, []);

  // Handle player click on the field to show player list
  const handleFieldClick = (event: React.MouseEvent) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setClickPosition({ x: offsetX, y: offsetY });
    setShowPlayerList(true); // Show the player list popup when the field is clicked
  };

  // Handle player selection from the list and placing it on the field
  const handlePlayerSelect = (playerId: number) => {
    if (clickPosition) {
      handlePlayerDrop(playerId, clickPosition); // Place player at the clicked position
      setShowPlayerList(false); // Close the player list after selection
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4">Timnas Dream Team</h1>

            {/* Formation selector */}
            <div className="flex gap-2 overflow-x-auto pb-4">
              {formations.map((formation) => (
                <button
                  key={formation.name}
                  onClick={() => setSelectedFormation(formation)}
                  className={`px-2 py-4 rounded ${
                    selectedFormation.name === formation.name
                      ? 'bg-green-600'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {formation.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Field on the left */}
            <div
              className="lg:col-span-6"
              ref={fieldRef}
              onClick={handleFieldClick} // Handle click on field
            >
              <div className="relative">
                <Field
                  players={fieldPlayers}
                  formation={selectedFormation.positions}
                  onPlayerDrop={handlePlayerDrop}
                />

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 bg-white h-16 flex items-center justify-between px-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2024_Indonesia_Football_National_Team_Badge.png/270px-2024_Indonesia_Football_National_Team_Badge.png"
                    alt="Indonesia FA"
                    className="h-12"
                  />
                  <span className="text-black font-medium"> by @hikalvin on X</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700"
                >
                  <Download size={20} />
                  Download Formation
                </button>
                <button
                  onClick={() => setFieldPlayers([])}
                  className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Clear Field
                </button>
              </div>
            </div>

            {/* Player selection on the right */}
            <div className="lg:col-span-6 bg-gray-800 p-4 rounded-lg flex justify-center items-center relative">
              {/* Absolutely positioned 'Players' text */}
              <h2 className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-white mb-4">
                Players
              </h2>

              {/* Grid of players */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 gap-20 gap-x-26 gap-y-28 justify-items-center mt-12">
                {players.map((player) => (
                  <div key={player.id} className="flex flex-col items-center">
                    <PlayerToken player={player} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Player list popup */}
        {showPlayerList && (
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-10"
            onClick={() => setShowPlayerList(false)} // Close on click outside
          >
            <div
              className="bg-gray-800 p-6 rounded-lg relative w-full max-w-4xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <h2 className="text-white text-xl mb-4">Select a Player</h2>

              {/* Reusing player grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 gap-20 gap-x-26 gap-y-28 justify-items-center mt-12">
                {players.map((player) => (
                  <button
                    key={player.id}
                    onClick={() => handlePlayerSelect(player.id)} // Add player to the field
                    className="flex flex-col items-center"
                  >
                    <PlayerToken player={player} />
                    <span className="text-white mt-2">{player.name}</span> {/* Ensuring the name is below the player */}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
}

export default App;
