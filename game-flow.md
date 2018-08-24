### Initialize Connection

```
  gameStatus  // waiting, cardReady, playerTurn, Finish
```

| Client        | Flow          | Server  |
| ------------- |:-------------:| -----|
| { username }  | =>            |  |
|   | <=            | { playerId, gameId } |
|   | <=            | { gameStatus: 'waiting' } |
|   |             | wait until 4 player connected |

### Gameplay


| Client        | Flow          | Server  |
| ------------- |:-------------:| -----|
|   | <=            | { gameStatus: 'playerTurn' } |
|   | <=            | { playerCards, enemyCards, arenaCards, playerTurn } |
| { cardChoice } | =>            |  |
|   | <=            | { gameStatus: 'playerTurn' } |
|   | <=            | { playerCards, enemyCards, arenaCards, playerTurn } |
| { cardChoice } | =>            |  |
| | | until all card has played or flipped |


### Game Finished

| Client        | Flow          | Server  |
| ------------- |:-------------:| -----|
|   | <=            | { gameStatus: 'Finish' } |
|   | <=            | { playersRank, palyersPoint } |
