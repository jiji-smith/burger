const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", (results) => {
      cb(results);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (result) => {
      cb(result);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (result) => {
      cb(result);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, (result) => {
      cb(result);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
