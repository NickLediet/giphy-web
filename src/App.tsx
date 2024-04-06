import { QuerySection } from './components/QuerySection'
import { Theme } from '@radix-ui/themes'
function App() {

  function onQueryChange() {
  }
  return (
    <Theme appearance='dark'>
      <main>
        <QuerySection 
          onQueryChange={onQueryChange}
        />
      </main>
    </Theme>
  )
}

export default App
