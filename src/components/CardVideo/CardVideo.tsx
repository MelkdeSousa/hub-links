import { Card } from 'antd';
import Player from 'react-player';
import { Video } from '../../core/entities';

type CardVideoProps = Video;

const CardVideo = (item: CardVideoProps) => (
  <Card
    hoverable
    className='w-full h-full'
    cover={<Player  fallback={<span>Carregando...</span>} key={item.id} style={{ display: 'flex', flex: 1 }} width='auto' height='auto' url={item.url} />}
    bodyStyle={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between', height: 'fit-content' }}
  >
  <a href={item.url} target='_blank'>
    <h1 className='font-bold text-lg'>
    {item.title}
    </h1>
  </a>
    <p className='font-thin text-sm'>{item.tags.join(', ')}</p>
  </Card>
);

export default CardVideo;
