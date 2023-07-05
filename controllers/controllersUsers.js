const pool = require('../config/config');
const { queryGetAllUsers, queryUserById, queryCreateUser, queryUpdateUser, queryDeleteUser, queryGetReservationByUser } = require('../querys/querys');

const getAllUsers = async (req, res) => {
    const client = await pool.connect();
    try {
        const response = await client.query(queryGetAllUsers);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const client = await pool.connect();
    try {
        const response = await client.query(queryUserById, [id]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const createUser = async (req, res) => {
    const { username, email, avatar } = req.body
    const client = await pool.connect();
    try {
        const response = await client.query(queryCreateUser, [username, email, avatar]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const updateUser = async (req, res) => {
    const { username, email, id } = req.body
    const client = await pool.connect();
    try {
        const response = await client.query(queryUpdateUser, [username, email, id]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    const client = await pool.connect();
    try {
        const response = await client.query(queryDeleteUser, [id]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const getUserReservations = async (req, res) => {
    const { id } = req.body
    const client = await pool.connect();
    try {
        const response = await client.query(queryGetReservationByUser, [id]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

module.exports = { getAllUsers, createUser, getUserById, createUser, updateUser, deleteUser, getUserReservations }