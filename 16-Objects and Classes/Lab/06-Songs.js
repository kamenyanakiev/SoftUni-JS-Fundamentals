function songs(array) {
  array.shift();
  class Song {
    constructor(type, name, duration) {
      this.type = type;
      this.name = name;
      this.duration = duration;
    }
  }
  let songType = array.pop();
  let songs = [];
  for (let i = 0; i < array.length; i++) {
    let [type, name, duration] = array[i].split('_');
    let song = new Song(type, name, duration);
    songs.push(song);
  }
  if (songType === 'all') {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filteredSongs = songs.filter((i) => i.type === songType);
    filteredSongs.forEach((i) => console.log(i.name));
  }
}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);