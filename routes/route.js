import express from 'express';
import  addUser  from '../controller/user-controller.js';
import { getUsers, getUser,editUser,deleteuser } from '../controller/user-controller.js';

const router = express.Router();
 
router.post('/add', addUser);
router.get('/', getUsers ); 
router.get('/:id', getUser ); 
router.put('/:id', editUser);   
router.delete('/:id', deleteuser);

export default router;  