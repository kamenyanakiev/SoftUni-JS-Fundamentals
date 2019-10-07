function tseamAccount(array) {
  let currentGames = array[0].split(' ');
  array.shift();
  array.pop();
  for (let i = 0; i < array.length; i++) {
    let action = array[i].split(' ')[0];
    let game = array[i].split(' ')[1];
    let gameIndex = currentGames.indexOf(game);
    if (action === 'Install' && gameIndex < 0) {
      currentGames.push(game);
    } else if (action === 'Update' && gameIndex >= 0) {
      currentGames.splice(gameIndex, 1);
      currentGames.push(game);
    } else if (action === 'Uninstall' && gameIndex >= 0) {
      currentGames.splice(gameIndex, 1);
    } else if (action === 'Expansion') {
      let expansionGame = game.split('-')[0];
      if (currentGames.includes(expansionGame)) {
        let expansion = game.split('-')[1];
        let expansionPack = `${expansionGame}:${expansion}`;
        currentGames.splice(
          currentGames.indexOf(expansionGame) + 1,
          0,
          expansionPack
        );
      }
    }
  }
  console.log(currentGames.join(' '));
}
tseamAccount([
  'CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!'
]);
