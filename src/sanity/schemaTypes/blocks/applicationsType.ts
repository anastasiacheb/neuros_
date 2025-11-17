import { defineField, defineType } from 'sanity';
import { ComponentIcon } from '@sanity/icons';

export const applicationsType = defineType({
  name: 'applications',
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
  icon: ComponentIcon,
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: 'applications',
        media: media ?? ComponentIcon,
      };
    },
  },
});
