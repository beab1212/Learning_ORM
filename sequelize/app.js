import customLog from './utils/custom_log.js';
import db from './db/index.js';
import User from './models/user.js';

const main = async () => {
    try {
        await db.authenticate();
        await db.sync();
        customLog.success('Connection has been established successfully.');
    } catch (error) {
        customLog.error('Unable to connect to the database:', error);
    }
};

main();
