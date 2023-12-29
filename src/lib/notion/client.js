import { Client } from '@notionhq/client';

const auth = import.meta.env.NOTION_TOKEN;

export const notion = new Client({ auth });

export async function getSome({ options = {} }) {
  const response = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID,
    ...options,
  });

  return response;
}
