import express from express
import cors from cors

//Inicialização do servidor criando uma instância para configurar as rotas e os middlewares.
const app = express();

app.use(express.json()); // middleware p/ processar e disponibilizar requisições tipo json
app.use(cors()); // habilita o cors, p/ aceitar requisições de diferentes origens 

// definição de rota, objeto de requisição e de resposta

app.get('/', (req, res) => {
    res.send ('API funcionando!') //o envia resposta do servidor ao cliente
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))