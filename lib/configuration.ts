import { z } from 'zod';

const zodConfiguration = z.object({
  environment: z.enum(['development', 'test', 'production']),
  database: z.object({
    host: z.string(),
    port: z.number(),
    username: z.string(),
    password: z.string(),
    name: z.string(),
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
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
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
