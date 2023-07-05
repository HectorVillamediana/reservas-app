const pool = require('../config/config');

const checkUserCreateData = (req, res, next) => {
    const body = req.body;
    if (!body.username ||
        !body.email) {
        res.status(400).json({ response: false, data: "Missing Data!" })
    } else if (typeof body.username !== 'string' ||
        typeof body.email !== 'string') {
        res.status(400).json({ response: false, data: "Data types are not corect" })
    } else {
        next()
    }
}

const checkStartDateIsBiggerThatEndDate = (req, res, next) => {
    const {time_start, time_end} = req.body;
    if(new Date(time_start) > new Date(time_end)){
        res.status(400).json({response:false, data: "Your arrival date can't be lower that your leave date"})
    } else{
        next()
    }
}

const checkReservationData = async (req, res, next) => {
    const { time_start, time_end, room_id } = req.body;
    const client = await pool.connect();
    let flag = false
    try {
        const response = await client.query("SELECT * FROM reservations");
        const match = response.rows.forEach(date => {
            if (date.room_id === room_id
                && new Date(time_start) > new Date(date.time_start)
                && new Date(time_start) < new Date(date.time_end)
                && new Date(time_end) > new Date(time_start)
                && new Date(time_end) < new Date(date.time_end)) {
                res.status(400).json({ response: false, data: "The room you selected is not available between that days" })
                flag = true
            }
            else if (date.room_id === room_id
                && new Date(time_start) > new Date(date.time_start)
                && new Date(time_start) < new Date(date.time_end)) {
                    res.status(400).json({ response: false, data: "The room you selected is not available for that start date" })
                flag = true 
            } else if ( date.room_id === room_id
                && new Date(time_end) > new Date(date.time_start)
                && new Date(time_end) < new Date(date.time_end)) {
                res.status(400).json({ response: false, data: "The room you selected is not available for that finish day" })
                flag = true
            }
        })
        if(!flag){
            next()
        }
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

module.exports = { checkUserCreateData, checkReservationData, checkStartDateIsBiggerThatEndDate}