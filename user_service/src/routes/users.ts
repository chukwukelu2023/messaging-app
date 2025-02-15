import {Router, Request,Response} from 'express';
import { createUser, getUser, getUsers } from '../controllers/user';
const router = Router();

// /* GET users listing. */
// router.get('/', function(_req:Request, res:Response) {
//   res.send('respond with a resource');
// });

router.get("/",getUsers)
router.get('/:id',getUser)
router.post('/',createUser)

export default router;
