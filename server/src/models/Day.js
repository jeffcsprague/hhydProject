const Model = require("./Model")

class Day extends Model {
  static get tableName() {
    return "days"
  }
/* Note: This would not allow me to seed days so I commented it out
  static get jsonSchema() {
    return {
      type: "object",
      required: ["date"],
      properties: {
        date: { type: "string","format": "date" },
      }
    }
  }
*/
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