const Model = require("./Model")

class Day extends Model {
  static get tableName() {
    return "days"
  }

  static get relationMappings() {
    const { Review } = require("./index.js")

    return {
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "days.id",
          to: "reviews.dayId"
        }
      }
    }
  }
}

module.exports = Day