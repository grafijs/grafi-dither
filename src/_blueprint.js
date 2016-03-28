;(function(){

import '../node_modules/grafi-formatter/src/formatter'
import 'dither'

  var grafi = {}
  grafi.dither = dither

  if (typeof module === 'object' && module.exports) {
    module.exports = grafi
  } else {
    this.grafi = grafi
  }
}())
