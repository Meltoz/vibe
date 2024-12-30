import type { Performer } from '../models/performer';

export const getAllPerformers = async (): Promise<Performer[]> => {
  const response = await fetch('/data/artistes.json');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return await response.json();
};
