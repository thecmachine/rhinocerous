const Router = require('koa-router');
const router = new Router();
const model = require('./rhinoceros');

router.get('/endangered', (ctx, next) => {
  ctx.response.body = ctx.request;
});

router.get('/rhino', (ctx, next) => {
  const rhino = model.getOne(ctx.request.header);
  ctx.response.body = { rhino };
});

router.get('/rhinoceros', (ctx, next) => {
  const rhinoceroses = model.getAll();
  ctx.response.body = { rhinoceroses };
});

router.post('/rhinoceros', (ctx, next) => {
  ctx.response.body = model.newRhinoceros(ctx.request.header);
});

router.post('/test', (ctx, next) => {
  ctx.response.body = ctx.request;
});

module.exports = router;
