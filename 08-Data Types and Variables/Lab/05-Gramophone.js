function gramophone(band, album, song) {
  let songLength = ((band.length * album.length) * song.length) / 2;
  console.log(`The plate was rotated ${Math.ceil(songLength / 2.5)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');