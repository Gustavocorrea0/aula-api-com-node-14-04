const knex = require("../database/connection");

class UserController {
    static async all(request, response) {
        try {
            let data = await knex("user")
                .select("")
                .orderBy("name", "asc");

            response.json({ error: false, data });
        } catch (error) {
            response.json({ error: false, data });
        }
    }

    static async create(request, response) { };

    static async update(request, response) { };

    static async delete(request, response) { };

}

module.exports = UserController;