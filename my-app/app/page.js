'use client';
import Image from "next/image";
import { Inter } from "next/font/google";


export default function Home() {

  const handleClick = async () => {
    const response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ num1: 5, num2: 10 }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
    <div className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the API Demo</h1>
      <p className="mt-4">This is a simple demonstration of a Next.js API route.</p>
    </div>
    <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">Call API</button>
    </>
  );
}
