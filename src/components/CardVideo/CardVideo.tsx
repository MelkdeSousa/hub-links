import { Card } from 'antd';
import Player from 'react-player';
import { Video } from '../../core/entities';

type CardVideoProps = Video;

const CardVideo = (item: CardVideoProps) => (
  <Card
    className="w-32"
    cover={<Player key={item.id} width="w-32" height="h-16" url={item.url} />}
  >
    <Card.Meta title={item.title} description={item.tags.join(', ')} />
  </Card>
);

export default CardVideo;
