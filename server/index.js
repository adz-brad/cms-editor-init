const { ApolloServer, gql } = require('apollo-server')
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core')
const { data } = require('./data')

const typeDefs = gql`

    #TYPES

    type Props {
        className: String
    }

    type Element {
        id: String
        parent: String
        children: [String]
        content: String
        type: String
        props: Props
    }


    #INPUTS

    input PropsInput {
      className: String
    }


    #QUERIES

    type Query {
        getAllElements: [Element]
        getElementsByParent(parent: String): [Element]
        getElementById(id: String): Element
    }


    #MUTATIONS

    type Mutation {
        addElement(id: String, parent: String, children: [String], content: String, type: String, props: PropsInput): Element
    }

`;

const resolvers = {
    Query: {
      getAllElements() {
        return data
      },
      getElementsByParent(parent, args) {
        if(Object.keys(args).length !== 0){
          const elements = data.filter(data => data.parent === args.parent)
          return elements
        }
        else{
          return null
        }
      },
      getElementById(parent, args) {
        if(Object.keys(args).length !== 0){
          const element = data.filter(data => data.id === args.id)[0]
          return element
        }
        else{
          return null
        }
      }
    },
    Mutation: {
      addElement(parent, args) {
        const newElement = {
          id: args.id,
          parent: args.parent,
          children: args.children,
          content: args.content,
          type: args.type,
          props: args.props
        }
        data.push(newElement)
        return newElement
      }
    }
  }

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});