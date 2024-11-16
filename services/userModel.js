import pool from '../config/connectDB.js';

const getAllUser = async () => {
    try {
        const [rows] = await pool.execute('SELECT * FROM `users`');
        return rows;
    } catch (error) {
        console.error('Error fetching all users:', error.message);
        throw error; // Ném lỗi để controller xử lý
    }
};

const createNewUser = async (newData) => {
    try {
        const { username, fullname, email, address } = newData;
        const result = await pool.execute(
            'INSERT INTO `users` (`username`, `fullname`, `email`, `address`) VALUES (?, ?, ?, ?)',
            [username, fullname, email, address]
        );
        return result;
    } catch (error) {
        console.error('Error creating new user:', error.message);
        throw error;
    }
};

const getUserDetail = async (id) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM `users` WHERE `id` = ?', [id]);
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error(`Error fetching user with id ${id}:`, error.message);
        throw error;
    }
};

const updateUserInfo = async (id, newData) => {
    try {
        const { username, fullname, email, address } = newData;
        const result = await pool.execute(
            'UPDATE `users` SET `username` = ?, `fullname` = ?, `email` = ?, `address` = ? WHERE `id` = ?',
            [username, fullname, email, address, id]
        );
        return result;
    } catch (error) {
        console.error(`Error updating user with id ${id}:`, error.message);
        throw error;
    }
};

const deleteUserById = async (id) => {
    try {
        const result = await pool.execute('DELETE FROM `users` WHERE `id` = ?', [id]);
        return result;
    } catch (error) {
        console.error(`Error deleting user with id ${id}:`, error.message);
        throw error;
    }
};

export default { getAllUser, getUserDetail, updateUserInfo, deleteUserById, createNewUser };
