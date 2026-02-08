/**
 * contact-card router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::contact-card.contact-card", {
  config: {
    find: {
      middlewares: ["api::contact-card.contact-populate"],
    },
  },
});
