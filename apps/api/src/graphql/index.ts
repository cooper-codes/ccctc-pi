import { buildSchema } from "type-graphql";
import resolvers from "./resolvers";


const getSchema = async () => buildSchema({
    resolvers,
    validate: true, // Enable 'class-validator' integration
    nullableByDefault: false,
    emitSchemaFile: './schema.gql'
});

export default getSchema