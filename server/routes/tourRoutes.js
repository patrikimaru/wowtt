const { Router } = require("express");

const {
  getAllTour,
  getOneTour,
  createTour,
  updateTour,
  deleteTour,
  addReview,
} = require("../controllers/tourController.js");

const tourRouter = Router();

tourRouter.get("/getAll", getAllTour);
tourRouter.get("/getOne/:id", getOneTour);
tourRouter.post("/create", createTour);
tourRouter.put("/update/:id", updateTour);
tourRouter.delete("/delete/:id", deleteTour);
tourRouter.put("/addReview/:id", addReview);



module.exports = tourRouter;