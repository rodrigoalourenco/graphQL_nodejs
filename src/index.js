const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
    schema: buildSchema('type Query { msg: String }'),
    rootValue: { msg: () => 'Ola Mundo'},
    graphiql: true,
    pretty: true
}));

app.listen(3000, () => console.log('Express has been started'))