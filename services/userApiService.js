import pool from '../config/connectDB.js';

const getAllUser = async () => {
    try {
        const [rows] = await pool.execute('SELECT * FROM `users`');
        return {
            EM: "Get users success!",
            EC: 0,
            DT: rows
        }
    } catch (error) {
        return {
            EM: "Somgthing wrong from service!",
            EC: 1,
            DT: []
        }
    }
};

const updateUser = async (user) => {
    try {
        await pool.execute(
            'UPDATE `users` SET `username` = ?, `fullname` = ?, `address` = ?, `roleId` = ? WHERE `id` = ?',
            [user.username, user.fullname, user.address, user.roleId, user.id]
        );
        return {
            EM: "update user success!",
            EC: 0,
            DT: ''
        }
    } catch (error) {
        return {
            EM: "something wrong from service!",
            EC: 1,
            DT: ''
        }
    }
}

export default { getAllUser, updateUser };
