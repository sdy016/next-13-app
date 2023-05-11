import Counter from '@/components/Counter';
import Image from 'next/image';
import { Inter } from 'next/font/google';

export default function Home() {
  console.log('Hello server');
  return (
    <>
      <h1>Home</h1>
      <Counter />
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="shop" width={400} height={400} />
    </>
  );
}
