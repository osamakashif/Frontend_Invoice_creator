"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <button type="button" onClick={() => router.push("/individual")}>
        Individual
      </button>
      <button type="button" onClick={() => router.push("/group")}>
        Group
      </button>
    </main>
  );
}
