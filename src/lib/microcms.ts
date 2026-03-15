import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

// microCMS Client
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

// ============ Types ============

export type NewsCategory = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type News = {
  title: string;
  content: string;
  category: NewsCategory;
  thumbnail?: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

export type Column = {
  title: string;
  content: string;
  description?: string;
  thumbnail?: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

// ============ API Functions ============

// News
export const getNewsList = async (queries?: MicroCMSQueries) => {
  return await client.getList<News>({
    endpoint: "news",
    queries: { limit: 20, ...queries },
  });
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
};

// Column
export const getColumnList = async (queries?: MicroCMSQueries) => {
  return await client.getList<Column>({
    endpoint: "column",
    queries: { limit: 20, ...queries },
  });
};

export const getColumnDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Column>({
    endpoint: "column",
    contentId,
    queries,
  });
};
