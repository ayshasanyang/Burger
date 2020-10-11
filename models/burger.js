var orm = require("../config/orm.js");

var burger = {
  // READ/SELECT all the records 

  all: function (br) {
    orm.all('burgers', function (res) {
      br(res);
    });
  },
  // CREATE/INSERT a new record 
  create: function (cols, vals, br) {
    orm.create('burgers', cols, vals, function (res) {
      br(res);
    });
  },
  // UPDATE/UPDATE 

  update: function (objColVals, condition, br) {
    orm.update('burgers', objColVals, condition, function (res) {
      br(res);
    });
  },
  // DELETE/DELETE a rcord
  delete: function (condition, br) {
    orm.delete('burgers', condition, function (res) {
      br(res);
    });
  },
};


module.exports = burger;
