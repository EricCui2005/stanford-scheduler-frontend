import { NextResponse } from 'next/server';
import { SCHEDULE_SOLVE_API } from '@/lib/config';

export async function GET() {
  const response = await fetch(SCHEDULE_SOLVE_API);
  const result = await response.json();
  return NextResponse.json(result);
}
