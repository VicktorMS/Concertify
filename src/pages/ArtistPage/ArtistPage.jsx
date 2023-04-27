import React from 'react'
import { useQueryClient } from 'react-query'
import {useParams} from 'react-router-dom'

function ArtistPage() {
    const params = useParams()
    const currentArtist = params['*']

    const queryClient = useQueryClient()
  return (
    <div>{currentArtist}</div>
  )
}

export default ArtistPage