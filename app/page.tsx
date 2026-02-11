import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-sans p-8">
      <h1 className="text-4xl font-bold mb-8">Cureocity Logic App</h1>
      <p className="max-w-lg text-center mb-8 text-white/60">
        The design implementation has been moved to a dedicated test route.
      </p>
      
      <Link 
        href="/ui-test"
        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
      >
        View Design Implementation (/ui-test)
      </Link>
    </div>
  );
}
