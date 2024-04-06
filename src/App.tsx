import { QuerySection } from './components/QuerySection'
import { Theme, Separator, Button, Heading, Flex, Box } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { TextPosition, useImageQuery } from './lib'
import { PreviewImageList } from './components/PreviewImageList'

function Divider () {
  return (
    <Separator 
      decorative 
      size={'3'} 
      color='gray' 
      orientation={'horizontal'} 
      my="4"
      style={{ width: '100%' }}/>
  )
}

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
        <Heading as="h1" mb={'3'} align={'center'}>giphy-web</Heading>
        <Divider />
        <Flex align={'center'} justify={'center'}>
          <Box maxWidth={'1000px'}>
            <QuerySection onQueryChange={onQueryChange} />
          </Box>
        </Flex>
        { error && <div>{error}</div> }
        <Divider />
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
