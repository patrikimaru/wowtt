const TourModel = require("../models/tourModel.js");
const ReviewModel = require("../models/reviewModel"); 

exports.getAllTour = async (req, res) => {
  await TourModel.find().populate("reviews").then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  });;  
};

exports.getOneTour = async (req, res) => {
  const { id } = req.params;
  await TourModel.findById(id).populate("reviews").then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  });;  
};


exports.createTour = async (req, res) => {
  await TourModel.create(req.body)
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};

exports.updateTour = async (req, res) => {
  const { id } = req.params;
  await TourModel.findByIdAndUpdate(id, req.body)
    .then(() => res.send("Update successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};


exports.deleteTour = async (req, res) => {
  const { id } = req.params;
  await TourModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
  });
};

exports.addReview = async (req, res) => {
  const { id } = req.params;
  const { username, reviewText, rating } = req.body;

  const review = new ReviewModel({
    productId: id,
    username,
    reviewText,
    rating,
  });

  await review.save().then(async (data)=> {
    await TourModel.findByIdAndUpdate(
      id,
      { $addToSet: { reviews: review._id } }, 
      { new: true } 
    );
    res.send(data)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    })
};
