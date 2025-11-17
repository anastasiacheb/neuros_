import { defineField, defineType } from 'sanity';
import { SparklesIcon } from '@sanity/icons';

export const benefitsType = defineType({
  name: 'benefits',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
  icon: SparklesIcon,
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: 'benefits',
        media: media ?? SparklesIcon,
      };
    },
  },
});
