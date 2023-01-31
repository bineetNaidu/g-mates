// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AppDataSource } from '@/lib/data-source';
import { HelloResolver } from '@/lib/graphql/greet/greetings.resolver';
import { createYoga, YogaServerInstance } from 'graphql-yoga';
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

type Meta = {
  req: NextApiRequest;
  res: NextApiResponse;
};

type GqlContext = Meta & {};

const yogaServer = createYoga<Meta, GqlContext>({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  landingPage: true,
  graphqlEndpoint: '/api/graphql',
  context({ req, res }) {
    return { req, res };
  },
});

const prepareDb = async (server: YogaServerInstance<Meta, Meta>) => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  return server;
};

export default prepareDb(yogaServer);
