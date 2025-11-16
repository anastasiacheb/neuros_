import { defineField, defineType } from 'sanity';
import { NumberIcon } from '@sanity/icons';

export const logosType = defineType({
  name: 'logos',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
  icon: NumberIcon,
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: 'logos',
        media: media ?? NumberIcon,
      };
    },
  },
});
