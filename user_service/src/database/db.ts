import {Dialect, Sequelize} from 'sequelize'

const database = process.env.DB_NAME as string
const username = process.env.DB_USER as string
const password = process.env.DB_PASSWORD as string
const hostname = process.env.DB_HOST as string
const port = process.env.DB_PORT as unknown as number
const db_dialect = process.env.DB_DIALECT as Dialect
export const sequelize = new Sequelize({
        host: hostname,
        dialect: db_dialect,
        port: port,
        password: password,
        database: database,
        username: username,
        logging: false,
        dialectOptions:{
            ssl:{
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

export async function dbConnect(){
    try {
        await sequelize.sync({alter: true});
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}