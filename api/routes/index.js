'use strict';

const passport = require('koa-passport');
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
    await passport.authenticate('google', {session: false}, async (err, user) => {
      if (err) {
        console.log(`/auth/callback called error`, err);
        ctx.body = {
          error: err
        };
      } else {
        ctx.body = {
          data: {
            email: user.email
          }
        };
      }
    })(ctx);
  });
  app.use(router.routes());
}
