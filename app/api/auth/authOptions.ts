import prisma from '@/prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'Email' },
        password: { label: 'password', type: 'password', placeholder: 'Password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) return null;
        const user = await prisma.user.findUnique({ where: { email: credentials.email } });

        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(credentials.password, user.phash!);

        return passwordsMatch ? user : null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};
