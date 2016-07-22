var test = require('tape')
var almost = require('almost-equal')
var healpix = require('../')

test('and back again', function (t) {
  var hp = healpix(4,3)
  var xy = hp.ang2xy([], 0.7,-0.5)
  var ang = hp.xy2ang([], xy[0], xy[1])
  t.ok(almost(ang[0], 0.7), 'lon')
  t.ok(almost(ang[1], -0.5), 'lat')
  t.end()
})
