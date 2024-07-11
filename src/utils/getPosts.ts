// 获取文章数据

import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog");
  return posts.sort(
    (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}
