import ChessBoard from "@/components/ChessBoard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid place-content-center h-screen bg-gradient-to-bl from-black via-cyan-700 to-blue-900">
      <ChessBoard />
    </main>
  );
}
