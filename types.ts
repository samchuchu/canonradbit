export interface SlideContent {
  id: number;
  type: 'title' | 'image_text' | 'bullet_points';
  title?: string;
  text?: string;
  imageUrl?: string;
  points?: string[];
}
