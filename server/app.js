const express = require('express');
const graphglHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema')
const app = express();


app.use('/graphql', graphglHTTP({
    graphiql: true ,
    schema:schema
  
}))

app.listen(4000, () => { //localhost:4000
   console.log('LLLLListening for requests on my awesome port 4000');
   
})