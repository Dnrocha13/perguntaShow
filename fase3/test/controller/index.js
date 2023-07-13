const express = require("express");
const bodyParser = require('body-parser');
const PerguntasService = require('../service/perguntasservice');
const RespostasService = require('../service/respostasservice');
const Perguntas = require('../model/perguntas');
const Respostas = require('../model/respostas')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const config = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ronan'
};

const respostasService = new RespostasService(config);
const perguntasService = new PerguntasService(config);

app.post('/api/respostas', (req, res) => {
  let RespostasInstance = new Respostas(req.body.id_pergunta, req.body.resposta_opcao, req.body.resposta_correta);
  respostasService.criarRespostas(RespostasInstance, (err, resposta) => {
    if (err) {
      return res.status(500).json({ error: err })
    }
    res.status(201).json(resposta)
  });
});

app.post('/api/perguntas', (req, res) => {
  let PerguntasIntance = new Perguntas(req.body.pergunta);
  perguntasService.criarPerguntas(PerguntasIntance, (err, pergunta) => {
    if (err) {
      return res.status(500).json({ error: err })
    }
    res.status(201).json(pergunta)
  });
});

app.get("/api/respostas", (req, res) => {

  respostasService.buscarTodasAsRespostas((err, resposta) => {
    if (err) {
      return res.status(500).json({ erro: err })
    }
    res.json(resposta);
  });
});

app.get("/api/perguntas", (req, res) => {

  perguntasService.buscarTodasAsPerguntas((err, pergunta) => {
    if (err) {
      return res.status(500).json({ erro: err })
    }
    res.json(pergunta);
  });
});

const PORT = 3000
app.listen(PORT, () => {
  console.log(`API iniciada na porta ${PORT}`);
});