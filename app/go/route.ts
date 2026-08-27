import { NextResponse } from 'next/server';
import { games } from '@/app/data/games';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const f = searchParams.get('f');

  if (!f) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const fValue = parseInt(f);

  // Check in games
  const game = games.find(g => g.f === fValue);
  if (game && game.officialUrl) {
    return NextResponse.redirect(game.officialUrl);
  }

  // Fallback to home if not found
  return NextResponse.redirect(new URL('/', request.url));
}
