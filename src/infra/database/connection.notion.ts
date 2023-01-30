import { Client as NotionClient } from '@notionhq/client'

export const connection = new NotionClient({
  auth: process.env.NOTION_SECRET
})

