var test = require('tape')
var almost = require('almost-equal')
var healpix = require('../')
var PI = Math.PI

// expected values based on the image from
// https://trac.osgeo.org/proj/wiki/proj%3Drhealpix

test('grid positions', function (t) {
  var thetax = Math.asin(2/3)*180/PI
  var hp = healpix(4,3)
  cmp(
    hp.ang2xy([], rad(0),rad(thetax)).map(pif),
    [0,1/4], 'equatorial border on meridian')
  cmp(
    hp.ang2xy([], rad(0),rad(90)).map(pif),
    [1/4,-1/2], 'north pole')
  cmp(
    hp.ang2xy([], rad(0),rad(-90)).map(pif),
    [1/4,1/2], 'south pole')
  cmp(
    hp.ang2xy([], rad(-120),rad(30)).map(pif),
    [-2/3,3/16], 'mid-latitude far west')
  t.end()

  function cmp (a, b, c) {
    a.forEach(function (x, i) {
      t.ok(almost(a[i],b[i]), c + '['+i+']')
    })
  }
})

function rad (x) { return x / 180 * PI }
function deg (x) { return x * 180 / PI }
function pif (x) { return x / PI }
