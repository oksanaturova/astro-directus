interface AssetTransform {
	width?: number;
	height?: number;
	fit?: 'cover' | 'contain' | 'inside' | 'outside';
	quality?: number;
	format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
}

export function getDirectusAssetUrl (
  id: string | null | undefined,
  transform: AssetTransform = {}
) {
  if (!id) {
    return null;
  }

  const url = new URL(`/assets/${id}`, import.meta.env.PUBLIC_DIRECTUS_URL);

  if (transform.width) url.searchParams.set('width', String(transform.width));
	if (transform.height) url.searchParams.set('height', String(transform.height));
	if (transform.fit) url.searchParams.set('fit', transform.fit);
	if (transform.quality) url.searchParams.set('quality', String(transform.quality));
	if (transform.format) url.searchParams.set('format', transform.format);

  url.searchParams.set('withoutEnlargement', 'true');

  return url.toString();
}