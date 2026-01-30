/**
 * `product-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  images: {
    fields: ["url", "alternativeText"],
  },
  categories: {
    fields: ["name"],
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In product-populate middleware.");
    ctx.query.populate = populate;

    await next();
  };
};
