import Sequelize from 'sequelize';

const {
  DBNAME, DBUSERNAME, DBPASSWORD, DBHOST,
} = process.env;

const sequelize = new Sequelize(DBNAME, DBUSERNAME, DBPASSWORD, {
  host: DBHOST,
  dialect: 'postgres',
});

export default sequelize;
