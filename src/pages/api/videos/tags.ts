import { searchVideosByTags } from '@functions/videos/searchVideosByTags';
import { NextApiHandler } from 'next';
import { Video } from 'src/core/entities';

export type ResponseVideos = {
  videos: Video[];
};

const handler: NextApiHandler<ResponseVideos> = async (req, res) => {
  const url = new URLSearchParams(req.url);

  const tags = url.get(req.url.split('=')[0]).split(',');

  const output = await searchVideosByTags(tags);

  res.status(200).json({ videos: output });
};

export default handler;
