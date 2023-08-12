import { FastifyInstance } from "fastify";
import { knex } from '../database';

export default function deleteDiet(app: FastifyInstance) {
    app.delete('/delete/', async (request, reply) => {
        const url = request.url;
        const id = new URLSearchParams(url.split("?")[1]).get("id");


        try {
            const deletedCount = await knex('dailyDiet')
                .where({ id })
                .del();

            if (deletedCount === 0) {
                return reply.code(404).send({ error: "Dieta não encontrada" });
            }

            return reply.code(200).send({ message: "Dieta removida com sucesso" });
        } catch (error) {
            console.error(error);
            return reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}
