const pool = require('../config/config');
const { queryCreateReservation, queryReservationById , queryDeleteReservation, queryUpdateReservation, queryGetAllReservations } = require('../querys/querys');

const getAllReservations = async (req, res) => {
    const client = await pool.connect();
    try {
        const response = await client.query(queryGetAllReservations)
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const createReservation = async (req, res) => {
    const { user_id, room_id, time_start, time_end } = req.body
    const client = await pool.connect();
    try {
        const response = await client.query(queryCreateReservation, [user_id, room_id, time_start, time_end]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const getReservationsById = async (req, res) => {
    const { id } = req.params
    const client = await pool.connect();
    try {
        const response = await client.query(queryReservationById, [id]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const updateReservation = async (req, res) => {
    const { room_id, time_start, time_end, id} = req.body
    const client = await pool.connect();
    try {
        const response = await client.query(queryUpdateReservation, [room_id, time_start, time_end, id]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const deleteReservation = async (req, res) => {
    const { id } = req.params
    const client = await pool.connect();
    try {
        const response = await client.query(queryDeleteReservation, [id]);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}
module.exports = { createReservation, getReservationsById, updateReservation, deleteReservation, getAllReservations }