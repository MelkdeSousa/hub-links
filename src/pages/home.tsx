import { useEffect, useState } from "react"
import { Video } from '../core/entities'
import Player from 'react-player/lazy'
import { useGetVideos } from '../hooks'

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

