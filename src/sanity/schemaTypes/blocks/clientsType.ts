import { defineField, defineType } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export const clientsType = defineType({
  name: 'clients',
  title: 'clients',
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
    defineField({
      name: 'clients',
      type: 'array',
      of: [
        defineField({
          name: 'client',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'role',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
  icon: UsersIcon,
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: 'clients',
        media: media ?? UsersIcon,
      };
    },
  },
});
