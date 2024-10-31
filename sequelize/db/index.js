import { Sequelize } from 'sequelize';
import process from 'process';
import { dbConfig } from '../config/config.js';
import customLog from '../utils/custom_log.js';

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        ...config,
    },
);

export default sequelize;
