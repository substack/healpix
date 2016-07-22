var healpix = require('../')
var phi = Number(process.argv[2]) / 180 * Math.PI
var theta = Number(process.argv[3]) / 180 * Math.PI
var out = healpix.ang2xy([], phi, theta)
console.log(out.join(' '))
