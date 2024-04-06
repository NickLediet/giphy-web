import { QuerySection } from './components/QuerySection'
import { Theme, Separator, Button } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { TextPosition, useImageQuery } from './lib'
import { PreviewImageList } from './components/PreviewImageList'

function App() {
  const { images, error, queryImages } = useImageQuery()
  const [currentPage, setCurrentPage] = useState(0)
  const [position, setPosition] = useState<TextPosition>()
  const [query, setQuery] = useState('')
  const [text, setText] = useState('')

  function onQueryChange(queryResult: string, position: TextPosition, text: string) {
    // Reset the current page for a fresh query
    setCurrentPage(0)

    if(queryResult) {
      setQuery(queryResult)
      queryImages(queryResult, currentPage)
    }

    setPosition(position)
    text && setText(text)
  }

  function nextHandler() {
    setCurrentPage(currentPage + 1)
    queryImages(query, currentPage + 1)
  }

  function previousHandler() {
    setCurrentPage(currentPage - 1)
    queryImages(query, currentPage - 1)
  }

  useEffect(() => {
    console.log(images)
  }, [images])

  return (
    <Theme appearance='dark'>
      <main>
        <QuerySection 
          onQueryChange={onQueryChange}
        />
        { error && <div>{error}</div> }
        <Separator decorative/>
        { (text && position) && <div className="results-section">
          <Button onClick={nextHandler}>Next</Button>
          <PreviewImageList images={images} text={text} position={position} />
          <Button onClick={previousHandler}>Previous</Button>
        </div>}
      </main>
    </Theme>
  )
}

export default App
