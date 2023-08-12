// Todas as informações enviadas no body da requisicao devem ser em formato JSON.
// POST - /add => Criar registros de dietas no banco de dados, passar no body da requisicao as informaçõe obrigatorias 
// GET - /diets/?filter=  => Listar todos os registros de dieta do banco de dados ou filtrar dietas especifica de qualquer informação passado na url da requisicao.
// PUT - /edit/?id= => Alterar qualquer informação de um registro de dieta, passar no body da requisicao em json as informações que deseja editar e o id passada na url.
// DELETE - /delete/?id=  => Deletar registro de dieta especifica conforme id passado na url.


import fastify from "fastify";
import registerRoutes from './routes/createRegister';
import deleteRoutes from './routes/deleteDiet';
import editRoutes from './routes/editDiet';
import listRoutes from './routes/listDiet';

const app = fastify();


registerRoutes(app);
deleteRoutes(app);
editRoutes(app);
listRoutes(app);

const options = {
    port: 4444,
};

app.listen(options, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Http Server Running on ${address}`);
});
