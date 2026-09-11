import { createDirectus, rest, staticToken } from '@directus/sdk';

interface Post {
  id: number;
  archived: boolean;
  slug: string;
  title: string;
  hero_image: string;
  description: string;
  body: string;
  pub_date: string | null;
  date_created: string;
}

interface DirectusSchema {
  posts: Post[];
}

export const directus = createDirectus<DirectusSchema>(import.meta.env.DIRECTUS_URL)
  .with(staticToken(import.meta.env.DIRECTUS_TOKEN))
  .with(rest());
