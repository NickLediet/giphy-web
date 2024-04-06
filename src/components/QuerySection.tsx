import {Button, TextField, Select, Grid, Box, Heading} from '@radix-ui/themes'
import {MagnifyingGlassIcon} from '@radix-ui/react-icons'
import {useState} from 'react'
import { TextPosition } from '../lib'

type QuerySectionProps = {
    onQueryChange?: (query: string, position: TextPosition, text: string) => void
}

export function QuerySection({ onQueryChange }: QuerySectionProps) {
    const [query, setQuery] = useState('')
    const [position, setPosition] = useState<TextPosition>()
    const [text, setText] = useState('')

    function submitHandler(event: React.FormEvent) {
        event.preventDefault()
        onQueryChange && onQueryChange(query, position || TextPosition.Below, text)
    }

    return (
        <form onSubmit={submitHandler} className='query-section-container'>
            <Heading as="h2" size="4" mb={'3'} align={'left'}>Search for images</Heading>
            <Grid columns={{ initial: '1', sm: '2' }} gap="3" width="auto">
                <Box gridColumnStart={'1'} gridColumnEnd={'-1'}>
                    <TextField.Root
                        data-testid="query"
                        placeholder="Search for images..."
                        onInput={(event) => setQuery(event.currentTarget.value)}
                        value={query}>
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                </Box>

                <Box gridColumnStart={'1'} gridColumnEnd={'-1'}>
                    <TextField.Root
                        data-testid="text"
                        placeholder="Image text..." 
                        onInput={(event) => setText(event.currentTarget.value)}
                        value={text} />
                </Box>

                <Select.Root 
                    data-testid="position"
                    value={position} 
                    onValueChange={(value) => setPosition(value as TextPosition)}>
                    <Select.Trigger placeholder="Select text position"/>
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>Text Position</Select.Label>
                            <Select.Item value={TextPosition.CenterTop}>Center Top</Select.Item>
                            <Select.Item value={TextPosition.CenterBottom}>Center Bottom</Select.Item>
                            <Select.Item value={TextPosition.Below}>Below Image</Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>

                
                <Button type="submit" data-testid="submit">Submit</Button>
            </Grid>
        </form>
    )
}