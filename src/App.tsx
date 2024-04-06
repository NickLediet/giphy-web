import { QuerySection } from './components/QuerySection'
import { Theme, Separator, Button } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { TextPosition, useImageQuery } from './lib'
import { PreviewImageList } from './components/PreviewImageList'

function App() {
  const { images, error, queryImages } = useImageQuery()
  const [position, setPosition] = useState<TextPosition>()
  const [text, setText] = useState('')

  function onQueryChange(query: string, position: TextPosition, text: string) {
    query && queryImages(query)
    setPosition(position)
    text && setText(text)
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
        <Separator decorative/>
        { (text && position) && <PreviewImageList images={images} text={text} position={position} /> }
      </main>
    </Theme>
  )
}

export default App
