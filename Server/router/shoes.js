const express = require("express");
const router = express.Router();
const ShoesModel = require("../Models/shoes");

router.get("/getAllShoes", (req, res) => {
  ShoesModel.getAllShoes()
    .then(shoes => {
      res.status(200).send(shoes);
    })
    .catch(err => {
      res.status(204).send(err);
    });
});

module.exports = router;
