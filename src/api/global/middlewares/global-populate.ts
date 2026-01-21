/**
 * `global-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  topnav: {
    populate: {
      socialLinks: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      cta: true,
    },
  },

  header: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      navitems: true,
    },
  },

  footer: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      navitems: true,
      contactLinks: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      list: true,
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.dir(ctx.query, { depth: null });
    ctx.query.populate = populate;
    strapi.log.info("In global-populate middleware.");

    await next();
  };
};
