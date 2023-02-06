import { Layout } from '@/components/Layout';
import { type NextPage } from 'next';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout>
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold flex-1 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            G-Mates
          </h1>
        </Link>

        <div className="space-x-2">
          <Link href="/api/auth/signin">
            <span className="px-2 py-1 border rounded">Login</span>
          </Link>
          <span className="px-2 py-1 border-b-0 hover:border-b cursor-pointer">
            FAQ
          </span>
        </div>
      </nav>

      <section className="py-12">
        <div className="pt-20">
          <h2 className="bg-violet-900 inline-block px-3 py-2 rounded-xl opacity-80 text-sm font-thin">
            REAL GAMERS CLUB
          </h2>
          <div className="text-5xl leading-snug font-semibold">
            <h3>That&apos;s How</h3>
            <h3>
              We Treat{' '}
              <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent font-bold">
                G
              </span>
              amers
            </h3>
          </div>
        </div>

        <div className="my-5 border-l pl-4 border-l-pink-600 bg-[#18162ca1] py-2">
          <p className="text-sm">
            G-Mates connects gamers with compatible partners. Whether
            you&apos;re looking to join a group or start a new one, G-Mates
            makes it easy to find and play with like-minded players. Create a
            profile, search for games, and start connecting with others to
            elevate your gaming experience. Join G-Mates today and find your
            perfect gaming partner.
          </p>
        </div>

        <div className="space-x-4">
          <button
            className="px-3 py-2 border rounded"
            onClick={() => signIn('google')}
          >
            Join with Google
          </button>
          <button className="px-3 py-2 border rounded">
            Join with Discord
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
