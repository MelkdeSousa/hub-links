import { Client as NotionClient } from '@notionhq/client';
import { IVideoReadRepository } from 'src/core/contracts';
import { Video } from 'src/core/entities';

type Select = {
  id: string;
  name: string;
  color: string;
};

type Tag = {
  id: string;
  type: string;
  multi_select: Select[];
};

type Modifier = {
  object: string;
  id: string;
};

type Uri = {
  id: string;
  type: string;
  url: string;
};

type Title = {
  id: string;
  type: string;
  title: {
    type: string;
    text?: {
      content: string;
      link: string | null;
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text?: string;
    href: string | null;
  }[];
};

type PropertiesVideoPage = {
  tags: Tag;
  uri: Uri;
  title: Title;
  url: string;
};

type PageVideoNotion = {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: Modifier;
  last_edited_by: Modifier;
  cover: any;
  icon: any;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: PropertiesVideoPage;
};

export class NotionVideoRepository implements IVideoReadRepository {
  constructor(private _notionClient: NotionClient) {}

  async getAll(): Promise<Video[]> {
    const { results } = await this._notionClient.databases.query({
      database_id: process.env.NOTION_VIDEOS_DB_ID,
    });

    // @ts-ignore
    return results.map((page: PageVideoNotion) => ({
      id: page.id,
      url: page.properties.uri.url,
      title: page.properties.title.title[0]?.text.content || '-',
      tags: page.properties.tags.multi_select.map((tag) =>
        tag.name.toLowerCase(),
      ),
    }));
  }
}
