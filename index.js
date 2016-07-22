var PI = Math.PI

module.exports = function (H, K) {
  var thetax = Math.asin((K-1)/K) // transition latitude
  return {
    ang2xy: ang2xy,
    xy2ang: xy2ang
  }
  function ang2xy (out, phi, theta) { // longitude, latitude radians
    var omega = K % 2 === 1 || theta > 0 ? 1 : 0
    if (Math.abs(theta) > thetax) { // polar
      var sign = theta > 0 ? -1 : 1
      var sigma = Math.sqrt(K*(1-Math.abs(Math.sin(theta))))
      var phic = -PI+(2*Math.floor((phi+PI)*H/(2*PI)+(1-omega)/2)+omega)*PI/H
      var x = phic + (phi - phic) * sigma
      var y = sign * PI / H * ((K+1)/2 - sigma)
    } else { // equatorial
      var x = phi
      var y = K*PI/(2*H)*Math.sin(theta)
    }
    out[0] = x
    out[1] = y
    return out
  }
  function xy2ang (out, x, y) {
    if (Math.abs(y) > PI/2*(K-1)/H) { // polar
      var sign = y > 0 ? 1 : -1
      var sigma = (K+1)/2 - Math.abs(y*H)/PI
      var theta = sign * Math.asin(1-sigma*sigma/K)
      var omega = K % 2 === 1 || theta > 0 ? 1 : 0
      var xc = -PI+(2*Math.floor((x+PI)*H/(2*PI) + (1-omega)/2)+omega)*PI/H
      var phi = xc + (x - xc) / sigma
    } else { // equatorial
      var phi = x
      var theta = Math.asin(y*H*2/(PI*K))
    }
    out[0] = phi
    out[1] = theta
    return out
  }
}
