import { IVideoReadRepository } from '../contracts'

export class ListAllVideos {
  constructor(private _videoRepository: IVideoReadRepository) {}

  async execute() {
    return this._videoRepository.getAll()
  }
}
