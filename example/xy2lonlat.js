var healpix = require('../')(4,3)
var PI = Math.PI
var x = Number(process.argv[2])
var y = Number(process.argv[3])
var out = healpix.xy2ang([], x, y)
console.log(out[0]*180/PI, out[1]*180/PI)
