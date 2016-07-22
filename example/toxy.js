var healpix = require('../')
var theta = Number(process.argv[2]) / 180 * Math.PI
var phi = Number(process.argv[3]) / 180 * Math.PI
console.log(healpix.ang2xy([], phi, theta))
