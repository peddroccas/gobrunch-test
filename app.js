const express = require('express');
const app = express();
const port = 3000;

// Configurar EJS como o template engine
app.set('view engine', 'ejs');
app.use(express.static('public')); // pasta para arquivos estáticos (CSS e JS)

// Rota principal
app.get('/', (req, res) => {
  res.render('index'); // renderizar a página inicial
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
