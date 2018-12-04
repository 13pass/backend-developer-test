'use strict';

const Router = require('koa-router');

exports.loadRoutes = loadRoutes;

function loadRoutes (app) {
  const router = new Router();
  router.get('/', async ctx => {
    ctx.body = { 
      data: {
        msg: 'You have reached the board API!'
      }
    };
  });
  router.get('/auth/callback', async ctx => {
    ctx.body = { 
      data: {
        msg: 'Auth callback endpoint called'
      }
    };
  });
  app.use(router.routes());
}
