import { defineField, defineType } from 'sanity';
import { AsteriskIcon } from '@sanity/icons';

export const featuresType = defineType({
  name: 'features',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'string',
    }),
  ],
  icon: AsteriskIcon,
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: 'features',
        media: media ?? AsteriskIcon,
      };
    },
  },
});
