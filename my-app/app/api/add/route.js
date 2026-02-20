import { NextResponse } from "next/server";

export async function POST(request) {
  const { num1, num2 } = await request.json();

  const sum = num1 + num2;

  console.log(`Received numbers: ${num1} and ${num2}, Sum: ${sum}`);
  return NextResponse.json({ sum });
}
