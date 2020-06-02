import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Teste 1',
        'Teste 2'
    ])
});
app.listen(3333);