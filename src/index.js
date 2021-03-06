(function () {
 /* jshint maxstatements: 1000 */
'use strict';
var pegParser;
pegParser = require('./parser.peg.js');

/**
 * [newpage]
 * [chapter:.*]
 * [pixivimage:\d*(-\d*)?]
 * [jump:\d*]
 * [[jumpuri:.* > URL]]
 * [[rb: base > ruby_text]]
 */
function Parser() {
  this.tree = [];
}

/**
 * @param {string} novel
 * @return {Object.<string,Object>[]}
 */
Parser.parse = function (novel) {
  try {
    novel = novel.replace(/\r?\n/g, '\n').
      replace(/[\s\u200c]/g, function (c) {
        if (c === '\n' || c === '\u3000') { return c; }
        return ' ';
      });
    return pegParser.parse(novel);
  } catch (err) {
    console.error(err);
    return [{ type: 'text', val: novel }];
  }
};

/**
 * @param {string} novel
 * @return {Parser}
 */
Parser.prototype.parse = function (novel) {
  this.tree = Parser.parse(novel);
  return this;
};

/**
 * @return {string}
 */
Parser.prototype.toJSON = function () {
  return JSON.stringify(this.tree);
};

module.exports = { Parser: Parser };
}());
