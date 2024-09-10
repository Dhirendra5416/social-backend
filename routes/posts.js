import { getPosts, addPost, deletePost } from '../controllers/post.js';
import upload from '../config/multer.js';
import express from 'express';

const router = express.Router();

router.get('/', getPosts);
router.post('/add-post', upload.single('file'), addPost);
router.delete('/:id', deletePost);

export default router;
