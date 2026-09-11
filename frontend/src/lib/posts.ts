import { readItems } from '@directus/sdk';
import { directus } from './directus';

export function getPublishedPosts() {
  return directus.request(readItems('posts', {
    filter: { archived: { _eq: false } },
    sort: ['date_created'],
    fields: ['title', 'description', 'pub_date', 'date_created', 'slug'],
  }));
}


export async function getPostBySlug(slug:string) {
  const posts = await directus.request(readItems('posts', {
    filter: { 
      slug: { _eq: slug } 
    }
  }))

  return posts[0] ?? null;
}