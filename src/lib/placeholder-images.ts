
import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Defensive check to ensure data and placeholderImages exist
export const PlaceHolderImages: ImagePlaceholder[] = data?.placeholderImages || [];
