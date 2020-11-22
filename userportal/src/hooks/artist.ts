import { useState } from 'react'
import { onGetArtists } from 'api'
const Artist = () => {
  const [artists, setArtists] = useState<any>([])
  const getArtists = async () => {
    const result = (await onGetArtists()).data
    setArtists(result.data)
  }
  return { artists, getArtists }
}

export default Artist
