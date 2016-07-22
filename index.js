var PI = Math.PI
var H = 4, K = 3
var thetax = Math.asin((K-1)/K) // transition latitude

exports.ang2xy = ang2xy
function ang2xy (out, phi, theta) { // longitude, latitude radians
  var omega = K % 2 === 1 || theta > 0 ? 1 : 0
  if (Math.abs(theta) > thetax) { // polar
    var sign = theta > 0 ? -1 : 1
    var sigma = Math.sqrt(K*(1-Math.abs(Math.sin(theta))))
    var phic = -PI+(2*Math.floor((phi+PI)*H/(2*PI)+(1-omega)/2)+omega)*PI/H
    var x = phic + (phi - phic) * sigma
    var y = sign * PI / H * ((K+1)/2 - sigma)
  } else { // equitorial
    var x = phi
    var y = K*PI/(2*H)*Math.sin(theta)
  }
  out[0] = x
  out[1] = y
  return out
}

exports.xy2ang = xy2ang
function xy2ang (out, x, y) {
  
}
