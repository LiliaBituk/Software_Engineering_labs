import Link from 'next/link';
import ProductCard from "./components/product-card /product-card";

export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <Link href="/users">Go to Users Page</Link>
      <ProductCard />
    </main>
  );
}
