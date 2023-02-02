import { useEffect } from "react"
import Player from 'react-player'
import { useGetVideos } from '../hooks'
import { Input, Layout } from "antd"
import { Grid } from '../components'

const HomePage = () => {
  const { loading, getVideos, videos } = useGetVideos()

  const onSearch = (value: string) => console.log(value);

  useEffect(() => {
    getVideos({})
  }, [])

  return (
    <Layout className="w-screen h-screen">
      <Layout.Header className="w-full flex items-center justify-center">
        <Input.Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Layout.Header>

      <Layout.Content className="flex flex-row p-4 overflow-scroll w-full h-full">
        {
          videos.length && <Grid
            data={videos}
            itemsByRow={4}
            rowClassName='p2'
            cellClassName='p-4 flex flex-1'
            renderItem={(item) => <Player width='w-32' height='h-16' url={item.url} />}
          />
        }
      </Layout.Content>
    </Layout>
  )
}

export default HomePage

