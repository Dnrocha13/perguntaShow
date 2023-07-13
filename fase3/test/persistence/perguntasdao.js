const Database = require('./database')
const Perguntas = require('../model/perguntas')

class PerguntasDAO extends Database {
    constructor(config) {
        super(config);
    }

    Insert(perguntas, callback) {
        const sql = `
        INSERT INTO perguntas (id, pergunta) VALUES (null, '${perguntas.pergunta}') `;
        this.query(sql, callback);
    }



    getAll(callback) {
        const sql = 'SELECT id, pergunta FROM perguntas'
        this.query(sql, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                let perguntasResult = []
                const perguntas = result.map((row) => perguntasResult.push(row));
                callback(null, perguntasResult);
            }
        });
    }
};

module.exports = PerguntasDAO