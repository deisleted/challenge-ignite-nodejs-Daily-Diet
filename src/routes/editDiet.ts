import { FastifyInstance } from "fastify";
import { knex } from '../database';


interface DailyDietEntry {
    id: string,
    title: string;
    description: string;
    date: string;
    hour: string;
    dietOrNot: string;
}


export default function editRoutes(app: FastifyInstance) {
    app.put<{ Params: { id: string }, Body: DailyDietEntry }>('/edit/', async (request, reply) => {
        const url = request.url;
        const id = new URLSearchParams(url.split("?")[1]).get("id");
        const { title, description, date, hour, dietOrNot } = request.body;

        console.log("ID recebido:", id);


        try {
            const updatedCount = await knex('dailyDiet')
                .where({ id })
                .update({ title, description, date, hour, dietOrNot });

            if (updatedCount === 0) {
                return reply.code(404).send({ error: "Dieta não encontrada" });
            }

            return reply.code(200).send({ message: "Dieta atualizada com sucesso" });
        } catch (error) {
            console.error(error);
            return reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}
