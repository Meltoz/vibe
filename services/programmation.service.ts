import type { Performer } from '../models/performer';

type Day = 'friday' | 'saturday';

export const getAllPerformers = async (day: string, artistName: string): Promise<Performer[]> => {
  const response = await fetch('http://localhost:3000/data/artistes.json').then((res) =>
    res.json()
  );

  // Déterminer les dates correspondantes aux jours
  const dayMapping: Record<Day, string> = {
    friday: '2025-06-06',
    saturday: '2025-06-07',
  };
  const selectedDate = day ? dayMapping[day] : null;

  // Filtrer les données
  return response.filter((artist: Performer) => {
    const matchesDay = selectedDate ? artist.dateOfPerformance === selectedDate : true;
    const matchesName = artistName
      ? artist.name.toLowerCase().includes(artistName.toLowerCase())
      : true;
    return matchesDay && matchesName;
  });
};
