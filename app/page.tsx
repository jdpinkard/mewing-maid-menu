import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter/Counter";


export default function Home() {
  
  return (
    <main >
      <Counter />
      <h1>
        Hello World
      </h1>
      <Link href='/users'>Users</Link>
      <ProductCard />
    </main>
  );
}
