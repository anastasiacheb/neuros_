import { defineField, defineType } from 'sanity';
import { TextIcon } from '@sanity/icons';

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  fields: [
    defineField({
      name: 'pretitle',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'string',
    }),
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: 'hero',
        media: media ?? TextIcon,
      };
    },
  },
});
