/*!
 * extract-range <https://githuc.com/jonschlinkert/extract-range>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors
 * Licensed under the MIT License (MIT)
 */

'use strict';


function splitLines(str) {
  return str
    .replace(/\r/, '')
    .split(/\n/g);
}

module.exports = function(str, from, to) {
  var lines = splitLines(str);
  var arr = [];
  var i = from - 1;
  to = to || from;

  while (i < to) {
    arr.push(lines[i]);
    i++;
  }
  return arr.join('\n');
};
