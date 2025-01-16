import { NextResponse } from 'next/server';
import { SCHEDULE_SOLVE_API } from '@/lib/config';

export async function POST(request: Request) {
  try {
    // Parse body of incoming request
    const body = await request.json();

    // Make the API call to SCHEDULE_SOLVE_API with the parsed body
    const response = await fetch(SCHEDULE_SOLVE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // Forward the body parameters
    });

    // Handle non-200 responses
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Failed to fetch schedule', details: errorData },
        { status: response.status },
      );
    }

    // Parse and return the result
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    // Ensure error is properly typed
    console.error('Error handling POST request:', error);

    // If error is an instance of Error, include its message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Internal Server Error', details: errorMessage },
      { status: 500 },
    );
  }
}
