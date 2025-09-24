import { SlideContent } from './types';

export const SLIDES_DATA: SlideContent[] = [
  {
    id: 1,
    type: 'title',
    title: '',
    text: '',
  },
  {
    id: 2,
    type: 'title',
    title: '',
    text: '',
  },
  {
    id: 3,
    type: 'bullet_points',
    title: 'Key Takeaways',
    points: [
      'Simplicity is key to clarity.',
      'Mobile-first design is essential.',
      'React & Tailwind are a powerful combo.',
      'Engage your audience effectively.'
    ],
  },
  {
    id: 4,
    type: 'image_text',
    title: 'Data-Driven Insights',
    imageUrl: 'https://picsum.photos/id/10/400/300',
    text: 'Support your arguments with compelling data and visuals.',
  },
  {
    id: 5,
    type: 'title',
    title: 'Thank You',
    text: 'Questions & Answers',
  },
];