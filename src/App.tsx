import { QuerySection } from './components/QuerySection'
import { Theme, Separator, Button, Heading, Flex, Box, Grid } from '@radix-ui/themes'
import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
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
          <Heading as="h2" size="4" mb={'3'} align={'center'}>Results</Heading>
          <Grid columns={'2'} gap={'1'} maxWidth={'200px'} mx={'auto'} mb={'3'}>
            <Button onClick={previousHandler} disabled={currentPage <= 0}>
              <ArrowLeftIcon aria-label='Previous' />
            </Button>

            <Button onClick={nextHandler}>
              <ArrowRightIcon aria-label='Next' />
            </Button>
          </Grid>
          <PreviewImageList images={images} text={text} position={position} />
        </div>}
      </main>
    </Theme>
  )
}

export default App
