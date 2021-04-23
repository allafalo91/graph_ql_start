import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, gql, ApolloServer } from 'apollo-server-express';
 

import mongoose from 'mongoose'
import { typeDefs } from './models/typeDefs';
import { resolvers } from './resolvers';



const startServer = async () => {
  const server = new ApolloServer({
 typeDefs,
 resolvers
})

const PORT = 3000;

const app = express();

// bodyParser is needed
server.applyMiddleware({app})

await mongoose.connect('mongodb://localhost:27017/graphql', {useNewUrlParser: true, useUnifiedTopology: true});
 
app.listen(PORT, () => console.log("server runed")); 
}

startServer()