import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUIDV,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING(20),
    },
});

export default User;
