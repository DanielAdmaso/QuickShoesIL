const express = require("express");
const router = express.Router();
const CustomerModel = require("../Models/customer");
let jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  CustomerModel.Register(req)
    .then(result => {
      if (result) {
        console.log("new customer inserted");
        res.status(200).send(result); //custoemr created
      } else {
        res.status(203).send(result); // customer exist
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.post("/login", (req, res) => {
  CustomerModel.Login(req)
    .then(result => {
      // the result will be token or error message
      if (result.errorMessage) {
        res.status(203).json(result);
      } else {
        res.status(200).json(result);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(204).send(err);
    });
});

router.get("/getuserdetails", verifyToken, (req, res) => {
  return res.status(200).send(decodedToken);
});

let decodedToken = "";
function verifyToken(req, res, next) {
  let token = req.query.token;

  jwt.verify(token, "secret", function(err, tokendata) {
    if (err) {
      return res.status(400).json({ message: "unrecognaized request" });
    }
    if (tokendata) {
      decodedToken = tokendata;
      next();
    }
  });
}

module.exports = router;
