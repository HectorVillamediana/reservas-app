const pool = require('../config/config');
const { queryRoomById, queryCreateRoom, queryUpdateRoom, queryDeleteRoom, queryGetAllRooms } = require('../querys/querys');

const getAllRooms = async (req, res) => {
    const client = await pool.connect();
    try {
        const response = await client.query(queryGetAllRooms);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}
const getRoomById = async (req, res) => {
    const { id } = req.params;
    const client = await pool.connect();
    try {
        const response = await client.query(queryRoomById, [id]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const createRoom = async (req, res) => {
    const { name, tv, air_conditioning, image } = req.body
    const client = await pool.connect();
    try {
        const response = await client.query(queryCreateRoom, [name, tv, air_conditioning, image]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const updateRoom = async (req, res) => {
    const { name, tv, air_conditioning, id } = req.body
    const client = await pool.connect();
    try {
        const response = await client.query(queryUpdateRoom, [name, tv, air_conditioning, id]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const deleteRoom = async (req, res) => {
    const { id } = req.params
    const client = await pool.connect();
    try {
        const response = await client.query(queryDeleteRoom, [id]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

module.exports = { getRoomById, createRoom, updateRoom, deleteRoom, getAllRooms }