/**
 * `global-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { link } from "fs";

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
      "blocks.content-with-image": {
        populate: {
          link: true,
          image: {
            fields: ["url", "alternativeText"],
          },
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
      "blocks.banner": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          video: true,
        },
      },
      "blocks.featured-articles": {
        populate: {
          articles: {
            populate: {
              featuredImage: {
                fields: ["url", "alternativeText"],
              },
              author: true,
              contentTags: true,
            },
          },
        },
      },
      "blocks.featured-products": {
        populate: {
          products: {
            populate: {
              images: {
                fields: ["url", "alternativeText"],
              },
              categories: {
                fields: ["name", "slug", "documentId"],
              },
            },
          },
        },
      },

      "blocks.locations": {
        populate: {
          locations: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
            filters: {
              isActive: true,
            },
          },
        },
      },
      "blocks.contact": {
        populate: {
          cards: {
            populate: {
              sections: {
                populate: {
                  items: true,
                },
              },
            },
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In global-page-populate middleware.");
    ctx.query.populate = populate;

    await next();
  };
};
