/**
 * @typedef {import("knex")} Knex
 */

const { default: knex } = require("knex")

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("reviews", (table) => {
        table.bigIncrements("id")
        table.bigInteger("userId").notNullable().unsigned().index().references("users.id")
        table.bigInteger("dayId").notNullable().unsigned().index().references("days.id")
        table.integer("rating").notNullable()
        table.string("content")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())

    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("reviews")
}
