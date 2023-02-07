import { Layout } from 'antd';
import { CardVideo, Grid } from '../components';
import { useMedia } from '../hooks';

import { Select } from 'antd';
import useSWR from 'swr';
import { Tag } from '../core/entities';
import { fetcher } from '../infra/http/fetcher';

const HomePage = () => {
  const { data: videos } = useSWR('/api/videos', fetcher);
  const { data: tags } = useSWR('/api/tags', fetcher);

  const columnCount = useMedia<number>(
    // Media queries
    ['(min-width: 1000px)', '(min-width: 600px)', '(max-width: 600px)'],
    [4, 2, 1],
    4,
  );

  const columnCount = useMedia<number>(
    // Media queries
    ['(min-width: 1000px)', '(min-width: 600px)', '(max-width: 600px)'],
    [4, 2, 1],
    4,
  );

  const onSearch = (value: string) => console.log(value);

  const hasVideos = !!videos?.videos?.length;
  const hasTags = !!tags?.tags?.length;

  return (
    <Layout className="w-screen h-screen">
      <Layout.Header className="w-full flex items-center justify-center">
        {hasTags && (
          <Select
            className="w-full"
            mode="multiple"
            size="middle"
            placeholder="Pesquisar por..."
            options={
              tags.tags.map((tag: Tag) => ({
                label: tag.name,
                value: tag.name,
              })) || []
            }
          />
        )}
      </Layout.Header>

      <Layout.Content className="flex flex-row p-4 overflow-scroll w-full h-full">
        {hasVideos && (
          <Grid
            data={videos.videos || []}
            keyExtractor={(item) => item.id}
            itemsByRow={columnCount}
            rowClassName="p2"
            cellClassName="p-4 flex flex-1 w-32"
            renderItem={CardVideo}
          />
        )}
      </Layout.Content>
    </Layout>
  );
};

export default HomePage;
