// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { HelloResolver } from '@/lib/graphql/greet/greetings.resolver';
import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

const schema = buildSchema({
  validate: false,
  resolvers: [HelloResolver],
});

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  landingPage: true,
  graphqlEndpoint: '/api/graphql',
});
