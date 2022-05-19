import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Estudiante = db.define('tblestudiantes',{
  Carne:{
    type:DataTypes.STRING
  },
  Nombre:{
    type:DataTypes.STRING,
    validate:{
      isAlpha:true
    }
  },
  FechaNacimiento:{
    type:DataTypes.DATE
  },
  Telefono:{
    type:DataTypes.INTEGER,
    validate:{
      isInt:{
        msg:'Error tiene que ser datos numericos'
      }
    }
  },
  Correo:{
    type:DataTypes.STRING,
    validate:{
      isEmail:{
        msg:'Error tiene que ingresar un correo valido'
      }
    }
  },
  Genero:{
    type:DataTypes.TINYINT,
    validate:{
      isInt:{
        msg:'Error tiene que ser datos numericos'
      }
    }
  },
  IdEstadoCivil:{
    type:DataTypes.STRING,
    validate:{
      isAlpha:{
        msg:'Error tiene que ser datos numericos'
      }
    }
  },
  IdCarrera:{
    type:DataTypes.INTEGER,
    validate:{
      isInt:{
        msg:'Error tiene que ser datos numericos'
      }
    }
  },
  IdNivel:{
    type:DataTypes.INTEGER,
    validate:{
      isInt:{
        msg:'Error tiene que ser datos numericos'
      }
    }
  },
  IdEstado:{
    type:DataTypes.TINYINT,
    validate:{
      isInt:{
        msg:'Error tiene que ser datos numericos'
      }
    }
  },
  IdRol:{
    type:DataTypes.INTEGER,
    validate:{
      isInt:{
        msg:'Error tiene que ser datos numericos'
      }
    }
  },
  Iglesia:{
    type:DataTypes.STRING,
    validate:{
      isAlphanumeric:true
    }
  },
  Direccion:{
    type:DataTypes.STRING,
    validate:{
      notEmpty:true
    }
  },
  IdDepartamento:{
    type:DataTypes.INTEGER,
    validate:{
      isInt:{
        msg:'Error tiene que ser datos numericos'
      }
    }
  },
  IdMunicipio:{
    type:DataTypes.INTEGER,
    validate:{
      isInt:{
        msg:'Error tiene que ser datos numericos'
      }
    }
  },
  Pastor:{
    type:DataTypes.STRING
  },
  Observaciones:{
    type:DataTypes.STRING
  }

});

export default Estudiante;