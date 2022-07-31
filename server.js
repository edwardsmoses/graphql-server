import express from "express"
import { graphqlHTTP } from "express-graphql";
import { Post as GraphQLPost, Post } from "./src/schema";
import graphQlResolvers from "./src/resolvers";
import mongoose from "mongoose";


const app = express()

app.use("/graphql", graphqlHTTP({
    schema: Post,
    rootValue: graphQlResolvers,
    graphiql: true,
}));


const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.wuafh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
    .connect(uri, options)
    .then(() => app.listen(4000, console.log("Server is listening on 4000")))
    .catch(error => {
        throw error
    })