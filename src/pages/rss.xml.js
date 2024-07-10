import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteInfo from '../config/siteInfo.ts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: siteInfo.title,
		description: siteInfo.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
