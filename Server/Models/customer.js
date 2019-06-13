const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
let jwt = require("jsonwebtoken");
let config = require("../config");

const customerSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  postalcode: { type: String, required: true },
  phone: { type: String, min: 10, max: 10 },
  date: { type: Date, default: Date.now(), required: true },
  isActive: { type: Boolean, default: true, required: true }
});

const Customer = mongoose.model("Customer", customerSchema);

Register = req => {
  return new Promise((resolve, reject) => {
    Customer.findOne({ email: req.body.email }).then(customer => {
      if (customer) return resolve(false);

      let hashpassword;
      bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        hashpassword = hash;
        const customer = new Customer({
          email: req.body.email,
          password: hashpassword,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          city: req.body.city,
          address: req.body.address,
          postalcode: req.body.postalcode,
          phone: req.body.phone
        });
        customer.save();
        return resolve(true);
      });
    });
  });
};

Login = req => {
  return new Promise((resolve, reject) => {
    Customer.findOne({ email: req.body.email }).then(customer => {
      if (!customer) return resolve({ errorMessage: "Customer not found" });

      bcrypt.compare(req.body.password, customer.password, function(
        err,
        response
      ) {
        if (response) {
          let token = jwt.sign(
            { email: customer.email, firstname: customer.firstname },
            "secret",
            {
              expiresIn: "48h"
            }
          );
          resolve(token);
        }
        resolve({ errorMessage: "Wrong password" });
      });
    });
  });
};

findCustomerByEmail = email => {
  return new Promise((resolve, reject) => {
    Customer.find({ email: email }).then(customer => {
      if (customer) {
        return resolve(customer);
      }
    });
  });
};

module.exports = {
  Register: Register,
  Login: Login,
  findCustomerByEmail: findCustomerByEmail
};
