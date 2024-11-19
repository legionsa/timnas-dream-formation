export interface Player {
  id: number;
  name: string;
  image: string;
  position?: { x: number; y: number };
}

export interface Formation {
  name: string;
  positions: { x: number; y: number }[];
}