class PerguntasRespostasService {
    constructor() {
        
    }

    getAll(pergunta, resposta) {
        let result = [];
        pergunta.forEach(element => {
            let itemPergunta = {};
            itemPergunta.id = element['id'];
            itemPergunta.question = element['pergunta'];
            itemPergunta.answers = [];

            resposta.forEach(element2 => {
                let itemResposta = {};
                itemResposta.id_pergunta = element2['id_pergunta'];
                if(itemResposta.id_pergunta == itemPergunta.id) {
                    itemResposta.text = element2['resposta_opcao'];
                    if(element2['resposta_correta'] == 0) {
                        itemResposta.correct = false;
                    }else {
                        itemResposta.correct = true;
                    }
                    
                    itemPergunta.answers.push(itemResposta);
                };
            });
    

            result.push(itemPergunta);
        });
        return result;
        
    }
}

/*RowDataPacket {
    idresposta: 52,
    id_pergunta: 13,
    resposta_opcao: 'Os Simpsons',
    resposta_correta: 0
  }

/*
{
    question: "Qual o nome do ator que interpreta Tony Stark, o Homem de Ferro, nos filmes da Marvel?",
    answers: [
      { text: "Robert Downey Jr.", correct: true },
      { text: "Chris Evans", correct: false },
      { text: "Chris Hemsworth", correct: false },
      { text: "Mark Ruffalo", correct: false }
    ]
  },*/

module.exports = PerguntasRespostasService;
