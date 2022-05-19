import { Router } from 'express';
import { check } from 'express-validator'
import { getEstudiante, getEstudiantes, postEstudiante } from '../controller/estudianteController';
import { validarCampos } from '../middlewares/validar-campos';


const router = Router();



router.get('/', getEstudiantes);

router.get('/:id',[
  check('id','El id tiene que ser valido').isInt(),
  validarCampos
],getEstudiante);

router.post('/',[
  check('nombre','El nombre es obligatorio').notEmpty(),
  check('apellido','El apellido es obligatorio').notEmpty(),
  check('fechaNacimiento','El nombre es obligatorio').notEmpty(),
  check('telefono','El nombre es obligatorio').notEmpty(),
  check('email','Ingrese un correo valido').isEmail(),
  check('genero','Debe ingresar un genero').isInt(),
  check('genero','El nombre es obligatorio').notEmpty(),
  check('genero','El nombre es obligatorio').notEmpty(),
  check('genero','El nombre es obligatorio').notEmpty(),
  check('genero','El nombre es obligatorio').notEmpty(),
  validarCampos
],postEstudiante);


export default router;