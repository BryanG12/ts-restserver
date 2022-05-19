import { Request, Response} from 'express'
import Estudiante from '../models/estudiante'



//*Obtener estudiantes
export const getEstudiantes = async (req:Request,res:Response)=>{

  const limite=5 ;
  const query = { IdEstado: 1 };

  const [total, estudiantes ] = await Promise.all([
    Estudiante.count({where: query}),
    Estudiante.findAll({where: query, limit:limite, offset:0})
  ]);

  res.json({ total, estudiantes });

}

export const getEstudiante = async( req:Request, res:Response ) =>{

  const { id:idEstudiante } = req.params;
  const estudiante = await Estudiante.findByPk(idEstudiante);

  if (!estudiante) {
    return res.status(401).json({
      msg:'el estudiante no existe'
    });
  }

  res.json({
    estudiante
  });

}


export const postEstudiante = (req:Request,res:Response)=>{

  res.json({
    msg:'postEstudiante'
  })
}



