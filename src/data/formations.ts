import { Formation } from '../types';

export const formations: Formation[] = [
  {
    name: "No Formation",
    positions: [
      { x: -100, y: -100 }, // GK
      { x: -100, y: -100 }, { x: -100, y: -100 }, { x: -100, y: -100 }, { x: -100, y: -100 }, // DEF
      { x: -100, y: -100 }, { x: -100, y: -100 }, { x: -100, y: -100 }, { x: -100, y: -100 }, // MID
      { x: -100, y: -100 }, { x: -100, y: -100 } // FWD
    ]
  },
  {
    name: "4-4-2",
    positions: [
      { x: 50, y: 150 }, // GK
      { x: 20, y: 120 }, { x: 40, y: 120 }, { x: 60, y: 120 }, { x: 80, y: 120 }, // DEF
      { x: 20, y: 60 }, { x: 40, y: 80 }, { x: 60, y: 80 }, { x: 80, y: 60 }, // MID
      { x: 35, y: 20 }, { x: 65, y: 20 } // FWD
    ]
  },
  {
    name: "4-3-3",
    positions: [
      { x: 50, y: 150 },
      { x: 20, y: 120 }, { x: 40, y: 120 }, { x: 60, y: 120 }, { x: 80, y: 120 },
      { x: 30, y: 60 }, { x: 50, y: 60 }, { x: 70, y: 60 },
      { x: 20, y: 20 }, { x: 50, y: 20 }, { x: 80, y: 20 }
    ]
  },
  {
    name: "3-5-2",
    positions: [
      { x: 50, y: 150 },
      { x: 30, y: 120 }, { x: 50, y: 120 }, { x: 70, y: 120 },
      { x: 20, y: 60 }, { x: 35, y: 80 }, { x: 50, y: 40 }, { x: 65, y: 80 }, { x: 80, y: 60 },
      { x: 35, y: 20 }, { x: 65, y: 20 }
    ]
  },
  {
    name: "4-2-3-1",
    positions: [
      { x: 50, y: 140 },
      { x: 20, y: 120 }, { x: 40, y: 120 }, { x: 60, y: 120 }, { x: 80, y: 120 },
      { x: 35, y: 80 }, { x: 65, y: 80 },
      { x: 20, y: 35 }, { x: 50, y: 35 }, { x: 80, y: 35 },
      { x: 50, y: 20 }
    ]
  },
  {
    name: "3-4-3",
    positions: [
      { x: 50, y: 140 },
      { x: 30, y: 120 }, { x: 50, y: 120 }, { x: 70, y: 120 },
      { x: 20, y: 70 }, { x: 40, y: 80 }, { x: 60, y: 80 }, { x: 80, y: 70 },
      { x: 20, y: 20 }, { x: 50, y: 20 }, { x: 80, y: 20 }
    ]
  },
  {
    name: "5-3-2",
    positions: [
      { x: 50, y: 140 },
      { x: 20, y: 120 }, { x: 35, y: 120 }, { x: 50, y: 120 }, { x: 65, y: 120 }, { x: 80, y: 120 },
      { x: 30, y: 80 }, { x: 50, y: 80 }, { x: 70, y: 80 },
      { x: 35, y: 20 }, { x: 65, y: 20 }
    ]
  },
  {
    name: "4-1-4-1",
    positions: [
      { x: 50, y: 150 },
      { x: 20, y: 120 }, { x: 40, y: 120 }, { x: 60, y: 120 }, { x: 80, y: 120 },
      { x: 50, y: 80 },
      { x: 20, y: 35 }, { x: 40, y: 35 }, { x: 60, y: 35 }, { x: 80, y: 35 },
      { x: 50, y: 20 }
    ]
  },
  {
    name: "4-5-1",
    positions: [
      { x: 50, y: 150 },
      { x: 20, y: 120 }, { x: 40, y: 120 }, { x: 60, y: 120 }, { x: 80, y: 120 },
      { x: 20, y: 80 }, { x: 35, y: 80 }, { x: 50, y: 80 }, { x: 65, y: 80 }, { x: 80, y: 80 },
      { x: 50, y: 20 }
    ]
  },
  {
    name: "3-4-1-2",
    positions: [
      { x: 50, y: 150 },
      { x: 30, y: 120 }, { x: 50, y: 120 }, { x: 70, y: 120 },
      { x: 20, y: 80 }, { x: 40, y: 80 }, { x: 60, y: 80 }, { x: 80, y: 80 },
      { x: 50, y: 60 },
      { x: 35, y: 20 }, { x: 65, y: 20 }
    ]
  },
  {
    name: "4-4-1-1",
    positions: [
      { x: 50, y: 150 },
      { x: 20, y: 120 }, { x: 40, y: 120 }, { x: 60, y: 120 }, { x: 80, y: 120 },
      { x: 20, y: 80 }, { x: 40, y: 80 }, { x: 60, y: 80 }, { x: 80, y: 80 },
      { x: 50, y: 50 },
      { x: 50, y: 20 }
    ]
  },
  {
    name: "4-1-3-2",
    positions: [
      { x: 50, y: 150 },
      { x: 20, y: 120 }, { x: 40, y: 120 }, { x: 60, y: 120 }, { x: 80, y: 120 },
      { x: 50, y: 80 },
      { x: 30, y: 40 }, { x: 50, y: 40 }, { x: 70, y: 40 },
      { x: 35, y: 20 }, { x: 65, y: 20 }
    ]
  },
  {
    name: "3-3-3-1",
    positions: [
      { x: 50, y: 150 },
      { x: 30, y: 120 }, { x: 50, y: 120 }, { x: 70, y: 120 },
      { x: 30, y: 80 }, { x: 50, y: 80 }, { x: 70, y: 80 },
      { x: 30, y: 35 }, { x: 50, y: 35 }, { x: 70, y: 35 },
      { x: 50, y: 20 }
    ]
  },
  {
    name: "3-6-1",
    positions: [
      { x: 50, y: 150 },
      { x: 30, y: 120 }, { x: 50, y: 120 }, { x: 70, y: 120 },
      { x: 15, y: 80 }, { x: 30, y: 80 }, { x: 45, y: 80 }, { x: 55, y: 80 }, { x: 70, y: 80 }, { x: 85, y: 80 },
      { x: 50, y: 20 }
    ]
  },
  {
    name: "5-4-1",
    positions: [
      { x: 50, y: 150 },
      { x: 20, y: 120 }, { x: 35, y: 120 }, { x: 50, y: 120 }, { x: 65, y: 120 }, { x: 80, y: 120 },
      { x: 20, y: 80 }, { x: 40, y: 80 }, { x: 60, y: 80 }, { x: 80, y: 80 },
      { x: 50, y: 20 }
    ]
  },
  {
    name: "4-2-2-2",
    positions: [
      { x: 50, y: 150 },
      { x: 20, y: 120 }, { x: 40, y: 120 }, { x: 60, y: 120 }, { x: 80, y: 120 },
      { x: 35, y: 80 }, { x: 65, y: 80 },
      { x: 30, y: 35 }, { x: 70, y: 35 },
      { x: 35, y: 20 }, { x: 65, y: 20 }
    ]
  }
];