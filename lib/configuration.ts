import { z } from 'zod';

const zodConfiguration = z.object({
  environment: z.enum(['development', 'test', 'production']),
  database: z.object({
    uri: z.string(),
  }),
  nextAuth: z.object({
    secret: z.string(),
    google: z.object({
      clientId: z.string(),
      clientSecret: z.string(),
    }),
  }),
});

export type Configuration = z.infer<typeof zodConfiguration>;

export const configuration = zodConfiguration.parse({
  environment: process.env.NODE_ENV || 'development',
  database: {
    uri: process.env.DATABASE_URI!,
  },
  nextAuth: {
    secret: process.env.AUTH_SECRET!,
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});

// console.log(configuration);
