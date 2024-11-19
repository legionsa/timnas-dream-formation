import React from 'react';
import { useDrop } from 'react-dnd';
import { Player } from '../types';
import PlayerToken from './PlayerToken';

interface FieldProps {
  players: Player[]; // Players currently in the field
  formation: { x: number; y: number }[]; // Formation data (positions of the players)
  onPlayerDrop: (playerId: number, position: { x: number; y: number }) => void;
}

const Field: React.FC<FieldProps> = ({ players, formation, onPlayerDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: 'player',
    drop: (item: { id: number }, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const fieldRect = document.getElementById('soccer-field')?.getBoundingClientRect();
        if (fieldRect) {
          // Calculate relative position within the field
          const x = ((offset.x - fieldRect.left) / fieldRect.width) * 100;
          // Adjust y to prevent out-of-bound placements
          const y = Math.min(Math.max(((offset.y - fieldRect.top) / fieldRect.height) * 100, 5), 95);
          onPlayerDrop(item.id, { x, y });
        }
      }
    },
  }));

  return (
    <div
      ref={drop}
      id="soccer-field"
      className="relative w-full aspect-[9/16] bg-[#2a8d3f] overflow-hidden"
    >
      {/* Substitution text with circle */}
      <div className="absolute top-4 left-4 z-10 flex flex-col items-center gap-2">
  <span className="text-white text-sm font-medium">Substitution</span>

</div>


      <svg
        viewBox="0 0 100 160"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute inset-0"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background with horizontal stripes */}
        {Array.from({ length: 10 }).map((_, i) => (
          <rect
            key={i}
            x="0"
            y={i * 16} // Adjusting position for horizontal stripes
            width="100" // Full width of the field
            height="16" // Each stripe's height
            fill={i % 2 === 0 ? "#2a8d3f" : "#237a38"}
          />
        ))}
        {/* Outer boundary */}
        <rect x="5" y="5" width="90" height="150" fill="none" stroke="white" strokeWidth="1" />
        {/* Center line */}
        <line x1="5" y1="80" x2="95" y2="80" stroke="white" strokeWidth="1" />
        {/* Center circle */}
        <circle cx="50" cy="80" r="9" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="50" cy="80" r="0.5" fill="white" />
        {/* Penalty areas */}
        <rect x="30" y="5" width="40" height="16" fill="none" stroke="white" strokeWidth="1" />
        <rect x="40" y="5" width="20" height="7" fill="none" stroke="white" strokeWidth="1" />
        <rect x="30" y="139" width="40" height="16" fill="none" stroke="white" strokeWidth="1" />
        <rect x="40" y="148" width="20" height="7" fill="none" stroke="white" strokeWidth="1" />
        {/* Penalty spots */}
        <circle cx="50" cy="18" r="0.5" fill="white" />
        <circle cx="50" cy="142" r="0.5" fill="white" />
        {/* Penalty arcs */}
        <path
          d="M40,18 A9,9 0 0,0 60,18"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M40,142 A9,9 0 0,1 60,142"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        {/* Corner arcs */}
        <path
          d="M5,5 A3,3 0 0,6 8,8"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M95,5 A3,3 0 0,6 92,8"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M5,155 A3,3 0 0,6 8,152"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M95,155 A3,3 0 0,6 92,152"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        {/* Goals */}
        <rect x="45" y="3" width="10" height="2" fill="none" stroke="white" strokeWidth="1" />
        <rect x="45" y="155" width="10" height="2" fill="none" stroke="white" strokeWidth="1" />
        {/* Formation markers */}
        {formation.map((pos, idx) => (
          <circle
            key={idx}
            cx={pos.x}
            cy={pos.y}
            r="1.5"
            fill="rgba(255, 255, 255, 0.3)"
          />
        ))}
      </svg>

      {/* Players */}
      {players.map((player) => (
        player.position && (
          <PlayerToken
            key={player.id}
            player={player}
            position={player.position}
          />
        )
      ))}
    </div>
  );
};

export default Field;
