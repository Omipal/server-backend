/**
 * location router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::location.location", {
  config: {
    find: {
      middlewares: ["api::location.location-populate"],
    },
  },
});
