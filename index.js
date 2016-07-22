var PI = Math.PI
var thetax = Math.asin(2/3) // transition latitude
var H = 4

exports.ang2xy = ang2xy
function ang2xy (out, phi, theta) { // longitude, latitude radians
  if (Math.abs(theta) > thetax) { // polar
    var sign = theta > 0 ? -1 : 1
    var sigma = Math.sqrt(3*(1-Math.abs(Math.sin(theta))))
    var phic = -PI+(2*Math.floor((phi+PI)*H/(2*PI))+1)*PI/H
    var x = phic + (phi - phic) * sigma
    var y = sign * PI / H * (2 - sigma)
  } else { // equitorial
    var x = phi
    var y = 3*PI/(2*H)*Math.sin(theta)
  }
  out[0] = x
  out[1] = y
  return out
}
