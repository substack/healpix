var healpix = require('../')
var x = Number(process.argv[2])
var y = Number(process.argv[3])
console.log(healpix.xy2ang([], x, y))
