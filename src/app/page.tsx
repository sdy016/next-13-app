import Counter from '@/components/Counter';
import Image from 'next/image';

export default function Home() {
  console.log('Hello server');
  return (
    <>
      <h1>Home</h1>
      <Counter />
    </>
  );
}
