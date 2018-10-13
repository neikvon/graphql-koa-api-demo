import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const app = new Koa()

const options = {
  typeDefs,
  resolvers,
  formatError: error => {
    console.log('\nformatError:')
    console.log(error)
    return error
  },
  formatResponse: response => {
    console.log('\nresponse:')
    console.log(response)
    return response
  }
}

const server = new ApolloServer(options)

server.applyMiddleware({
  app
})

const port = 3000
const host = 'localhost'

app.listen(port, host, () =>
  console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`)
)
