
export function filterArtistsFromSpotifyPlaylist(playlistData) {

    const trackItems = playlistData?.tracks?.items;
  
    // Create an empty array to store the artist names
    const artistId = [];
  
    // Iterate over each track item
    trackItems.forEach((item) => {
      // Get the artists array for each track
      const artists = item?.track?.artists;
  
      // Iterate over each artist in the artists array
      artists.forEach((artist) => {
        // Get the name of the artist and push it to the artistNames array
        artistId.push(artist?.id);
      });
    });
  
    const uniqueIds = [...new Set(artistId)];
  
    return uniqueIds;
  
}

export function arrayToString(array, arraySize = array.length) {
    const slicedArray = array.slice(0, arraySize);
    return slicedArray.join(",");
}