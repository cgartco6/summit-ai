export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-6">SummitAI</h1>
        <p className="text-2xl text-gray-400">Your Majestic Universal AI</p>
        <a href="/voice" className="mt-8 inline-block px-10 py-4 bg-white text-black rounded-2xl font-semibold">
          Try Voice Mode →
        </a>
      </div>
    </div>
  );
}
