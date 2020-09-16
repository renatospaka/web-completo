const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database'); 
const porta = 3003;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
  res.send(db.getProducts());
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(db.getProduct(req.params.id));
})

app.post('/produtos', (req, res, next) => {
  const prod = db.addProduct({
    nome: req.params.nome,
    preco: req.params.preco
  });
  res.send(prod);
})

app.put('/produtos/:id', (req, res, next) => {
  const prod = db.addProduct({
    id: req.params.id,
    nome: req.params.nome,
    preco: req.params.preco
  });
  res.send(prod);
})

app.delete('/produtos/:id', (req, res, next) => {
  const prod = db.deleteProduct(req.params.id);
  res.send(prod);
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
})
