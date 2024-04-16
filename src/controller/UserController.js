class UserController {
    static async all(request, response) {
        try {
            let data = [];

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