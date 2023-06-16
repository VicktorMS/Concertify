import { arrayToString, filterArtistsFromSpotifyPlaylist } from "./utils";

describe("arrayToString", () => {
  it("Retorna um string parecida com um array", () => {
    // Mock array
    const array = ["apple", "banana", "cherry", "date"];

    const result = arrayToString(array);
    expect(result).toBe("apple,banana,cherry,date");
  });

  it("Retorna um array de IDs", () => {
    const playlistData = {
      tracks: {
        items: [
          {
            track: {
              artists: [
                { id: "artist1" },
                { id: "artist2" },
                { id: "artist3" },
              ],
            },
          },
          {
            track: {
              artists: [
                { id: "artist2" },
                { id: "artist3" },
                { id: "artist4" },
              ],
            },
          },
          {
            track: {
              artists: [
                { id: "artist1" },
                { id: "artist3" },
                { id: "artist5" },
              ],
            },
          },
        ],
      },
    };

    const resultado = filterArtistsFromSpotifyPlaylist(playlistData);
    const artistas = ["artist1", "artist2", "artist3", "artist4", "artist5"];

    expect(resultado).toEqual(artistas);
  });
});
