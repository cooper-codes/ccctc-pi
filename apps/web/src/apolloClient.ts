
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export default function () {

    return new ApolloClient({
        uri: 'http://localhost:3001',
        cache: new InMemoryCache(),
    })

}