const Router = require('koa-router');
const router = new Router();
const model = require('./rhinoceros');

router.get('/rhinoceros', (ctx, next) => {
  const rhinoceroses = model.getAll();
  ctx.response.body = { rhinoceroses };
});

router.get('/rhino', (ctx, next) => {
  const rhino = model.getOne();
  ctx.response.body = { rhino };
});

router.post('/rhinoceros', (ctx, next) => {
  ctx.response.body = model.newRhinoceros(ctx.request.body);
});

module.exports = router;
