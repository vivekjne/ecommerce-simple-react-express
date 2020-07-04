"use strict";

var _app = _interopRequireDefault(require("./app"));

var _path = _interopRequireDefault(require("path"));

var _models = _interopRequireDefault(require("./models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = "3003" || 3000;

_models.default.sequelize.sync().then(function () {
  _app.default.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
});