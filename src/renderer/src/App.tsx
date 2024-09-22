import AppRouter from './components/AppRouter/AppRouter'
import ContextsProvider from './components/ContextsProvider/ContextsProvider'

function App(): JSX.Element {
  return (
    <ContextsProvider>
      <AppRouter />
    </ContextsProvider>
  )
}

export default App
