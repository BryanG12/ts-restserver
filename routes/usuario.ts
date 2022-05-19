
import { Router } from 'express';
import { deleteUsuarios, getUsuario, getUsuarios, postUsuario, putUsuarios } from '../controller/usuarioController';



const router = Router();


router.get('/',       getUsuarios);
router.get('/:id',    getUsuario);
router.post('/',      postUsuario);
router.put('/:id',    putUsuarios);
router.delete('/:id', deleteUsuarios);




export default router;