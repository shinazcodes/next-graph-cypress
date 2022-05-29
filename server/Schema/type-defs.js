const { gql } = require("apollo-server");

const typeDefs = gql`
type User {
    firstName: String!
    lasName: String!
    email: String!
    mobileNumber: String!
}


input userInput {
    firstName: String!
    lasName: String
    email: String
    mobileNumber: String
}

type Query {
    users: User
}

type response {
    pageNumber: String!
}

type Mutation {
    goForward(input: userInput!): response
}
`;
module.exports = { typeDefs };
