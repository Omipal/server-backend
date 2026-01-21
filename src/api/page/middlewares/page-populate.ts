/**
 * `page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          links: true,
          stats: true,
          info_card: {
            populate: {
              link: true,
            },
          },
          video: true,
        },
      },
      "blocks.section-heading": true,
      "blocks.card-grid": {
        populate: {
          cards: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
      "blocks.guarantee": {
        populate: {
          list: true,
          link: true,
          stats: true,
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      "blocks.services": {
        populate: {
          link: true,
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      "blocks.markdown": {
        populate: {
          banner: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              video: true,
            },
          },
          heading: true,
          link: true,
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In page-populate middleware.");
    ctx.query.populate = populate;

    await next();
  };
};
