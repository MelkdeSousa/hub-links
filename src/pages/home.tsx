import { useEffect, useState } from "react"
import { Video } from '../core/entities'
import Player from 'react-player/lazy'

const useGetVideos = () => {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(false)

  const getVideos = async ({ take, skip }: { skip?: number, take?: number }) => {
    setLoading(true)
    try {
      const response = await fetch('/api/videos')

      const data = await response.json()

      setVideos(data.videos)
    } catch (err) {

    } finally {
      setLoading(false)
    }

  }

  return {
    getVideos,
    videos,
    loading
  }
}

const HomePage = () => {
  const { loading, getVideos, videos } = useGetVideos()

  useEffect(() => {
    getVideos({})
  }, [])

  return (
    <main>
      <h1>Videos</h1>

      {videos.length && videos.map(video =>
        <li key={video.id}>
          <Player url={video.url} fallback={() => <span>Carregando...</span>} />
        </li>
      )}
    </main>
  )
}

export default HomePage

