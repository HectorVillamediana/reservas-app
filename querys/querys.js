//USER QUERYS
const queryGetAllUsers = "SELECT * FROM users"
const queryUserById = "SELECT * FROM users WHERE user_id = $1";
const queryCreateUser = "INSERT INTO users (name, email, avatar) VALUES ($1, $2, $3)";
const queryUpdateUser = "UPDATE users SET name = $1, email = $2 WHERE user_id = $3";
const queryDeleteUser = "DELETE FROM users WHERE user_id = $1";
//ROOMS QUERYS 
const queryGetAllRooms = "SELECT * FROM rooms"
const queryRoomById = "SELECT * FROM rooms WHERE room_id = $1";
const queryCreateRoom = "INSERT INTO rooms (name, tv, air_conditioning, image) VALUES ($1, $2, $3, $4)";
const queryUpdateRoom ="UPDATE rooms SET name = $1, tv = $2, air_conditioning = $3 WHERE room_id = $4";
const queryDeleteRoom = "DELETE FROM rooms WHERE room_id = $1";
//RESERVATION QUERYS
const queryGetAllReservations = "SELECT * FROM reservations"
const queryReservationById = "SELECT * FROM reservations WHERE reservation_id = $1";
const queryCreateReservation = "INSERT INTO reservations (user_id, room_id, time_start, time_end) VALUES ($1, $2, date($3), date($4))";
const queryUpdateReservation = "UPDATE reservations SET room_id = $1, time_start = $2, time_end = $3 WHERE reservation_id = $4";
const queryDeleteReservation ="DELETE FROM reservations WHERE reservation_id = $1";
//INNER JOIN QUERYS 
const queryGetReservationByUser = 'SELECT reservation_id, email, time_start, time_end FROM reservations INNER JOIN users ON reservations.user_id = users.user_id WHERE reservations.user_id = $1';

module.exports = {queryGetAllUsers, queryUserById, queryCreateUser, queryUpdateUser, queryDeleteUser, queryGetReservationByUser, 
    queryGetAllRooms, queryCreateRoom, queryRoomById, queryUpdateRoom, queryDeleteRoom,
 queryGetAllReservations, queryDeleteReservation, queryCreateReservation, queryUpdateReservation }