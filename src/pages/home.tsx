import { Layout, Spin } from 'antd';
import { CardVideo, Grid } from '../components';
import { useMedia } from '../hooks';

import { Select } from 'antd';
import { useState } from 'react';
import useSWR from 'swr';
import { Tag } from '../core/entities';
import { fetcher } from '../infra/http/fetcher';

const HomePage = () => {
  const [tagsToSearch, setTagsToSearch] = useState<string[]>([]);

  const { data: videos } = useSWR('/api/videos', fetcher);
  const { data: tags } = useSWR('/api/tags', fetcher);
  const { data: videosSearched, isLoading: isLoadingVideosSearch } = useSWR(
    `/api/videos/tags?tags=${tagsToSearch.join(',')}`,
    fetcher,
  );

  const columnCount = useMedia<number>(
    // Media queries
    ['(min-width: 1000px)', '(min-width: 600px)', '(max-width: 600px)'],
    [4, 2, 1],
    4,
  );

  const hasVideos = !!videos?.videos?.length;
  const hasVideosSearched = !!videosSearched?.videos?.length;
  const hasTags = !!tags?.tags?.length;
  const hasVideoToGrid = hasVideosSearched || hasVideos;

  const videosToGrid = videosSearched?.videos || videos?.videos || [];

  return (
    <Layout className="w-screen h-screen">
      <Layout.Header className="w-full flex items-center justify-center">
        {hasTags && (
          <Select
            className="w-full"
            mode="multiple"
            size="large"
            placeholder="Pesquisar por..."
            onChange={setTagsToSearch}
            notFoundContent={isLoadingVideosSearch ? <Spin /> : null}
            loading={isLoadingVideosSearch}
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
        {hasVideoToGrid ? (
          <Grid
            data={videosToGrid}
            keyExtractor={(item) => item.id}
            itemsByRow={columnCount}
            rowClassName="p2"
            cellClassName="p-4 flex flex-1 w-32"
            renderItem={CardVideo}
          />
        ) : (
          <Spin />
        )}
      </Layout.Content>
    </Layout>
  );
};

export default HomePage;
