import { useState } from 'react'
import { Image } from './types'
import { memoize } from 'lodash-es'
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const REQUEST_LIMIT = 3
const REQUEST_RATING = 'g'


export function useImageQuery() {
    const [images, setImages] = useState<Image[]>([])
    const [error, setError] = useState<string>()

    const queryImages = memoize(async function _queryImages(query: string) {
        try {
            const { data } = await fetch(`https://api.giphy.com/v1/stickers/search?q=${query}&limit=${REQUEST_LIMIT}&rating=${REQUEST_RATING}&api_key=${API_KEY}`)
                .then(res => res.json())
            console.log(data)
            setImages(data.map((image: any) => ({
                id: image.id,
                url: image.images.downsized_medium.url,
                altText: image.title
            })))
        } catch(e) {
            if (typeof e === "string") {
                setError(e.toUpperCase())
            } else if (e instanceof Error) {
                setError(e.message) // works, `e` narrowed to Error
            }
        }
    })

    return {
        images, error, queryImages
    }

}