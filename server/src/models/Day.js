const Model = require("./Model")

class Day extends Model {
  static get tableName() {
    return "days"
  }
}

module.exports = Day