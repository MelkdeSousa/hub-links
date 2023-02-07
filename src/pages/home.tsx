import { Input, Layout } from 'antd';
import { CardVideo, Grid } from '../components';

import useSWR from 'swr';
import { fetcher } from '../infra/http/fetcher';

const HomePage = () => {
  const { data } = useSWR('/api/videos', fetcher);

  const onSearch = (value: string) => console.log(value);

  return (
    <Layout className="w-screen h-screen">
      <Layout.Header className="w-full flex items-center justify-center">
        <Input.Search
          placeholder="Pesquisar por..."
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Layout.Header>

      <Layout.Content className="flex flex-row p-4 overflow-scroll w-full h-full">
        {!!data?.videos?.length && (
          <Grid
            data={data.videos || []}
            keyExtractor={(item) => item.id}
            itemsByRow={4}
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
