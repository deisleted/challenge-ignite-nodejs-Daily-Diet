import { FastifyInstance } from "fastify";
import { knex } from '../database';
import removeAccents from 'remove-accents';

export default function listDiet(app: FastifyInstance) {
    app.get<{ Querystring: { filter?: string } }>('/diets/', async (request, reply) => {
        const { filter } = request.query;

        try {
            let query = knex('dailyDiet');

            if (filter) {
                const normalizedFilter = removeAccents(filter).toLowerCase();
                query = query.where(function () {
                    this.whereRaw('LOWER(REPLACE(title, ?, \'\')) LIKE ?', [`%${normalizedFilter}%`, `%${normalizedFilter}%`])
                        .orWhereRaw('LOWER(REPLACE(description, ?, \'\')) LIKE ?', [`%${normalizedFilter}%`, `%${normalizedFilter}%`])
                        .orWhereRaw('LOWER(dietOrNot) LIKE ?', [`%${normalizedFilter}%`])
                        .orWhereRaw('LOWER(id) LIKE ?', [`%${normalizedFilter}%`])
                        .orWhereRaw('LOWER(REPLACE(date, ?, \'\')) LIKE ?', [`%${normalizedFilter}%`, `%${normalizedFilter}%`])
                        .orWhereRaw('LOWER(REPLACE(hour, ?, \'\')) LIKE ?', [`%${normalizedFilter}%`, `%${normalizedFilter}%`]);
                });
            }

            const diets = await query.select('*');

            if (diets.length === 0) {
                return reply.code(404).send({ error: 'Dieta não encontrada!' });
            }


            return reply.code(200).send(diets);
        } catch (error) {
            console.error(error);
            return reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}
