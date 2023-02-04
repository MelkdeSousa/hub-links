import { useState } from 'react'
import { Video } from '../core/entities'

export const useGetVideos = () => {
      const { data, loading } = 
  return {
    videos: data,
    loading
  }
}


