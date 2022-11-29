import { ApolloClient, InMemoryCache } from "@apollo/client";

const endPointURL = "http://localhost:4000/graphql";

const defaultOptions = {
  /* Telling the client to ignore errors and not cache the data. */
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  uri: endPointURL,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  connectToDevTools: true
});

export default client;
