/*import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database';
import News from '@/models/News';

export async function GET() {
  try {
    await connectToDatabase();
    const news = await News.find().sort({ date: -1 }).limit(5);
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const newNews = new News(body);
    await newNews.save();
    
    return NextResponse.json(newNews, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create news' },
      { status: 500 }
    );
  }
}*/