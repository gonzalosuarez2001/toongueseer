export type Toon = {
  id: number;
  name: string;
  image_url: string;
  cartoon_id?: number;
  guessed?: boolean;
};

export type Stats = {
  cartoon_id: number;
  daily_toon: number;
};

export type Cartoon = "simpsons" | "pokemon" | "";
