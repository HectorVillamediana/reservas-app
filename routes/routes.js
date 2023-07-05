const express = require('express');
const router = express.Router();

const { getAllReservations, createReservation, getReservationsById, updateReservation, deleteReservation } = require('../controllers/controllersReservations');
const { createUser, getUserById, updateUser, deleteUser, getUserReservations, getAllUsers } = require('../controllers/controllersUsers');
const { getRoomById, createRoom, updateRoom, deleteRoom, getAllRooms } = require('../controllers/controllersRooms');
const { checkReservationData, checkStartDateIsBiggerThatEndDate } = require('../middlewares/middlewares');


//USERS
router.get('/users', getAllUsers);

router.get('/user/:id', getUserById);

router.post('/user/create', createUser);

router.patch('/user/modify', updateUser)

router.delete('/user/delete/:id', deleteUser)

//ROOMS
router.get('/rooms', getAllRooms);

router.get('/room/:id', getRoomById);

router.post('/room/create', createRoom);

router.patch('/room/modify', updateRoom);

router.delete('/room/delete/:id', deleteRoom);

//RESERVATIONS 

router.get('/reservations', getAllReservations)

router.get('/reservation/:id' ,getReservationsById);

router.post('/reservation/create', checkStartDateIsBiggerThatEndDate, checkReservationData, createReservation);

router.patch('/reservation/modify', updateReservation);

router.delete('/reservation/delete/:id', deleteReservation);

//USERS RESERVATIONS 

router.post('/user/reservations', getUserReservations)

module.exports = router