const fn = require('../packages/fn/lib/fn');

const skipIf = condition => condition ? test.skip : test;

describe('test', () => {
  it('passes without webpack', () => {
    expect(fn()).toMatchInlineSnapshot(`"var a = 'a';"`);
  });

  skipIf(process.env.WEBPACK_VERSION !== '5')('passes', () => {
    const RuntimeTemplate = require('webpack/lib/RuntimeTemplate');
    expect(
      fn(new RuntimeTemplate({ ecmaVersion: 6 }, { shorten: (item) => item })),
    ).toMatchInlineSnapshot(`"const a = 'a';"`);
  });
});
