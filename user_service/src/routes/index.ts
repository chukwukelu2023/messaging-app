import {Router, Request,Response} from 'express';
const router = Router();

/* GET home page. */
router.get('/', function(_req:Request, res:Response) {
  res.render('index', { title: 'Express' });
});

export default router;
