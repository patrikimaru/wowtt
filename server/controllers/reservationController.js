const ReservationModel = require("../models/reservationModel.js");

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await ReservationModel.find();
    res.send(reservations);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

exports.getOneReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await ReservationModel.findById(id);
    if (!reservation) {
      return res.status(404).send({ msg: "Reservation not found" });
    }
    res.send(reservation);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

exports.createReservation = async (req, res) => {
  try {
    const newReservation = await ReservationModel.create(req.body);
    console.log("Reservation created successfully...");
    res.status(201).send(newReservation);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

exports.updateReservation = async (req, res) => {
  const { id } = req.params;
  try {
    await ReservationModel.findByIdAndUpdate(id, req.body);
    res.send("Reservation updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

exports.deleteReservation = async (req, res) => {
  const { id } = req.params;
  try {
    await ReservationModel.findByIdAndDelete(id);
    res.send("Reservation deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

exports.confirmReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await ReservationModel.findByIdAndUpdate(
      id,
      { isConfirmed: true },
      { new: true }
    );

    if (!reservation) {
      return res.status(404).send({ msg: "Reservation not found" });
    }

    res.send(reservation);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};
