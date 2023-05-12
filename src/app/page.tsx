import Counter from '@/components/Counter';
import Image from 'next/image';

export default function Home() {
  console.log('Hello server');
  return (
    <>
      <h1>멋진걸 파는 홈페이지 입니다.</h1>
      <Counter />
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="shop" width={400} height={400} />
    </>
  );
}
