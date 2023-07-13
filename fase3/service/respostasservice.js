const Respostas = require('../model/respostas');
const RespostasDAO = require('../persistence/respostasdao');

class RespostasService {
    constructor(config){
        this.RespostasDAO = new RespostasDAO(config);
    }

    criarRespostas(respostas, callback) {
        const novaResposta = new Respostas(respostas.idresposta, respostas.id_pergunta, respostas.resposta_opcao, respostas.resposta_correta);
        this.RespostasDAO.Insert(novaResposta, callback);
    }

    buscarTodasAsRespostas(callback) {
        this.RespostasDAO.getAll(callback);
    }
}

module.exports = RespostasService;