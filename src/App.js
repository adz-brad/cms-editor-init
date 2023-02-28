import { RecoilRoot } from 'recoil'
import './styles.css'
import Layout from './components/layout';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });


  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Layout />
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default App;
