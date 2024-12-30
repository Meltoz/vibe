import { z } from 'zod';

export const PerformerSchema = z.object({
  name: z.string(),
  dateOfPerformance: z.coerce.date(),
  style: z.string(),
  nationality: z.string(),
  location: z.string(),
  img: z.string(),
});

export type Performer = z.infer<typeof PerformerSchema>;
