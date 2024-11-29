const server = require("./server");
const { sequelize } = require('./config/db');

(async () => {
    try {
        await sequelize.sync();
        console.log('Tabelas sincronizadas com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar tabelas:', error);
    }
})();

(async () => {
    await server.start();
    console.log("Server listening " + server.info.uri);
})();