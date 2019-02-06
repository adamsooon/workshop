import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from "./store";
import { Provider } from "react-redux";
import ApolloClient  from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import registerServiceWorker from './registerServiceWorker';

const typeDefs = `
  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }

  type Mutation {
    addTodo(text: String!): Todo
    toggleTodo(id: Int!): Todo
  }

  type Query {
    adam: String
    visibilityFilter: String
    todos: [Todo]
  }
`;

const cache = new InMemoryCache({
    dataIdFromObject: object => object.key || null
});

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache,
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer `
            },
        });
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store} >
            <App />
        </Provider>
    </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
