import { Client } from '@notionhq/client';

const { NOTION_TOKEN, NOTION_DATABASE_ID } = import.meta.env;

export const notion = new Client({ auth: NOTION_TOKEN });

export async function getSome({ options = {} }) {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    ...options,
  });

  return response;
}
