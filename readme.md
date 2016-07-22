# healpix

convert between lonlat and HEALPix coordinates

HEALPix coordinates are an equal area projection very similar to cube mapping.
This coordinate system is used heavily in cosmology, where equal-area and
uniform point distribution are important for density comparisons and binning.

The HEALPix algorithm is described in the paper [Mapping on the HEALPix grid][1]

[1]: http://mnras.oxfordjournals.org/content/381/2/865.full.pdf

# example

## lon/lat to x/y

``` js
var healpix = require('healpix')(4,3)
var phi = Number(process.argv[2]) / 180 * Math.PI
var theta = Number(process.argv[3]) / 180 * Math.PI
var out = healpix.ang2xy([], phi, theta)
console.log(out.join(' '))
```

output:

```
$ node lonlat2xy.js -148 65
-2.476485479234211 -1.1544044416499766
```

## x/y to lon/lat

``` js
var healpix = require('healpix')(4,3)
var PI = Math.PI
var x = Number(process.argv[2])
var y = Number(process.argv[3])
var out = healpix.xy2ang([], x, y)
console.log(out[0]*180/PI, out[1]*180/PI)
```

``` js
$ node xy2lonlat.js -2.476485479234211 -1.1544044416499766
-148.00000000000003 -65
```

# api

``` js
var healpix = require('healpix')
```

## var hp = healpix(H, K)

Create a healpix projection parameterized by `H,K`.

## hp.ang2xy(out, phi, theta)

Calculate `[x,y]` on the healpix projection given:

* phi - longitude in radians
* theta - latitude in radians

Set `[x,y]` and return `out`.

## hp.xy2ang(out, x, y)

Calculate `[phi,theta]` from `[x,y]` on the healpix projection.

Set `[phi,theta]` and return `out`.

# install

```
npm install healpix
```

# license

BSD
