import customLog from './utils/custom_log.js';
import db from './db/index.js';
import User from './models/user.js';

const main = async () => {
    try {
        await db.authenticate();
    } catch (error) {
        customLog.error('Unable to connect to the database:', error);
    }
};

main();
