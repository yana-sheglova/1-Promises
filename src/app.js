import GameSavingLoader from './js/gameSavingLoader';

GameSavingLoader.load()
  .then((saving) => {
    console.log(saving);
  })
  .catch((error) => {
    console.log(error);
  });
