import Player from 'react-player';
import { Video } from '../../core/entities';

type CardVideoProps = Video

const CardVideo = (item: CardVideoProps) => (
  <Player width="w-32" height="h-16" url={item.url} />
);

export default CardVideo;
