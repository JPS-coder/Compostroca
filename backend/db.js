import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); //carrega as variaveis de ambiente

// função assincrona para conectar ao banco de dados MongoDB
const connectDB = async () => {
    try {
        // tenta se conectar ao MongoDb usando a URI armazenada na variavel de ambiente
        await mongoose.connect(process.env.MONGO_URI, {
            // opçoes paa o mongoose:
            useNewUrlParser: true, // usa o novo analisador da URL do MongoDb 
            useUnifiedTopology: true, // usa o novo driver do MongoDb para gerencar a topologia da rede
        });
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar no MongoDB:', error.message);
        process.exit(1); // finaliza a aplicação em caso de erro
    }
};

export default connectDB;