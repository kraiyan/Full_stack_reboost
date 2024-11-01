import express from 'express';
import {signup}  from '../controllers/signup';

const router = express.Router();

router.post('/signup', signup as any);

export default router;
