import { Client as NotionClient } from '@notionhq/client';
import { ITagReadRepository } from 'src/core/contracts';
import { Tag } from 'src/core/entities';

export class NotionTagRepository implements ITagReadRepository {
  constructor(private _notionClient: NotionClient) {}

  async getAll(): Promise<Tag[]> {
    const { properties } = await this._notionClient.databases.retrieve({
      database_id: process.env.NOTION_VIDEOS_DB_ID,
      auth: process.env.NOTION_SECRET,
    });

    return properties.tags['multi_select'].options.map((option) => ({
      id: option.id,
      name: option.name,
    }));
  }
}
