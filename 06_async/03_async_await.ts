import fs from "node:fs/promises";

async function getNews(user): Promise<string[]> {
  try {
    const { region } = await fs.readFile(user);
    const { newsUrls } = await fs.readFile(region);
    const { news } = await fs.readFile(newsUrls);
    return news;
  } catch (error) {
    console.log(error);
  }
}
