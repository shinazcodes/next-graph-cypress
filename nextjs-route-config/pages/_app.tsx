import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Loader from './components/Loader'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });


  return (
    <div>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
          <Loader />
        </Provider>
      </ApolloProvider>
    </div>)
}

export default MyApp
