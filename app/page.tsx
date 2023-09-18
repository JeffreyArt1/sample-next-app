import { getServerSession } from 'next-auth';

import { authOptions } from './api/auth/authOptions';
import ProductCard from './components/ProductCard';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hola{session ? ', ' + session?.user?.name : null}!</h1>
      <ProductCard />
    </main>
  );
}
