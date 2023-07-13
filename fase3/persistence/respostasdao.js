const Database = require('./database');
const Perguntas = require('../model/respostas');

class RespostasDAO extends Database {
    constructor(config) {
        super(config);
    }

    Insert(respostas, callback) {
        const sql = `
        INSERT INTO resposta (idrespostas, id_pergunta, resposta_opcao, resposta_correta) VALUES (null, '${respostas.id_pergunta}', '${respostas.resposta_opcao}', '${respostas.resposta_correta})' `;
        this.query(sql, callback);
    }

    getAll(callback) {
        const sql = 'SELECT idrespostas, id_pergunta, resposta_opcao, resposta_correta FROM respostas '
        this.query(sql, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                let respostasResult = [];
                const respostas = result.map((row) => respostasResult.push(row));
                callback(null, respostasResult);
            }
        });
    }
}

module.exports = RespostasDAO;