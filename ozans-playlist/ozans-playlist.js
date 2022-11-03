// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const set = new Set();
  playlist.forEach(track => set.add(track));
  const newPlaylist = [];
  set.forEach(track => newPlaylist.push(track));
  return newPlaylist;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const set = new Set();
  playlist.forEach(music => set.add(music));
  return set.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const set = new Set(playlist);
  set.add(track);
  const newArray = [];
  set.forEach(track => newArray.push(track));
  return newArray;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const set = new Set(playlist);
  set.delete(track);
  const newArray = [];
  set.forEach(music => newArray.push(music));
  return newArray;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const newPlaylist = [];
  playlist.forEach(track => {
    newPlaylist.push(track.split('- ')[1]);
  });
  const set = new Set();
  newPlaylist.forEach(artist => set.add(artist));
  const arr = [];
  set.forEach(artist => {
    arr.push(artist);
  });

  return arr;
}
