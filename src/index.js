import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from "./store";
import { Provider } from "react-redux";
import ApolloClient  from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import registerServiceWorker from './registerServiceWorker';

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache,
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer 763925e7a7aae42fee5f2dc4aa790045e88adb19`
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
