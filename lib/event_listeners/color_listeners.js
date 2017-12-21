var $ = require('jQuery')
import { getAndColor, enterPressed } from '../helpers/color_helpers'
$(document).ready(function(){
  $('button').on('click', getAndColor)
  $('textarea').keydown(enterPressed)
})