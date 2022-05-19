import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const getUsuarios = async(req:Request,res:Response)=>{

  const usuarios = await Usuario.findAll({where:{
    estado:true
  }});
  res.json( {usuarios} );
  
}
export const getUsuario = async(req:Request,res:Response)=>{

  const { id }  = req.params;
  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    res.status(404).json({
      msg: `No existe un usuario con el ID ${ id}`
    })
  } 
  res.json({
    usuario
  })
  
}
export const postUsuario = async(req:Request,res:Response)=>{

  const { body } = req;

  try {
    const existeEmail = await Usuario.findOne({ where:{
      email:body.email
    }});

    if (existeEmail) {
      return res.status(400).json({
        msg:`Ya existe un usuario con el email ${body.email}`
      })
    }
    const usuario = Usuario.build(body);
    await usuario.save();

    res.json(usuario)
    
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg:'problemas con el servidor comuniquese'
    })
    
  }
  
}
export const putUsuarios = async(req:Request,res:Response)=>{

  const { id }    = req.params;
  const { estado, ...datos }  = req.body;

  try {

    const usuarioExiste = await Usuario.findByPk(id);
    if (!usuarioExiste) {
      return res.status(400).json({
        msg: `el usuario no existe`
      })
    }

    await usuarioExiste.update(datos);

    res.json(usuarioExiste);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg:'problemas con el servidor comuniquese'
    })
  }
  
}
export const deleteUsuarios = async(req:Request,res:Response)=>{

  const { id }    = req.params;
  try {
    const usuarioExiste = await Usuario.findByPk(id);
    if (!usuarioExiste) {
      return res.status(400).json({
        msg: `el usuario no existe`
      });
    }

    // await usuarioExiste.destroy();
    await usuarioExiste.update({estado:0},{where:{
        id:id
    }});

    return res.json(usuarioExiste);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg:'problemas con el servidor comuniquese'
    })
  }
  res.json({
    msg: 'deleteUsuarios',
    id
  })
  
}