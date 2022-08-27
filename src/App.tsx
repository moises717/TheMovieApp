import { Layout } from "@layout/Layout";
import { MoviesProvider } from "./context/MoviesContext";
import { AppRouter } from "./router/AppRouter";

function App() {

  return (
    <MoviesProvider>
      <Layout>
        <AppRouter />
      </Layout>
    </MoviesProvider>
  )
}

export default App
