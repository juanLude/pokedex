export interface Pokemon {
  // only use a handfull of data from the api
  id: number;
  name: string;
  types: string[];
  avatar: string;
  sprites: string[];

  color: string;
  games: string[];
  stats: Stat[];
  abilities: string[];
  moves: Move[];
}

export interface Stat {
  name: string;
  value: number;
}

export interface Move {
  name: string;
  level: number;
}
