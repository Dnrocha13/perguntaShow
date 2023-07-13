const PerguntasDAO = require('../persistence/perguntasdao');
const Perguntas = require('../model/perguntas')

class PerguntasService {
    constructor(config) {
        this.PerguntasDAO = new PerguntasDAO(config);
    }

    criarPerguntas(perguntas, callback) {
        const novaPergunta = new Perguntas(perguntas.pergunta);
        this.PerguntasDAO.Insert(novaPergunta, callback);
    }

    buscarTodasAsPerguntas(callback) {
        this.PerguntasDAO.getAll(callback);
    }
}

module.exports = PerguntasService;