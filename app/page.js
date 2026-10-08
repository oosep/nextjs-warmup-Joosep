import Counter from "./components/Counter";
import ServerMessage from "./components/ServerMessage";
export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js Warm-up</h1>
      <p>This is my first Next.js app.</p>
      <Counter />
      <ServerMessage />
    </main>
  );
}
