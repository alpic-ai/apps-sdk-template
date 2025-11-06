export type Pokemon = {
  id: number;
  name: string;
  color: string;
  description: string;
  order: number;
  imageUrl: string;
  weightInKilograms: number;
  heightInMeters: number;
  types: {
    id: string;
    name: string;
  }[];
  abilities: {
    id: string;
    name: string;
    description: string;
  }[];
  evolutions: {
    id: number;
    name: string;
    order: number;
    imageUrl: string;
    isCurrent: boolean;
  }[];
  stats: {
    name: string;
    value: number;
  }[];
};
