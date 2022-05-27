'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('kakaomap')
      .service('myService')
      .getWelcomeMessage();
  },
};
