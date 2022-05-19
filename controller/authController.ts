import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const login = async(req:Request,res:Response)=>{

  const { correo,password } =req.body;

  const correoExiste = await Usuario.findOne({ where:{
    email:correo
  }})

  if (!correoExiste) {
    return res.status(401).json({
      msg:`El correo ${correo} no existe`
    })
  }

  


  res.status(200).json({password,correo});

}