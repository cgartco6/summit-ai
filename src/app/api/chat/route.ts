import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return Response.json({ content: "Hello from SummitAI! How can I help you?" });
}
