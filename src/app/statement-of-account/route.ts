import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.redirect(
    'https://drive.google.com/drive/folders/14dToRjyGnbVwU7eqHh11lqFMHTYztyYB?usp=sharing',
  );
}
