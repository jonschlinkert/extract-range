/*!
 * extract-range <https://githuc.com/jonschlinkert/extract-range>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors
 * Licensed under the MIT License (MIT)
 */

'use strict';

var fs = require('fs');
var should = require('should');
var extract = require('..');
var pkg = require('../package');


describe('extract range:', function () {
  it('should extract the heading', function () {
    var readme = fs.readFileSync('README.md', 'utf8');
    var range = extract(readme, 1);
    var re = /#\s([^\s]+)/;

    range.match(re)[1].should.equal('extract-range');
  });

  it('should extract the description', function () {
    var readme = fs.readFileSync('README.md', 'utf8');
    var range = extract(readme, 3);
    var re = />\s([^\n]+)/;
    range.match(re)[1].should.equal(pkg.description);
  });
});
