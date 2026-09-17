// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const IMAGE_SIZES = {
	postHero: { width: 1020, height: 510 },
	postListFeatured: { width: 960, height: 480 },
	postListCard: { width: 720, height: 360 },
} as const;
