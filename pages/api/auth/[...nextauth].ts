import { configuration } from '@/lib/configuration';
import { dataSourceConfigOptions } from '@/lib/data-source';
import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptionConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: configuration.nextAuth.google.clientId,
      clientSecret: configuration.nextAuth.google.clientSecret,
    }),
  ],
  adapter: TypeORMLegacyAdapter(dataSourceConfigOptions),
  secret: configuration.nextAuth.secret,
};

export default NextAuth(authOptionConfig);
