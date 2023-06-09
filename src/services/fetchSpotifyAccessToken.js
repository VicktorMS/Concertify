export function fetchSpotifyAccessToken() {
  ///Faz a requisição do Access Token do Spotify

  // Isso não deveria estar aqui
    const clientId = "6fc0b1f2e7a24dcf836d4c6937e746a9";
    const clientSecret = "d48491bd1a6c4a899d6544c0dcd22e68";
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}`
    };
  
    return fetch('https://accounts.spotify.com/api/token', requestOptions)
      .then(response => response.json())
      .then(data => {
        return {
          accessToken: data.access_token,
          expiresIn: data.expires_in
        };
      })
      .catch(error => console.error(error));
  }
  
  