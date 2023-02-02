import { useState } from 'react'
import { Video } from '../core/entities'

export const useGetVideos = () => {
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


