
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export default function () {
    const uri = import.meta.env.DEV ? 'http://localhost:3001' : import.meta.env.VITE_API_URL
    return new ApolloClient({
        uri,
        cache: new InMemoryCache(),
    })

}