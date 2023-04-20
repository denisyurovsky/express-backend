import Router from "express";
import PostController from "./controllers/PostController.js";
const router = new Router();

router.post('/posts',PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getById);
router.put('/posts/:id', PostController.updateById);
router.delete('/posts/:id', PostController.deleteById);

export default router;