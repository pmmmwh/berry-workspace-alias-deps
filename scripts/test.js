// Setup environment before any code -
// this makes sure everything coming after will run in the correct env.
process.env.NODE_ENV = 'test';

// Crash on unhandled rejections instead of failing silently.
process.on('unhandledRejection', (reason) => {
  throw reason;
});

const jest = require('jest');

let argv = process.argv.slice(2);

if (parseInt(process.env.WEBPACK_VERSION || '4', 10) === 5) {
  // Apply Webpack npm aliases in Jest's module system
  argv.push(
    `--moduleNameMapper="${JSON.stringify({
      '^webpack($|/.*)$': 'webpack.next$1',
    })}"`
  );
}

void jest.run(argv);
