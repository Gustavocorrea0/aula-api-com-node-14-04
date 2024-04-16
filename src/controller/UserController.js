const Connection = require("mysql/lib/Connection");
const knex = require("../database/connection");

class UserController {
    static async all(request, response) {
        try {
            let data = await knex("user")
                .select("")
                .orderBy("name", "asc");

            return response.json({ error: false, data });
        } catch (error) {
            return response.json({ error: false, data });
        }
    }

    static async create(request, response) { 
        try {
            let { name } = request.body;

            if(!name) {
                return response.json({ error: true, msg: "Nome obrigatorio"});
            }

            await connection("user").insert({ name });

            return response.json({ error: false, msg: "Usuario cadastrado com sucesso"});
        } catch (error) {
            return response.json({ error: false, msg: error});
        }
    };

    static async update(request, response) { };

    static async delete(request, response) { };

}

module.exports = UserController;