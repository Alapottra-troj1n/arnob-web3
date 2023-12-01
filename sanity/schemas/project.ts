import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(80),
    }),
    defineField({
      name: "mainImage",
      title: "Main media",
      type: "object",
      fields: [
        {
          name: "type",
          type: "string",
          title: "Media Type",
          options: {
            list: [
              { title: "Image Upload", value: "image" },
              { title: "Video Upload", value: "video" },
            ],
            layout: "radio",
          },
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          hidden: ({ parent }) => parent?.type !== "image",
        },
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          options: {
            accept: 'video/*', // Specify the allowed video file types
          },
        
          hidden: ({ parent }) => parent?.type !== "video",
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "service",
      title: "Service",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.integer().min(1900).max(2100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
    },
  ],
});
