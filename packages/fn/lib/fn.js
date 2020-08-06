const Template = require('webpack/lib/Template');

function fn(runtimeTemplate = {}) {
  const declaration = runtimeTemplate.supportsConst && runtimeTemplate.supportsConst() ? 'const' : 'var';
  return Template.asString(`${declaration} a = 'a';`);
}

module.exports = fn;
