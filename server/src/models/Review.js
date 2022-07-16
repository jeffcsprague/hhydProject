const Model = require("./Model")

class Review extends Model {
    static get tableName() {
        return "reviews"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [ "userId", "dayId", "rating" ],
            properties: {
                rating: { type: ["string", "integer"] },
                content: { type: "string", minLength: 0, maxLength: 300 },
            }
        }
    }

    static get relationMappings() {
        const { User, Day } = require("./index.js")

        return {
            day: {
                relation: Model.BelongsToOneRelation,
                modelClass: Day,
                join: {
                    from: "reviews.dayId",
                    to: "days.id"
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "reviews.userId",
                    to: "users.id"
                }
            }
        }
    }
}

module.exports = Review