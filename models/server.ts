import express, { Application} from 'express';
import userRoutes from '../routes/usuario';
import authRoutes from '../routes/auth';
import estudianteRoutes from '../routes/estudiante';

import cors from 'cors';
import db from '../db/connection';

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios    : '/api/usuarios',
    login       : '/api/login',
    estudiante  : '/api/estudiantes'
  }

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '8000';
    

    this.dbConnection();
    //* Metodos iniciales
    this.middlewares();
    //* Asignación de rutas
    this.routes();
  }

  // TODO conexion de DB
  async dbConnection(){
    try {
      await db.authenticate();
      console.log('data base online');
      
    } catch (error: any) {
      throw new Error( error);
    }
  }

  middlewares(){
    //CORS
    this.app.use( cors());

    //Lectura de body
    this.app.use( express.json() );

    //Carpeta publica
    this.app.use( express.static('public'));
  }

  routes(){
    this.app.use( this.apiPaths.usuarios, userRoutes);
    this.app.use( this.apiPaths.login,authRoutes);
    this.app.use( this.apiPaths.estudiante,estudianteRoutes);
  }

  listen(){
    this.app.listen(this.port,()=>{
      console.log(`Servidor corriendo en el puerto! ${this.port}`);
    });
  }

}

export default Server;