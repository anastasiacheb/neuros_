import { defineField, defineType } from 'sanity';
import { UnknownIcon } from '@sanity/icons';

export const faqType = defineType({
  name: 'faq',
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
  icon: UnknownIcon,
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: 'faq',
        media: media ?? UnknownIcon,
      };
    },
  },
});
