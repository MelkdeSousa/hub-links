import { listAllVideos } from '@functions/videos';
import { NextApiHandler } from 'next';

import { Video } from '../../core/entities';

export type ResponseVideos = {
  videos: Video[];
};

const handler: NextApiHandler<ResponseVideos> = async (_req, res) => {
  const output = await listAllVideos();

  res.status(200).json({ videos: output });
};

export default handler;
