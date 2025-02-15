import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../database/db';
import { IUser } from '../utility/interface';

export class User extends Model<IUser> {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    firstname:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{
                msg: "Enter your firstname"
            }
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{
                msg: "Enter your lastname"
            }
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
            min: 6,
            max: 100,
            notNull:{
                msg: "Enter your email address"
            }
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type: DataTypes.ENUM('M','F'),
        allowNull: false,
        validate:{
            isIn:{
                args: [['M','F']],
                msg: "Gender must be either M or F"
            }
        }
    },
    usertype:{
        type: DataTypes.ENUM('ADMIN','USER'),
        allowNull: true,
        defaultValue: 'USER',
        validate:{
            isIn:{
                args: [['ADMIN','USER']],
                msg: "User type must either be ADMIN or USER"
            }
        }
    }
},{
    sequelize,
    modelName: 'user',
    timestamps: true
})
