const fastify = require('fastify')();
const express = require('express');
const app = express();

app.use(express.json());

fastify.get('/perguntas', function(req, res){
    let querystring = req.query.id;
    console.log(querystring);
    const questions = [

        {
          id:"1",  
          question: "Qual o nome do ator que interpreta Tony Stark, o Homem de Ferro, nos filmes da Marvel?",
          answers: [
            { text: "Chris Evans", correct: false },
            { text: "Chris Hemsworth", correct: false },
            { text: "Mark Ruffalo", correct: false },
            { text: "Robert Downey Jr.", correct: true }
          ]
        },
          {
            id:"2",
            question: "Qual o nome do ator que interpreta Tony Stark, o Homem de Ferro, nos filmes da Marvel?",
            answers: [
              { text: "Chris Evans", correct: false },
              { text: "Chris Hemsworth", correct: false },
              { text: "Mark Ruffalo", correct: false },
              { text: "Robert Downey Jr.", correct: true }
            ]
          },
          {
            id:"3",
            question: "Qual o nome do protagonista da série 'Breaking Bad'?",
            answers: [
              { text: "Walter White", correct: true },
              { text: "Jesse Pinkman", correct: false },
              { text: "Saul Goodman", correct: false },
              { text: "Gustavo Fring", correct: false }
            ]
          },
          {
              id:"4",
              question: "Quem é o ator que interpreta Sherlock Holmes na série de TV 'Sherlock'?",
              answers: [
                { text: "Martin Freeman", correct: false },
                { text: "Benedict Cumberbatch", correct: true },
                { text: "Andrew Scott", correct: false },
                { text: "Rupert Graves", correct: false }
              ]
            },
            {
              id:"5",  
              question: "Qual o nome do diretor do filme 'Pulp Fiction'?",
              answers: [
                { text: "Martin Scorsese", correct: false },
                { text: "Christopher Nolan", correct: false },
                { text: "Quentin Tarantino", correct: true },
                { text: "Steven Spielberg", correct: false }
              ]
            },
            {
              id:"6",  
              question: "Qual é a primeira música do álbum 'Thriller' de Michael Jackson?",
              answers: [
                { text: "Wanna Be Startin' Somethin'", correct: true },
                { text: "Billie Jean", correct: false },
                { text: "Beat It", correct: false },
                { text: "Thriller", correct: false }
              ]
            },
            {
              id:"7",
              question: "Qual é o nome do protagonista da série de jogos 'The Legend of Zelda'?",
              answers: [
                { text: "Zelda", correct: false },
                { text: "Ganondorf", correct: false },
                { text: "Epona", correct: false },
                { text: "Link", correct: true }
      
              ]
            },
            {
              id:"8",  
              question: "Quem é o criador da franquia de filmes 'Star Wars'?",
              answers: [
                { text: "George Lucas", correct: true },
                { text: "Steven Spielberg", correct: false },
                { text: "James Cameron", correct: false },
                { text: "Peter Jackson", correct: false }
              ]
            },
            {
              id:"9",  
              question: "Qual é o nome do protagonista da série de filmes 'Harry Potter'?",
              answers: [
                { text: "Ron Weasley", correct: false },
                { text: "Harry Potter", correct: true },
                { text: "Hermione Granger", correct: false },
                { text: "Albus Dumbledore", correct: false }
              ]
            },
            {
              id:"10",
              question: "Qual é o nome da atriz que interpreta Hermione Granger nos filmes da série 'Harry Potter'?",
              answers: [
                { text: "Emma Watson", correct: true },
                { text: "Emma Stone", correct: false },
                { text: "Emma Roberts", correct: false },
                { text: "Emma Thompson", correct: false }
              ]
            },
            {
              id:"11",
              question: "Qual é o nome do vilão principal no universo do Batman?",
              answers: [
                { text: "Pinguim", correct: false },
                { text: "Duas-Caras", correct: false },
                { text: "Coringa", correct: true },
                { text: "Charada", correct: false }
              ]
            },
            {
              id:"12",  
              question: "Qual é o nome do filme de ficção científica dirigido por Christopher Nolan que se passa no espaço?",
              answers: [
                { text: "Interstellar", correct: true },
                { text: "Inception", correct: false },
                { text: "The Prestige", correct: false },
                { text: "Dunkirk", correct: false }
              ]
            },
            {
              id:"13",
              question: "Qual é o nome da banda britânica conhecida pelos hits 'Bohemian Rhapsody' e 'We Will Rock You'?",
              answers: [
                { text: "Queen", correct: true },
                { text: "The Beatles", correct: false },
                { text: "Led Zeppelin", correct: false },
                { text: "Rolling Stones", correct: false }
              ]
            },
            {
              id:"14",
              question: "Qual é o nome da série animada de TV que acompanha as aventuras de um garoto e seu cachorro mágico?",
              answers: [
                { text: "Hora de Aventura", correct: true },
                { text: "Steven Universe", correct: false },
                { text: "Rick and Morty", correct: false },
                { text: "Os Simpsons", correct: false }
              ]
            }
        ];
    
        let questaoFiltrado = questions.filter( obj => obj.id == req.query.id);
        if(!querystring){
            questaoFiltrado = questions
        }
    res.send(questaoFiltrado)
        

});

fastify.post('/perguntas', function(req, res) {
    const {id, question, answers} = req.body;
    
})

const PORT = 3000;
fastify.listen(PORT,() =>{
    console.log(`sevidor rodando na porta ${PORT}`)
})