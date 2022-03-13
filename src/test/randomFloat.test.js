const ramdonFloat = require('./../useCases/randomFloat');

describe('RandomFloat', () => {
  it('shoul return a random float', () => {
    const generateRadomFloat = ramdonFloat.randomFloat();

    expect(typeof generateRadomFloat).toBe('number');
    expect(generateRadomFloat <= 1).toEqual(true);
    expect(generateRadomFloat >= 0).toEqual(true);

    expect(generateRadomFloat).not.toBe(null);
  });
});
