'use strict';

const db = require('../api/lib/database');
const models = require('../api/models');

beforeAll(async () => {
  await db.connect();
  await models.load(db.cnx);
});

describe('Game Model', () => {
  let game;
  
  afterAll(async () => {
    await game.remove();
  });


  beforeAll(async () => {
    game = new models.game({
      name: 'Chess',
      nbPlayers: {
        max: 2,
        min: 2
      }
    });
    await game.save();
  });

  test('the Game model is correctly defined and queryable', async () => {
    let chess = await models.game.findOne({
      name: 'Chess'
    });
    console.log({chess});
    expect(chess).toBeDefined();
    expect(chess.name).toBe('Chess');
  });
});
