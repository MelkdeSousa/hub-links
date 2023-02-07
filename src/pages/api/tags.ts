import { listAllVideoTags } from '@functions/videos';
import { NextApiHandler } from 'next';
import { Tag } from 'src/core/entities';

export type ResponseTags = {
  tags: Tag[];
};

const handler: NextApiHandler<ResponseTags> = async (_req, res) => {
  const output = await listAllVideoTags();

  res.status(200).json({ tags: output });
};

export default handler;
