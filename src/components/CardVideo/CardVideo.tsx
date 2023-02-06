import { Card } from 'antd';

import Player from 'react-player/lazy';
import { Video } from '../../core/entities';

type CardVideoProps = Video;

const CardVideo = (item: CardVideoProps) => (
  <Card
    hoverable
    className="w-full h-full"
    cover={
      <Player
        key={item.id}
        style={{ display: 'flex', flex: 1 }}
        width="auto"
        height="auto"
        url={item.url}
        controls
      />
    }
    bodyStyle={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 'fit-content',
    }}
  >
    <a href={item.url} target="_blank">
      <h1 className="font-bold text-lg">{item.title}</h1>
    </a>
    <p className="font-light text-sm">{item.tags.join(', ')}</p>
  </Card>
);

export default CardVideo;
