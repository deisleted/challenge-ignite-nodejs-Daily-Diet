import { FastifyInstance, FastifyRequest } from "fastify";
import { knex } from '../database';
import { v4 as uuidv4 } from 'uuid';

interface DailyDietEntry {
    id: string;
    title: string;
    description: string;
    date: string;
    hour: string;
    dietOrNot: string;
}

export default function registerRoutes(app: FastifyInstance) {
    app.post<{ Body: DailyDietEntry }>('/add', async (request, reply) => {
        const { title, description, date, hour, dietOrNot } = request.body;

        try {
            const newEntry: DailyDietEntry = {
                id: uuidv4(),
                title,
                description,
                date,
                hour,
                dietOrNot,
            };

            const insertedEntry = await knex('dailyDiet')
                .insert(newEntry)
                .returning('*');

            return reply.code(201).send(insertedEntry);
        } catch (error) {
            console.error(error);
            return reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}

async function obterUserId(request: FastifyRequest) {
    try {
        const userToken = request.headers['authorization']; // Exemplo: 'Bearer TOKEN_AQUI'
        const user = await knex('registerUsers').where({ token: userToken }).first();

        if (!user) {
            throw new Error('Usuário não autenticado');
        }

        return user.id;
    } catch (error) {
        throw new Error('Erro ao obter ID do usuário');
    }
}
