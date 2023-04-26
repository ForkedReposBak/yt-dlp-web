import { Cache, VIDEO_LIST_FILE } from '@/server/Cache';
import { VideoInfo } from '@/types/video';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const uuids = (await Cache.get<string[]>(VIDEO_LIST_FILE)) || [];

    if (!Array.isArray(uuids) || !uuids.length) {
      return NextResponse.json([]);
    }

    const videoList = (await Promise.all(uuids.map((uuid) => Cache.get<VideoInfo>(uuid)))).filter(
      (video) => video
    );

    return NextResponse.json(videoList);
  } catch (error) {
    return NextResponse.json(
      {
        error
      },
      {
        status: 400
      }
    );
  }
}
