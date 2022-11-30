/**
 * Object schema body request
 */

export default {
  type: "object",
  properties: {
    title: { type: 'string' },
    url: { type: 'string' },
  },
  required: ['title', 'url']
} as const;
