
const express = require('express');
const setupGraphql = require('./graphql-setup')

// Create an express server and a GraphQL endpoint

var app = express();

app.use("/graphql", function (req, res, next) {
    // Enable CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
});
  
app.use('/graphql', setupGraphql.express_graphql);
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));