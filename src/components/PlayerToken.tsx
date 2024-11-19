import React from 'react';
import { useDrag } from 'react-dnd';
import { Player } from '../types';

interface PlayerTokenProps {
  player: Player;
  position?: { x: number; y: number };
  onClick?: (playerId: number) => void; // Callback for when player image is clicked
}

const PlayerToken: React.FC<PlayerTokenProps> = ({ player, position, onClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'player',
    item: { id: player.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleClick = () => {
    if (onClick) {
      onClick(player.id); // Trigger the onClick function when the player is clicked
    }
  };

  return (
    <div
      ref={drag}
      className={`absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
      style={position ? { left: `${position.x}%`, top: `${position.y}%` } : undefined}
    >
      <img
        src={player.image}
        alt={player.name}
        className="w-full h-full rounded-full border-2 border-white object-cover"
        onClick={handleClick} // Attach click handler to the image
      />
      <div className="absolute bottom--1 left-1/2 transform -translate-x-1/2 bg-black/75 px-2 py-1 rounded text-white text-xs text-center whitespace-normal">
        {player.name}
      </div>
    </div>
  );
};

export default PlayerToken;
