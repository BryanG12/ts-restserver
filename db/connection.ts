import { Sequelize } from 'sequelize';


const db = new Sequelize('Biblico','root','J3sucrist=',{
  host: 'localhost',
  dialect: 'mysql',
  // logging:false
});


export default db;