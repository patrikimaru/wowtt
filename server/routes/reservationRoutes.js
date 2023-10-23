const { Router } = require("express");

const {
  getAllReservations,
  getOneReservation,
  createReservation,
  deleteReservation,
  confirmReservation, 
} = require("../controllers/reservationController.js");

const reservationRouter = Router();

reservationRouter.get("/getAll", getAllReservations);
reservationRouter.get("/getOne/:id", getOneReservation);
reservationRouter.post("/create", createReservation);
reservationRouter.delete("/delete/:id", deleteReservation);
reservationRouter.put("/confirm/:id", confirmReservation);

module.exports = reservationRouter;
